-- CreateEnum
CREATE TYPE "Aksi" AS ENUM ('Validasi', 'Batalkan');

-- CreateTable
CREATE TABLE "log_setoran_hafalan" (
    "id" SERIAL NOT NULL,
    "keterangan_yang_disetor" VARCHAR(255),
    "aksi" "Aksi" NOT NULL,
    "ip" VARCHAR(45),
    "user_agent" VARCHAR(255),
    "timestamp" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nim" VARCHAR(11) NOT NULL,
    "nip" VARCHAR(18) NOT NULL,

    CONSTRAINT "log_setoran_hafalan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "log_setoran_hafalan" ADD CONSTRAINT "fk_nim_log_setoran_hafalan" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_setoran_hafalan" ADD CONSTRAINT "fk_nip_log_setoran_hafalan" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;
