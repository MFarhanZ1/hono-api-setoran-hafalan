import { Prisma } from "../generated/prisma";
import SetoranHelper from "../helpers/setoran.helper";
import prisma from "../infrastructures/db.infrastructure";
import { FindAllRingkasanByNIMParamsInterface, FindAllRingkasanByNIMReturnInterface, FindDetailByNIMParamsInterface, FindDetailByNIMReturnInterface, FindRingkasanByNIMParamsInterface, FindRingkasanByNIMReturnInterface, FindRingkasanPerSyaratByNIMParamsInterface, FindRingkasanPerSyaratByNIMReturnInterface } from "../types/setoran/repository.type";

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

    public static async findRingkasanPerSyaratByNIM({ nim }: FindRingkasanPerSyaratByNIMParamsInterface): Promise<FindRingkasanPerSyaratByNIMReturnInterface[] | null> {
		return await prisma.$queryRaw`
            SELECT 
                surah.label "label",
                COUNT(*)::int "total_wajib_setor",
                COUNT(setoran.id)::int "total_sudah_setor",
                (COUNT(*)::numeric - COUNT(setoran.id)::numeric)::int AS "total_belum_setor",
                ROUND(
                (COUNT(setoran.id)::numeric / 
                    COUNT(*)::numeric
                ) * 100, 2
                )::float				
                AS "persentase_progres_setor"
            FROM
                surah
            LEFT JOIN
                setoran ON setoran.nomor_surah = surah.nomor AND setoran.nim = ${nim}
            GROUP BY
                surah.label
            ORDER BY
                CASE
                    WHEN surah.label = 'KP' THEN 1
                    WHEN surah.label = 'SEMKP' THEN 2
                    WHEN surah.label = 'DAFTAR_TA' THEN 3
                    WHEN surah.label = 'SEMPRO' THEN 4
                    WHEN surah.label = 'SIDANG_TA' THEN 5
                    ELSE 6
                END;
        `;
	}

    public static async findDetailByNIM({ nim }: FindDetailByNIMParamsInterface): Promise<FindDetailByNIMReturnInterface[] | null> {
		return await prisma.$queryRaw`
            SELECT 
                s.nomor,
                s.nama,
                s.label,
                CASE 
                    WHEN COUNT(st.id) > 0 THEN true
                    ELSE false
                END AS sudah_setor,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', st.id,
                            'tgl_setoran', st.tgl_setoran,
                            'tgl_validasi', st.tgl_validasi,
                            'dosen_yang_mengesahkan', JSON_BUILD_OBJECT(
                                'nip', st.nip
                            )
                        )
                    ) FILTER (WHERE st.id IS NOT NULL),
                    null
                ) -> 0 AS info_setoran 
            FROM 
                surah s
            LEFT JOIN 
                setoran st ON st.nomor_surah = s.nomor AND st.nim = ${nim}
            GROUP BY 
                s.nomor, s.nama, s.label
            ORDER BY 
                s.nomor ASC;
        `
	}

    public static async createSetoran({ tgl_setoran, nim, nip, data_setoran }: any): Promise<void> {

        const values = data_setoran.map((data: {nomor_surah: number}) =>
            Prisma.sql`(${tgl_setoran ? new Date(tgl_setoran) : new Date()}, ${nim}, ${nip}, ${data.nomor_surah})`
        );

        await prisma.$executeRaw(
            Prisma.sql`
            INSERT INTO setoran (tgl_setoran, nim, nip, nomor_surah)
            VALUES ${Prisma.join(values)}
            ON CONFLICT (nim, nomor_surah) DO NOTHING;
        `
        );
    }
    
}
