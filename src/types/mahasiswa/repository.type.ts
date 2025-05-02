export interface FindByEmailParamsInterface {
	email: string;
}

export interface FindByEmailReturnInterface {
	nim: string;
	nama: string;
	email: string;
	angkatan: string;
	semester: number;
	nip_dosen_pa: string;
}

export interface FindByNIMParamsInterface {
	nim: string;
}

export interface FindByNIMReturnInterface {
	nim: string;
	nama: string;
	email: string;
	angkatan: string;
	semester: number;
	nip_dosen_pa: string;
}

export interface FindRingkasanMahasiswaPAPerAngkatanByDosenNIPParamsInterface {
	nip: string;
}

export interface FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface {
	tahun: string;
	total: number;
}

export interface FindAllMahasiswaPAByDosenNIPParamsInterface {
	nip: string;
}

export interface FindAllMahasiswaPAByDosenNIPReturnInterface {
	email: string;
	nim: string;
	nama: string;
	angkatan: string;
	semester: number;
}

export interface CheckValidPAParamsInterface {
	nim: string;
	nip: string;
}