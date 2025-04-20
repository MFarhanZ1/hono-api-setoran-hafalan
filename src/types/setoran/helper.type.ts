import { FindAllMahasiswaPAByDosenNIPReturnInterface } from "../mahasiswa/repository.type";
import { InfoSetoranInterface } from "./repository.type";

export interface MapMahasiswaDenganRingkasanInterface extends FindAllMahasiswaPAByDosenNIPReturnInterface {
	info_setoran: InfoSetoranInterface
}
