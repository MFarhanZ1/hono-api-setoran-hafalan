import DosenRepository from "../repositories/dosen.repository";
import { DosenServiceGetPASayaResponse } from "../types/dosen.type";
import { APIError } from "../utils/api-error.util";

export default class DosenService {

    public static async getPASaya(email: string): Promise<DosenServiceGetPASayaResponse> {
        const infoDasarDosen = await DosenRepository.findByEmail(email);
        if (!infoDasarDosen) {
            throw new APIError('Dosen tidak ditemukan! 😭', 404);
        }
        const ringkasanMahasiswaPAPerAngkatan = await DosenRepository.findRingkasanMahasiswaPAPerAngkatanByEmail(email);              
        return {
            response: true,
            message: 'Berikut info dosen lengkap serta detail mahasiswa per angkatan (max 8 akt)! 😁',
            data: {
                info_dasar: infoDasarDosen,
                info_mahasiswa_pa: {
                    ringkasan: ringkasanMahasiswaPAPerAngkatan
                },
            },
        };
    }
    
}