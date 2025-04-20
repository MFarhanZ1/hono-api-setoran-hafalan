import DosenRepository from "../repositories/dosen.repository";
import { GetByEmailRequestInterface, GetByEmailResponseInterface } from "../types/dosen/service.type";

export default class DosenService {
    public static async getByEmail({email}: GetByEmailRequestInterface): Promise<GetByEmailResponseInterface | null> {
        return await DosenRepository.findByEmail({email});
    }
}