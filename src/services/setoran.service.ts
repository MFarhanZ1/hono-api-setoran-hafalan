import prisma from "../infrastructures/db.infrastructure";

export default class SetoranService {
	public static async getRingkasanSetoranMahasiswaByNIM({
		listNIM,
	}: any): Promise<any> {
		const totalSurah = await prisma.surah.count();

		const result: {
			nim: string;
			info_setoran: {
				total_wajib_setor: number;
				total_sudah_setor: number;
				total_belum_setor: number;
				persentase_progress_setor: number;
				terakhir_setor: string | null;
				tgl_terakhir_setor: Date | null;
			};
		}[] = [];

		for (const nim of listNIM) {
			const totalSudahSetor = await prisma.setoran.count({
				where: { nim: nim },
			});

			const tglTerakhirSetor = await prisma.setoran.findFirst({
				where: { nim: nim },
				orderBy: { tgl_setoran: "desc" },
				select: { tgl_setoran: true },
			});

			result.push({
				nim: nim,
				info_setoran: {
					total_wajib_setor: totalSurah,
					total_sudah_setor: totalSudahSetor,
					total_belum_setor: totalSurah - totalSudahSetor,
					persentase_progress_setor: parseFloat(
						((totalSudahSetor / totalSurah) * 100).toFixed(2)
					),
					terakhir_setor: SetoranService.formatTanggalHuman(
						tglTerakhirSetor?.tgl_setoran ?? null
					),
					tgl_terakhir_setor: tglTerakhirSetor?.tgl_setoran ?? null,
				},
			});
		}

		return result;
	}

	private static formatTanggalHuman(tanggal: Date | null): string {
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
}
