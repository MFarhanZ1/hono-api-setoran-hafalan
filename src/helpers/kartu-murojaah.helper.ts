import { UINSuskaLogo } from "../../public/assets/images/uin-suska-logo.images";
import { GeistSansBold, GeistSansRegular } from "../../public/fonts/custom.fonts";
import autoTable from "jspdf-autotable";
import * as QRCode from "qrcode";
import jsPDF from "jspdf";
import { PDFGeneratorProps } from "../types/setoran/helper.type";
import CryptoHelper from "./crypto.helper";

export default class KartuMurojaahHelper {

	public static async create(props: PDFGeneratorProps): Promise<Uint8Array<ArrayBufferLike>> {			
		
        const doc = new jsPDF({
			encryption: {
				userPermissions: ["print", "modify", "annot-forms"],
			},
		});

        doc.addFileToVFS("Geist-Bold.ttf", GeistSansBold);
		doc.addFileToVFS("Geist-Regular.ttf", GeistSansRegular);
		doc.addFont("Geist-Bold.ttf", "Geist-Bold", "bold");
		doc.addFont("Geist-Regular.ttf", "Geist-Regular", "regular");

		await KartuMurojaahHelper.addQRCode(doc, props);
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

	private static generateValidatorLinkByEncryptedID(encryptedID: string) {
		return `${process.env.VALIDATOR_BASE_URL}/${encodeURIComponent(encryptedID)}`
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

	private static addQRCode = async (doc: jsPDF, props: PDFGeneratorProps) => {

		const nim = props.nim;
		const validationId = CryptoHelper.generateEncryptedIDByNIM(nim);
		const validationLink = this.generateValidatorLinkByEncryptedID(validationId);

		// 1. Buat QR code base64
		const qrDataUrl = await QRCode.toDataURL(validationLink);

		// 2. Posisi gambar QR di tengah
		const qrX = 172;
		const qrY = 46;
		const qrSize = 19;

		doc.setDrawColor(0); // warna hitam
		doc.setLineWidth(0.3); // ketebalan garis
		doc.rect(qrX, qrY, qrSize, qrSize); // kotak mengelilingi QR

		// 3. Tambahkan QR ke PDF
		doc.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);

		// 4. Tambahkan teks di bawah QR
		doc.setFontSize(8);
		doc.text(`QR-Code Validator`, qrX + qrSize / 2, qrY + qrSize + 3, {
			align: "center",
		});

		// --- KOTAK VERIFIKASI DIGITAL ---

		// 1. Tentukan dimensi dan posisi kotak
		const boxX = 14;
		const boxY = 250; // Posisinya sedikit lebih ke atas dari yang tadi
		const boxWidth = 90;
		const boxHeight = 23; // Sesuaikan tinggi sesuai kebutuhan
		const padding = 3; // Jarak teks dari tepi kotak

		// 2. Gambar kotak dengan sudut yang sedikit membulat (opsional)
		doc.setDrawColor(150); // Warna border abu-abu agar tidak terlalu tegas
		doc.setLineWidth(0.2);
		doc.rect(boxX, boxY, boxWidth, boxHeight, 'S'); // 'S' untuk Stroke (garis saja)

		// 3. Siapkan teks
		doc.setFontSize(7.5); // Ukuran font mungkin perlu sedikit lebih kecil
		doc.setTextColor(0); // Warna teks hitam

		const infoText = 'Dokumen PDF ini diterbitkan otomatis secara langsung oleh sistem, untuk verifikasi keaslian-nya, kunjungi tautan dibawah ini:';
		doc.text(infoText, boxX + padding, boxY + padding + 1, {
			maxWidth: boxWidth - (padding * 2) // Beri batas agar teks tidak keluar kotak
		});

		// 4. Tambahkan link verifikasi (BISA DIKLIK)		
		doc.setTextColor(4, 88, 168); // Warna biru khas untuk link
		doc.setFont('helvetica', 'normal'); // Pastikan font kembali normal jika sebelumnya 'bold'

		const linkY = boxY + padding + 9;	

		// textWithLink secara otomatis akan memberi style (biru & underline)
		doc.textWithLink(validationLink, boxX + padding, linkY, {
			url: validationLink,
			maxWidth: boxWidth - (padding * 2)
		});

		// 5. TAMBAHKAN INFO LOG DI BAWAH LINK
		doc.setFontSize(6); // Font sangat kecil
		doc.setTextColor(150); // Warna abu-abu terang
		const logTextY = boxY + padding + 25; // Posisikan di bawah link
		const ipAddress = props.network_log_data.ip;
		const userAgent = props.network_log_data.user_agent;

		// --- MENAMBAHKAN METADATA (TIDAK TERLIHAT) ---
		doc.setProperties({
			title: `[Kartu Muroja'ah] ${props.nama} - ${props.nim}`,
			author: 'instagram @mfarhanz1',
			subject: `Developed by @mfarhanz1 - Dokumen PDF Kartu Muroja'ah Resmi Diterbitkan oleh dashboard.tif.uin-suska.ac.id`,
			keywords: `ip:${ipAddress}, ua:${userAgent}, @mfarhanz1`
		});

		doc.text(`PDF Generated Request from IP: ${ipAddress}`, boxX, logTextY);
		doc.text(`Client User Agent: ${userAgent.substring(0, 70)}...`, boxX, logTextY + 3);
		doc.text(`Created Timestamp: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB`, boxX, logTextY + 6);

		// PENTING: Kembalikan warna teks ke hitam untuk elemen lain setelah ini
		doc.setTextColor(0);
	}
	
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