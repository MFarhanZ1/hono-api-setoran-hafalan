import { z } from "zod";

export const postSetoranSchema = z.object({
	data_setoran: z.array(
		z.object({
			nomor_surah: z.number({
				required_error: "Maaf, tiap nomor_surah wajib diisi yak, mas! 😁",
				invalid_type_error: "Waduh, tiap nomor_surah wajib berupa angka yak, mas! 😁",
			}),
			nama_surah: z.string({
				required_error: "Maaf, tiap nama_surah wajib diisi yak, mas! 😁",
				invalid_type_error: "Waduh, tiap nama_surah wajib berupa string yak, mas! 😁",
			}),
		})
	),
	tgl_setoran: z
		.string()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: "Waduh, tgl_setoran wajib berupa format data yang valid yak, mas! 😁",
		})
		.optional(),
});