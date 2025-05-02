import { FindAllMahasiswaPAByDosenNIPReturnInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface } from "./repository.type";

export interface GetByEmailRequestInterface {
    email: string;
}

export interface GetByEmailResponseInterface {
    nim: string;
    nama: string;
    email: string;    
	angkatan: string;
	semester: number;
    nip_dosen_pa: string;
}

export interface GetByNIMRequestInterface {
    nim: string;
}

export interface GetByNIMResponseInterface {
    nim: string;
    nama: string;
    email: string;    
	angkatan: string;
	semester: number;
    nip_dosen_pa: string;
}

export interface GetInfoMahasiswaPAByNIPRequestInterface {
    nip: string;
}

export interface GetInfoMahasiswaPAByNIPResponseInterface {
    ringkasan: FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface[];
    daftar: FindAllMahasiswaPAByDosenNIPReturnInterface[];
}

export interface CheckValidPAPRequestInterface {
    nip: string;
    nim: string;
}