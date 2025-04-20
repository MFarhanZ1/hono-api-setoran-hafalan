import { FindByEmailReturnInterface } from "../dosen/repository.type";
import { CommonResponse } from "../global.type";
import { FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface } from "../mahasiswa/repository.type";
import { MapMahasiswaDenganRingkasanInterface } from "./helper.type";

export interface GetPASayaResponseDataInterface extends FindByEmailReturnInterface {
    info_mahasiswa_pa: {
        ringkasan: FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface[],
        daftar_mahasiswa: MapMahasiswaDenganRingkasanInterface[],
    };
}

export interface GetPASayaResponseInterface extends CommonResponse {
    data: GetPASayaResponseDataInterface
}

export interface GetPASayaRequestInterface {
    email: string;
}