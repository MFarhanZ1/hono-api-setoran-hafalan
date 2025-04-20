export interface GetByEmailRequestInterface {
    email: string;
}

export interface GetByEmailResponseInterface {
    nip: string;
    nama: string;
    email: string;
}

export interface GetByNIPRequestInterface {
    nip: string;
}

export interface GetByNIPResponseInterface {
    nip: string;
    nama: string;
    email: string;
}

export interface GetAllByNIPRequestInterface {
    listNIP: string[];
}

export interface GetAllByNIPResponseInterface {
    nip: string;
    nama: string;
    email: string;
}