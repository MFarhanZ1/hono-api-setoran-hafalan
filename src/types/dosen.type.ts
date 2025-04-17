import { CommonResponse } from "./global.type";

export interface DosenRepositoryFindByEmailInterface {
    nip: string;
    nama: string;
    email: string;
}

export interface DosenRepositoryFindRingkasanMahasiswaPAPerAngkatanByEmailInterface {
    tahun: string;
    total: number;
}

export interface DosenServiceGetPASayaResponse extends CommonResponse {
    data: {
        info_dasar: DosenRepositoryFindByEmailInterface | null;
        info_mahasiswa_pa: {
            ringkasan: DosenRepositoryFindRingkasanMahasiswaPAPerAngkatanByEmailInterface[]
        };
    }
}