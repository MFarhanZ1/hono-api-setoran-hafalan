
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DosenScalarFieldEnum = {
  nip: 'nip',
  nama: 'nama',
  email: 'email'
};

exports.Prisma.MahasiswaScalarFieldEnum = {
  nim: 'nim',
  nama: 'nama',
  email: 'email',
  nip: 'nip'
};

exports.Prisma.SetoranScalarFieldEnum = {
  id: 'id',
  tgl_setoran: 'tgl_setoran',
  tgl_validasi: 'tgl_validasi',
  nim: 'nim',
  nip: 'nip',
  id_komponen_setoran: 'id_komponen_setoran'
};

exports.Prisma.Komponen_setoranScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  external_id: 'external_id',
  jenis: 'jenis',
  label: 'label'
};

exports.Prisma.Log_setoran_hafalanScalarFieldEnum = {
  id: 'id',
  keterangan: 'keterangan',
  aksi: 'aksi',
  ip: 'ip',
  user_agent: 'user_agent',
  timestamp: 'timestamp',
  nim: 'nim',
  nip: 'nip'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.type_jenis_komponen_setoran = exports.$Enums.type_jenis_komponen_setoran = {
  SURAH: 'SURAH',
  DOA: 'DOA',
  BACAAN_SHOLAT: 'BACAAN_SHOLAT',
  HADIST: 'HADIST'
};

exports.type_label_komponen_setoran = exports.$Enums.type_label_komponen_setoran = {
  KP: 'KP',
  SEMKP: 'SEMKP',
  DAFTAR_TA: 'DAFTAR_TA',
  SEMPRO: 'SEMPRO',
  SIDANG_TA: 'SIDANG_TA'
};

exports.type_aksi_log_setoran_hafalan = exports.$Enums.type_aksi_log_setoran_hafalan = {
  VALIDASI: 'VALIDASI',
  BATALKAN: 'BATALKAN'
};

exports.Prisma.ModelName = {
  dosen: 'dosen',
  mahasiswa: 'mahasiswa',
  setoran: 'setoran',
  komponen_setoran: 'komponen_setoran',
  log_setoran_hafalan: 'log_setoran_hafalan'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Coding\\Projek\\API\\hono-api-setoran-hafalan\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Coding\\Projek\\API\\hono-api-setoran-hafalan\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:123321@localhost:5432/db_setoran_hafalan_v7?schema=public"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel dosen {\n  nip                 String                @id(map: \"pk_nip_dosen\") @db.VarChar(18)\n  nama                String                @db.VarChar(255)\n  email               String                @unique @db.VarChar(255)\n  mahasiswa           mahasiswa[]\n  setoran             setoran[]\n  log_setoran_hafalan log_setoran_hafalan[]\n}\n\nmodel mahasiswa {\n  nim                 String                @id(map: \"pk_nim_mahasiswa\") @db.VarChar(11)\n  nama                String                @db.VarChar(255)\n  email               String                @unique @db.VarChar(36)\n  nip                 String                @db.VarChar(18)\n  dosen               dosen                 @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: Cascade, map: \"fk_nip_mahasiswa\")\n  setoran             setoran[]\n  log_setoran_hafalan log_setoran_hafalan[]\n}\n\nmodel setoran {\n  id                  String           @id(map: \"pk_id_setoran\") @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  tgl_setoran         DateTime?        @default(now()) @db.Date\n  tgl_validasi        DateTime?        @default(now()) @db.Date\n  nim                 String           @db.VarChar(11)\n  nip                 String           @db.VarChar(18)\n  id_komponen_setoran String           @db.Uuid\n  mahasiswa           mahasiswa        @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: NoAction, map: \"fk_nim_setoran\")\n  dosen               dosen            @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: Cascade, map: \"fk_nip_setoran\")\n  komponen_setoran    komponen_setoran @relation(fields: [id_komponen_setoran], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_id_komponen_setoran\")\n\n  @@unique([nim, id_komponen_setoran])\n}\n\nmodel komponen_setoran {\n  id          String                       @id(map: \"pk_id_komponen_setoran\") @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  nama        String                       @db.VarChar(35)\n  external_id String?                      @db.VarChar(35)\n  jenis       type_jenis_komponen_setoran\n  label       type_label_komponen_setoran?\n  setoran     setoran[]\n}\n\nmodel log_setoran_hafalan {\n  id         Int                           @id(map: \"pk_id_log_setoran_hafalan\") @default(autoincrement()) @db.Integer\n  keterangan String?                       @db.Text\n  aksi       type_aksi_log_setoran_hafalan\n  ip         String?                       @db.VarChar(45)\n  user_agent String?                       @db.VarChar(255)\n  timestamp  DateTime                      @default(now()) @db.Timestamp(6)\n  nim        String                        @db.VarChar(11)\n  nip        String                        @db.VarChar(18)\n\n  mahasiswa mahasiswa @relation(fields: [nim], references: [nim], onDelete: NoAction, onUpdate: Cascade, map: \"fk_nim_log_setoran_hafalan\")\n  dosen     dosen     @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: Cascade, map: \"fk_nip_log_setoran_hafalan\")\n\n  @@map(\"log_setoran_hafalan\")\n}\n\nenum type_jenis_komponen_setoran {\n  SURAH\n  DOA\n  BACAAN_SHOLAT\n  HADIST\n}\n\nenum type_label_komponen_setoran {\n  KP\n  SEMKP\n  DAFTAR_TA\n  SEMPRO\n  SIDANG_TA\n}\n\nenum type_aksi_log_setoran_hafalan {\n  VALIDASI\n  BATALKAN\n}\n",
  "inlineSchemaHash": "7abc0e803680228661c40844d5b016f327b486c230165e035cc0ef3fd45aa21d",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"dosen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"dosenTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setoran\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"setoran\",\"nativeType\":null,\"relationName\":\"dosenTosetoran\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_setoran_hafalan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"log_setoran_hafalan\",\"nativeType\":null,\"relationName\":\"dosenTolog_setoran_hafalan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mahasiswa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"dosenTomahasiswa\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setoran\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"setoran\",\"nativeType\":null,\"relationName\":\"mahasiswaTosetoran\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_setoran_hafalan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"log_setoran_hafalan\",\"nativeType\":null,\"relationName\":\"log_setoran_hafalanTomahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"setoran\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_setoran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_validasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_komponen_setoran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"mahasiswaTosetoran\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"dosenTosetoran\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komponen_setoran\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"komponen_setoran\",\"nativeType\":null,\"relationName\":\"komponen_setoranTosetoran\",\"relationFromFields\":[\"id_komponen_setoran\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"nim\",\"id_komponen_setoran\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"nim\",\"id_komponen_setoran\"]}],\"isGenerated\":false},\"komponen_setoran\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"35\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"external_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"35\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"type_jenis_komponen_setoran\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"label\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"type_label_komponen_setoran\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setoran\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"setoran\",\"nativeType\":null,\"relationName\":\"komponen_setoranTosetoran\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"log_setoran_hafalan\":{\"dbName\":\"log_setoran_hafalan\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"Integer\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aksi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"type_aksi_log_setoran_hafalan\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"log_setoran_hafalanTomahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"dosenTolog_setoran_hafalan\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"type_jenis_komponen_setoran\":{\"values\":[{\"name\":\"SURAH\",\"dbName\":null},{\"name\":\"DOA\",\"dbName\":null},{\"name\":\"BACAAN_SHOLAT\",\"dbName\":null},{\"name\":\"HADIST\",\"dbName\":null}],\"dbName\":null},\"type_label_komponen_setoran\":{\"values\":[{\"name\":\"KP\",\"dbName\":null},{\"name\":\"SEMKP\",\"dbName\":null},{\"name\":\"DAFTAR_TA\",\"dbName\":null},{\"name\":\"SEMPRO\",\"dbName\":null},{\"name\":\"SIDANG_TA\",\"dbName\":null}],\"dbName\":null},\"type_aksi_log_setoran_hafalan\":{\"values\":[{\"name\":\"VALIDASI\",\"dbName\":null},{\"name\":\"BATALKAN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
