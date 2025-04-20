import DosenRepository from "../repositories/dosen.repository";
import { GetAllByNIPRequestInterface, GetAllByNIPResponseInterface, GetByEmailRequestInterface, GetByEmailResponseInterface, GetByNIPRequestInterface, GetByNIPResponseInterface } from "../types/dosen/service.type";

export default class DosenService {
    public static async getByEmail({email}: GetByEmailRequestInterface): Promise<GetByEmailResponseInterface | null> {
        return await DosenRepository.findByEmail({email});
    }

    public static async getByNIP({nip}: GetByNIPRequestInterface): Promise<GetByNIPResponseInterface | null> {
        return await DosenRepository.findByNIP({nip});
    }

    public static async getAllByNIP({listNIP}: GetAllByNIPRequestInterface): Promise<GetAllByNIPResponseInterface[] | null> {
        return await DosenRepository.findAllByNIP({listNIP});
    }
}