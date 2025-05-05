import prisma from "../src/infrastructures/db.infrastructure";

console.log("[INFO] Seeding database...");

async function main() {
	console.log("[DEBUG] Running all seeding tasks...");
	const result = await prisma.komponen_setoran.createMany({
		data: [
			{
				id: "9fc4e7c0-f23c-43a9-8b2a-5f4e9e94d9d1",
				nama: "An-Naba'",
				external_id: "78",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "cbe746c8-3ffb-4d44-b4ab-fc4e4c6d95ea",
				nama: "An-Naazi'at",
				external_id: "79",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "1955f5c1-4c70-4f0e-95b7-6bd50269f6f6",
				nama: "'Abasa",
				external_id: "80",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "47c9d3e3-2e4c-4856-b35b-8c2ff9c6cf67",
				nama: "At-Takwir",
				external_id: "81",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "5c7d4f83-c57e-4c1e-a5d7-8cdd5580a3a8",
				nama: "Al-Infithar",
				external_id: "82",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "4d4cb33f-cd1a-4266-9f3c-cd4eb543d865",
				nama: "Al-Muthaffifin",
				external_id: "83",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "e4ab051e-3483-4215-9f89-7b4f8a3cb2aa",
				nama: "Al-Insyiqaaq",
				external_id: "84",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "6d742e5d-2c9c-4c8c-b8f6-8b2c064b7c65",
				nama: "Al-Buruj",
				external_id: "85",
				jenis: "SURAH",
				label: "KP",
			},
			{
				id: "c4359b24-2b85-4724-88f7-4e3f0f5d90f7",
				nama: "Ath-Thaariq",
				external_id: "86",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "d3a2b8a7-5f38-4f91-b4d9-4c7a6b4c54a9",
				nama: "Al-A'la",
				external_id: "87",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "eef0d88f-5c5c-4486-afe5-2af4c5d4c79b",
				nama: "Al-Ghaasyiyah",
				external_id: "88",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "582b497c-5566-4ea1-84a5-c768b9d56e7c",
				nama: "Al-Fajr",
				external_id: "89",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "9af2d690-b68e-4ef4-a9a4-5a7a3c690d90",
				nama: "Al-Balad",
				external_id: "90",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "ae6c9092-1df1-4a1a-bf9e-92e13e8c2e74",
				nama: "Asy-Syams",
				external_id: "91",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "60e5b519-5d3f-442e-942d-2b2b83e6e8d0",
				nama: "Al-Lail",
				external_id: "92",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "dc315f0a-55c8-45e4-b1e6-8e2e7e4dc6a9",
				nama: "Adh-Dhuha",
				external_id: "93",
				jenis: "SURAH",
				label: "SEMKP",
			},
			{
				id: "5cf93e32-c37b-4c18-a2e5-ef1f72c2fc18",
				nama: "Al-Insyirah",
				external_id: "94",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "ce3f1932-f1c8-4515-a5d4-dcf9f91c78ed",
				nama: "At-Tiin",
				external_id: "95",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "78b973a6-49c2-4a7d-9de8-31f5a0ffb292",
				nama: "Al-'Alaq",
				external_id: "96",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "8717d00a-5de8-45bb-82ee-2f9e7a8d7d2b",
				nama: "Al-Qadr",
				external_id: "97",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "0f9307c9-bc3d-47e2-8aeb-1d5c1e1b5930",
				nama: "Al-Bayyinah",
				external_id: "98",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "cb7b3986-3297-4784-95d4-9ab1e44ee7e4",
				nama: "Az-Zalzalah",
				external_id: "99",
				jenis: "SURAH",
				label: "DAFTAR_TA",
			},
			{
				id: "b8798bd7-f7ef-4be2-b7eb-56f10d6a5e70",
				nama: "Al-'Aadiyaat",
				external_id: "100",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "fb53fcab-9cc7-4661-83a2-79b808cd99f7",
				nama: "Al-Qaari'ah",
				external_id: "101",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "3cdbb256-76a7-432e-a6f3-397e6c25d5b9",
				nama: "At-Takaatsur",
				external_id: "102",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "257c7c8c-14ad-4a5f-9c46-39b8bcbac2d8",
				nama: "Al-'Ashr",
				external_id: "103",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "4782b53f-fb55-4a9a-8339-1cc2a1d4e3f4",
				nama: "Al-Humazah",
				external_id: "104",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "d5f9e516-6bcb-421d-8a7e-fd758a8a7c29",
				nama: "Al-Fiil",
				external_id: "105",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "9db9200e-f0f8-4e61-9e7a-6af5e0158a9d",
				nama: "Quraisy",
				external_id: "106",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "be88c2fd-5d9d-4b3d-a7db-cbe69cfa5365",
				nama: "Al-Maa'un",
				external_id: "107",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "f67f64c1-891c-42e6-8e6c-8913d1c4b70d",
				nama: "Al-Kautsar",
				external_id: "108",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "8e2c3d51-6f94-41b9-b26e-0a6e84d5bff8",
				nama: "Al-Kaafirun",
				external_id: "109",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "cfb5e5ff-cdb6-4565-9bc7-2c54e8238b23",
				nama: "An-Nashr",
				external_id: "110",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "045d0933-2ad5-4e56-870e-5d62e9e46b6d",
				nama: "Al-Lahab",
				external_id: "111",
				jenis: "SURAH",
				label: "SEMPRO",
			},
			{
				id: "bb5e1b1d-0d27-42b4-86a1-2d5a76d5d3c8",
				nama: "Al-Ikhlash",
				external_id: "112",
				jenis: "SURAH",
				label: "SIDANG_TA",
			},
			{
				id: "d03c5ec7-10f4-4c74-86ba-cb5c6f5deef7",
				nama: "Al-Falaq",
				external_id: "113",
				jenis: "SURAH",
				label: "SIDANG_TA",
			},
			{
				id: "77298b67-58b5-4e65-b090-d4f5d6e7b6ec",
				nama: "An-Nas",
				external_id: "114",
				jenis: "SURAH",
				label: "SIDANG_TA",
			},
		],
		skipDuplicates: true,
	});

	console.log(
		"[RESULT]",
		result.count > 0
			? result
			: "Data was inserted previously, no new data inserted! 😇"
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
