export interface FindByEmailParamsInterface {
    email: string;
}

export interface FindByEmailReturnInterface {
    nip: string;
    nama: string;
    email: string;
}

export interface FindByNIPParamsInterface {
    nip: string;
}

export interface FindByNIPReturnInterface {
    nip: string;
    nama: string;
    email: string;
}

export interface FindAllByNIPParamsInterface {
    listNIP: string[] | null;
}

export interface FindAllByNIPReturnInterface {
    nip: string;
    nama: string;
    email: string;
}