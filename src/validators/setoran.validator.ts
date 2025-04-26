import { z } from "zod";

export const postSetoranSchema = z.object({
	data_setoran: z.array(
		z.object({
			id_komponen_setoran: z.string({
				required_error: "Maaf, tiap id_komponen_setoran wajib diisi yak, mas! 😁",
				invalid_type_error:
					"Waduh, tiap id_komponen_setoran wajib berupa string yak, mas! 😁",
			}),
			nama_surah: z.string({
				required_error: "Maaf, tiap nama_surah wajib diisi yak, mas! 😁",
				invalid_type_error:
					"Waduh, tiap nama_surah wajib berupa string yak, mas! 😁",
			}),
		})
	),
	tgl_setoran: z
		.union([z.string(), z.null()])
		.refine(
			(val) => {
				if (val === null || val === undefined) return true; // Valid jika null atau undefined
				return !isNaN(Date.parse(val)); // Validasi hanya jika bukan null
			},
			{
				message:
					"Waduh, tgl_setoran wajib berupa format tanggal yang valid yak, mas! 😁",
			}
		)
		.optional(),
});

export const deleteSetoranSchema = z.object({
	data_setoran: z.array(
		z.object({
			id: z.string({
				required_error: "Maaf, tiap id wajib diisi yak, mas! 😁",
				invalid_type_error:
					"Waduh, tiap id wajib berupa string yak, mas! 😁"
			}),
			id_komponen_setoran: z.string({
				required_error: "Maaf, tiap id_komponen_setoran wajib diisi yak, mas! 😁",
				invalid_type_error:
					"Waduh, tiap id_komponen_setoran wajib berupa string yak, mas! 😁",
			}),
			nama_surah: z.string({
				required_error: "Maaf, tiap nama_surah wajib diisi yak, mas! 😁",
				invalid_type_error:
					"Waduh, tiap nama_surah wajib berupa string yak, mas! 😁",
			}),
		})
	),
});