/*
  Warnings:

  - The primary key for the `komponen_setoran` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "setoran" DROP CONSTRAINT "fk_id_komponen_setoran";

-- AlterTable
ALTER TABLE "komponen_setoran" DROP CONSTRAINT "pk_id_komponen_setoran",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "pk_id_komponen_setoran" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "setoran" ALTER COLUMN "id_komponen_setoran" SET DATA TYPE VARCHAR(36);

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_id_komponen_setoran" FOREIGN KEY ("id_komponen_setoran") REFERENCES "komponen_setoran"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
