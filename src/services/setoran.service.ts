import SetoranHelper from "../helpers/setoran.helper";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
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
		const mhs = await MahasiswaService.getByEmail({ email });
		if (!mhs) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
	
		const data = await this.getDetailSetoranMahasiswa(mhs.nim);
	
		return {
			response: true,
			message: "Berikut ini info detail kamu dengan riwayat setoran-nya! 😁",
			data
		};
	}
	
	public static async getSetoranMahasiswa({ nim }: { nim: string }) {
		const data = await this.getDetailSetoranMahasiswa(nim);
	
		return {
			response: true,
			message: "Berikut ini info detail mahasiswa dengan riwayat setoran-nya 📚",
			data
		};
	}	

	private static async getDetailSetoranMahasiswa(nim: string) {
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
	
}
