/*
  Warnings:

  - You are about to drop the column `nomor_surah` on the `setoran` table. All the data in the column will be lost.
  - You are about to drop the `surah` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nim,id_komponen_setoran]` on the table `setoran` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `aksi` on the `log_setoran_hafalan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `id_komponen_setoran` to the `setoran` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "type_jenis_komponen_setoran" AS ENUM ('SURAH', 'DOA', 'BACAAN_SHOLAT', 'HADIST');

-- CreateEnum
CREATE TYPE "type_label_komponen_setoran" AS ENUM ('KP', 'SEMKP', 'DAFTAR_TA', 'SEMPRO', 'SIDANG_TA');

-- CreateEnum
CREATE TYPE "type_aksi_log_setoran_hafalan" AS ENUM ('VALIDASI', 'BATALKAN');

-- DropForeignKey
ALTER TABLE "setoran" DROP CONSTRAINT "fk_nomor_surah_setoran";

-- DropIndex
DROP INDEX "setoran_nim_nomor_surah_key";

-- AlterTable
ALTER TABLE "log_setoran_hafalan" DROP COLUMN "aksi",
ADD COLUMN     "aksi" "type_aksi_log_setoran_hafalan" NOT NULL;

-- AlterTable
ALTER TABLE "setoran" DROP COLUMN "nomor_surah",
ADD COLUMN     "id_komponen_setoran" UUID NOT NULL;

-- DropTable
DROP TABLE "surah";

-- DropEnum
DROP TYPE "Aksi";

-- DropEnum
DROP TYPE "type_label_surah";

-- CreateTable
CREATE TABLE "komponen_setoran" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(35) NOT NULL,
    "external_id" VARCHAR(35),
    "jenis" "type_jenis_komponen_setoran" NOT NULL,
    "label" "type_label_komponen_setoran",

    CONSTRAINT "pk_nomor_surah" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setoran_nim_id_komponen_setoran_key" ON "setoran"("nim", "id_komponen_setoran");

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_id_komponen_setoran" FOREIGN KEY ("id_komponen_setoran") REFERENCES "komponen_setoran"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
