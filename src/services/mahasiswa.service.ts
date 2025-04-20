import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { GetByEmailRequestInterface, GetByEmailResponseInterface, GetByNIMRequestInterface, GetByNIMResponseInterface, GetInfoMahasiswaPAByNIPRequestInterface, GetInfoMahasiswaPAByNIPResponseInterface } from "../types/mahasiswa/service.type";

export default class MahasiswaService {
    public static async getByEmail({email}: GetByEmailRequestInterface): Promise<GetByEmailResponseInterface | null> {
        return await MahasiswaRepository.findByEmail({email});
    }
    public static async getByNIM({nim}: GetByNIMRequestInterface): Promise<GetByNIMResponseInterface | null> {
        return await MahasiswaRepository.findByNIM({nim});
    }

    public static async getInfoMahasiswaPAByDosenNIP({nip}: GetInfoMahasiswaPAByNIPRequestInterface): Promise<GetInfoMahasiswaPAByNIPResponseInterface> {
        const [ringkasan, daftar] = await Promise.all([
            MahasiswaRepository.findRingkasanMahasiswaPAPerAngkatanByDosenNIP({ nip }),
            MahasiswaRepository.findAllMahasiswaPAByDosenNIP({ nip }),
        ]);
        return {
            ringkasan,
            daftar
        }
    }

}