import DosenRepository from "../repositories/dosen.repository";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { FindByEmailReturnInterface } from "../types/dosen/repository.type";
import { GetPASayaRequestInterface, GetPASayaResponseInterface } from "../types/dosen/service.type";
import { APIError } from "../utils/api-error.util";

export default class DosenService {

    public static async getPASaya({email}: GetPASayaRequestInterface): Promise<GetPASayaResponseInterface> {
        
        // Ambil dulu info dasar dari dosen berdasarkan email
        const infoDasarDosen: FindByEmailReturnInterface | null = await DosenRepository.findByEmail({email});
        if (!infoDasarDosen) {
            throw new APIError('Dosen tidak ditemukan! 😭', 404);
        }
        const { nip } = infoDasarDosen;
        const ringkasanMahasiswaPAPerAngkatan = await MahasiswaRepository.findRingkasanMahasiswaPAPerAngkatanByDosenNIP({nip});

        const daftarMahasiswa = await MahasiswaRepository.findDaftarMahasiswaPAByDosenNIP({nip});        

        return {
            response: true,
            message: 'Berikut info dosen lengkap serta detail mahasiswa per angkatan (max 8 akt)! 😁',
            data: {
                info_dasar: infoDasarDosen,
                info_mahasiswa_pa: {
                    ringkasan: ringkasanMahasiswaPAPerAngkatan,
                    daftar_mahasiswa: daftarMahasiswa,
                },
            },
        };
    }
    
}