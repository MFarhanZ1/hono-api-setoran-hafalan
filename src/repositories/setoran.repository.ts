import { Prisma } from "../generated/prisma";
import SetoranHelper from "../helpers/setoran.helper";
import prisma from "../infrastructures/db.infrastructure";
import { CreateSetoranParamsInterface, DeleteSetoranParamsInterface, FindAllRingkasanByNIMParamsInterface, FindAllRingkasanByNIMReturnInterface, FindDetailByNIMParamsInterface, FindDetailByNIMReturnInterface, FindRingkasanByNIMParamsInterface, FindRingkasanByNIMReturnInterface, FindRingkasanPerSyaratByNIMParamsInterface, FindRingkasanPerSyaratByNIMReturnInterface } from "../types/setoran/repository.type";

export default class SetoranRepository {
	public static async findRingkasanByNIM({ nim }: FindRingkasanByNIMParamsInterface): Promise<FindRingkasanByNIMReturnInterface | null> {
		const res: FindRingkasanByNIMReturnInterface[] = await prisma.$queryRaw`
            SELECT
                (SELECT COUNT(*) FROM komponen_setoran)::int AS total_wajib_setor,
                COUNT(setoran.id)::int AS total_sudah_setor, 
                (SELECT COUNT(*) FROM komponen_setoran)::int - COUNT(setoran.id)::int AS total_belum_setor,
                ROUND((COUNT(setoran.id)::numeric / (SELECT COUNT(*) FROM komponen_setoran)::numeric) * 100, 2)::float AS persentase_progres_setor,
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
                    'total_wajib_setor', (SELECT COUNT(*) FROM komponen_setoran)::int,
                    'total_sudah_setor', COUNT(s.id)::int,
                    'total_belum_setor', (SELECT COUNT(*) FROM komponen_setoran)::int - COUNT(s.id)::int,
                    'persentase_progres_setor', ROUND(
                        (COUNT(s.id)::numeric / NULLIF((SELECT COUNT(*) FROM komponen_setoran)::numeric, 0)) * 100,
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
                komponen_setoran.label "label",
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
                komponen_setoran
            LEFT JOIN
                setoran ON setoran.id_komponen_setoran = komponen_setoran.id AND setoran.nim = ${nim}
            GROUP BY
                komponen_setoran.label
            ORDER BY
                komponen_setoran.label ASC;
        `;
	}

    public static async findDetailByNIM({ nim }: FindDetailByNIMParamsInterface): Promise<FindDetailByNIMReturnInterface[] | null> {
		return await prisma.$queryRaw`
            SELECT 
                ks.id,
                ks.nama,
                ks.external_id,
                ks.nama_arab,
                ks.label,
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
                komponen_setoran ks
            LEFT JOIN 
                setoran st ON st.id_komponen_setoran = ks.id AND st.nim = ${nim}
            GROUP BY 
                ks.id, ks.nama, ks.label
            ORDER BY 
                ks.label ASC,
                ks.external_id ASC;
        `
	}

    public static async createSetoran({ tgl_setoran, nim, nip, data_setoran }: CreateSetoranParamsInterface): Promise<unknown> {

        const values = data_setoran.map((data: {id_komponen_setoran: string}) =>
            Prisma.sql`(${tgl_setoran ? new Date(tgl_setoran) : new Date()}, ${nim}, ${nip}, ${data.id_komponen_setoran}::uuid)`
        );

        const result = await prisma.$queryRaw(
            Prisma.sql`
            INSERT INTO setoran (tgl_setoran, nim, nip, id_komponen_setoran)
            VALUES ${Prisma.join(values)}
            ON CONFLICT (nim, id_komponen_setoran) DO NOTHING
            RETURNING id_komponen_setoran;`
        );

        return result
    }

    public static async deleteSetoran({ data_setoran }: DeleteSetoranParamsInterface): Promise<unknown> {

        const id_setoran = data_setoran.map((data: { id: string }) => data.id);

        const result = await prisma.$queryRaw(
            Prisma.sql`
                DELETE FROM setoran
                WHERE id IN (${Prisma.join(id_setoran.map(id => Prisma.sql`${id}::uuid`))})
                RETURNING id_komponen_setoran
            `
        );

        return result
    }

    public static async createLogSetoran({keterangan, aksi, ip, user_agent, nim, nip}: any) {
        await prisma.log_setoran_hafalan.create({
            data: {
                keterangan: keterangan,
                aksi: aksi,
                ip: ip,
                user_agent: user_agent,
                nim: nim,
                nip: nip
            }
        })
    }

    public static async findLogSetoranByNIM({ nim }: any): Promise<any | null> {
        return await prisma.log_setoran_hafalan.findMany({
            where: {
                nim: nim
            },
            orderBy: {
                timestamp: 'desc'
            }
        })
    }
    
}