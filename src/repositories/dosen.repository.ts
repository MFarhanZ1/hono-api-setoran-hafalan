import { Prisma, PrismaClient } from "../generated/prisma";
import { DefaultArgs } from "../generated/prisma/runtime/library";
import { DosenRepositoryFindByEmailInterface, DosenRepositoryFindRingkasanMahasiswaPAPerAngkatanByEmailInterface } from "../types/dosen.type";

const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient();

export default class DosenRepository {
    
    public static async findByEmail(email: string): Promise<DosenRepositoryFindByEmailInterface | null> {
        return await prisma.dosen.findUnique({
            where: {
                email: email
            }
        })
    }

    public static async findRingkasanMahasiswaPAPerAngkatanByEmail(email: string): Promise<DosenRepositoryFindRingkasanMahasiswaPAPerAngkatanByEmailInterface[]> {
        return await prisma.$queryRaw`
            SELECT 
				CONCAT('20', substring(nim FROM 2 FOR 2)) AS tahun, 
				COUNT(substring(nim FROM 2 FOR 2))::int AS total 
			FROM 
				mahasiswa 
			WHERE 
				nip=(SELECT nip FROM dosen WHERE email = ${email})
			GROUP BY 
				substring(nim FROM 2 FOR 2) 
			ORDER BY 
				substring(nim FROM 2 FOR 2) DESC
			LIMIT 8;
        `
    }

}