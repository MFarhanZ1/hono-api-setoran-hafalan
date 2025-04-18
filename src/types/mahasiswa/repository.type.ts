export interface FindByEmailParamsInterface {
    nim: string;
    nama: string;
    email: string;
    nip: string;
}

export interface FindByEmailReturnInterface {
    nim: string;
    nama: string;
    email: string;
    nip: string;
}

export interface FindRingkasanMahasiswaPAPerAngkatanByDosenNIPParamsInterface {
    nip: string;
}

export interface FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface {
    tahun: string;
    total: number;
}

export interface FindDaftarMahasiswaPAByDosenNIPParamsInterface {
    nip: string;
}

export interface FindDaftarMahasiswaPAByDosenNIPReturnInterface {
    email: string;
    nim: string;
    nama: string;
    angkatan: string;
    semester: number;
}