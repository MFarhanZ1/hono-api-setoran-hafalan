import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailParamsInterface, FindByEmailReturnInterface, FindDaftarMahasiswaPAByDosenNIPParamsInterface, FindDaftarMahasiswaPAByDosenNIPReturnInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPParamsInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface } from "../types/mahasiswa/repository.type";

export default class MahasiswaRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.mahasiswa.findUnique({
            where: {
                email: email
            }
        })
    }

    public static async findRingkasanMahasiswaPAPerAngkatanByDosenNIP({nip}: FindRingkasanMahasiswaPAPerAngkatanByDosenNIPParamsInterface): Promise<FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface[]> {
        return await prisma.$queryRaw`
            SELECT 
                CONCAT('20', substring(nim FROM 2 FOR 2)) AS tahun, 
                COUNT(substring(nim FROM 2 FOR 2))::int AS total 
            FROM 
                mahasiswa 
            WHERE 
                nip=${nip}
            GROUP BY 
                substring(nim FROM 2 FOR 2) 
            ORDER BY 
                substring(nim FROM 2 FOR 2) DESC
            LIMIT 8;
        `
    }

    public static async findDaftarMahasiswaPAByDosenNIP({nip}: FindDaftarMahasiswaPAByDosenNIPParamsInterface): Promise<FindDaftarMahasiswaPAByDosenNIPReturnInterface[]> {
        return await prisma.$queryRaw`
            SELECT 
                mahasiswa.email,
				mahasiswa.nim, 
				mahasiswa.nama,
				CONCAT('20', SUBSTRING(mahasiswa.nim FROM 2 FOR 2)) as angkatan,
				CASE 
					WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 8 THEN (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2 + 1
					ELSE (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2
				END as semester
            FROM 
                mahasiswa
            WHERE 
                mahasiswa.nip = ${nip} AND
                (EXTRACT (YEAR FROM CURRENT_DATE)::int - CONCAT('20', SUBSTRING(mahasiswa.nim FROM 2 FOR 2))::int) <= 8
            ORDER BY 
                SUBSTRING(mahasiswa.nim FROM 2 FOR 2) DESC, 
                mahasiswa.nama ASC;
        `
    }

}