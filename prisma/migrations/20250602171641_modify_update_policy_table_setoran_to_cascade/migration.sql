-- DropForeignKey
ALTER TABLE "setoran" DROP CONSTRAINT "fk_id_komponen_setoran";

-- DropForeignKey
ALTER TABLE "setoran" DROP CONSTRAINT "fk_nim_setoran";

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_nim_setoran" FOREIGN KEY ("nim") REFERENCES "mahasiswa"("nim") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setoran" ADD CONSTRAINT "fk_id_komponen_setoran" FOREIGN KEY ("id_komponen_setoran") REFERENCES "komponen_setoran"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
