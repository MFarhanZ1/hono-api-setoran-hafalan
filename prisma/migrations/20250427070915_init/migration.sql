-- CreateEnum
CREATE TYPE "type_jenis_komponen_setoran" AS ENUM ('SURAH', 'DOA', 'BACAAN_SHOLAT', 'HADIST');

-- CreateEnum
CREATE TYPE "type_label_komponen_setoran" AS ENUM ('KP', 'SEMKP', 'DAFTAR_TA', 'SEMPRO', 'SIDANG_TA');

-- CreateEnum
CREATE TYPE "type_aksi_log_setoran_hafalan" AS ENUM ('VALIDASI', 'BATALKAN');

-- CreateTable
CREATE TABLE "dosen" (
    "nip" VARCHAR(18) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_nip_dosen" PRIMARY KEY ("nip")
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "nim" VARCHAR(11) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "email" VARCHAR(36) NOT NULL,
    "nip" VARCHAR(18) NOT NULL,

    CONSTRAINT "pk_nim_mahasiswa" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "setoran" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tgl_setoran" DATE DEFAULT CURRENT_TIMESTAMP,
    "tgl_validasi" DATE DEFAULT CURRENT_TIMESTAMP,
    "nim" VARCHAR(11) NOT NULL,
    "nip" VARCHAR(18) NOT NULL,
    "id_komponen_setoran" UUID NOT NULL,

    CONSTRAINT "pk_id_setoran" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "komponen_setoran" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(35) NOT NULL,
    "external_id" VARCHAR(35),
    "jenis" "type_jenis_komponen_setoran" NOT NULL,
    "label" "type_label_komponen_setoran",

    CONSTRAINT "pk_id_komponen_setoran" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_setoran_hafalan" (
    "id" SERIAL NOT NULL,
    "keterangan" TEXT,
    "aksi" "type_aksi_log_setoran_hafalan" NOT NULL,
    "ip" VARCHAR(45),
    "user_agent" VARCHAR(255),
    "timestamp" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nim" VARCHAR(11) NOT NULL,
    "nip" VARCHAR(18) NOT NULL,

    CONSTRAINT "pk_id_log_setoran_hafalan" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dosen_email_key" ON "dosen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_email_key" ON "mahasiswa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "setoran_nim_id_komponen_setoran_key" ON "setoran"("nim", "id_komponen_setoran");

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "fk_nip_mahasiswa" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nim_setoran" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nip_setoran" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_id_komponen_setoran" FOREIGN KEY ("id_komponen_setoran") REFERENCES "komponen_setoran"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "log_setoran_hafalan" ADD CONSTRAINT "fk_nim_log_setoran_hafalan" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_setoran_hafalan" ADD CONSTRAINT "fk_nip_log_setoran_hafalan" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;
