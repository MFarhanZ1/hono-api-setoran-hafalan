import SetoranHelper from "../helpers/setoran.helper";
import prisma from "../infrastructures/db.infrastructure";
import { FindAllRingkasanByNIMParamsInterface, FindAllRingkasanByNIMReturnInterface, FindRingkasanByNIMParamsInterface, FindRingkasanByNIMReturnInterface } from "../types/setoran/repository.type";

export default class SetoranRepository {
	public static async findRingkasanByNIM({ nim }: FindRingkasanByNIMParamsInterface): Promise<FindRingkasanByNIMReturnInterface | null> {
		const res: FindRingkasanByNIMReturnInterface[] = await prisma.$queryRaw`
            SELECT
                (SELECT COUNT(*) FROM surah)::int AS total_wajib_setor,
                COUNT(setoran.id)::int AS total_sudah_setor, 
                (SELECT COUNT(*) FROM surah)::int - COUNT(setoran.id)::int AS total_belum_setor,
                ROUND((COUNT(setoran.id)::numeric / (SELECT COUNT(*) FROM surah)::numeric) * 100, 2)::float AS persentase_progres_setor,
                MAX(setoran.tgl_setoran) AS tgl_terakhir_setor
            FROM setoran
            WHERE setoran.nim = ${nim};
        `;
        return {
            ...res[0],
            terakhir_setor: SetoranHelper.formatHumanizeDateDiff(res[0].tgl_terakhir_setor),
        };
	}

    public static async findAllRingkasanByNIM({ listNIM }: FindAllRingkasanByNIMParamsInterface): Promise<FindAllRingkasanByNIMReturnInterface[]> {
        const res: FindAllRingkasanByNIMReturnInterface[] = await prisma.$queryRaw`
            WITH nim_list AS (
                SELECT unnest(${listNIM}::text[]) AS nim
            )
            SELECT
                nl.nim,
                JSON_BUILD_OBJECT(
                    'total_wajib_setor', (SELECT COUNT(*) FROM surah)::int,
                    'total_sudah_setor', COUNT(s.id)::int,
                    'total_belum_setor', (SELECT COUNT(*) FROM surah)::int - COUNT(s.id)::int,
                    'persentase_progres_setor', ROUND(
                        (COUNT(s.id)::numeric / NULLIF((SELECT COUNT(*) FROM surah)::numeric, 0)) * 100,
                        2
                    )::float,
                    'tgl_terakhir_setor', MAX(s.tgl_setoran)
                ) AS info_setoran
            FROM nim_list nl
            LEFT JOIN setoran s ON nl.nim = s.nim
            GROUP BY nl.nim;
        `;
        
        return res.map((mhs) => ({
            ...mhs, 
            info_setoran: {
                ...mhs.info_setoran,
                terakhir_setor: SetoranHelper.formatHumanizeDateDiff(mhs.info_setoran.tgl_terakhir_setor),
            }
        }));
    }    
}
