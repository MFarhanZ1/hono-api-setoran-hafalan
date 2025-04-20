import SetoranHelper from "../helpers/setoran.helper";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { APIError } from "../utils/api-error.util";
import {
	GetPASayaRequestInterface,
	GetPASayaResponseInterface,
} from "../types/setoran/service.type";
import SetoranRepository from "../repositories/setoran.repository";
import DosenService from "./dosen.service";

export default class SetoranService {
	public static async getPASaya({
		email,
	}: GetPASayaRequestInterface): Promise<GetPASayaResponseInterface> {
		// ambil data dosen berdasarkan email
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen)
			throw new APIError("Waduh, datanya gak ditemukan, mas! 😭", 404);

		// ambil nip dosen dari data dosen untuk mendapatkan data ringkasan mhs pa dan daftar mhs pa
		const { nip } = dosen;
		const [ringkasanAngkatan, daftarMahasiswa] = await Promise.all([
			MahasiswaRepository.findRingkasanMahasiswaPAPerAngkatanByDosenNIP({ nip }),
			MahasiswaRepository.findAllMahasiswaPAByDosenNIP({ nip }),
		]);

		// mengambil semua nim mhs dari daftar mhs yang didapatkan, lalu ambil semua ringkasan setoran dari nim tersebut
		const listNIM = daftarMahasiswa.map((mhs) => mhs.nim);
		const ringkasanSetoran = await SetoranRepository.findAllRingkasanByNIM({ listNIM });

		// gabungkan ringkasan setoran per-mhs dengan daftar mhs (pengganti join)
		const mahasiswaDenganRingkasan = SetoranHelper.mapMahasiswaDenganRingkasan(
			daftarMahasiswa,
			ringkasanSetoran
		);

		// kembalikan response sesuai yang diinginkan
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

		const mahasiswa = await MahasiswaRepository.findByEmail({ email });
		if (!mahasiswa) throw new APIError("Waduh, datanya gak ditemukan, mas! 😭", 404);

		return {
			response: true,
			message: "Berikut ini info detail kamu dengan riwayat setoran-nya! 😁",
			data: {
				...mahasiswa,
				dosen_pa: {
					nama: "Pizaini, S.T., M.Kom.,",
					nip: "130517107",
					email: "pizaini@uin-suska.ac.id",
				},
			}		
		};
	}
}
