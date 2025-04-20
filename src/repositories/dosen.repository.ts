import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailReturnInterface, FindByEmailParamsInterface, FindByNIPParamsInterface, FindByNIPReturnInterface, FindAllByNIPParamsInterface, FindAllByNIPReturnInterface } from "../types/dosen/repository.type";

export default class DosenRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.dosen.findUnique({
            where: {
                email: email
            }
        })
    }

    public static async findByNIP({nip}: FindByNIPParamsInterface): Promise<FindByNIPReturnInterface | null> {
        return await prisma.dosen.findUnique({
            where: {
                nip: nip
            }
        })
    }

    public static async findAllByNIP({listNIP}: FindAllByNIPParamsInterface): Promise<FindAllByNIPReturnInterface[] | null> {
        return await prisma.dosen.findMany({
            where: {
                nip: {
                    in: listNIP || []
                }
            }
        })
    }

}