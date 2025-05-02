import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailParamsInterface, FindByEmailReturnInterface, FindAllMahasiswaPAByDosenNIPParamsInterface, FindAllMahasiswaPAByDosenNIPReturnInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPParamsInterface, FindRingkasanMahasiswaPAPerAngkatanByDosenNIPReturnInterface, FindByNIMParamsInterface, FindByNIMReturnInterface, CheckValidPAParamsInterface } from "../types/mahasiswa/repository.type";

export default class MahasiswaRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        const res: FindByEmailReturnInterface[] = await prisma.$queryRaw`
            SELECT 
                mahasiswa.email,
                mahasiswa.nim, 
                mahasiswa.nama,
                CONCAT('20', SUBSTRING(mahasiswa.nim FROM 2 FOR 2)) as angkatan,
                CASE
                    WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 8 THEN (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2 + 1
                    ELSE (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2
                END as semester,
                mahasiswa.nip as nip_dosen_pa
            FROM 
                mahasiswa
            WHERE 
                mahasiswa.email = ${email};
        `
        return res[0];
    }
    
    public static async findByNIM({nim}: FindByNIMParamsInterface): Promise<FindByNIMReturnInterface | null> {
        const res: FindByEmailReturnInterface[] = await prisma.$queryRaw`
            SELECT 
                mahasiswa.email,
                mahasiswa.nim, 
                mahasiswa.nama,
                CONCAT('20', SUBSTRING(mahasiswa.nim FROM 2 FOR 2)) as angkatan,
                CASE
                    WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 8 THEN (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2 + 1
                    ELSE (SUBSTRING(EXTRACT(YEAR FROM CURRENT_DATE)::text FROM 2 FOR 4)::int - SUBSTRING(mahasiswa.nim FROM 2 FOR 2)::int) * 2
                END as semester,
                mahasiswa.nip as nip_dosen_pa
            FROM 
                mahasiswa
            WHERE 
                mahasiswa.nim = ${nim};
        `
        return res[0];
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

    public static async findAllMahasiswaPAByDosenNIP({nip}: FindAllMahasiswaPAByDosenNIPParamsInterface): Promise<FindAllMahasiswaPAByDosenNIPReturnInterface[]> {
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

    public static async checkValidPA({nim, nip}: CheckValidPAParamsInterface): Promise<boolean> {
        const exists = await prisma.mahasiswa.findFirst({
            where: {
                nim,
                nip,
            },
        });        
        return !!exists;
    }

}