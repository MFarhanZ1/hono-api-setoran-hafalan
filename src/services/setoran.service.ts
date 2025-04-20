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
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, mas! 😭", 404);

		const { nip } = dosen;

		const [ringkasanAngkatan, daftarMahasiswa] = await Promise.all([
			MahasiswaRepository.findRingkasanMahasiswaPAPerAngkatanByDosenNIP({ nip }),
			MahasiswaRepository.findAllMahasiswaPAByDosenNIP({ nip }),
		]);

		const listNIM = daftarMahasiswa.map((mhs) => mhs.nim);
		const ringkasanSetoran = await SetoranRepository.findAllRingkasanByNIM({ listNIM });

		const mahasiswaDenganRingkasan = SetoranHelper.mapMahasiswaDenganRingkasan(
			daftarMahasiswa,
			ringkasanSetoran
		);

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
	
}
