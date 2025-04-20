import SetoranHelper from "../helpers/setoran.helper";
import { APIError } from "../utils/api-error.util";
import {
	GetPASayaRequestInterface,
	GetPASayaResponseInterface,
} from "../types/setoran/service.type";
import SetoranRepository from "../repositories/setoran.repository";
import DosenService from "./dosen.service";
import MahasiswaService from "./mahasiswa.service";

export default class SetoranService {
	public static async getPASaya({
		email,
	}: GetPASayaRequestInterface): Promise<GetPASayaResponseInterface> {
		
		// ambil data dosen berdasarkan email
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);

		// ambil nip dosen dari data dosen untuk mendapatkan data ringkasan dan daftar mhs pa
		const { nip } = dosen;
		const { 
			ringkasan: ringkasanAngkatan, 
			daftar: daftarMahasiswa 
		} = await MahasiswaService.getInfoMahasiswaPAByDosenNIP({ nip });

		// mengambil semua nim mhs dari daftar mhs yang didapatkan, lalu ambil semua ringkasan setoran dari nim tersebut
		const listNIM = daftarMahasiswa.map((mhs) => mhs.nim);
		const ringkasanSetoran = await SetoranRepository.findAllRingkasanByNIM({ listNIM });

		// gabungkan ringkasan setoran per-mhs dengan daftar mhs (pengganti join)
		const mahasiswaDenganRingkasan = SetoranHelper.mapMahasiswaWithRingkasan(
			daftarMahasiswa,
			ringkasanSetoran
		);

		// kembalikan response sesuai hasil gabungan semua data tersebut
		return {
			response: true,
			message: "Berikut info dosen lengkap serta detail mahasiswa per angkatan (max 8 akt)! 😁",
			data: {
				...dosen,
				info_mahasiswa_pa: {
					ringkasan: ringkasanAngkatan,
					daftar_mahasiswa: mahasiswaDenganRingkasan,
				},
			},
		};
	}

	public static async getSetoranSaya({ email }: { email: string }) {
		// ambil data mahasiswa berdasarkan email buat ngambil nim nya
		const mhs = await MahasiswaService.getByEmail({ email });
		if (!mhs) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nim } = mhs;

		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });
	
		// kembalikan response yang sudah ktia atur
		return {
			response: true,
			message: "Berikut ini info detail kamu dengan riwayat setoran-nya! 😁",
			data
		};
	}
	
	public static async getSetoranMahasiswa({ nim }: { nim: string }) {		
		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });
	
		// kembalikan response yang sudah ktia atur
		return {
			response: true,
			message: "Berikut ini info detail mahasiswa dengan riwayat setoran-nya 📚",
			data
		};
	}	

	private static async getDetailSetoranMahasiswa({ nim }: { nim: string }) {
		const mahasiswa = await MahasiswaService.getByNIM({ nim });
		if (!mahasiswa) throw new APIError("Waduh, datanya gak ditemukan, nyari siapa sih mas? 😭", 404);
	
		const dosenPA = await DosenService.getByNIP({ nip: mahasiswa.nip_dosen_pa });
	
		const ringkasanSetoran = await SetoranRepository.findRingkasanByNIM({ nim });
		const ringkasanSetoranPerSyarat = await SetoranRepository.findRingkasanPerSyaratByNIM({ nim });
		const detailSetoran = await SetoranRepository.findDetailByNIM({ nim });
	
		const listNIP = SetoranHelper.extractAllDosenNIPFromSetoran(detailSetoran);
		const dosenSetoran = await DosenService.getAllByNIP({ listNIP });
		const detailSetoranDenganDosen = SetoranHelper.mapSetoranWithDosen(detailSetoran, dosenSetoran);
	
		return {
			info: {
				nama: mahasiswa.nama,
				nim: mahasiswa.nim,
				email: mahasiswa.email,
				angkatan: mahasiswa.angkatan,
				semester: mahasiswa.semester,
				dosen_pa: {
					...dosenPA
				},
			},
			setoran: {
				info_dasar: ringkasanSetoran,
				ringkasan: ringkasanSetoranPerSyarat,
				detail: detailSetoranDenganDosen
			}
		};
	}
	
	public static async postSetoranMahasiswa({ email, nim, data_setoran, tgl_setoran }: { email: string, nim: string, data_setoran: any, tgl_setoran: Date }) {		
		
		// ambil data dosen berdasarkan email buat ngambil nip nya
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nip } = dosen;

		// email dosen pa, nim mhs, nip, dan nama surah di data_setoran untuk log

		// simpan data setoran
		await SetoranRepository.createSetoran({ tgl_setoran, nim, nip, data_setoran });

		// kembalikan response
		return {
			response: true,
			message: "Yeay, proses validasi setoran berhasil! ✨",
		};
	}
	
	public static async deleteSetoranMahasiswa({ email, nim, data_setoran }: { email: string, nim: string, data_setoran: any }) {		
		
		// ambil data dosen berdasarkan email buat ngambil nip nya
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nip } = dosen;

		// email dosen pa, nim mhs, nip, dan nama surah di data_setoran untuk log

		// simpan data setoran
		await SetoranRepository.deleteSetoran({ data_setoran });

		// kembalikan response
		return {
			response: true,
			message: "Yeay, proses pembatalan setoran telah berhasil! ✨",
		};
	}
}
