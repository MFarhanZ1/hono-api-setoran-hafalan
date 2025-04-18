import { CommonResponse } from "../global.type";
import { FindDaftarMahasiswaPAByDosenNIPReturnInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface } from "../mahasiswa/repository.type";
import { FindByEmailReturnInterface } from "./repository.type";

export interface GetPASayaResponseInterface extends CommonResponse {
    data: {
        info_dasar: FindByEmailReturnInterface | null;
        info_mahasiswa_pa: {
            ringkasan: FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface[],
            daftar_mahasiswa: FindDaftarMahasiswaPAByDosenNIPReturnInterface[],
        };
    }
}

export interface GetPASayaRequestInterface {
    email: string;
}