import { UINSuskaLogo } from "../../public/assets/images/uin-suska-logo.images";
import { GeistSansBold, GeistSansRegular } from "../../public/fonts/custom.fonts";
import { FindAllByNIPReturnInterface } from "../types/dosen/repository.type";
import { FindAllMahasiswaPAByDosenNIPReturnInterface } from "../types/mahasiswa/repository.type";
import { MapMahasiswaWithRingkasanInterface, PDFGeneratorProps } from "../types/setoran/helper.type";
import { FindAllRingkasanByNIMReturnInterface, FindDetailByNIMReturnInterface } from "../types/setoran/repository.type";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
		if (diffDays < 14) return "1 Minggu yang lalu";
		if (diffDays < 21) return "2 Minggu yang lalu";
		if (diffDays < 31) return "Bulan ini";

		const diffMonths =
			(now.getFullYear() - tgl.getFullYear()) * 12 +
			(now.getMonth() - tgl.getMonth());

		if (diffMonths === 0) return "Bulan ini";
		if (diffMonths === 1) return "1 Bulan yang lalu";
		if (diffMonths === 2) return "2 Bulan yang lalu";
		if (diffMonths === 3) return "3 Bulan yang lalu";
		if (diffMonths === 4) return "4 Bulan yang lalu";
		if (diffMonths === 5) return "5 Bulan yang lalu";
		if (diffMonths === 6) return "6 Bulan yang lalu";
		if (diffMonths === 7) return "7 Bulan yang lalu";
		if (diffMonths === 8) return "8 Bulan yang lalu";
		if (diffMonths === 9) return "9 Bulan yang lalu";
		if (diffMonths === 10) return "10 Bulan yang lalu";
		if (diffMonths === 11) return "11 Bulan yang lalu";

		const diffYears = now.getFullYear() - tgl.getFullYear();

		if (diffYears === 0) return "Tahun ini";
		if (diffYears === 1) return "1 Tahun yang lalu";
		if (diffYears === 2) return "2 Tahun yang lalu";
		if (diffYears === 3) return "3 Tahun yang lalu";
		if (diffYears === 4) return "4 Tahun yang lalu";
		if (diffYears === 5) return "5 Tahun yang lalu";
		if (diffYears === 6) return "6 Tahun yang lalu";
		if (diffYears === 7) return "7 Tahun yang lalu";

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

	public static createKartuMurojaah(props: PDFGeneratorProps): Uint8Array<ArrayBufferLike> {
		const doc = new jsPDF({
			encryption: {
				userPermissions: ["print", "modify", "annot-forms"],
			},
		});

		return KartuMurojaahHelper.create(doc, props);
	}
}

class KartuMurojaahHelper {

	public static create(doc: jsPDF, props: PDFGeneratorProps): Uint8Array<ArrayBufferLike> {			
		doc.addFileToVFS("Geist-Bold.ttf", GeistSansBold);
		doc.addFileToVFS("Geist-Regular.ttf", GeistSansRegular);
		doc.addFont("Geist-Bold.ttf", "Geist-Bold", "bold");
		doc.addFont("Geist-Regular.ttf", "Geist-Regular", "regular");
	
		KartuMurojaahHelper.addHeader(doc);
		doc.line(
			KartuMurojaahHelper.PDF_CONFIG.margin,
			KartuMurojaahHelper.PDF_CONFIG.lineY,
			doc.internal.pageSize.width - KartuMurojaahHelper.PDF_CONFIG.margin,
			KartuMurojaahHelper.PDF_CONFIG.lineY
		);
	
		const tableStartY = KartuMurojaahHelper.addStudentInfo(doc, props);
		const tableData = props.dataSurah.map((surah, index) => [
			`${index + 1}.`,
			surah.nama,
			surah.sudah_setor ? KartuMurojaahHelper.formatDate(surah.info_setoran.tgl_setoran) : "-",
			KartuMurojaahHelper.parseLabelingCategory(surah.label),
			surah.sudah_setor ? surah.info_setoran.dosen_yang_mengesahkan.nama : "-",
		]);
	
		doc.setFont("Geist-Regular", "regular");
		autoTable(doc, {
			startY: tableStartY - 2,
			head: [
			[
				"No.",
				"Surah",
				"Tanggal Muroja'ah",
				"Persyaratan Muroja'ah",
				"Dosen yang Mengesahkan",
			],
			],
			body: tableData,
			theme: "grid",
			headStyles: {
			fillColor: [0, 0, 0],
			textColor: [255, 255, 255],
			halign: "center",
			fontStyle: "bold",
			font: "Geist-Bold",
			},
			bodyStyles: {
			halign: "center",
			fontStyle: "bold",
			fontSize: 8,
			cellPadding: 0.6,
			},
			styles: {
			fontSize: 9,
			cellPadding: 1,
			font: "Geist-Regular",
			textColor: [0, 0, 0],
			},
			didParseCell: function (data) {
			if (data.section === "body" && data.column.index === 3) {
				// Kelompok 1: Baris 1-8
				if (data.row.index === 0) {
				data.cell.rowSpan = 8;
				data.cell.styles.valign = "middle";
				} else if (data.row.index > 0 && data.row.index <= 7) {
				data.cell.text = [];
				}
	
				// Kelompok 2: Baris 9-16
				else if (data.row.index === 8) {
				data.cell.rowSpan = 8;
				data.cell.styles.valign = "middle";
				} else if (data.row.index > 8 && data.row.index <= 15) {
				data.cell.text = [];
				}
	
				// Kelompok 3: Baris 17-22
				else if (data.row.index === 16) {
				data.cell.rowSpan = 6;
				data.cell.styles.valign = "middle";
				} else if (data.row.index > 16 && data.row.index <= 21) {
				data.cell.text = [];
				}
	
				// Kelompok 4: Baris 23-34
				else if (data.row.index === 22) {
				data.cell.rowSpan = 12;
				data.cell.styles.valign = "middle";
				} else if (data.row.index > 22 && data.row.index <= 33) {
				data.cell.text = [];
				}
	
				// Kelompok 5: Baris 35-37
				else if (data.row.index === 34) {
				data.cell.rowSpan = 3;
				data.cell.styles.valign = "middle";
				} else if (data.row.index > 34 && data.row.index <= 36) {
				data.cell.text = [];
				}
			}
			if (data.row.index === 7) {
				// Baris terakhir kelompok 1
				doc.setDrawColor(0, 0, 0);
				doc.setLineWidth(4);
				doc.line(
				data.cell.x,
				data.cell.y + data.cell.height, // Garis di bawah sel
				data.cell.x + data.cell.width,
				data.cell.y + data.cell.height
				);
			}
			},
		});
	
		KartuMurojaahHelper.addSignature(doc, props);
	
		// Tambahkan nip dosen setelah tanda tangan (di tengah garis)'
		const arrayBuffer = doc.output("arraybuffer");
		return new Uint8Array(arrayBuffer);	
	}

