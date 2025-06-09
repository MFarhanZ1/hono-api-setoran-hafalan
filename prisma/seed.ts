import { type_jenis_komponen_setoran, type_label_komponen_setoran } from "../src/generated/prisma";
import prisma from "../src/infrastructures/db.infrastructure";

console.log("[INFO] Seeding database...");

async function main() {
	console.log("[DEBUG] Running all seeding tasks...");
	const data_komponen_setoran = [
		{
			id: "SURAH_78",
			nama: "An-Naba'",
			external_id: "78",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "النبأ",
		},
		{
			id: "SURAH_79",
			nama: "An-Naazi'at",
			external_id: "79",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "النّٰزعٰت",
		},
		{
			id: "SURAH_80",
			nama: "'Abasa",
			external_id: "80",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "عبس",
		},
		{
			id: "SURAH_81",
			nama: "At-Takwir",
			external_id: "81",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "التكوير",
		},
		{
			id: "SURAH_82",
			nama: "Al-Infithar",
			external_id: "82",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "الانفطار",
		},
		{
			id: "SURAH_83",
			nama: "Al-Muthaffifin",
			external_id: "83",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "المطفّفين",
		},
		{
			id: "SURAH_84",
			nama: "Al-Insyiqaaq",
			external_id: "84",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "الانشقاق",
		},
		{
			id: "SURAH_85",
			nama: "Al-Buruj",
			external_id: "85",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.KP,
			nama_arab: "البروج",
		},
		{
			id: "SURAH_86",
			nama: "Ath-Thaariq",
			external_id: "86",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الطارق",
		},
		{
			id: "SURAH_87",
			nama: "Al-A'la",
			external_id: "87",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الاعلى",
		},
		{
			id: "SURAH_88",
			nama: "Al-Ghaasyiyah",
			external_id: "88",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الغاشية",
		},
		{
			id: "SURAH_89",
			nama: "Al-Fajr",
			external_id: "89",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الفجر",
		},
		{
			id: "SURAH_90",
			nama: "Al-Balad",
			external_id: "90",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "البلد",
		},
		{
			id: "SURAH_91",
			nama: "Asy-Syams",
			external_id: "91",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الشمس",
		},
		{
			id: "SURAH_92",
			nama: "Al-Lail",
			external_id: "92",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الّيل",
		},
		{
			id: "SURAH_93",
			nama: "Adh-Dhuha",
			external_id: "93",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMKP,
			nama_arab: "الضحى",
		},
		{
			id: "SURAH_94",
			nama: "Al-Insyirah",
			external_id: "94",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "الشرح",
		},
		{
			id: "SURAH_95",
			nama: "At-Tiin",
			external_id: "95",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "التين",
		},
		{
			id: "SURAH_96",
			nama: "Al-'Alaq",
			external_id: "96",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "العلق",
		},
		{
			id: "SURAH_97",
			nama: "Al-Qadr",
			external_id: "97",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "القدر",
		},
		{
			id: "SURAH_98",
			nama: "Al-Bayyinah",
			external_id: "98",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "البيّنة",
		},
		{
			id: "SURAH_99",
			nama: "Az-Zalzalah",
			external_id: "99",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.DAFTAR_TA,
			nama_arab: "الزلزلة",
		},
		{
			id: "SURAH_100",
			nama: "Al-'Aadiyaat",
			external_id: "100",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "العٰديٰت",
		},
		{
			id: "SURAH_101",
			nama: "Al-Qaari'ah",
			external_id: "101",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "القارعة",
		},
		{
			id: "SURAH_102",
			nama: "At-Takaatsur",
			external_id: "102",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "التكاثر",
		},
		{
			id: "SURAH_103",
			nama: "Al-'Ashr",
			external_id: "103",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "العصر",
		},
		{
			id: "SURAH_104",
			nama: "Al-Humazah",
			external_id: "104",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "الهمزة",
		},
		{
			id: "SURAH_105",
			nama: "Al-Fiil",
			external_id: "105",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "الفيل",
		},
		{
			id: "SURAH_106",
			nama: "Quraisy",
			external_id: "106",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "قريش",
		},
		{
			id: "SURAH_107",
			nama: "Al-Maa'un",
			external_id: "107",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "الماعون",
		},
		{
			id: "SURAH_108",
			nama: "Al-Kautsar",
			external_id: "108",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "الكوثر",
		},
		{
			id: "SURAH_109",
			nama: "Al-Kaafirun",
			external_id: "109",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "الكٰفرون",
		},
		{
			id: "SURAH_110",
			nama: "An-Nashr",
			external_id: "110",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "النصر",
		},
		{
			id: "SURAH_111",
			nama: "Al-Lahab",
			external_id: "111",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SEMPRO,
			nama_arab: "اللهب",
		},
		{
			id: "SURAH_112",
			nama: "Al-Ikhlash",
			external_id: "112",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SIDANG_TA,
			nama_arab: "الاخلاص",
		},
		{
			id: "SURAH_113",
			nama: "Al-Falaq",
			external_id: "113",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SIDANG_TA,
			nama_arab: "الفلق",
		},
		{
			id: "SURAH_114",
			nama: "An-Nas",
			external_id: "114",
			jenis: type_jenis_komponen_setoran.SURAH,
			label: type_label_komponen_setoran.SIDANG_TA,
			nama_arab: "الناس",
		},
	];
	await Promise.all(
		data_komponen_setoran.map(async (item) => {
			await prisma.komponen_setoran.upsert({
				where: { id: item.id },
				update: {
					nama: item.nama,
					external_id: item.external_id,
					jenis: item.jenis,
					label: item.label,
					nama_arab: item.nama_arab,
				},
				create: item,
			});
		})
	);
}

main()
	.catch((e) => {
		console.error(`[ERROR] ${e.message}`);
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		console.log("[INFO] Seeding finished, disconnecting...");
		await prisma.$disconnect();
		process.exit(0);
	});