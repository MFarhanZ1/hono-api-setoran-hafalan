import { FindAllByNIPReturnInterface } from "../types/dosen/repository.type";
import { FindAllMahasiswaPAByDosenNIPReturnInterface } from "../types/mahasiswa/repository.type";
import { MapMahasiswaWithRingkasanInterface } from "../types/setoran/helper.type";
import { FindAllRingkasanByNIMReturnInterface, FindDetailByNIMReturnInterface } from "../types/setoran/repository.type";

export default class SetoranHelper {
    public static formatHumanizeDateDiff(tanggal: Date | null | undefined): string {
		if (!tanggal) return "Belum ada";

		const now = new Date();
		const tgl = new Date(tanggal);

		const diffInMs = now.getTime() - tgl.getTime();
		const diffDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

		if (diffDays === 0) return "Hari ini";
		if (diffDays === 1) return "Kemarin";
		if (diffDays === 2) return "2 Hari yang lalu";
		if (diffDays === 3) return "3 Hari yang lalu";
		if (diffDays === 4) return "4 Hari yang lalu";
		if (diffDays === 5) return "5 Hari yang lalu";

		if (diffDays < 7) return "Minggu ini";
		if (diffDays < 14) return "2 Minggu yang lalu";
		if (diffDays < 21) return "3 Minggu yang lalu";

		const diffMonths =
			(now.getFullYear() - tgl.getFullYear()) * 12 +
			(now.getMonth() - tgl.getMonth());

		if (diffMonths === 0) return "Bulan ini";
		if (diffMonths === 1) return "2 Bulan yang lalu";
		if (diffMonths === 2) return "3 Bulan yang lalu";
		if (diffMonths === 3) return "4 Bulan yang lalu";
		if (diffMonths === 4) return "5 Bulan yang lalu";
		if (diffMonths === 5) return "6 Bulan yang lalu";
		if (diffMonths === 6) return "7 Bulan yang lalu";
		if (diffMonths === 7) return "8 Bulan yang lalu";
		if (diffMonths === 8) return "9 Bulan yang lalu";
		if (diffMonths === 9) return "10 Bulan yang lalu";
		if (diffMonths === 10) return "11 Bulan yang lalu";

		const diffYears = now.getFullYear() - tgl.getFullYear();

		if (diffYears === 0) return "Tahun ini";
		if (diffYears === 1) return "2 Tahun yang lalu";
		if (diffYears === 2) return "3 Tahun yang lalu";
		if (diffYears === 3) return "4 Tahun yang lalu";
		if (diffYears === 4) return "5 Tahun yang lalu";
		if (diffYears === 5) return "6 Tahun yang lalu";
		if (diffYears === 6) return "7 Tahun yang lalu";

		return "Lebih dari 7 Tahun yang lalu";
	}

	public static mapMahasiswaWithRingkasan(daftarMahasiswa: FindAllMahasiswaPAByDosenNIPReturnInterface[], ringkasanSetoran: FindAllRingkasanByNIMReturnInterface[]): MapMahasiswaWithRingkasanInterface[] {
		// buat dulu objek ringkasan sebagai kamus besar nya
		const ringkasanMap = new Map(ringkasanSetoran.map((r) => [r.nim, r]));

		return daftarMahasiswa.map((mhs) => {
			// lalu kita ambil ringkasan dari kamus besar tadi berdasarkan nim mahasiswa
			const ringkasan = ringkasanMap.get(mhs.nim);
			const infoRingkasanSetoran = ringkasan?.info_setoran;
			return {
				...mhs,
				info_setoran: {
					...infoRingkasanSetoran,
				},
			};
		});
	}

	public static extractAllDosenNIPFromSetoran(detailSetoran: FindDetailByNIMReturnInterface[] | null): string[] {
		const nips: Set<string> = new Set();
		detailSetoran?.forEach((setoran) => {
			if (setoran.sudah_setor) {
				const nip = setoran.info_setoran?.dosen_yang_mengesahkan?.nip;
				nips.add(nip!);
			}
		});
		return Array.from(nips);
	}
	
	public static mapSetoranWithDosen(daftarSetoran: FindDetailByNIMReturnInterface[] | null, daftarDosen: FindAllByNIPReturnInterface[] | null): FindDetailByNIMReturnInterface[] | undefined {
		return daftarSetoran?.map((setoran) => {
			const dosen = daftarDosen?.find((dosen) => dosen.nip === setoran.info_setoran?.dosen_yang_mengesahkan?.nip);
			return {
				...setoran,
				info_setoran: setoran.sudah_setor ? {
					...setoran.info_setoran,
					dosen_yang_mengesahkan: {
						...setoran.info_setoran?.dosen_yang_mengesahkan,
						nama: dosen?.nama,
						email: dosen?.email
					}
				} : null
			}
		})
	}
}