	private static parseLabelingCategory = (label: string) => {				
		switch (label) {
			case "KP":
				return "Kerja Praktek";
			case "SEMKP":
				return "Seminar Kerja Praktik";
			case "DAFTAR_TA":
				return "Tugas Akhir";
			case "SEMPRO":
				return "Seminar Proposal";
			case "SIDANG_TA":
				return "Sidang Tugas Akhir";
			default:
				return "-";
		}
	}
	
	private static PDF_CONFIG = {
		margin: 15,
		lineY: 43,
		imageY: 8,
		sizeLogoUin: 32,
		textStart: 18,
		lineSpacing: 6,
		fontSize: {
			header: 16,
			subHeader: 14,
			body: 12,
		},
	} as const;
	
	private static formatDate = (isoDate: string) => {
		return new Date(isoDate)
			.toLocaleDateString("id-ID", {
			day: "2-digit",
			month: "long", // Ubah format bulan menjadi nama bulan
			year: "numeric",
			})
			.replace(/^(\d+)\s(\w+)\s(\d+)$/, "$1 $2, $3");
	};
	
	// Separate components for different sections
	private static addHeader = (doc: jsPDF) => {
		const { margin, imageY, sizeLogoUin, textStart, lineSpacing } = KartuMurojaahHelper.PDF_CONFIG;
	
		doc.addImage(UINSuskaLogo, "JPEG", margin, imageY, sizeLogoUin, sizeLogoUin);
	
		doc.setFont("Geist-Bold", "bold");
		doc.setFontSize(KartuMurojaahHelper.PDF_CONFIG.fontSize.header);
		doc.text("KARTU MUROJA'AH JUZ 30", margin + sizeLogoUin + 5, textStart);
	
		doc.setFont("Geist-Regular", "regular");
		doc.setFontSize(KartuMurojaahHelper.PDF_CONFIG.fontSize.subHeader);
	
		const texts = [
			"PROGRAM STUDI TEKNIK INFORMATIKA",
			"FAKULTAS SAINS DAN TEKNOLOGI",
			"UNIVERSITAS ISLAM NEGERI SULTAN SYARIF KASIM RIAU",
		];
	
		texts.forEach((text, index) => {
			doc.text(
			text,
			margin + sizeLogoUin + 5,
			textStart + lineSpacing * (index + 1)
			);
		});
	};
	
	private static addStudentInfo = (
		doc: jsPDF,
		{ nama, nim, dosen_pa }: PDFGeneratorProps
	) => {
		const { margin, lineY } = KartuMurojaahHelper.PDF_CONFIG;
		const labelX = margin;
		const valueX = margin + 50;
		const textStartY = lineY + 8;
	
		doc.setFontSize(KartuMurojaahHelper.PDF_CONFIG.fontSize.body);
	
		const info = [
			{ label: "Nama Mahasiswa", value: nama },
			{ label: "NIM", value: nim },
			{ label: "Penasehat Akademik", value: dosen_pa },
		];
	
		info.forEach((item, index) => {
			const y = textStartY + index * 7;
			doc.text(item.label, labelX, y);
			doc.text(":", valueX - 1, y);
			doc.text(item.value, valueX + 2, y);
		});
	
		return textStartY + info.length * 7;
	};
	
	private static addSignature = (
		doc: jsPDF,
		{ dosen_pa, nip_dosen }: PDFGeneratorProps
		) => {
		const pageHeight = doc.internal.pageSize.height;
		const pageWidth = doc.internal.pageSize.width;
	
		const currentDate = new Date().toLocaleDateString("id-ID", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});
	
		// Set posisi awal blok tanda tangan dari tengah halaman
		const startX = pageWidth / 2 + 33; // Mulai dari tengah + offset
		const finalY = pageHeight - 46;
	
		// Render teks tanpa alignment right
		doc.text(`Pekanbaru, ${currentDate}`, startX, finalY);
		doc.text("Penasehat Akademik,", startX, finalY + 6);
		doc.text(dosen_pa, startX, finalY + 26);
	
		// Buat garis yang sesuai dengan lebar nama
		const nameWidth = doc.getTextWidth(dosen_pa);
		doc.line(
			startX, // Mulai dari posisi teks
			finalY + 27,
			startX + nameWidth, // Sampai akhir lebar nama
			finalY + 27
		);
	
		// Tambah NIP
		doc.text(`NIP. ${nip_dosen}`, startX, finalY + 32);
	};
	
}