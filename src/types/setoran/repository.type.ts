export interface InfoSetoranInterface {
	total_wajib_setor?: number;
	total_sudah_setor?: number;
	total_belum_setor?: number;
	persentase_progres_setor?: number;
	terakhir_setor?: string;
	tgl_terakhir_setor?: Date | null;
}

export interface FindAllRingkasanByNIMReturnInterface {
	nim: string;
	info_setoran: InfoSetoranInterface;
}

export interface FindAllRingkasanByNIMParamsInterface {
	listNIM: string[];
}

export interface FindRingkasanByNIMParamsInterface {
	nim: string;
}

export interface FindRingkasanByNIMReturnInterface
	extends InfoSetoranInterface {}

export interface FindRingkasanPerSyaratByNIMParamsInterface {
	nim: string;
}

export interface FindRingkasanPerSyaratByNIMReturnInterface
	extends InfoSetoranInterface {
	label: string;
}

export interface FindDetailByNIMParamsInterface {
	nim: string;
}

export interface FindDetailByNIMReturnInterface {
	id_komponen_setoran: string;
	nama: string;
	label: string;
	sudah_setor: boolean;
	info_setoran: {
		id?: string;
		tgl_setoran?: Date;
		tgl_validasi?: Date;
		dosen_yang_mengesahkan: {
			nip?: string;
			nama?: string;
			email?: string;
		}
	} | null;
}

export interface CreateSetoranParamsInterface {
	tgl_setoran: Date | null;
	nim: string;
	nip: string;
	data_setoran: {
		id_komponen_setoran: string;
		nama_surah: string;
	}[];
}

export interface DeleteSetoranParamsInterface {	
	data_setoran: {
		id: string;
		nama_surah: string;
	}[];
}