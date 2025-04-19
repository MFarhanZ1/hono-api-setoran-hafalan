import DosenRepository from "../repositories/dosen.repository";
import MahasiswaRepository from "../repositories/mahasiswa.repository";
import { FindByEmailReturnInterface } from "../types/dosen/repository.type";
import { GetPASayaRequestInterface, GetPASayaResponseInterface } from "../types/dosen/service.type";
import { APIError } from "../utils/api-error.util";
import SetoranService from "./setoran.service";

export default class DosenService {

    public static async getPASaya({email}: GetPASayaRequestInterface): Promise<GetPASayaResponseInterface> {
        
        // Ambil dulu info dasar dari dosen berdasarkan email
        const infoDasarDosen: FindByEmailReturnInterface | null = await DosenRepository.findByEmail({email});
        if (!infoDasarDosen) {
            throw new APIError('Dosen tidak ditemukan! 😭', 404);
        }

        // Ambil nip dosen dari info dasar dosen
        const { nip } = infoDasarDosen;

        // Ambil ringkasan mahasiswa PA per angkatan berdasarkan nip dosen yang udah di ambil tadi
        const ringkasanMahasiswaPAPerAngkatan = await MahasiswaRepository.findRingkasanMahasiswaPAPerAngkatanByDosenNIP({nip});

        // Ambil daftar mahasiswa PA berdasarkan nip dosen yang udah di ambil tadi
        let daftarMahasiswa = await MahasiswaRepository.findDaftarMahasiswaPAByDosenNIP({nip});

        // Ambil ringkasan setoran mahasiswa berdasarkan nim mahasiswa yang udah di ambil dari daftar mahasiswa
        const listNim = daftarMahasiswa.map((mahasiswa) => mahasiswa.nim);
        const ringkasanSetoranMahasiswa = await SetoranService.getRingkasanSetoranMahasiswaByNIM({listNIM: listNim});

        // merging ringkasan setoran mahasiswa ke daftar mahasiswa
        daftarMahasiswa = daftarMahasiswa.map((mahasiswa) => {
            const nimMahasiswa = mahasiswa.nim;
            const ringkasanSetoranMahasiswaByNIM = ringkasanSetoranMahasiswa.find((setoran: any) => setoran.nim === nimMahasiswa);
            return {
                ...mahasiswa,
                info_ringkasan_setoran: ringkasanSetoranMahasiswaByNIM ? ringkasanSetoranMahasiswaByNIM.info_setoran : null,
            };
        })

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