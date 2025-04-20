export interface InfoSetoranInterface {
	total_wajib_setor?: number;
	total_sudah_setor?: number;
	total_belum_setor?: number;
	persentase_progress_setor?: number;
	terakhir_setor?: string;
	tgl_terakhir_setor?: Date | null;
}

export interface FindAllRingkasanByNIMReturnInterface {
	nim: string;
	info_setoran: InfoSetoranInterface
}

export interface FindAllRingkasanByNIMParamsInterface {
	listNIM: string[];
}

export interface FindRingkasanByNIMParamsInterface {
	nim: string;
}

export interface FindRingkasanByNIMReturnInterface extends InfoSetoranInterface {

}