-- CreateEnum
CREATE TYPE "type_label_surah" AS ENUM ('KP', 'SEMKP', 'DAFTAR_TA', 'SEMPRO', 'SIDANG_TA');

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
    "nomor_surah" INTEGER NOT NULL,

    CONSTRAINT "pk_id_setoran" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surah" (
    "nomor" INTEGER NOT NULL,
    "nama" VARCHAR(25) NOT NULL,
    "label" "type_label_surah",

    CONSTRAINT "pk_nomor_surah" PRIMARY KEY ("nomor")
);

-- CreateIndex
CREATE UNIQUE INDEX "dosen_email_key" ON "dosen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_email_key" ON "mahasiswa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "setoran_nim_nomor_surah_key" ON "setoran"("nim", "nomor_surah");

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "fk_nip_mahasiswa" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nim_setoran" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nip_setoran" FOREIGN KEY ("nip") REFERENCES "dosen"("nip") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nomor_surah_setoran" FOREIGN KEY ("nomor_surah") REFERENCES "surah"("nomor") ON DELETE NO ACTION ON UPDATE NO ACTION;
