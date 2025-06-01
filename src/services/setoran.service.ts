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

	public static async getKartuMurojaahSaya({ email, network_log_data }: { email: string, network_log_data: any }) {
		// ambil data mahasiswa berdasarkan email buat ngambil nim nya
		const mhs = await MahasiswaService.getByEmail({ email });
		if (!mhs) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nim } = mhs;

		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });

		const props: any = {
			nama: data?.info.nama,
			nim: data?.info.nim,
			dataSurah: data?.setoran.detail,
			dosen_pa: data?.info.dosen_pa.nama,
			nip_dosen: data?.info.dosen_pa.nip,
			network_log_data
		}

		const kartuMurojaah = await SetoranHelper.createKartuMurojaah(props);
	
		// kembalikan response yang sudah kita atur
		return {
			kartuMurojaah,
			namaFile: `"[Kartu Muroja'ah] ${props.nama} - ${props.nim}.pdf"`,
		};
	}

	public static async getKartuMurojaahDigital({ id }: { id: string; }) {
		// decode uri dulu id nya, terus decrypt buat ambil nim-nya
		const decodedID = decodeURIComponent(id);
		let nim;
		try {
			nim = SetoranHelper.decryptIDToNIM(decodedID);
		} catch (error) {
			throw new APIError("Waduh, datanya gak ditemukan, mau nyari apa sih mas? 😭", 404);
		}
		
		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });
	
		// kembalikan response yang sudah ktia atur
		return {
			response: true,
			message: "Berikut ini info detail mahasiswa dengan riwayat muroja'ah-nya 📚",
			data
		};
	}

	public static async getSetoranSaya({ email }: { email: string }) {
		// ambil data mahasiswa berdasarkan email buat ngambil nim nya
		const mhs = await MahasiswaService.getByEmail({ email });
		if (!mhs) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nim } = mhs;

		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });
	
		// kembalikan response yang sudah kita atur
		return {
			response: true,
			message: "Berikut ini info detail kamu dengan riwayat muroja'ah-nya! 😁",
			data
		};
	}
	
	public static async getSetoranMahasiswa({ nim, email }: { nim: string; email: string }) {		
		// ambil data dosen berdasarkan email buat ngambil nip nya
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nip } = dosen;

		// cek bener ga mhs ini emang bimbingan dosen tersebut
		const validPA = await MahasiswaService.checkValidPA({ nim, nip });
		if (!validPA) throw new APIError("Heh, kamu bukan PA dari mahasiswa ini, mau ngapain mas! 😡", 403);

		// ambil detail setoran mahasiswa sesuai nim yang udah di ambil tadi
		const data = await this.getDetailSetoranMahasiswa({ nim });
	
		// kembalikan response yang sudah ktia atur
		return {
			response: true,
			message: "Berikut ini info detail mahasiswa dengan riwayat muroja'ah-nya 📚",
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
	
		const log = await SetoranService.getLogSetoranMahasiswa({ nim });

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
				log: log,
				info_dasar: ringkasanSetoran,
				ringkasan: ringkasanSetoranPerSyarat,
				detail: detailSetoranDenganDosen
			}
		};
	}
	
	public static async postSetoranMahasiswa({ email, nim, data_setoran, tgl_setoran, network_log_data }: { email: string, nim: string, data_setoran: any, tgl_setoran: Date, network_log_data: any }) {		

		// ambil data dosen berdasarkan email buat ngambil nip nya
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nip } = dosen;

		// cek bener ga mhs ini emang bimbingan dosen tersebut
		const validPA = await MahasiswaService.checkValidPA({ nim, nip });
		if (!validPA) throw new APIError("Heh, kamu bukan PA dari mahasiswa ini, mau ngapain mas! 😡", 403);

		// simpan data setoran
		const insertedSetoran = await SetoranRepository.createSetoran({ tgl_setoran, nim, nip, data_setoran });
		if ((insertedSetoran as any).length == 0) throw new APIError("Waduh, data muroja'ah-nya udah tercatat, mau ngapain lagi mas! 😡", 400);

		// filter data setoran, buat email dosen pa, nim mhs, nip, dan nama komponen setoran di data_setoran untuk log
		const idSetoranYangAda = new Set((insertedSetoran as any).map((setoran: any) => setoran.id_komponen_setoran));
		const hasilFilterDataSetoran = data_setoran.filter((komponen: any) => 
			idSetoranYangAda.has(komponen.id_komponen_setoran)
		);
		const keterangan = `${hasilFilterDataSetoran.map((item: any) => item.nama_komponen_setoran).join(', ')}, serta memilih tanggal muroja'ah ${tgl_setoran}`;
		await SetoranRepository.createLogSetoran({ ...network_log_data, nim, nip, keterangan, aksi: 'VALIDASI' });
		
		// kembalikan response
		return {
			response: true,
			message: "Yeay, proses validasi muroja'ah berhasil! ✨",
		};
	}
	
	public static async deleteSetoranMahasiswa({ email, nim, data_setoran, network_log_data }: { email: string, nim: string, data_setoran: any, network_log_data: any }) {
					
		// ambil data dosen berdasarkan email buat ngambil nip nya
		const dosen = await DosenService.getByEmail({ email });
		if (!dosen) throw new APIError("Waduh, datanya gak ditemukan, kamu siapa sih mas? 😭", 404);
		const { nip } = dosen;

		// cek bener ga mhs ini emang bimbingan dosen tersebut
		const validPA = await MahasiswaService.checkValidPA({ nim, nip });
		if (!validPA) throw new APIError("Heh, kamu bukan PA dari mahasiswa ini, mau ngapain mas! 😡", 403);
		
		// hapus data setoran
		const deletedSetoran = await SetoranRepository.deleteSetoran({ data_setoran });
		if ((deletedSetoran as any).length === 0) throw new APIError("Waduh, data muroja'ah yang mau di-batalin kagak ada, mau ngapain mas! 😭", 404);
		
		// filter data setoran, buat email dosen pa, nim mhs, nip, dan nama komponen setoran di data_setoran untuk log
		const idSetoranYangAda = new Set((deletedSetoran as any).map((setoran: any) => setoran.id_komponen_setoran));
		const hasilFilterDataSetoran = data_setoran.filter((komponen: any) => 
			idSetoranYangAda.has(komponen.id_komponen_setoran)
		);
		const keterangan = hasilFilterDataSetoran.map((item: any) => item.nama_komponen_setoran).join(', ');
		await SetoranRepository.createLogSetoran({ ...network_log_data, nim, nip, keterangan, aksi: 'BATALKAN' });

		// kembalikan response
		return {
			response: true,
			message: "Yeay, proses pembatalan validasi muroja'ah telah berhasil! ✨",
		};
	}

	private static async getLogSetoranMahasiswa({ nim }: { nim: string }) {
		const logSetoranMahasiswa = await SetoranRepository.findLogSetoranByNIM({ nim });
		const dosenSetoran = await DosenService.getAllByNIP({ listNIP: logSetoranMahasiswa.map((item: any) => item.nip) });

		return logSetoranMahasiswa.map((log: any) => {
			const dosen = dosenSetoran?.find((dosen) => dosen.nip === log.nip);
			const newLog = {...log}
			delete newLog.nip
			return {
				...newLog,				
				dosen_yang_mengesahkan: {
					...dosen
				}
			}
		})
	}
}