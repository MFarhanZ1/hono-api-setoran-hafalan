import prisma from "../infrastructures/db.infrastructure";
import { FindByEmailReturnInterface, FindByEmailParamsInterface } from "../types/dosen/repository.type";

export default class DosenRepository {
    
    public static async findByEmail({email}: FindByEmailParamsInterface): Promise<FindByEmailReturnInterface | null> {
        return await prisma.dosen.findUnique({
            where: {
                email: email
            }
        })
    }

}