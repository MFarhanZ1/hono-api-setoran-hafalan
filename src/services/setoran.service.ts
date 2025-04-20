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

		// ambil data mahasiswa berdasarkan email
		const mahasiswa = await MahasiswaService.getByEmail({ email });
		if (!mahasiswa) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);

		// ambil nip dosen pa dari data mahasiswa untuk mendapatkan data ringkasan mhs pa dan daftar mhs pa
		const { nip_dosen_pa } = mahasiswa;
		const dosenPA = await DosenService.getByNIP({ nip: nip_dosen_pa });

		// ambil data ringkasan setoran mahasiswa
		const ringkasanSetoran = await SetoranRepository.findRingkasanByNIM({ nim: mahasiswa.nim });
		const ringkasanSetoranPerSyarat = await SetoranRepository.findRingkasanPerSyaratByNIM({ nim: mahasiswa.nim });
		const detailSetoran = await SetoranRepository.findDetailByNIM({ nim: mahasiswa.nim });

		// ambil semua nip dari data detail setoran
		const listNIP = SetoranHelper.extractAllDosenNIPFromSetoran(detailSetoran);
		const dosenSetoran = await DosenService.getAllByNIP({ listNIP });
		const detailSetoranDenganDosen = SetoranHelper.mapSetoranWithDosen(detailSetoran, dosenSetoran);

		// kembalikan response sesuai hasil gabungan semua data tersebut
		return {
			response: true,
			message: "Berikut ini info detail kamu dengan riwayat setoran-nya! 😁",
			data: {
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
			}		
		};
	}
}
