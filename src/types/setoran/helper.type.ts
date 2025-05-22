import { FindAllMahasiswaPAByDosenNIPReturnInterface } from "../mahasiswa/repository.type";
import { InfoSetoranInterface } from "./repository.type";

export interface MapMahasiswaWithRingkasanInterface extends FindAllMahasiswaPAByDosenNIPReturnInterface {
	info_setoran: InfoSetoranInterface
}

export interface PDFGeneratorProps {
	nama: string;
	nim: string;
	dataSurah: SurahData[];
	dosen_pa: string;
	nip_dosen: string;
}

export interface SurahData {
	id: string;
	nama: string;
	label: string;
	sudah_setor: boolean;
	info_setoran: Setoran;
}

interface Setoran {
	id: string;
	tgl_setoran: string;
	tgl_validasi: string;
	dosen_yang_mengesahkan: {
		nama: string;
	};
}