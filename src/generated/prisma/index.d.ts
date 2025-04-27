
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model dosen
 * 
 */
export type dosen = $Result.DefaultSelection<Prisma.$dosenPayload>
/**
 * Model mahasiswa
 * 
 */
export type mahasiswa = $Result.DefaultSelection<Prisma.$mahasiswaPayload>
/**
 * Model setoran
 * 
 */
export type setoran = $Result.DefaultSelection<Prisma.$setoranPayload>
/**
 * Model komponen_setoran
 * 
 */
export type komponen_setoran = $Result.DefaultSelection<Prisma.$komponen_setoranPayload>
/**
 * Model log_setoran_hafalan
 * 
 */
export type log_setoran_hafalan = $Result.DefaultSelection<Prisma.$log_setoran_hafalanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const type_jenis_komponen_setoran: {
  SURAH: 'SURAH',
  DOA: 'DOA',
  BACAAN_SHOLAT: 'BACAAN_SHOLAT',
  HADIST: 'HADIST'
};

export type type_jenis_komponen_setoran = (typeof type_jenis_komponen_setoran)[keyof typeof type_jenis_komponen_setoran]


export const type_label_komponen_setoran: {
  KP: 'KP',
  SEMKP: 'SEMKP',
  DAFTAR_TA: 'DAFTAR_TA',
  SEMPRO: 'SEMPRO',
  SIDANG_TA: 'SIDANG_TA'
};

export type type_label_komponen_setoran = (typeof type_label_komponen_setoran)[keyof typeof type_label_komponen_setoran]


export const type_aksi_log_setoran_hafalan: {
  VALIDASI: 'VALIDASI',
  BATALKAN: 'BATALKAN'
};

export type type_aksi_log_setoran_hafalan = (typeof type_aksi_log_setoran_hafalan)[keyof typeof type_aksi_log_setoran_hafalan]

}

export type type_jenis_komponen_setoran = $Enums.type_jenis_komponen_setoran

export const type_jenis_komponen_setoran: typeof $Enums.type_jenis_komponen_setoran

export type type_label_komponen_setoran = $Enums.type_label_komponen_setoran

export const type_label_komponen_setoran: typeof $Enums.type_label_komponen_setoran

export type type_aksi_log_setoran_hafalan = $Enums.type_aksi_log_setoran_hafalan

export const type_aksi_log_setoran_hafalan: typeof $Enums.type_aksi_log_setoran_hafalan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dosens
 * const dosens = await prisma.dosen.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dosens
   * const dosens = await prisma.dosen.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dosen`: Exposes CRUD operations for the **dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.dosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.mahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setoran`: Exposes CRUD operations for the **setoran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setorans
    * const setorans = await prisma.setoran.findMany()
    * ```
    */
  get setoran(): Prisma.setoranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.komponen_setoran`: Exposes CRUD operations for the **komponen_setoran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Komponen_setorans
    * const komponen_setorans = await prisma.komponen_setoran.findMany()
    * ```
    */
  get komponen_setoran(): Prisma.komponen_setoranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_setoran_hafalan`: Exposes CRUD operations for the **log_setoran_hafalan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_setoran_hafalans
    * const log_setoran_hafalans = await prisma.log_setoran_hafalan.findMany()
    * ```
    */
  get log_setoran_hafalan(): Prisma.log_setoran_hafalanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    dosen: 'dosen',
    mahasiswa: 'mahasiswa',
    setoran: 'setoran',
    komponen_setoran: 'komponen_setoran',
    log_setoran_hafalan: 'log_setoran_hafalan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dosen" | "mahasiswa" | "setoran" | "komponen_setoran" | "log_setoran_hafalan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dosen: {
        payload: Prisma.$dosenPayload<ExtArgs>
        fields: Prisma.dosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findFirst: {
            args: Prisma.dosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findMany: {
            args: Prisma.dosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          create: {
            args: Prisma.dosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          createMany: {
            args: Prisma.dosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dosenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          delete: {
            args: Prisma.dosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          update: {
            args: Prisma.dosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          deleteMany: {
            args: Prisma.dosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dosenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          upsert: {
            args: Prisma.dosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.dosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.dosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      mahasiswa: {
        payload: Prisma.$mahasiswaPayload<ExtArgs>
        fields: Prisma.mahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findFirst: {
            args: Prisma.mahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findMany: {
            args: Prisma.mahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          create: {
            args: Prisma.mahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          createMany: {
            args: Prisma.mahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          delete: {
            args: Prisma.mahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          update: {
            args: Prisma.mahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.mahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.mahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.mahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      setoran: {
        payload: Prisma.$setoranPayload<ExtArgs>
        fields: Prisma.setoranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setoranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setoranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          findFirst: {
            args: Prisma.setoranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setoranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          findMany: {
            args: Prisma.setoranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>[]
          }
          create: {
            args: Prisma.setoranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          createMany: {
            args: Prisma.setoranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.setoranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>[]
          }
          delete: {
            args: Prisma.setoranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          update: {
            args: Prisma.setoranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          deleteMany: {
            args: Prisma.setoranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setoranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.setoranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>[]
          }
          upsert: {
            args: Prisma.setoranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoranPayload>
          }
          aggregate: {
            args: Prisma.SetoranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetoran>
          }
          groupBy: {
            args: Prisma.setoranGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetoranGroupByOutputType>[]
          }
          count: {
            args: Prisma.setoranCountArgs<ExtArgs>
            result: $Utils.Optional<SetoranCountAggregateOutputType> | number
          }
        }
      }
      komponen_setoran: {
        payload: Prisma.$komponen_setoranPayload<ExtArgs>
        fields: Prisma.komponen_setoranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.komponen_setoranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.komponen_setoranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          findFirst: {
            args: Prisma.komponen_setoranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.komponen_setoranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          findMany: {
            args: Prisma.komponen_setoranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>[]
          }
          create: {
            args: Prisma.komponen_setoranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          createMany: {
            args: Prisma.komponen_setoranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.komponen_setoranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>[]
          }
          delete: {
            args: Prisma.komponen_setoranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          update: {
            args: Prisma.komponen_setoranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          deleteMany: {
            args: Prisma.komponen_setoranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.komponen_setoranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.komponen_setoranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>[]
          }
          upsert: {
            args: Prisma.komponen_setoranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$komponen_setoranPayload>
          }
          aggregate: {
            args: Prisma.Komponen_setoranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKomponen_setoran>
          }
          groupBy: {
            args: Prisma.komponen_setoranGroupByArgs<ExtArgs>
            result: $Utils.Optional<Komponen_setoranGroupByOutputType>[]
          }
          count: {
            args: Prisma.komponen_setoranCountArgs<ExtArgs>
            result: $Utils.Optional<Komponen_setoranCountAggregateOutputType> | number
          }
        }
      }
      log_setoran_hafalan: {
        payload: Prisma.$log_setoran_hafalanPayload<ExtArgs>
        fields: Prisma.log_setoran_hafalanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_setoran_hafalanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_setoran_hafalanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          findFirst: {
            args: Prisma.log_setoran_hafalanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_setoran_hafalanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          findMany: {
            args: Prisma.log_setoran_hafalanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>[]
          }
          create: {
            args: Prisma.log_setoran_hafalanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          createMany: {
            args: Prisma.log_setoran_hafalanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.log_setoran_hafalanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>[]
          }
          delete: {
            args: Prisma.log_setoran_hafalanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          update: {
            args: Prisma.log_setoran_hafalanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          deleteMany: {
            args: Prisma.log_setoran_hafalanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_setoran_hafalanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.log_setoran_hafalanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>[]
          }
          upsert: {
            args: Prisma.log_setoran_hafalanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_setoran_hafalanPayload>
          }
          aggregate: {
            args: Prisma.Log_setoran_hafalanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_setoran_hafalan>
          }
          groupBy: {
            args: Prisma.log_setoran_hafalanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_setoran_hafalanGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_setoran_hafalanCountArgs<ExtArgs>
            result: $Utils.Optional<Log_setoran_hafalanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dosen?: dosenOmit
    mahasiswa?: mahasiswaOmit
    setoran?: setoranOmit
    komponen_setoran?: komponen_setoranOmit
    log_setoran_hafalan?: log_setoran_hafalanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    mahasiswa: number
    setoran: number
    log_setoran_hafalan: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | DosenCountOutputTypeCountMahasiswaArgs
    setoran?: boolean | DosenCountOutputTypeCountSetoranArgs
    log_setoran_hafalan?: boolean | DosenCountOutputTypeCountLog_setoran_hafalanArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountSetoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setoranWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountLog_setoran_hafalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_setoran_hafalanWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    setoran: number
    log_setoran_hafalan: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setoran?: boolean | MahasiswaCountOutputTypeCountSetoranArgs
    log_setoran_hafalan?: boolean | MahasiswaCountOutputTypeCountLog_setoran_hafalanArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountSetoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setoranWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountLog_setoran_hafalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_setoran_hafalanWhereInput
  }


  /**
   * Count Type Komponen_setoranCountOutputType
   */

  export type Komponen_setoranCountOutputType = {
    setoran: number
  }

  export type Komponen_setoranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setoran?: boolean | Komponen_setoranCountOutputTypeCountSetoranArgs
  }

  // Custom InputTypes
  /**
   * Komponen_setoranCountOutputType without action
   */
  export type Komponen_setoranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komponen_setoranCountOutputType
     */
    select?: Komponen_setoranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Komponen_setoranCountOutputType without action
   */
  export type Komponen_setoranCountOutputTypeCountSetoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setoranWhereInput
  }


  /**
   * Models
   */

  /**
   * Model dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
  }

  export type DosenMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
  }

  export type DosenCountAggregateOutputType = {
    nip: number
    nama: number
    email: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
  }

  export type DosenMaxAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
  }

  export type DosenCountAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosen to aggregate.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type dosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dosenWhereInput
    orderBy?: dosenOrderByWithAggregationInput | dosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: dosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    nip: string
    nama: string
    email: string
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends dosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type dosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    mahasiswa?: boolean | dosen$mahasiswaArgs<ExtArgs>
    setoran?: boolean | dosen$setoranArgs<ExtArgs>
    log_setoran_hafalan?: boolean | dosen$log_setoran_hafalanArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectScalar = {
    nip?: boolean
    nama?: boolean
    email?: boolean
  }

  export type dosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "email", ExtArgs["result"]["dosen"]>
  export type dosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | dosen$mahasiswaArgs<ExtArgs>
    setoran?: boolean | dosen$setoranArgs<ExtArgs>
    log_setoran_hafalan?: boolean | dosen$log_setoran_hafalanArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dosenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dosenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dosen"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>[]
      setoran: Prisma.$setoranPayload<ExtArgs>[]
      log_setoran_hafalan: Prisma.$log_setoran_hafalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      email: string
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type dosenGetPayload<S extends boolean | null | undefined | dosenDefaultArgs> = $Result.GetResult<Prisma.$dosenPayload, S>

  type dosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface dosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dosen'], meta: { name: 'dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {dosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dosenFindUniqueArgs>(args: SelectSubset<T, dosenFindUniqueArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dosenFindUniqueOrThrowArgs>(args: SelectSubset<T, dosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dosenFindFirstArgs>(args?: SelectSubset<T, dosenFindFirstArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dosenFindFirstOrThrowArgs>(args?: SelectSubset<T, dosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dosenWithNipOnly = await prisma.dosen.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends dosenFindManyArgs>(args?: SelectSubset<T, dosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {dosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends dosenCreateArgs>(args: SelectSubset<T, dosenCreateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {dosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dosenCreateManyArgs>(args?: SelectSubset<T, dosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dosens and returns the data saved in the database.
     * @param {dosenCreateManyAndReturnArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.createManyAndReturn({
     *   select: { nip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dosenCreateManyAndReturnArgs>(args?: SelectSubset<T, dosenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dosen.
     * @param {dosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends dosenDeleteArgs>(args: SelectSubset<T, dosenDeleteArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {dosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dosenUpdateArgs>(args: SelectSubset<T, dosenUpdateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {dosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dosenDeleteManyArgs>(args?: SelectSubset<T, dosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dosenUpdateManyArgs>(args: SelectSubset<T, dosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens and returns the data updated in the database.
     * @param {dosenUpdateManyAndReturnArgs} args - Arguments to update many Dosens.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.updateManyAndReturn({
     *   select: { nip: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dosenUpdateManyAndReturnArgs>(args: SelectSubset<T, dosenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dosen.
     * @param {dosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends dosenUpsertArgs>(args: SelectSubset<T, dosenUpsertArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends dosenCountArgs>(
      args?: Subset<T, dosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dosenGroupByArgs['orderBy'] }
        : { orderBy?: dosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dosen model
   */
  readonly fields: dosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends dosen$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, dosen$mahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    setoran<T extends dosen$setoranArgs<ExtArgs> = {}>(args?: Subset<T, dosen$setoranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log_setoran_hafalan<T extends dosen$log_setoran_hafalanArgs<ExtArgs> = {}>(args?: Subset<T, dosen$log_setoran_hafalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dosen model
   */
  interface dosenFieldRefs {
    readonly nip: FieldRef<"dosen", 'String'>
    readonly nama: FieldRef<"dosen", 'String'>
    readonly email: FieldRef<"dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dosen findUnique
   */
  export type dosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findUniqueOrThrow
   */
  export type dosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findFirst
   */
  export type dosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findFirstOrThrow
   */
  export type dosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findMany
   */
  export type dosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosens to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen create
   */
  export type dosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to create a dosen.
     */
    data: XOR<dosenCreateInput, dosenUncheckedCreateInput>
  }

  /**
   * dosen createMany
   */
  export type dosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen createManyAndReturn
   */
  export type dosenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen update
   */
  export type dosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to update a dosen.
     */
    data: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
    /**
     * Choose, which dosen to update.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen updateMany
   */
  export type dosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen updateManyAndReturn
   */
  export type dosenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen upsert
   */
  export type dosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The filter to search for the dosen to update in case it exists.
     */
    where: dosenWhereUniqueInput
    /**
     * In case the dosen found by the `where` argument doesn't exist, create a new dosen with this data.
     */
    create: XOR<dosenCreateInput, dosenUncheckedCreateInput>
    /**
     * In case the dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
  }

  /**
   * dosen delete
   */
  export type dosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter which dosen to delete.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen deleteMany
   */
  export type dosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosens to delete
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to delete.
     */
    limit?: number
  }

  /**
   * dosen.mahasiswa
   */
  export type dosen$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    cursor?: mahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * dosen.setoran
   */
  export type dosen$setoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    where?: setoranWhereInput
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    cursor?: setoranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * dosen.log_setoran_hafalan
   */
  export type dosen$log_setoran_hafalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    where?: log_setoran_hafalanWhereInput
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    cursor?: log_setoran_hafalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_setoran_hafalanScalarFieldEnum | Log_setoran_hafalanScalarFieldEnum[]
  }

  /**
   * dosen without action
   */
  export type dosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
  }


  /**
   * Model mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
    nip: string | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
    nip: string | null
  }

  export type MahasiswaCountAggregateOutputType = {
    nim: number
    nama: number
    email: number
    nip: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
    nip?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
    nip?: true
  }

  export type MahasiswaCountAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
    nip?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswa to aggregate.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type mahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithAggregationInput | mahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    nim: string
    nama: string
    email: string
    nip: string
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends mahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type mahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
    nip?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    setoran?: boolean | mahasiswa$setoranArgs<ExtArgs>
    log_setoran_hafalan?: boolean | mahasiswa$log_setoran_hafalanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
    nip?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
    nip?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectScalar = {
    nim?: boolean
    nama?: boolean
    email?: boolean
    nip?: boolean
  }

  export type mahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nim" | "nama" | "email" | "nip", ExtArgs["result"]["mahasiswa"]>
  export type mahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    setoran?: boolean | mahasiswa$setoranArgs<ExtArgs>
    log_setoran_hafalan?: boolean | mahasiswa$log_setoran_hafalanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }
  export type mahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }

  export type $mahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mahasiswa"
    objects: {
      dosen: Prisma.$dosenPayload<ExtArgs>
      setoran: Prisma.$setoranPayload<ExtArgs>[]
      log_setoran_hafalan: Prisma.$log_setoran_hafalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      nama: string
      email: string
      nip: string
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type mahasiswaGetPayload<S extends boolean | null | undefined | mahasiswaDefaultArgs> = $Result.GetResult<Prisma.$mahasiswaPayload, S>

  type mahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface mahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mahasiswa'], meta: { name: 'mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {mahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mahasiswaFindUniqueArgs>(args: SelectSubset<T, mahasiswaFindUniqueArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, mahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mahasiswaFindFirstArgs>(args?: SelectSubset<T, mahasiswaFindFirstArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, mahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.findMany({ select: { nim: true } })
     * 
     */
    findMany<T extends mahasiswaFindManyArgs>(args?: SelectSubset<T, mahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {mahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends mahasiswaCreateArgs>(args: SelectSubset<T, mahasiswaCreateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {mahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mahasiswaCreateManyArgs>(args?: SelectSubset<T, mahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {mahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { nim: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, mahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {mahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends mahasiswaDeleteArgs>(args: SelectSubset<T, mahasiswaDeleteArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {mahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mahasiswaUpdateArgs>(args: SelectSubset<T, mahasiswaUpdateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {mahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mahasiswaDeleteManyArgs>(args?: SelectSubset<T, mahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mahasiswaUpdateManyArgs>(args: SelectSubset<T, mahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {mahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.updateManyAndReturn({
     *   select: { nim: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, mahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {mahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends mahasiswaUpsertArgs>(args: SelectSubset<T, mahasiswaUpsertArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends mahasiswaCountArgs>(
      args?: Subset<T, mahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: mahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mahasiswa model
   */
  readonly fields: mahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setoran<T extends mahasiswa$setoranArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$setoranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log_setoran_hafalan<T extends mahasiswa$log_setoran_hafalanArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$log_setoran_hafalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mahasiswa model
   */
  interface mahasiswaFieldRefs {
    readonly nim: FieldRef<"mahasiswa", 'String'>
    readonly nama: FieldRef<"mahasiswa", 'String'>
    readonly email: FieldRef<"mahasiswa", 'String'>
    readonly nip: FieldRef<"mahasiswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mahasiswa findUnique
   */
  export type mahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findUniqueOrThrow
   */
  export type mahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findFirst
   */
  export type mahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findFirstOrThrow
   */
  export type mahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findMany
   */
  export type mahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswas to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa create
   */
  export type mahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a mahasiswa.
     */
    data: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
  }

  /**
   * mahasiswa createMany
   */
  export type mahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mahasiswa createManyAndReturn
   */
  export type mahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mahasiswa update
   */
  export type mahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a mahasiswa.
     */
    data: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which mahasiswa to update.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa updateMany
   */
  export type mahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
  }

  /**
   * mahasiswa updateManyAndReturn
   */
  export type mahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mahasiswa upsert
   */
  export type mahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the mahasiswa to update in case it exists.
     */
    where: mahasiswaWhereUniqueInput
    /**
     * In case the mahasiswa found by the `where` argument doesn't exist, create a new mahasiswa with this data.
     */
    create: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
    /**
     * In case the mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
  }

  /**
   * mahasiswa delete
   */
  export type mahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter which mahasiswa to delete.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa deleteMany
   */
  export type mahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswas to delete
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * mahasiswa.setoran
   */
  export type mahasiswa$setoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    where?: setoranWhereInput
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    cursor?: setoranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * mahasiswa.log_setoran_hafalan
   */
  export type mahasiswa$log_setoran_hafalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    where?: log_setoran_hafalanWhereInput
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    cursor?: log_setoran_hafalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_setoran_hafalanScalarFieldEnum | Log_setoran_hafalanScalarFieldEnum[]
  }

  /**
   * mahasiswa without action
   */
  export type mahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model setoran
   */

  export type AggregateSetoran = {
    _count: SetoranCountAggregateOutputType | null
    _min: SetoranMinAggregateOutputType | null
    _max: SetoranMaxAggregateOutputType | null
  }

  export type SetoranMinAggregateOutputType = {
    id: string | null
    tgl_setoran: Date | null
    tgl_validasi: Date | null
    nim: string | null
    nip: string | null
    id_komponen_setoran: string | null
  }

  export type SetoranMaxAggregateOutputType = {
    id: string | null
    tgl_setoran: Date | null
    tgl_validasi: Date | null
    nim: string | null
    nip: string | null
    id_komponen_setoran: string | null
  }

  export type SetoranCountAggregateOutputType = {
    id: number
    tgl_setoran: number
    tgl_validasi: number
    nim: number
    nip: number
    id_komponen_setoran: number
    _all: number
  }


  export type SetoranMinAggregateInputType = {
    id?: true
    tgl_setoran?: true
    tgl_validasi?: true
    nim?: true
    nip?: true
    id_komponen_setoran?: true
  }

  export type SetoranMaxAggregateInputType = {
    id?: true
    tgl_setoran?: true
    tgl_validasi?: true
    nim?: true
    nip?: true
    id_komponen_setoran?: true
  }

  export type SetoranCountAggregateInputType = {
    id?: true
    tgl_setoran?: true
    tgl_validasi?: true
    nim?: true
    nip?: true
    id_komponen_setoran?: true
    _all?: true
  }

  export type SetoranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setoran to aggregate.
     */
    where?: setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setorans to fetch.
     */
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned setorans
    **/
    _count?: true | SetoranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetoranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetoranMaxAggregateInputType
  }

  export type GetSetoranAggregateType<T extends SetoranAggregateArgs> = {
        [P in keyof T & keyof AggregateSetoran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetoran[P]>
      : GetScalarType<T[P], AggregateSetoran[P]>
  }




  export type setoranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setoranWhereInput
    orderBy?: setoranOrderByWithAggregationInput | setoranOrderByWithAggregationInput[]
    by: SetoranScalarFieldEnum[] | SetoranScalarFieldEnum
    having?: setoranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetoranCountAggregateInputType | true
    _min?: SetoranMinAggregateInputType
    _max?: SetoranMaxAggregateInputType
  }

  export type SetoranGroupByOutputType = {
    id: string
    tgl_setoran: Date | null
    tgl_validasi: Date | null
    nim: string
    nip: string
    id_komponen_setoran: string
    _count: SetoranCountAggregateOutputType | null
    _min: SetoranMinAggregateOutputType | null
    _max: SetoranMaxAggregateOutputType | null
  }

  type GetSetoranGroupByPayload<T extends setoranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetoranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetoranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetoranGroupByOutputType[P]>
            : GetScalarType<T[P], SetoranGroupByOutputType[P]>
        }
      >
    >


  export type setoranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tgl_setoran?: boolean
    tgl_validasi?: boolean
    nim?: boolean
    nip?: boolean
    id_komponen_setoran?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setoran"]>

  export type setoranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tgl_setoran?: boolean
    tgl_validasi?: boolean
    nim?: boolean
    nip?: boolean
    id_komponen_setoran?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setoran"]>

  export type setoranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tgl_setoran?: boolean
    tgl_validasi?: boolean
    nim?: boolean
    nip?: boolean
    id_komponen_setoran?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setoran"]>

  export type setoranSelectScalar = {
    id?: boolean
    tgl_setoran?: boolean
    tgl_validasi?: boolean
    nim?: boolean
    nip?: boolean
    id_komponen_setoran?: boolean
  }

  export type setoranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tgl_setoran" | "tgl_validasi" | "nim" | "nip" | "id_komponen_setoran", ExtArgs["result"]["setoran"]>
  export type setoranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }
  export type setoranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }
  export type setoranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    komponen_setoran?: boolean | komponen_setoranDefaultArgs<ExtArgs>
  }

  export type $setoranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setoran"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs>
      komponen_setoran: Prisma.$komponen_setoranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tgl_setoran: Date | null
      tgl_validasi: Date | null
      nim: string
      nip: string
      id_komponen_setoran: string
    }, ExtArgs["result"]["setoran"]>
    composites: {}
  }

  type setoranGetPayload<S extends boolean | null | undefined | setoranDefaultArgs> = $Result.GetResult<Prisma.$setoranPayload, S>

  type setoranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<setoranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetoranCountAggregateInputType | true
    }

  export interface setoranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setoran'], meta: { name: 'setoran' } }
    /**
     * Find zero or one Setoran that matches the filter.
     * @param {setoranFindUniqueArgs} args - Arguments to find a Setoran
     * @example
     * // Get one Setoran
     * const setoran = await prisma.setoran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setoranFindUniqueArgs>(args: SelectSubset<T, setoranFindUniqueArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setoran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {setoranFindUniqueOrThrowArgs} args - Arguments to find a Setoran
     * @example
     * // Get one Setoran
     * const setoran = await prisma.setoran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setoranFindUniqueOrThrowArgs>(args: SelectSubset<T, setoranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setoran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranFindFirstArgs} args - Arguments to find a Setoran
     * @example
     * // Get one Setoran
     * const setoran = await prisma.setoran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setoranFindFirstArgs>(args?: SelectSubset<T, setoranFindFirstArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setoran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranFindFirstOrThrowArgs} args - Arguments to find a Setoran
     * @example
     * // Get one Setoran
     * const setoran = await prisma.setoran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setoranFindFirstOrThrowArgs>(args?: SelectSubset<T, setoranFindFirstOrThrowArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setorans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setorans
     * const setorans = await prisma.setoran.findMany()
     * 
     * // Get first 10 Setorans
     * const setorans = await prisma.setoran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setoranWithIdOnly = await prisma.setoran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends setoranFindManyArgs>(args?: SelectSubset<T, setoranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setoran.
     * @param {setoranCreateArgs} args - Arguments to create a Setoran.
     * @example
     * // Create one Setoran
     * const Setoran = await prisma.setoran.create({
     *   data: {
     *     // ... data to create a Setoran
     *   }
     * })
     * 
     */
    create<T extends setoranCreateArgs>(args: SelectSubset<T, setoranCreateArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setorans.
     * @param {setoranCreateManyArgs} args - Arguments to create many Setorans.
     * @example
     * // Create many Setorans
     * const setoran = await prisma.setoran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setoranCreateManyArgs>(args?: SelectSubset<T, setoranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Setorans and returns the data saved in the database.
     * @param {setoranCreateManyAndReturnArgs} args - Arguments to create many Setorans.
     * @example
     * // Create many Setorans
     * const setoran = await prisma.setoran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Setorans and only return the `id`
     * const setoranWithIdOnly = await prisma.setoran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends setoranCreateManyAndReturnArgs>(args?: SelectSubset<T, setoranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setoran.
     * @param {setoranDeleteArgs} args - Arguments to delete one Setoran.
     * @example
     * // Delete one Setoran
     * const Setoran = await prisma.setoran.delete({
     *   where: {
     *     // ... filter to delete one Setoran
     *   }
     * })
     * 
     */
    delete<T extends setoranDeleteArgs>(args: SelectSubset<T, setoranDeleteArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setoran.
     * @param {setoranUpdateArgs} args - Arguments to update one Setoran.
     * @example
     * // Update one Setoran
     * const setoran = await prisma.setoran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setoranUpdateArgs>(args: SelectSubset<T, setoranUpdateArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setorans.
     * @param {setoranDeleteManyArgs} args - Arguments to filter Setorans to delete.
     * @example
     * // Delete a few Setorans
     * const { count } = await prisma.setoran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setoranDeleteManyArgs>(args?: SelectSubset<T, setoranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setorans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setorans
     * const setoran = await prisma.setoran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setoranUpdateManyArgs>(args: SelectSubset<T, setoranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setorans and returns the data updated in the database.
     * @param {setoranUpdateManyAndReturnArgs} args - Arguments to update many Setorans.
     * @example
     * // Update many Setorans
     * const setoran = await prisma.setoran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Setorans and only return the `id`
     * const setoranWithIdOnly = await prisma.setoran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends setoranUpdateManyAndReturnArgs>(args: SelectSubset<T, setoranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setoran.
     * @param {setoranUpsertArgs} args - Arguments to update or create a Setoran.
     * @example
     * // Update or create a Setoran
     * const setoran = await prisma.setoran.upsert({
     *   create: {
     *     // ... data to create a Setoran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setoran we want to update
     *   }
     * })
     */
    upsert<T extends setoranUpsertArgs>(args: SelectSubset<T, setoranUpsertArgs<ExtArgs>>): Prisma__setoranClient<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setorans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranCountArgs} args - Arguments to filter Setorans to count.
     * @example
     * // Count the number of Setorans
     * const count = await prisma.setoran.count({
     *   where: {
     *     // ... the filter for the Setorans we want to count
     *   }
     * })
    **/
    count<T extends setoranCountArgs>(
      args?: Subset<T, setoranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetoranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setoran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetoranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetoranAggregateArgs>(args: Subset<T, SetoranAggregateArgs>): Prisma.PrismaPromise<GetSetoranAggregateType<T>>

    /**
     * Group by Setoran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends setoranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setoranGroupByArgs['orderBy'] }
        : { orderBy?: setoranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, setoranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetoranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setoran model
   */
  readonly fields: setoranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setoran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setoranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    komponen_setoran<T extends komponen_setoranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, komponen_setoranDefaultArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setoran model
   */
  interface setoranFieldRefs {
    readonly id: FieldRef<"setoran", 'String'>
    readonly tgl_setoran: FieldRef<"setoran", 'DateTime'>
    readonly tgl_validasi: FieldRef<"setoran", 'DateTime'>
    readonly nim: FieldRef<"setoran", 'String'>
    readonly nip: FieldRef<"setoran", 'String'>
    readonly id_komponen_setoran: FieldRef<"setoran", 'String'>
  }
    

  // Custom InputTypes
  /**
   * setoran findUnique
   */
  export type setoranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter, which setoran to fetch.
     */
    where: setoranWhereUniqueInput
  }

  /**
   * setoran findUniqueOrThrow
   */
  export type setoranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter, which setoran to fetch.
     */
    where: setoranWhereUniqueInput
  }

  /**
   * setoran findFirst
   */
  export type setoranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter, which setoran to fetch.
     */
    where?: setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setorans to fetch.
     */
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setorans.
     */
    cursor?: setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setorans.
     */
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * setoran findFirstOrThrow
   */
  export type setoranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter, which setoran to fetch.
     */
    where?: setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setorans to fetch.
     */
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setorans.
     */
    cursor?: setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setorans.
     */
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * setoran findMany
   */
  export type setoranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter, which setorans to fetch.
     */
    where?: setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setorans to fetch.
     */
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing setorans.
     */
    cursor?: setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setorans.
     */
    skip?: number
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * setoran create
   */
  export type setoranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * The data needed to create a setoran.
     */
    data: XOR<setoranCreateInput, setoranUncheckedCreateInput>
  }

  /**
   * setoran createMany
   */
  export type setoranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many setorans.
     */
    data: setoranCreateManyInput | setoranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setoran createManyAndReturn
   */
  export type setoranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * The data used to create many setorans.
     */
    data: setoranCreateManyInput | setoranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * setoran update
   */
  export type setoranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * The data needed to update a setoran.
     */
    data: XOR<setoranUpdateInput, setoranUncheckedUpdateInput>
    /**
     * Choose, which setoran to update.
     */
    where: setoranWhereUniqueInput
  }

  /**
   * setoran updateMany
   */
  export type setoranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update setorans.
     */
    data: XOR<setoranUpdateManyMutationInput, setoranUncheckedUpdateManyInput>
    /**
     * Filter which setorans to update
     */
    where?: setoranWhereInput
    /**
     * Limit how many setorans to update.
     */
    limit?: number
  }

  /**
   * setoran updateManyAndReturn
   */
  export type setoranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * The data used to update setorans.
     */
    data: XOR<setoranUpdateManyMutationInput, setoranUncheckedUpdateManyInput>
    /**
     * Filter which setorans to update
     */
    where?: setoranWhereInput
    /**
     * Limit how many setorans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * setoran upsert
   */
  export type setoranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * The filter to search for the setoran to update in case it exists.
     */
    where: setoranWhereUniqueInput
    /**
     * In case the setoran found by the `where` argument doesn't exist, create a new setoran with this data.
     */
    create: XOR<setoranCreateInput, setoranUncheckedCreateInput>
    /**
     * In case the setoran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setoranUpdateInput, setoranUncheckedUpdateInput>
  }

  /**
   * setoran delete
   */
  export type setoranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    /**
     * Filter which setoran to delete.
     */
    where: setoranWhereUniqueInput
  }

  /**
   * setoran deleteMany
   */
  export type setoranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setorans to delete
     */
    where?: setoranWhereInput
    /**
     * Limit how many setorans to delete.
     */
    limit?: number
  }

  /**
   * setoran without action
   */
  export type setoranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
  }


  /**
   * Model komponen_setoran
   */

  export type AggregateKomponen_setoran = {
    _count: Komponen_setoranCountAggregateOutputType | null
    _min: Komponen_setoranMinAggregateOutputType | null
    _max: Komponen_setoranMaxAggregateOutputType | null
  }

  export type Komponen_setoranMinAggregateOutputType = {
    id: string | null
    nama: string | null
    external_id: string | null
    jenis: $Enums.type_jenis_komponen_setoran | null
    label: $Enums.type_label_komponen_setoran | null
  }

  export type Komponen_setoranMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    external_id: string | null
    jenis: $Enums.type_jenis_komponen_setoran | null
    label: $Enums.type_label_komponen_setoran | null
  }

  export type Komponen_setoranCountAggregateOutputType = {
    id: number
    nama: number
    external_id: number
    jenis: number
    label: number
    _all: number
  }


  export type Komponen_setoranMinAggregateInputType = {
    id?: true
    nama?: true
    external_id?: true
    jenis?: true
    label?: true
  }

  export type Komponen_setoranMaxAggregateInputType = {
    id?: true
    nama?: true
    external_id?: true
    jenis?: true
    label?: true
  }

  export type Komponen_setoranCountAggregateInputType = {
    id?: true
    nama?: true
    external_id?: true
    jenis?: true
    label?: true
    _all?: true
  }

  export type Komponen_setoranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which komponen_setoran to aggregate.
     */
    where?: komponen_setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of komponen_setorans to fetch.
     */
    orderBy?: komponen_setoranOrderByWithRelationInput | komponen_setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: komponen_setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` komponen_setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` komponen_setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned komponen_setorans
    **/
    _count?: true | Komponen_setoranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Komponen_setoranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Komponen_setoranMaxAggregateInputType
  }

  export type GetKomponen_setoranAggregateType<T extends Komponen_setoranAggregateArgs> = {
        [P in keyof T & keyof AggregateKomponen_setoran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKomponen_setoran[P]>
      : GetScalarType<T[P], AggregateKomponen_setoran[P]>
  }




  export type komponen_setoranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: komponen_setoranWhereInput
    orderBy?: komponen_setoranOrderByWithAggregationInput | komponen_setoranOrderByWithAggregationInput[]
    by: Komponen_setoranScalarFieldEnum[] | Komponen_setoranScalarFieldEnum
    having?: komponen_setoranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Komponen_setoranCountAggregateInputType | true
    _min?: Komponen_setoranMinAggregateInputType
    _max?: Komponen_setoranMaxAggregateInputType
  }

  export type Komponen_setoranGroupByOutputType = {
    id: string
    nama: string
    external_id: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label: $Enums.type_label_komponen_setoran | null
    _count: Komponen_setoranCountAggregateOutputType | null
    _min: Komponen_setoranMinAggregateOutputType | null
    _max: Komponen_setoranMaxAggregateOutputType | null
  }

  type GetKomponen_setoranGroupByPayload<T extends komponen_setoranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Komponen_setoranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Komponen_setoranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Komponen_setoranGroupByOutputType[P]>
            : GetScalarType<T[P], Komponen_setoranGroupByOutputType[P]>
        }
      >
    >


  export type komponen_setoranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    external_id?: boolean
    jenis?: boolean
    label?: boolean
    setoran?: boolean | komponen_setoran$setoranArgs<ExtArgs>
    _count?: boolean | Komponen_setoranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komponen_setoran"]>

  export type komponen_setoranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    external_id?: boolean
    jenis?: boolean
    label?: boolean
  }, ExtArgs["result"]["komponen_setoran"]>

  export type komponen_setoranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    external_id?: boolean
    jenis?: boolean
    label?: boolean
  }, ExtArgs["result"]["komponen_setoran"]>

  export type komponen_setoranSelectScalar = {
    id?: boolean
    nama?: boolean
    external_id?: boolean
    jenis?: boolean
    label?: boolean
  }

  export type komponen_setoranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "external_id" | "jenis" | "label", ExtArgs["result"]["komponen_setoran"]>
  export type komponen_setoranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setoran?: boolean | komponen_setoran$setoranArgs<ExtArgs>
    _count?: boolean | Komponen_setoranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type komponen_setoranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type komponen_setoranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $komponen_setoranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "komponen_setoran"
    objects: {
      setoran: Prisma.$setoranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      external_id: string | null
      jenis: $Enums.type_jenis_komponen_setoran
      label: $Enums.type_label_komponen_setoran | null
    }, ExtArgs["result"]["komponen_setoran"]>
    composites: {}
  }

  type komponen_setoranGetPayload<S extends boolean | null | undefined | komponen_setoranDefaultArgs> = $Result.GetResult<Prisma.$komponen_setoranPayload, S>

  type komponen_setoranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<komponen_setoranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Komponen_setoranCountAggregateInputType | true
    }

  export interface komponen_setoranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['komponen_setoran'], meta: { name: 'komponen_setoran' } }
    /**
     * Find zero or one Komponen_setoran that matches the filter.
     * @param {komponen_setoranFindUniqueArgs} args - Arguments to find a Komponen_setoran
     * @example
     * // Get one Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends komponen_setoranFindUniqueArgs>(args: SelectSubset<T, komponen_setoranFindUniqueArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Komponen_setoran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {komponen_setoranFindUniqueOrThrowArgs} args - Arguments to find a Komponen_setoran
     * @example
     * // Get one Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends komponen_setoranFindUniqueOrThrowArgs>(args: SelectSubset<T, komponen_setoranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komponen_setoran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranFindFirstArgs} args - Arguments to find a Komponen_setoran
     * @example
     * // Get one Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends komponen_setoranFindFirstArgs>(args?: SelectSubset<T, komponen_setoranFindFirstArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komponen_setoran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranFindFirstOrThrowArgs} args - Arguments to find a Komponen_setoran
     * @example
     * // Get one Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends komponen_setoranFindFirstOrThrowArgs>(args?: SelectSubset<T, komponen_setoranFindFirstOrThrowArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Komponen_setorans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Komponen_setorans
     * const komponen_setorans = await prisma.komponen_setoran.findMany()
     * 
     * // Get first 10 Komponen_setorans
     * const komponen_setorans = await prisma.komponen_setoran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const komponen_setoranWithIdOnly = await prisma.komponen_setoran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends komponen_setoranFindManyArgs>(args?: SelectSubset<T, komponen_setoranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Komponen_setoran.
     * @param {komponen_setoranCreateArgs} args - Arguments to create a Komponen_setoran.
     * @example
     * // Create one Komponen_setoran
     * const Komponen_setoran = await prisma.komponen_setoran.create({
     *   data: {
     *     // ... data to create a Komponen_setoran
     *   }
     * })
     * 
     */
    create<T extends komponen_setoranCreateArgs>(args: SelectSubset<T, komponen_setoranCreateArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Komponen_setorans.
     * @param {komponen_setoranCreateManyArgs} args - Arguments to create many Komponen_setorans.
     * @example
     * // Create many Komponen_setorans
     * const komponen_setoran = await prisma.komponen_setoran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends komponen_setoranCreateManyArgs>(args?: SelectSubset<T, komponen_setoranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Komponen_setorans and returns the data saved in the database.
     * @param {komponen_setoranCreateManyAndReturnArgs} args - Arguments to create many Komponen_setorans.
     * @example
     * // Create many Komponen_setorans
     * const komponen_setoran = await prisma.komponen_setoran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Komponen_setorans and only return the `id`
     * const komponen_setoranWithIdOnly = await prisma.komponen_setoran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends komponen_setoranCreateManyAndReturnArgs>(args?: SelectSubset<T, komponen_setoranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Komponen_setoran.
     * @param {komponen_setoranDeleteArgs} args - Arguments to delete one Komponen_setoran.
     * @example
     * // Delete one Komponen_setoran
     * const Komponen_setoran = await prisma.komponen_setoran.delete({
     *   where: {
     *     // ... filter to delete one Komponen_setoran
     *   }
     * })
     * 
     */
    delete<T extends komponen_setoranDeleteArgs>(args: SelectSubset<T, komponen_setoranDeleteArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Komponen_setoran.
     * @param {komponen_setoranUpdateArgs} args - Arguments to update one Komponen_setoran.
     * @example
     * // Update one Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends komponen_setoranUpdateArgs>(args: SelectSubset<T, komponen_setoranUpdateArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Komponen_setorans.
     * @param {komponen_setoranDeleteManyArgs} args - Arguments to filter Komponen_setorans to delete.
     * @example
     * // Delete a few Komponen_setorans
     * const { count } = await prisma.komponen_setoran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends komponen_setoranDeleteManyArgs>(args?: SelectSubset<T, komponen_setoranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Komponen_setorans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Komponen_setorans
     * const komponen_setoran = await prisma.komponen_setoran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends komponen_setoranUpdateManyArgs>(args: SelectSubset<T, komponen_setoranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Komponen_setorans and returns the data updated in the database.
     * @param {komponen_setoranUpdateManyAndReturnArgs} args - Arguments to update many Komponen_setorans.
     * @example
     * // Update many Komponen_setorans
     * const komponen_setoran = await prisma.komponen_setoran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Komponen_setorans and only return the `id`
     * const komponen_setoranWithIdOnly = await prisma.komponen_setoran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends komponen_setoranUpdateManyAndReturnArgs>(args: SelectSubset<T, komponen_setoranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Komponen_setoran.
     * @param {komponen_setoranUpsertArgs} args - Arguments to update or create a Komponen_setoran.
     * @example
     * // Update or create a Komponen_setoran
     * const komponen_setoran = await prisma.komponen_setoran.upsert({
     *   create: {
     *     // ... data to create a Komponen_setoran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Komponen_setoran we want to update
     *   }
     * })
     */
    upsert<T extends komponen_setoranUpsertArgs>(args: SelectSubset<T, komponen_setoranUpsertArgs<ExtArgs>>): Prisma__komponen_setoranClient<$Result.GetResult<Prisma.$komponen_setoranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Komponen_setorans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranCountArgs} args - Arguments to filter Komponen_setorans to count.
     * @example
     * // Count the number of Komponen_setorans
     * const count = await prisma.komponen_setoran.count({
     *   where: {
     *     // ... the filter for the Komponen_setorans we want to count
     *   }
     * })
    **/
    count<T extends komponen_setoranCountArgs>(
      args?: Subset<T, komponen_setoranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Komponen_setoranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Komponen_setoran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Komponen_setoranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Komponen_setoranAggregateArgs>(args: Subset<T, Komponen_setoranAggregateArgs>): Prisma.PrismaPromise<GetKomponen_setoranAggregateType<T>>

    /**
     * Group by Komponen_setoran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {komponen_setoranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends komponen_setoranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: komponen_setoranGroupByArgs['orderBy'] }
        : { orderBy?: komponen_setoranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, komponen_setoranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKomponen_setoranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the komponen_setoran model
   */
  readonly fields: komponen_setoranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for komponen_setoran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__komponen_setoranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setoran<T extends komponen_setoran$setoranArgs<ExtArgs> = {}>(args?: Subset<T, komponen_setoran$setoranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the komponen_setoran model
   */
  interface komponen_setoranFieldRefs {
    readonly id: FieldRef<"komponen_setoran", 'String'>
    readonly nama: FieldRef<"komponen_setoran", 'String'>
    readonly external_id: FieldRef<"komponen_setoran", 'String'>
    readonly jenis: FieldRef<"komponen_setoran", 'type_jenis_komponen_setoran'>
    readonly label: FieldRef<"komponen_setoran", 'type_label_komponen_setoran'>
  }
    

  // Custom InputTypes
  /**
   * komponen_setoran findUnique
   */
  export type komponen_setoranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter, which komponen_setoran to fetch.
     */
    where: komponen_setoranWhereUniqueInput
  }

  /**
   * komponen_setoran findUniqueOrThrow
   */
  export type komponen_setoranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter, which komponen_setoran to fetch.
     */
    where: komponen_setoranWhereUniqueInput
  }

  /**
   * komponen_setoran findFirst
   */
  export type komponen_setoranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter, which komponen_setoran to fetch.
     */
    where?: komponen_setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of komponen_setorans to fetch.
     */
    orderBy?: komponen_setoranOrderByWithRelationInput | komponen_setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for komponen_setorans.
     */
    cursor?: komponen_setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` komponen_setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` komponen_setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of komponen_setorans.
     */
    distinct?: Komponen_setoranScalarFieldEnum | Komponen_setoranScalarFieldEnum[]
  }

  /**
   * komponen_setoran findFirstOrThrow
   */
  export type komponen_setoranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter, which komponen_setoran to fetch.
     */
    where?: komponen_setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of komponen_setorans to fetch.
     */
    orderBy?: komponen_setoranOrderByWithRelationInput | komponen_setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for komponen_setorans.
     */
    cursor?: komponen_setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` komponen_setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` komponen_setorans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of komponen_setorans.
     */
    distinct?: Komponen_setoranScalarFieldEnum | Komponen_setoranScalarFieldEnum[]
  }

  /**
   * komponen_setoran findMany
   */
  export type komponen_setoranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter, which komponen_setorans to fetch.
     */
    where?: komponen_setoranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of komponen_setorans to fetch.
     */
    orderBy?: komponen_setoranOrderByWithRelationInput | komponen_setoranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing komponen_setorans.
     */
    cursor?: komponen_setoranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` komponen_setorans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` komponen_setorans.
     */
    skip?: number
    distinct?: Komponen_setoranScalarFieldEnum | Komponen_setoranScalarFieldEnum[]
  }

  /**
   * komponen_setoran create
   */
  export type komponen_setoranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * The data needed to create a komponen_setoran.
     */
    data: XOR<komponen_setoranCreateInput, komponen_setoranUncheckedCreateInput>
  }

  /**
   * komponen_setoran createMany
   */
  export type komponen_setoranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many komponen_setorans.
     */
    data: komponen_setoranCreateManyInput | komponen_setoranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * komponen_setoran createManyAndReturn
   */
  export type komponen_setoranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * The data used to create many komponen_setorans.
     */
    data: komponen_setoranCreateManyInput | komponen_setoranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * komponen_setoran update
   */
  export type komponen_setoranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * The data needed to update a komponen_setoran.
     */
    data: XOR<komponen_setoranUpdateInput, komponen_setoranUncheckedUpdateInput>
    /**
     * Choose, which komponen_setoran to update.
     */
    where: komponen_setoranWhereUniqueInput
  }

  /**
   * komponen_setoran updateMany
   */
  export type komponen_setoranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update komponen_setorans.
     */
    data: XOR<komponen_setoranUpdateManyMutationInput, komponen_setoranUncheckedUpdateManyInput>
    /**
     * Filter which komponen_setorans to update
     */
    where?: komponen_setoranWhereInput
    /**
     * Limit how many komponen_setorans to update.
     */
    limit?: number
  }

  /**
   * komponen_setoran updateManyAndReturn
   */
  export type komponen_setoranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * The data used to update komponen_setorans.
     */
    data: XOR<komponen_setoranUpdateManyMutationInput, komponen_setoranUncheckedUpdateManyInput>
    /**
     * Filter which komponen_setorans to update
     */
    where?: komponen_setoranWhereInput
    /**
     * Limit how many komponen_setorans to update.
     */
    limit?: number
  }

  /**
   * komponen_setoran upsert
   */
  export type komponen_setoranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * The filter to search for the komponen_setoran to update in case it exists.
     */
    where: komponen_setoranWhereUniqueInput
    /**
     * In case the komponen_setoran found by the `where` argument doesn't exist, create a new komponen_setoran with this data.
     */
    create: XOR<komponen_setoranCreateInput, komponen_setoranUncheckedCreateInput>
    /**
     * In case the komponen_setoran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<komponen_setoranUpdateInput, komponen_setoranUncheckedUpdateInput>
  }

  /**
   * komponen_setoran delete
   */
  export type komponen_setoranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
    /**
     * Filter which komponen_setoran to delete.
     */
    where: komponen_setoranWhereUniqueInput
  }

  /**
   * komponen_setoran deleteMany
   */
  export type komponen_setoranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which komponen_setorans to delete
     */
    where?: komponen_setoranWhereInput
    /**
     * Limit how many komponen_setorans to delete.
     */
    limit?: number
  }

  /**
   * komponen_setoran.setoran
   */
  export type komponen_setoran$setoranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setoran
     */
    select?: setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setoran
     */
    omit?: setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setoranInclude<ExtArgs> | null
    where?: setoranWhereInput
    orderBy?: setoranOrderByWithRelationInput | setoranOrderByWithRelationInput[]
    cursor?: setoranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetoranScalarFieldEnum | SetoranScalarFieldEnum[]
  }

  /**
   * komponen_setoran without action
   */
  export type komponen_setoranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the komponen_setoran
     */
    select?: komponen_setoranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the komponen_setoran
     */
    omit?: komponen_setoranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: komponen_setoranInclude<ExtArgs> | null
  }


  /**
   * Model log_setoran_hafalan
   */

  export type AggregateLog_setoran_hafalan = {
    _count: Log_setoran_hafalanCountAggregateOutputType | null
    _avg: Log_setoran_hafalanAvgAggregateOutputType | null
    _sum: Log_setoran_hafalanSumAggregateOutputType | null
    _min: Log_setoran_hafalanMinAggregateOutputType | null
    _max: Log_setoran_hafalanMaxAggregateOutputType | null
  }

  export type Log_setoran_hafalanAvgAggregateOutputType = {
    id: number | null
  }

  export type Log_setoran_hafalanSumAggregateOutputType = {
    id: number | null
  }

  export type Log_setoran_hafalanMinAggregateOutputType = {
    id: number | null
    keterangan: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan | null
    ip: string | null
    user_agent: string | null
    timestamp: Date | null
    nim: string | null
    nip: string | null
  }

  export type Log_setoran_hafalanMaxAggregateOutputType = {
    id: number | null
    keterangan: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan | null
    ip: string | null
    user_agent: string | null
    timestamp: Date | null
    nim: string | null
    nip: string | null
  }

  export type Log_setoran_hafalanCountAggregateOutputType = {
    id: number
    keterangan: number
    aksi: number
    ip: number
    user_agent: number
    timestamp: number
    nim: number
    nip: number
    _all: number
  }


  export type Log_setoran_hafalanAvgAggregateInputType = {
    id?: true
  }

  export type Log_setoran_hafalanSumAggregateInputType = {
    id?: true
  }

  export type Log_setoran_hafalanMinAggregateInputType = {
    id?: true
    keterangan?: true
    aksi?: true
    ip?: true
    user_agent?: true
    timestamp?: true
    nim?: true
    nip?: true
  }

  export type Log_setoran_hafalanMaxAggregateInputType = {
    id?: true
    keterangan?: true
    aksi?: true
    ip?: true
    user_agent?: true
    timestamp?: true
    nim?: true
    nip?: true
  }

  export type Log_setoran_hafalanCountAggregateInputType = {
    id?: true
    keterangan?: true
    aksi?: true
    ip?: true
    user_agent?: true
    timestamp?: true
    nim?: true
    nip?: true
    _all?: true
  }

  export type Log_setoran_hafalanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_setoran_hafalan to aggregate.
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_setoran_hafalans to fetch.
     */
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_setoran_hafalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_setoran_hafalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_setoran_hafalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_setoran_hafalans
    **/
    _count?: true | Log_setoran_hafalanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_setoran_hafalanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_setoran_hafalanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_setoran_hafalanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_setoran_hafalanMaxAggregateInputType
  }

  export type GetLog_setoran_hafalanAggregateType<T extends Log_setoran_hafalanAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_setoran_hafalan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_setoran_hafalan[P]>
      : GetScalarType<T[P], AggregateLog_setoran_hafalan[P]>
  }




  export type log_setoran_hafalanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_setoran_hafalanWhereInput
    orderBy?: log_setoran_hafalanOrderByWithAggregationInput | log_setoran_hafalanOrderByWithAggregationInput[]
    by: Log_setoran_hafalanScalarFieldEnum[] | Log_setoran_hafalanScalarFieldEnum
    having?: log_setoran_hafalanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_setoran_hafalanCountAggregateInputType | true
    _avg?: Log_setoran_hafalanAvgAggregateInputType
    _sum?: Log_setoran_hafalanSumAggregateInputType
    _min?: Log_setoran_hafalanMinAggregateInputType
    _max?: Log_setoran_hafalanMaxAggregateInputType
  }

  export type Log_setoran_hafalanGroupByOutputType = {
    id: number
    keterangan: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip: string | null
    user_agent: string | null
    timestamp: Date
    nim: string
    nip: string
    _count: Log_setoran_hafalanCountAggregateOutputType | null
    _avg: Log_setoran_hafalanAvgAggregateOutputType | null
    _sum: Log_setoran_hafalanSumAggregateOutputType | null
    _min: Log_setoran_hafalanMinAggregateOutputType | null
    _max: Log_setoran_hafalanMaxAggregateOutputType | null
  }

  type GetLog_setoran_hafalanGroupByPayload<T extends log_setoran_hafalanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_setoran_hafalanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_setoran_hafalanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_setoran_hafalanGroupByOutputType[P]>
            : GetScalarType<T[P], Log_setoran_hafalanGroupByOutputType[P]>
        }
      >
    >


  export type log_setoran_hafalanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keterangan?: boolean
    aksi?: boolean
    ip?: boolean
    user_agent?: boolean
    timestamp?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_setoran_hafalan"]>

  export type log_setoran_hafalanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keterangan?: boolean
    aksi?: boolean
    ip?: boolean
    user_agent?: boolean
    timestamp?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_setoran_hafalan"]>

  export type log_setoran_hafalanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keterangan?: boolean
    aksi?: boolean
    ip?: boolean
    user_agent?: boolean
    timestamp?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_setoran_hafalan"]>

  export type log_setoran_hafalanSelectScalar = {
    id?: boolean
    keterangan?: boolean
    aksi?: boolean
    ip?: boolean
    user_agent?: boolean
    timestamp?: boolean
    nim?: boolean
    nip?: boolean
  }

  export type log_setoran_hafalanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keterangan" | "aksi" | "ip" | "user_agent" | "timestamp" | "nim" | "nip", ExtArgs["result"]["log_setoran_hafalan"]>
  export type log_setoran_hafalanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }
  export type log_setoran_hafalanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }
  export type log_setoran_hafalanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }

  export type $log_setoran_hafalanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_setoran_hafalan"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keterangan: string | null
      aksi: $Enums.type_aksi_log_setoran_hafalan
      ip: string | null
      user_agent: string | null
      timestamp: Date
      nim: string
      nip: string
    }, ExtArgs["result"]["log_setoran_hafalan"]>
    composites: {}
  }

  type log_setoran_hafalanGetPayload<S extends boolean | null | undefined | log_setoran_hafalanDefaultArgs> = $Result.GetResult<Prisma.$log_setoran_hafalanPayload, S>

  type log_setoran_hafalanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_setoran_hafalanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_setoran_hafalanCountAggregateInputType | true
    }

  export interface log_setoran_hafalanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_setoran_hafalan'], meta: { name: 'log_setoran_hafalan' } }
    /**
     * Find zero or one Log_setoran_hafalan that matches the filter.
     * @param {log_setoran_hafalanFindUniqueArgs} args - Arguments to find a Log_setoran_hafalan
     * @example
     * // Get one Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_setoran_hafalanFindUniqueArgs>(args: SelectSubset<T, log_setoran_hafalanFindUniqueArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_setoran_hafalan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_setoran_hafalanFindUniqueOrThrowArgs} args - Arguments to find a Log_setoran_hafalan
     * @example
     * // Get one Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_setoran_hafalanFindUniqueOrThrowArgs>(args: SelectSubset<T, log_setoran_hafalanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_setoran_hafalan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanFindFirstArgs} args - Arguments to find a Log_setoran_hafalan
     * @example
     * // Get one Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_setoran_hafalanFindFirstArgs>(args?: SelectSubset<T, log_setoran_hafalanFindFirstArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_setoran_hafalan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanFindFirstOrThrowArgs} args - Arguments to find a Log_setoran_hafalan
     * @example
     * // Get one Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_setoran_hafalanFindFirstOrThrowArgs>(args?: SelectSubset<T, log_setoran_hafalanFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_setoran_hafalans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_setoran_hafalans
     * const log_setoran_hafalans = await prisma.log_setoran_hafalan.findMany()
     * 
     * // Get first 10 Log_setoran_hafalans
     * const log_setoran_hafalans = await prisma.log_setoran_hafalan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_setoran_hafalanWithIdOnly = await prisma.log_setoran_hafalan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends log_setoran_hafalanFindManyArgs>(args?: SelectSubset<T, log_setoran_hafalanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_setoran_hafalan.
     * @param {log_setoran_hafalanCreateArgs} args - Arguments to create a Log_setoran_hafalan.
     * @example
     * // Create one Log_setoran_hafalan
     * const Log_setoran_hafalan = await prisma.log_setoran_hafalan.create({
     *   data: {
     *     // ... data to create a Log_setoran_hafalan
     *   }
     * })
     * 
     */
    create<T extends log_setoran_hafalanCreateArgs>(args: SelectSubset<T, log_setoran_hafalanCreateArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_setoran_hafalans.
     * @param {log_setoran_hafalanCreateManyArgs} args - Arguments to create many Log_setoran_hafalans.
     * @example
     * // Create many Log_setoran_hafalans
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_setoran_hafalanCreateManyArgs>(args?: SelectSubset<T, log_setoran_hafalanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Log_setoran_hafalans and returns the data saved in the database.
     * @param {log_setoran_hafalanCreateManyAndReturnArgs} args - Arguments to create many Log_setoran_hafalans.
     * @example
     * // Create many Log_setoran_hafalans
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Log_setoran_hafalans and only return the `id`
     * const log_setoran_hafalanWithIdOnly = await prisma.log_setoran_hafalan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends log_setoran_hafalanCreateManyAndReturnArgs>(args?: SelectSubset<T, log_setoran_hafalanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log_setoran_hafalan.
     * @param {log_setoran_hafalanDeleteArgs} args - Arguments to delete one Log_setoran_hafalan.
     * @example
     * // Delete one Log_setoran_hafalan
     * const Log_setoran_hafalan = await prisma.log_setoran_hafalan.delete({
     *   where: {
     *     // ... filter to delete one Log_setoran_hafalan
     *   }
     * })
     * 
     */
    delete<T extends log_setoran_hafalanDeleteArgs>(args: SelectSubset<T, log_setoran_hafalanDeleteArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_setoran_hafalan.
     * @param {log_setoran_hafalanUpdateArgs} args - Arguments to update one Log_setoran_hafalan.
     * @example
     * // Update one Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_setoran_hafalanUpdateArgs>(args: SelectSubset<T, log_setoran_hafalanUpdateArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_setoran_hafalans.
     * @param {log_setoran_hafalanDeleteManyArgs} args - Arguments to filter Log_setoran_hafalans to delete.
     * @example
     * // Delete a few Log_setoran_hafalans
     * const { count } = await prisma.log_setoran_hafalan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_setoran_hafalanDeleteManyArgs>(args?: SelectSubset<T, log_setoran_hafalanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_setoran_hafalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_setoran_hafalans
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_setoran_hafalanUpdateManyArgs>(args: SelectSubset<T, log_setoran_hafalanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_setoran_hafalans and returns the data updated in the database.
     * @param {log_setoran_hafalanUpdateManyAndReturnArgs} args - Arguments to update many Log_setoran_hafalans.
     * @example
     * // Update many Log_setoran_hafalans
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Log_setoran_hafalans and only return the `id`
     * const log_setoran_hafalanWithIdOnly = await prisma.log_setoran_hafalan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends log_setoran_hafalanUpdateManyAndReturnArgs>(args: SelectSubset<T, log_setoran_hafalanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log_setoran_hafalan.
     * @param {log_setoran_hafalanUpsertArgs} args - Arguments to update or create a Log_setoran_hafalan.
     * @example
     * // Update or create a Log_setoran_hafalan
     * const log_setoran_hafalan = await prisma.log_setoran_hafalan.upsert({
     *   create: {
     *     // ... data to create a Log_setoran_hafalan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_setoran_hafalan we want to update
     *   }
     * })
     */
    upsert<T extends log_setoran_hafalanUpsertArgs>(args: SelectSubset<T, log_setoran_hafalanUpsertArgs<ExtArgs>>): Prisma__log_setoran_hafalanClient<$Result.GetResult<Prisma.$log_setoran_hafalanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_setoran_hafalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanCountArgs} args - Arguments to filter Log_setoran_hafalans to count.
     * @example
     * // Count the number of Log_setoran_hafalans
     * const count = await prisma.log_setoran_hafalan.count({
     *   where: {
     *     // ... the filter for the Log_setoran_hafalans we want to count
     *   }
     * })
    **/
    count<T extends log_setoran_hafalanCountArgs>(
      args?: Subset<T, log_setoran_hafalanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_setoran_hafalanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_setoran_hafalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_setoran_hafalanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Log_setoran_hafalanAggregateArgs>(args: Subset<T, Log_setoran_hafalanAggregateArgs>): Prisma.PrismaPromise<GetLog_setoran_hafalanAggregateType<T>>

    /**
     * Group by Log_setoran_hafalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_setoran_hafalanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends log_setoran_hafalanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_setoran_hafalanGroupByArgs['orderBy'] }
        : { orderBy?: log_setoran_hafalanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, log_setoran_hafalanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_setoran_hafalanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_setoran_hafalan model
   */
  readonly fields: log_setoran_hafalanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_setoran_hafalan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_setoran_hafalanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log_setoran_hafalan model
   */
  interface log_setoran_hafalanFieldRefs {
    readonly id: FieldRef<"log_setoran_hafalan", 'Int'>
    readonly keterangan: FieldRef<"log_setoran_hafalan", 'String'>
    readonly aksi: FieldRef<"log_setoran_hafalan", 'type_aksi_log_setoran_hafalan'>
    readonly ip: FieldRef<"log_setoran_hafalan", 'String'>
    readonly user_agent: FieldRef<"log_setoran_hafalan", 'String'>
    readonly timestamp: FieldRef<"log_setoran_hafalan", 'DateTime'>
    readonly nim: FieldRef<"log_setoran_hafalan", 'String'>
    readonly nip: FieldRef<"log_setoran_hafalan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * log_setoran_hafalan findUnique
   */
  export type log_setoran_hafalanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter, which log_setoran_hafalan to fetch.
     */
    where: log_setoran_hafalanWhereUniqueInput
  }

  /**
   * log_setoran_hafalan findUniqueOrThrow
   */
  export type log_setoran_hafalanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter, which log_setoran_hafalan to fetch.
     */
    where: log_setoran_hafalanWhereUniqueInput
  }

  /**
   * log_setoran_hafalan findFirst
   */
  export type log_setoran_hafalanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter, which log_setoran_hafalan to fetch.
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_setoran_hafalans to fetch.
     */
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_setoran_hafalans.
     */
    cursor?: log_setoran_hafalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_setoran_hafalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_setoran_hafalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_setoran_hafalans.
     */
    distinct?: Log_setoran_hafalanScalarFieldEnum | Log_setoran_hafalanScalarFieldEnum[]
  }

  /**
   * log_setoran_hafalan findFirstOrThrow
   */
  export type log_setoran_hafalanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter, which log_setoran_hafalan to fetch.
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_setoran_hafalans to fetch.
     */
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_setoran_hafalans.
     */
    cursor?: log_setoran_hafalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_setoran_hafalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_setoran_hafalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_setoran_hafalans.
     */
    distinct?: Log_setoran_hafalanScalarFieldEnum | Log_setoran_hafalanScalarFieldEnum[]
  }

  /**
   * log_setoran_hafalan findMany
   */
  export type log_setoran_hafalanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter, which log_setoran_hafalans to fetch.
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_setoran_hafalans to fetch.
     */
    orderBy?: log_setoran_hafalanOrderByWithRelationInput | log_setoran_hafalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_setoran_hafalans.
     */
    cursor?: log_setoran_hafalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_setoran_hafalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_setoran_hafalans.
     */
    skip?: number
    distinct?: Log_setoran_hafalanScalarFieldEnum | Log_setoran_hafalanScalarFieldEnum[]
  }

  /**
   * log_setoran_hafalan create
   */
  export type log_setoran_hafalanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * The data needed to create a log_setoran_hafalan.
     */
    data: XOR<log_setoran_hafalanCreateInput, log_setoran_hafalanUncheckedCreateInput>
  }

  /**
   * log_setoran_hafalan createMany
   */
  export type log_setoran_hafalanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_setoran_hafalans.
     */
    data: log_setoran_hafalanCreateManyInput | log_setoran_hafalanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_setoran_hafalan createManyAndReturn
   */
  export type log_setoran_hafalanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * The data used to create many log_setoran_hafalans.
     */
    data: log_setoran_hafalanCreateManyInput | log_setoran_hafalanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_setoran_hafalan update
   */
  export type log_setoran_hafalanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * The data needed to update a log_setoran_hafalan.
     */
    data: XOR<log_setoran_hafalanUpdateInput, log_setoran_hafalanUncheckedUpdateInput>
    /**
     * Choose, which log_setoran_hafalan to update.
     */
    where: log_setoran_hafalanWhereUniqueInput
  }

  /**
   * log_setoran_hafalan updateMany
   */
  export type log_setoran_hafalanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_setoran_hafalans.
     */
    data: XOR<log_setoran_hafalanUpdateManyMutationInput, log_setoran_hafalanUncheckedUpdateManyInput>
    /**
     * Filter which log_setoran_hafalans to update
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * Limit how many log_setoran_hafalans to update.
     */
    limit?: number
  }

  /**
   * log_setoran_hafalan updateManyAndReturn
   */
  export type log_setoran_hafalanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * The data used to update log_setoran_hafalans.
     */
    data: XOR<log_setoran_hafalanUpdateManyMutationInput, log_setoran_hafalanUncheckedUpdateManyInput>
    /**
     * Filter which log_setoran_hafalans to update
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * Limit how many log_setoran_hafalans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_setoran_hafalan upsert
   */
  export type log_setoran_hafalanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * The filter to search for the log_setoran_hafalan to update in case it exists.
     */
    where: log_setoran_hafalanWhereUniqueInput
    /**
     * In case the log_setoran_hafalan found by the `where` argument doesn't exist, create a new log_setoran_hafalan with this data.
     */
    create: XOR<log_setoran_hafalanCreateInput, log_setoran_hafalanUncheckedCreateInput>
    /**
     * In case the log_setoran_hafalan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_setoran_hafalanUpdateInput, log_setoran_hafalanUncheckedUpdateInput>
  }

  /**
   * log_setoran_hafalan delete
   */
  export type log_setoran_hafalanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
    /**
     * Filter which log_setoran_hafalan to delete.
     */
    where: log_setoran_hafalanWhereUniqueInput
  }

  /**
   * log_setoran_hafalan deleteMany
   */
  export type log_setoran_hafalanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_setoran_hafalans to delete
     */
    where?: log_setoran_hafalanWhereInput
    /**
     * Limit how many log_setoran_hafalans to delete.
     */
    limit?: number
  }

  /**
   * log_setoran_hafalan without action
   */
  export type log_setoran_hafalanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_setoran_hafalan
     */
    select?: log_setoran_hafalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_setoran_hafalan
     */
    omit?: log_setoran_hafalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_setoran_hafalanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DosenScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    email: 'email'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    nim: 'nim',
    nama: 'nama',
    email: 'email',
    nip: 'nip'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const SetoranScalarFieldEnum: {
    id: 'id',
    tgl_setoran: 'tgl_setoran',
    tgl_validasi: 'tgl_validasi',
    nim: 'nim',
    nip: 'nip',
    id_komponen_setoran: 'id_komponen_setoran'
  };

  export type SetoranScalarFieldEnum = (typeof SetoranScalarFieldEnum)[keyof typeof SetoranScalarFieldEnum]


  export const Komponen_setoranScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    external_id: 'external_id',
    jenis: 'jenis',
    label: 'label'
  };

  export type Komponen_setoranScalarFieldEnum = (typeof Komponen_setoranScalarFieldEnum)[keyof typeof Komponen_setoranScalarFieldEnum]


  export const Log_setoran_hafalanScalarFieldEnum: {
    id: 'id',
    keterangan: 'keterangan',
    aksi: 'aksi',
    ip: 'ip',
    user_agent: 'user_agent',
    timestamp: 'timestamp',
    nim: 'nim',
    nip: 'nip'
  };

  export type Log_setoran_hafalanScalarFieldEnum = (typeof Log_setoran_hafalanScalarFieldEnum)[keyof typeof Log_setoran_hafalanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'type_jenis_komponen_setoran'
   */
  export type Enumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_jenis_komponen_setoran'>
    


  /**
   * Reference to a field of type 'type_jenis_komponen_setoran[]'
   */
  export type ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_jenis_komponen_setoran[]'>
    


  /**
   * Reference to a field of type 'type_label_komponen_setoran'
   */
  export type Enumtype_label_komponen_setoranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_label_komponen_setoran'>
    


  /**
   * Reference to a field of type 'type_label_komponen_setoran[]'
   */
  export type ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_label_komponen_setoran[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'type_aksi_log_setoran_hafalan'
   */
  export type Enumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_aksi_log_setoran_hafalan'>
    


  /**
   * Reference to a field of type 'type_aksi_log_setoran_hafalan[]'
   */
  export type ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_aksi_log_setoran_hafalan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type dosenWhereInput = {
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nip?: StringFilter<"dosen"> | string
    nama?: StringFilter<"dosen"> | string
    email?: StringFilter<"dosen"> | string
    mahasiswa?: MahasiswaListRelationFilter
    setoran?: SetoranListRelationFilter
    log_setoran_hafalan?: Log_setoran_hafalanListRelationFilter
  }

  export type dosenOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    mahasiswa?: mahasiswaOrderByRelationAggregateInput
    setoran?: setoranOrderByRelationAggregateInput
    log_setoran_hafalan?: log_setoran_hafalanOrderByRelationAggregateInput
  }

  export type dosenWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    email?: string
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nama?: StringFilter<"dosen"> | string
    mahasiswa?: MahasiswaListRelationFilter
    setoran?: SetoranListRelationFilter
    log_setoran_hafalan?: Log_setoran_hafalanListRelationFilter
  }, "nip" | "email">

  export type dosenOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    _count?: dosenCountOrderByAggregateInput
    _max?: dosenMaxOrderByAggregateInput
    _min?: dosenMinOrderByAggregateInput
  }

  export type dosenScalarWhereWithAggregatesInput = {
    AND?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    OR?: dosenScalarWhereWithAggregatesInput[]
    NOT?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"dosen"> | string
    nama?: StringWithAggregatesFilter<"dosen"> | string
    email?: StringWithAggregatesFilter<"dosen"> | string
  }

  export type mahasiswaWhereInput = {
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nim?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    email?: StringFilter<"mahasiswa"> | string
    nip?: StringFilter<"mahasiswa"> | string
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    setoran?: SetoranListRelationFilter
    log_setoran_hafalan?: Log_setoran_hafalanListRelationFilter
  }

  export type mahasiswaOrderByWithRelationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nip?: SortOrder
    dosen?: dosenOrderByWithRelationInput
    setoran?: setoranOrderByRelationAggregateInput
    log_setoran_hafalan?: log_setoran_hafalanOrderByRelationAggregateInput
  }

  export type mahasiswaWhereUniqueInput = Prisma.AtLeast<{
    nim?: string
    email?: string
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nama?: StringFilter<"mahasiswa"> | string
    nip?: StringFilter<"mahasiswa"> | string
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    setoran?: SetoranListRelationFilter
    log_setoran_hafalan?: Log_setoran_hafalanListRelationFilter
  }, "nim" | "email">

  export type mahasiswaOrderByWithAggregationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nip?: SortOrder
    _count?: mahasiswaCountOrderByAggregateInput
    _max?: mahasiswaMaxOrderByAggregateInput
    _min?: mahasiswaMinOrderByAggregateInput
  }

  export type mahasiswaScalarWhereWithAggregatesInput = {
    AND?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    OR?: mahasiswaScalarWhereWithAggregatesInput[]
    NOT?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"mahasiswa"> | string
    email?: StringWithAggregatesFilter<"mahasiswa"> | string
    nip?: StringWithAggregatesFilter<"mahasiswa"> | string
  }

  export type setoranWhereInput = {
    AND?: setoranWhereInput | setoranWhereInput[]
    OR?: setoranWhereInput[]
    NOT?: setoranWhereInput | setoranWhereInput[]
    id?: UuidFilter<"setoran"> | string
    tgl_setoran?: DateTimeNullableFilter<"setoran"> | Date | string | null
    tgl_validasi?: DateTimeNullableFilter<"setoran"> | Date | string | null
    nim?: StringFilter<"setoran"> | string
    nip?: StringFilter<"setoran"> | string
    id_komponen_setoran?: UuidFilter<"setoran"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    komponen_setoran?: XOR<Komponen_setoranScalarRelationFilter, komponen_setoranWhereInput>
  }

  export type setoranOrderByWithRelationInput = {
    id?: SortOrder
    tgl_setoran?: SortOrderInput | SortOrder
    tgl_validasi?: SortOrderInput | SortOrder
    nim?: SortOrder
    nip?: SortOrder
    id_komponen_setoran?: SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
    komponen_setoran?: komponen_setoranOrderByWithRelationInput
  }

  export type setoranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim_id_komponen_setoran?: setoranNimId_komponen_setoranCompoundUniqueInput
    AND?: setoranWhereInput | setoranWhereInput[]
    OR?: setoranWhereInput[]
    NOT?: setoranWhereInput | setoranWhereInput[]
    tgl_setoran?: DateTimeNullableFilter<"setoran"> | Date | string | null
    tgl_validasi?: DateTimeNullableFilter<"setoran"> | Date | string | null
    nim?: StringFilter<"setoran"> | string
    nip?: StringFilter<"setoran"> | string
    id_komponen_setoran?: UuidFilter<"setoran"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    komponen_setoran?: XOR<Komponen_setoranScalarRelationFilter, komponen_setoranWhereInput>
  }, "id" | "nim_id_komponen_setoran">

  export type setoranOrderByWithAggregationInput = {
    id?: SortOrder
    tgl_setoran?: SortOrderInput | SortOrder
    tgl_validasi?: SortOrderInput | SortOrder
    nim?: SortOrder
    nip?: SortOrder
    id_komponen_setoran?: SortOrder
    _count?: setoranCountOrderByAggregateInput
    _max?: setoranMaxOrderByAggregateInput
    _min?: setoranMinOrderByAggregateInput
  }

  export type setoranScalarWhereWithAggregatesInput = {
    AND?: setoranScalarWhereWithAggregatesInput | setoranScalarWhereWithAggregatesInput[]
    OR?: setoranScalarWhereWithAggregatesInput[]
    NOT?: setoranScalarWhereWithAggregatesInput | setoranScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"setoran"> | string
    tgl_setoran?: DateTimeNullableWithAggregatesFilter<"setoran"> | Date | string | null
    tgl_validasi?: DateTimeNullableWithAggregatesFilter<"setoran"> | Date | string | null
    nim?: StringWithAggregatesFilter<"setoran"> | string
    nip?: StringWithAggregatesFilter<"setoran"> | string
    id_komponen_setoran?: UuidWithAggregatesFilter<"setoran"> | string
  }

  export type komponen_setoranWhereInput = {
    AND?: komponen_setoranWhereInput | komponen_setoranWhereInput[]
    OR?: komponen_setoranWhereInput[]
    NOT?: komponen_setoranWhereInput | komponen_setoranWhereInput[]
    id?: UuidFilter<"komponen_setoran"> | string
    nama?: StringFilter<"komponen_setoran"> | string
    external_id?: StringNullableFilter<"komponen_setoran"> | string | null
    jenis?: Enumtype_jenis_komponen_setoranFilter<"komponen_setoran"> | $Enums.type_jenis_komponen_setoran
    label?: Enumtype_label_komponen_setoranNullableFilter<"komponen_setoran"> | $Enums.type_label_komponen_setoran | null
    setoran?: SetoranListRelationFilter
  }

  export type komponen_setoranOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    external_id?: SortOrderInput | SortOrder
    jenis?: SortOrder
    label?: SortOrderInput | SortOrder
    setoran?: setoranOrderByRelationAggregateInput
  }

  export type komponen_setoranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: komponen_setoranWhereInput | komponen_setoranWhereInput[]
    OR?: komponen_setoranWhereInput[]
    NOT?: komponen_setoranWhereInput | komponen_setoranWhereInput[]
    nama?: StringFilter<"komponen_setoran"> | string
    external_id?: StringNullableFilter<"komponen_setoran"> | string | null
    jenis?: Enumtype_jenis_komponen_setoranFilter<"komponen_setoran"> | $Enums.type_jenis_komponen_setoran
    label?: Enumtype_label_komponen_setoranNullableFilter<"komponen_setoran"> | $Enums.type_label_komponen_setoran | null
    setoran?: SetoranListRelationFilter
  }, "id">

  export type komponen_setoranOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    external_id?: SortOrderInput | SortOrder
    jenis?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: komponen_setoranCountOrderByAggregateInput
    _max?: komponen_setoranMaxOrderByAggregateInput
    _min?: komponen_setoranMinOrderByAggregateInput
  }

  export type komponen_setoranScalarWhereWithAggregatesInput = {
    AND?: komponen_setoranScalarWhereWithAggregatesInput | komponen_setoranScalarWhereWithAggregatesInput[]
    OR?: komponen_setoranScalarWhereWithAggregatesInput[]
    NOT?: komponen_setoranScalarWhereWithAggregatesInput | komponen_setoranScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"komponen_setoran"> | string
    nama?: StringWithAggregatesFilter<"komponen_setoran"> | string
    external_id?: StringNullableWithAggregatesFilter<"komponen_setoran"> | string | null
    jenis?: Enumtype_jenis_komponen_setoranWithAggregatesFilter<"komponen_setoran"> | $Enums.type_jenis_komponen_setoran
    label?: Enumtype_label_komponen_setoranNullableWithAggregatesFilter<"komponen_setoran"> | $Enums.type_label_komponen_setoran | null
  }

  export type log_setoran_hafalanWhereInput = {
    AND?: log_setoran_hafalanWhereInput | log_setoran_hafalanWhereInput[]
    OR?: log_setoran_hafalanWhereInput[]
    NOT?: log_setoran_hafalanWhereInput | log_setoran_hafalanWhereInput[]
    id?: IntFilter<"log_setoran_hafalan"> | number
    keterangan?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFilter<"log_setoran_hafalan"> | $Enums.type_aksi_log_setoran_hafalan
    ip?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    user_agent?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    timestamp?: DateTimeFilter<"log_setoran_hafalan"> | Date | string
    nim?: StringFilter<"log_setoran_hafalan"> | string
    nip?: StringFilter<"log_setoran_hafalan"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }

  export type log_setoran_hafalanOrderByWithRelationInput = {
    id?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    aksi?: SortOrder
    ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
  }

  export type log_setoran_hafalanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: log_setoran_hafalanWhereInput | log_setoran_hafalanWhereInput[]
    OR?: log_setoran_hafalanWhereInput[]
    NOT?: log_setoran_hafalanWhereInput | log_setoran_hafalanWhereInput[]
    keterangan?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFilter<"log_setoran_hafalan"> | $Enums.type_aksi_log_setoran_hafalan
    ip?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    user_agent?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    timestamp?: DateTimeFilter<"log_setoran_hafalan"> | Date | string
    nim?: StringFilter<"log_setoran_hafalan"> | string
    nip?: StringFilter<"log_setoran_hafalan"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }, "id">

  export type log_setoran_hafalanOrderByWithAggregationInput = {
    id?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    aksi?: SortOrder
    ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    _count?: log_setoran_hafalanCountOrderByAggregateInput
    _avg?: log_setoran_hafalanAvgOrderByAggregateInput
    _max?: log_setoran_hafalanMaxOrderByAggregateInput
    _min?: log_setoran_hafalanMinOrderByAggregateInput
    _sum?: log_setoran_hafalanSumOrderByAggregateInput
  }

  export type log_setoran_hafalanScalarWhereWithAggregatesInput = {
    AND?: log_setoran_hafalanScalarWhereWithAggregatesInput | log_setoran_hafalanScalarWhereWithAggregatesInput[]
    OR?: log_setoran_hafalanScalarWhereWithAggregatesInput[]
    NOT?: log_setoran_hafalanScalarWhereWithAggregatesInput | log_setoran_hafalanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log_setoran_hafalan"> | number
    keterangan?: StringNullableWithAggregatesFilter<"log_setoran_hafalan"> | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanWithAggregatesFilter<"log_setoran_hafalan"> | $Enums.type_aksi_log_setoran_hafalan
    ip?: StringNullableWithAggregatesFilter<"log_setoran_hafalan"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"log_setoran_hafalan"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"log_setoran_hafalan"> | Date | string
    nim?: StringWithAggregatesFilter<"log_setoran_hafalan"> | string
    nip?: StringWithAggregatesFilter<"log_setoran_hafalan"> | string
  }

  export type dosenCreateInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaCreateNestedManyWithoutDosenInput
    setoran?: setoranCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutDosenInput
    setoran?: setoranUncheckedCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUpdateManyWithoutDosenNestedInput
    setoran?: setoranUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutDosenNestedInput
    setoran?: setoranUncheckedUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type dosenCreateManyInput = {
    nip: string
    nama: string
    email: string
  }

  export type dosenUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaCreateInput = {
    nim: string
    nama: string
    email: string
    dosen: dosenCreateNestedOneWithoutMahasiswaInput
    setoran?: setoranCreateNestedManyWithoutMahasiswaInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateInput = {
    nim: string
    nama: string
    email: string
    nip: string
    setoran?: setoranUncheckedCreateNestedManyWithoutMahasiswaInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dosen?: dosenUpdateOneRequiredWithoutMahasiswaNestedInput
    setoran?: setoranUpdateManyWithoutMahasiswaNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUncheckedUpdateManyWithoutMahasiswaNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaCreateManyInput = {
    nim: string
    nama: string
    email: string
    nip: string
  }

  export type mahasiswaUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type setoranCreateInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    mahasiswa: mahasiswaCreateNestedOneWithoutSetoranInput
    dosen: dosenCreateNestedOneWithoutSetoranInput
    komponen_setoran: komponen_setoranCreateNestedOneWithoutSetoranInput
  }

  export type setoranUncheckedCreateInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    nip: string
    id_komponen_setoran: string
  }

  export type setoranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutSetoranNestedInput
    dosen?: dosenUpdateOneRequiredWithoutSetoranNestedInput
    komponen_setoran?: komponen_setoranUpdateOneRequiredWithoutSetoranNestedInput
  }

  export type setoranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type setoranCreateManyInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    nip: string
    id_komponen_setoran: string
  }

  export type setoranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setoranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type komponen_setoranCreateInput = {
    id?: string
    nama: string
    external_id?: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label?: $Enums.type_label_komponen_setoran | null
    setoran?: setoranCreateNestedManyWithoutKomponen_setoranInput
  }

  export type komponen_setoranUncheckedCreateInput = {
    id?: string
    nama: string
    external_id?: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label?: $Enums.type_label_komponen_setoran | null
    setoran?: setoranUncheckedCreateNestedManyWithoutKomponen_setoranInput
  }

  export type komponen_setoranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
    setoran?: setoranUpdateManyWithoutKomponen_setoranNestedInput
  }

  export type komponen_setoranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
    setoran?: setoranUncheckedUpdateManyWithoutKomponen_setoranNestedInput
  }

  export type komponen_setoranCreateManyInput = {
    id?: string
    nama: string
    external_id?: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label?: $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
  }

  export type log_setoran_hafalanCreateInput = {
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    mahasiswa: mahasiswaCreateNestedOneWithoutLog_setoran_hafalanInput
    dosen: dosenCreateNestedOneWithoutLog_setoran_hafalanInput
  }

  export type log_setoran_hafalanUncheckedCreateInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nim: string
    nip: string
  }

  export type log_setoran_hafalanUpdateInput = {
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput
    dosen?: dosenUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput
  }

  export type log_setoran_hafalanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type log_setoran_hafalanCreateManyInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nim: string
    nip: string
  }

  export type log_setoran_hafalanUpdateManyMutationInput = {
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_setoran_hafalanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MahasiswaListRelationFilter = {
    every?: mahasiswaWhereInput
    some?: mahasiswaWhereInput
    none?: mahasiswaWhereInput
  }

  export type SetoranListRelationFilter = {
    every?: setoranWhereInput
    some?: setoranWhereInput
    none?: setoranWhereInput
  }

  export type Log_setoran_hafalanListRelationFilter = {
    every?: log_setoran_hafalanWhereInput
    some?: log_setoran_hafalanWhereInput
    none?: log_setoran_hafalanWhereInput
  }

  export type mahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type setoranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type log_setoran_hafalanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dosenCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type dosenMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type dosenMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DosenScalarRelationFilter = {
    is?: dosenWhereInput
    isNot?: dosenWhereInput
  }

  export type mahasiswaCountOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nip?: SortOrder
  }

  export type mahasiswaMaxOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nip?: SortOrder
  }

  export type mahasiswaMinOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nip?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MahasiswaScalarRelationFilter = {
    is?: mahasiswaWhereInput
    isNot?: mahasiswaWhereInput
  }

  export type Komponen_setoranScalarRelationFilter = {
    is?: komponen_setoranWhereInput
    isNot?: komponen_setoranWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type setoranNimId_komponen_setoranCompoundUniqueInput = {
    nim: string
    id_komponen_setoran: string
  }

  export type setoranCountOrderByAggregateInput = {
    id?: SortOrder
    tgl_setoran?: SortOrder
    tgl_validasi?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    id_komponen_setoran?: SortOrder
  }

  export type setoranMaxOrderByAggregateInput = {
    id?: SortOrder
    tgl_setoran?: SortOrder
    tgl_validasi?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    id_komponen_setoran?: SortOrder
  }

  export type setoranMinOrderByAggregateInput = {
    id?: SortOrder
    tgl_setoran?: SortOrder
    tgl_validasi?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    id_komponen_setoran?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumtype_jenis_komponen_setoranFilter<$PrismaModel = never> = {
    equals?: $Enums.type_jenis_komponen_setoran | Enumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    in?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel> | $Enums.type_jenis_komponen_setoran
  }

  export type Enumtype_label_komponen_setoranNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.type_label_komponen_setoran | Enumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    in?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel> | $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    external_id?: SortOrder
    jenis?: SortOrder
    label?: SortOrder
  }

  export type komponen_setoranMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    external_id?: SortOrder
    jenis?: SortOrder
    label?: SortOrder
  }

  export type komponen_setoranMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    external_id?: SortOrder
    jenis?: SortOrder
    label?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumtype_jenis_komponen_setoranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_jenis_komponen_setoran | Enumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    in?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_jenis_komponen_setoranWithAggregatesFilter<$PrismaModel> | $Enums.type_jenis_komponen_setoran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel>
    _max?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel>
  }

  export type Enumtype_label_komponen_setoranNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_label_komponen_setoran | Enumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    in?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtype_label_komponen_setoranNullableWithAggregatesFilter<$PrismaModel> | $Enums.type_label_komponen_setoran | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel>
    _max?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumtype_aksi_log_setoran_hafalanFilter<$PrismaModel = never> = {
    equals?: $Enums.type_aksi_log_setoran_hafalan | Enumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    in?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel> | $Enums.type_aksi_log_setoran_hafalan
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type log_setoran_hafalanCountOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
    aksi?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    timestamp?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type log_setoran_hafalanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type log_setoran_hafalanMaxOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
    aksi?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    timestamp?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type log_setoran_hafalanMinOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
    aksi?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    timestamp?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type log_setoran_hafalanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumtype_aksi_log_setoran_hafalanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_aksi_log_setoran_hafalan | Enumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    in?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_aksi_log_setoran_hafalanWithAggregatesFilter<$PrismaModel> | $Enums.type_aksi_log_setoran_hafalan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel>
    _max?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type mahasiswaCreateNestedManyWithoutDosenInput = {
    create?: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput> | mahasiswaCreateWithoutDosenInput[] | mahasiswaUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDosenInput | mahasiswaCreateOrConnectWithoutDosenInput[]
    createMany?: mahasiswaCreateManyDosenInputEnvelope
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
  }

  export type setoranCreateNestedManyWithoutDosenInput = {
    create?: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput> | setoranCreateWithoutDosenInput[] | setoranUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutDosenInput | setoranCreateOrConnectWithoutDosenInput[]
    createMany?: setoranCreateManyDosenInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type log_setoran_hafalanCreateNestedManyWithoutDosenInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput> | log_setoran_hafalanCreateWithoutDosenInput[] | log_setoran_hafalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutDosenInput | log_setoran_hafalanCreateOrConnectWithoutDosenInput[]
    createMany?: log_setoran_hafalanCreateManyDosenInputEnvelope
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
  }

  export type mahasiswaUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput> | mahasiswaCreateWithoutDosenInput[] | mahasiswaUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDosenInput | mahasiswaCreateOrConnectWithoutDosenInput[]
    createMany?: mahasiswaCreateManyDosenInputEnvelope
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
  }

  export type setoranUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput> | setoranCreateWithoutDosenInput[] | setoranUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutDosenInput | setoranCreateOrConnectWithoutDosenInput[]
    createMany?: setoranCreateManyDosenInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type log_setoran_hafalanUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput> | log_setoran_hafalanCreateWithoutDosenInput[] | log_setoran_hafalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutDosenInput | log_setoran_hafalanCreateOrConnectWithoutDosenInput[]
    createMany?: log_setoran_hafalanCreateManyDosenInputEnvelope
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type mahasiswaUpdateManyWithoutDosenNestedInput = {
    create?: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput> | mahasiswaCreateWithoutDosenInput[] | mahasiswaUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDosenInput | mahasiswaCreateOrConnectWithoutDosenInput[]
    upsert?: mahasiswaUpsertWithWhereUniqueWithoutDosenInput | mahasiswaUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: mahasiswaCreateManyDosenInputEnvelope
    set?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    disconnect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    delete?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    update?: mahasiswaUpdateWithWhereUniqueWithoutDosenInput | mahasiswaUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: mahasiswaUpdateManyWithWhereWithoutDosenInput | mahasiswaUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
  }

  export type setoranUpdateManyWithoutDosenNestedInput = {
    create?: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput> | setoranCreateWithoutDosenInput[] | setoranUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutDosenInput | setoranCreateOrConnectWithoutDosenInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutDosenInput | setoranUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: setoranCreateManyDosenInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutDosenInput | setoranUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutDosenInput | setoranUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type log_setoran_hafalanUpdateManyWithoutDosenNestedInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput> | log_setoran_hafalanCreateWithoutDosenInput[] | log_setoran_hafalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutDosenInput | log_setoran_hafalanCreateOrConnectWithoutDosenInput[]
    upsert?: log_setoran_hafalanUpsertWithWhereUniqueWithoutDosenInput | log_setoran_hafalanUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: log_setoran_hafalanCreateManyDosenInputEnvelope
    set?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    disconnect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    delete?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    update?: log_setoran_hafalanUpdateWithWhereUniqueWithoutDosenInput | log_setoran_hafalanUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: log_setoran_hafalanUpdateManyWithWhereWithoutDosenInput | log_setoran_hafalanUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
  }

  export type mahasiswaUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput> | mahasiswaCreateWithoutDosenInput[] | mahasiswaUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDosenInput | mahasiswaCreateOrConnectWithoutDosenInput[]
    upsert?: mahasiswaUpsertWithWhereUniqueWithoutDosenInput | mahasiswaUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: mahasiswaCreateManyDosenInputEnvelope
    set?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    disconnect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    delete?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    update?: mahasiswaUpdateWithWhereUniqueWithoutDosenInput | mahasiswaUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: mahasiswaUpdateManyWithWhereWithoutDosenInput | mahasiswaUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
  }

  export type setoranUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput> | setoranCreateWithoutDosenInput[] | setoranUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutDosenInput | setoranCreateOrConnectWithoutDosenInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutDosenInput | setoranUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: setoranCreateManyDosenInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutDosenInput | setoranUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutDosenInput | setoranUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type log_setoran_hafalanUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput> | log_setoran_hafalanCreateWithoutDosenInput[] | log_setoran_hafalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutDosenInput | log_setoran_hafalanCreateOrConnectWithoutDosenInput[]
    upsert?: log_setoran_hafalanUpsertWithWhereUniqueWithoutDosenInput | log_setoran_hafalanUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: log_setoran_hafalanCreateManyDosenInputEnvelope
    set?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    disconnect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    delete?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    update?: log_setoran_hafalanUpdateWithWhereUniqueWithoutDosenInput | log_setoran_hafalanUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: log_setoran_hafalanUpdateManyWithWhereWithoutDosenInput | log_setoran_hafalanUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
  }

  export type dosenCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<dosenCreateWithoutMahasiswaInput, dosenUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: dosenCreateOrConnectWithoutMahasiswaInput
    connect?: dosenWhereUniqueInput
  }

  export type setoranCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput> | setoranCreateWithoutMahasiswaInput[] | setoranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutMahasiswaInput | setoranCreateOrConnectWithoutMahasiswaInput[]
    createMany?: setoranCreateManyMahasiswaInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type log_setoran_hafalanCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput> | log_setoran_hafalanCreateWithoutMahasiswaInput[] | log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput | log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: log_setoran_hafalanCreateManyMahasiswaInputEnvelope
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
  }

  export type setoranUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput> | setoranCreateWithoutMahasiswaInput[] | setoranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutMahasiswaInput | setoranCreateOrConnectWithoutMahasiswaInput[]
    createMany?: setoranCreateManyMahasiswaInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type log_setoran_hafalanUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput> | log_setoran_hafalanCreateWithoutMahasiswaInput[] | log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput | log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: log_setoran_hafalanCreateManyMahasiswaInputEnvelope
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
  }

  export type dosenUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<dosenCreateWithoutMahasiswaInput, dosenUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: dosenCreateOrConnectWithoutMahasiswaInput
    upsert?: dosenUpsertWithoutMahasiswaInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutMahasiswaInput, dosenUpdateWithoutMahasiswaInput>, dosenUncheckedUpdateWithoutMahasiswaInput>
  }

  export type setoranUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput> | setoranCreateWithoutMahasiswaInput[] | setoranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutMahasiswaInput | setoranCreateOrConnectWithoutMahasiswaInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutMahasiswaInput | setoranUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: setoranCreateManyMahasiswaInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutMahasiswaInput | setoranUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutMahasiswaInput | setoranUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type log_setoran_hafalanUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput> | log_setoran_hafalanCreateWithoutMahasiswaInput[] | log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput | log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: log_setoran_hafalanUpsertWithWhereUniqueWithoutMahasiswaInput | log_setoran_hafalanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: log_setoran_hafalanCreateManyMahasiswaInputEnvelope
    set?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    disconnect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    delete?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    update?: log_setoran_hafalanUpdateWithWhereUniqueWithoutMahasiswaInput | log_setoran_hafalanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: log_setoran_hafalanUpdateManyWithWhereWithoutMahasiswaInput | log_setoran_hafalanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
  }

  export type setoranUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput> | setoranCreateWithoutMahasiswaInput[] | setoranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutMahasiswaInput | setoranCreateOrConnectWithoutMahasiswaInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutMahasiswaInput | setoranUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: setoranCreateManyMahasiswaInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutMahasiswaInput | setoranUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutMahasiswaInput | setoranUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput> | log_setoran_hafalanCreateWithoutMahasiswaInput[] | log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput | log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: log_setoran_hafalanUpsertWithWhereUniqueWithoutMahasiswaInput | log_setoran_hafalanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: log_setoran_hafalanCreateManyMahasiswaInputEnvelope
    set?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    disconnect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    delete?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    connect?: log_setoran_hafalanWhereUniqueInput | log_setoran_hafalanWhereUniqueInput[]
    update?: log_setoran_hafalanUpdateWithWhereUniqueWithoutMahasiswaInput | log_setoran_hafalanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: log_setoran_hafalanUpdateManyWithWhereWithoutMahasiswaInput | log_setoran_hafalanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
  }

  export type mahasiswaCreateNestedOneWithoutSetoranInput = {
    create?: XOR<mahasiswaCreateWithoutSetoranInput, mahasiswaUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutSetoranInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutSetoranInput = {
    create?: XOR<dosenCreateWithoutSetoranInput, dosenUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: dosenCreateOrConnectWithoutSetoranInput
    connect?: dosenWhereUniqueInput
  }

  export type komponen_setoranCreateNestedOneWithoutSetoranInput = {
    create?: XOR<komponen_setoranCreateWithoutSetoranInput, komponen_setoranUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: komponen_setoranCreateOrConnectWithoutSetoranInput
    connect?: komponen_setoranWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type mahasiswaUpdateOneRequiredWithoutSetoranNestedInput = {
    create?: XOR<mahasiswaCreateWithoutSetoranInput, mahasiswaUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutSetoranInput
    upsert?: mahasiswaUpsertWithoutSetoranInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutSetoranInput, mahasiswaUpdateWithoutSetoranInput>, mahasiswaUncheckedUpdateWithoutSetoranInput>
  }

  export type dosenUpdateOneRequiredWithoutSetoranNestedInput = {
    create?: XOR<dosenCreateWithoutSetoranInput, dosenUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: dosenCreateOrConnectWithoutSetoranInput
    upsert?: dosenUpsertWithoutSetoranInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutSetoranInput, dosenUpdateWithoutSetoranInput>, dosenUncheckedUpdateWithoutSetoranInput>
  }

  export type komponen_setoranUpdateOneRequiredWithoutSetoranNestedInput = {
    create?: XOR<komponen_setoranCreateWithoutSetoranInput, komponen_setoranUncheckedCreateWithoutSetoranInput>
    connectOrCreate?: komponen_setoranCreateOrConnectWithoutSetoranInput
    upsert?: komponen_setoranUpsertWithoutSetoranInput
    connect?: komponen_setoranWhereUniqueInput
    update?: XOR<XOR<komponen_setoranUpdateToOneWithWhereWithoutSetoranInput, komponen_setoranUpdateWithoutSetoranInput>, komponen_setoranUncheckedUpdateWithoutSetoranInput>
  }

  export type setoranCreateNestedManyWithoutKomponen_setoranInput = {
    create?: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput> | setoranCreateWithoutKomponen_setoranInput[] | setoranUncheckedCreateWithoutKomponen_setoranInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutKomponen_setoranInput | setoranCreateOrConnectWithoutKomponen_setoranInput[]
    createMany?: setoranCreateManyKomponen_setoranInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type setoranUncheckedCreateNestedManyWithoutKomponen_setoranInput = {
    create?: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput> | setoranCreateWithoutKomponen_setoranInput[] | setoranUncheckedCreateWithoutKomponen_setoranInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutKomponen_setoranInput | setoranCreateOrConnectWithoutKomponen_setoranInput[]
    createMany?: setoranCreateManyKomponen_setoranInputEnvelope
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput = {
    set?: $Enums.type_jenis_komponen_setoran
  }

  export type NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput = {
    set?: $Enums.type_label_komponen_setoran | null
  }

  export type setoranUpdateManyWithoutKomponen_setoranNestedInput = {
    create?: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput> | setoranCreateWithoutKomponen_setoranInput[] | setoranUncheckedCreateWithoutKomponen_setoranInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutKomponen_setoranInput | setoranCreateOrConnectWithoutKomponen_setoranInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutKomponen_setoranInput | setoranUpsertWithWhereUniqueWithoutKomponen_setoranInput[]
    createMany?: setoranCreateManyKomponen_setoranInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutKomponen_setoranInput | setoranUpdateWithWhereUniqueWithoutKomponen_setoranInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutKomponen_setoranInput | setoranUpdateManyWithWhereWithoutKomponen_setoranInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type setoranUncheckedUpdateManyWithoutKomponen_setoranNestedInput = {
    create?: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput> | setoranCreateWithoutKomponen_setoranInput[] | setoranUncheckedCreateWithoutKomponen_setoranInput[]
    connectOrCreate?: setoranCreateOrConnectWithoutKomponen_setoranInput | setoranCreateOrConnectWithoutKomponen_setoranInput[]
    upsert?: setoranUpsertWithWhereUniqueWithoutKomponen_setoranInput | setoranUpsertWithWhereUniqueWithoutKomponen_setoranInput[]
    createMany?: setoranCreateManyKomponen_setoranInputEnvelope
    set?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    disconnect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    delete?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    connect?: setoranWhereUniqueInput | setoranWhereUniqueInput[]
    update?: setoranUpdateWithWhereUniqueWithoutKomponen_setoranInput | setoranUpdateWithWhereUniqueWithoutKomponen_setoranInput[]
    updateMany?: setoranUpdateManyWithWhereWithoutKomponen_setoranInput | setoranUpdateManyWithWhereWithoutKomponen_setoranInput[]
    deleteMany?: setoranScalarWhereInput | setoranScalarWhereInput[]
  }

  export type mahasiswaCreateNestedOneWithoutLog_setoran_hafalanInput = {
    create?: XOR<mahasiswaCreateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedCreateWithoutLog_setoran_hafalanInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutLog_setoran_hafalanInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutLog_setoran_hafalanInput = {
    create?: XOR<dosenCreateWithoutLog_setoran_hafalanInput, dosenUncheckedCreateWithoutLog_setoran_hafalanInput>
    connectOrCreate?: dosenCreateOrConnectWithoutLog_setoran_hafalanInput
    connect?: dosenWhereUniqueInput
  }

  export type Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput = {
    set?: $Enums.type_aksi_log_setoran_hafalan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type mahasiswaUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput = {
    create?: XOR<mahasiswaCreateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedCreateWithoutLog_setoran_hafalanInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutLog_setoran_hafalanInput
    upsert?: mahasiswaUpsertWithoutLog_setoran_hafalanInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutLog_setoran_hafalanInput, mahasiswaUpdateWithoutLog_setoran_hafalanInput>, mahasiswaUncheckedUpdateWithoutLog_setoran_hafalanInput>
  }

  export type dosenUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput = {
    create?: XOR<dosenCreateWithoutLog_setoran_hafalanInput, dosenUncheckedCreateWithoutLog_setoran_hafalanInput>
    connectOrCreate?: dosenCreateOrConnectWithoutLog_setoran_hafalanInput
    upsert?: dosenUpsertWithoutLog_setoran_hafalanInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutLog_setoran_hafalanInput, dosenUpdateWithoutLog_setoran_hafalanInput>, dosenUncheckedUpdateWithoutLog_setoran_hafalanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel = never> = {
    equals?: $Enums.type_jenis_komponen_setoran | Enumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    in?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel> | $Enums.type_jenis_komponen_setoran
  }

  export type NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.type_label_komponen_setoran | Enumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    in?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel> | $Enums.type_label_komponen_setoran | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumtype_jenis_komponen_setoranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_jenis_komponen_setoran | Enumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    in?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_jenis_komponen_setoran[] | ListEnumtype_jenis_komponen_setoranFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_jenis_komponen_setoranWithAggregatesFilter<$PrismaModel> | $Enums.type_jenis_komponen_setoran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel>
    _max?: NestedEnumtype_jenis_komponen_setoranFilter<$PrismaModel>
  }

  export type NestedEnumtype_label_komponen_setoranNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_label_komponen_setoran | Enumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    in?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type_label_komponen_setoran[] | ListEnumtype_label_komponen_setoranFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtype_label_komponen_setoranNullableWithAggregatesFilter<$PrismaModel> | $Enums.type_label_komponen_setoran | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel>
    _max?: NestedEnumtype_label_komponen_setoranNullableFilter<$PrismaModel>
  }

  export type NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel = never> = {
    equals?: $Enums.type_aksi_log_setoran_hafalan | Enumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    in?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel> | $Enums.type_aksi_log_setoran_hafalan
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumtype_aksi_log_setoran_hafalanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_aksi_log_setoran_hafalan | Enumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    in?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_aksi_log_setoran_hafalan[] | ListEnumtype_aksi_log_setoran_hafalanFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_aksi_log_setoran_hafalanWithAggregatesFilter<$PrismaModel> | $Enums.type_aksi_log_setoran_hafalan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel>
    _max?: NestedEnumtype_aksi_log_setoran_hafalanFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type mahasiswaCreateWithoutDosenInput = {
    nim: string
    nama: string
    email: string
    setoran?: setoranCreateNestedManyWithoutMahasiswaInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutDosenInput = {
    nim: string
    nama: string
    email: string
    setoran?: setoranUncheckedCreateNestedManyWithoutMahasiswaInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutDosenInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput>
  }

  export type mahasiswaCreateManyDosenInputEnvelope = {
    data: mahasiswaCreateManyDosenInput | mahasiswaCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type setoranCreateWithoutDosenInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    mahasiswa: mahasiswaCreateNestedOneWithoutSetoranInput
    komponen_setoran: komponen_setoranCreateNestedOneWithoutSetoranInput
  }

  export type setoranUncheckedCreateWithoutDosenInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    id_komponen_setoran: string
  }

  export type setoranCreateOrConnectWithoutDosenInput = {
    where: setoranWhereUniqueInput
    create: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput>
  }

  export type setoranCreateManyDosenInputEnvelope = {
    data: setoranCreateManyDosenInput | setoranCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type log_setoran_hafalanCreateWithoutDosenInput = {
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    mahasiswa: mahasiswaCreateNestedOneWithoutLog_setoran_hafalanInput
  }

  export type log_setoran_hafalanUncheckedCreateWithoutDosenInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nim: string
  }

  export type log_setoran_hafalanCreateOrConnectWithoutDosenInput = {
    where: log_setoran_hafalanWhereUniqueInput
    create: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput>
  }

  export type log_setoran_hafalanCreateManyDosenInputEnvelope = {
    data: log_setoran_hafalanCreateManyDosenInput | log_setoran_hafalanCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type mahasiswaUpsertWithWhereUniqueWithoutDosenInput = {
    where: mahasiswaWhereUniqueInput
    update: XOR<mahasiswaUpdateWithoutDosenInput, mahasiswaUncheckedUpdateWithoutDosenInput>
    create: XOR<mahasiswaCreateWithoutDosenInput, mahasiswaUncheckedCreateWithoutDosenInput>
  }

  export type mahasiswaUpdateWithWhereUniqueWithoutDosenInput = {
    where: mahasiswaWhereUniqueInput
    data: XOR<mahasiswaUpdateWithoutDosenInput, mahasiswaUncheckedUpdateWithoutDosenInput>
  }

  export type mahasiswaUpdateManyWithWhereWithoutDosenInput = {
    where: mahasiswaScalarWhereInput
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyWithoutDosenInput>
  }

  export type mahasiswaScalarWhereInput = {
    AND?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
    OR?: mahasiswaScalarWhereInput[]
    NOT?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
    nim?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    email?: StringFilter<"mahasiswa"> | string
    nip?: StringFilter<"mahasiswa"> | string
  }

  export type setoranUpsertWithWhereUniqueWithoutDosenInput = {
    where: setoranWhereUniqueInput
    update: XOR<setoranUpdateWithoutDosenInput, setoranUncheckedUpdateWithoutDosenInput>
    create: XOR<setoranCreateWithoutDosenInput, setoranUncheckedCreateWithoutDosenInput>
  }

  export type setoranUpdateWithWhereUniqueWithoutDosenInput = {
    where: setoranWhereUniqueInput
    data: XOR<setoranUpdateWithoutDosenInput, setoranUncheckedUpdateWithoutDosenInput>
  }

  export type setoranUpdateManyWithWhereWithoutDosenInput = {
    where: setoranScalarWhereInput
    data: XOR<setoranUpdateManyMutationInput, setoranUncheckedUpdateManyWithoutDosenInput>
  }

  export type setoranScalarWhereInput = {
    AND?: setoranScalarWhereInput | setoranScalarWhereInput[]
    OR?: setoranScalarWhereInput[]
    NOT?: setoranScalarWhereInput | setoranScalarWhereInput[]
    id?: UuidFilter<"setoran"> | string
    tgl_setoran?: DateTimeNullableFilter<"setoran"> | Date | string | null
    tgl_validasi?: DateTimeNullableFilter<"setoran"> | Date | string | null
    nim?: StringFilter<"setoran"> | string
    nip?: StringFilter<"setoran"> | string
    id_komponen_setoran?: UuidFilter<"setoran"> | string
  }

  export type log_setoran_hafalanUpsertWithWhereUniqueWithoutDosenInput = {
    where: log_setoran_hafalanWhereUniqueInput
    update: XOR<log_setoran_hafalanUpdateWithoutDosenInput, log_setoran_hafalanUncheckedUpdateWithoutDosenInput>
    create: XOR<log_setoran_hafalanCreateWithoutDosenInput, log_setoran_hafalanUncheckedCreateWithoutDosenInput>
  }

  export type log_setoran_hafalanUpdateWithWhereUniqueWithoutDosenInput = {
    where: log_setoran_hafalanWhereUniqueInput
    data: XOR<log_setoran_hafalanUpdateWithoutDosenInput, log_setoran_hafalanUncheckedUpdateWithoutDosenInput>
  }

  export type log_setoran_hafalanUpdateManyWithWhereWithoutDosenInput = {
    where: log_setoran_hafalanScalarWhereInput
    data: XOR<log_setoran_hafalanUpdateManyMutationInput, log_setoran_hafalanUncheckedUpdateManyWithoutDosenInput>
  }

  export type log_setoran_hafalanScalarWhereInput = {
    AND?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
    OR?: log_setoran_hafalanScalarWhereInput[]
    NOT?: log_setoran_hafalanScalarWhereInput | log_setoran_hafalanScalarWhereInput[]
    id?: IntFilter<"log_setoran_hafalan"> | number
    keterangan?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFilter<"log_setoran_hafalan"> | $Enums.type_aksi_log_setoran_hafalan
    ip?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    user_agent?: StringNullableFilter<"log_setoran_hafalan"> | string | null
    timestamp?: DateTimeFilter<"log_setoran_hafalan"> | Date | string
    nim?: StringFilter<"log_setoran_hafalan"> | string
    nip?: StringFilter<"log_setoran_hafalan"> | string
  }

  export type dosenCreateWithoutMahasiswaInput = {
    nip: string
    nama: string
    email: string
    setoran?: setoranCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutMahasiswaInput = {
    nip: string
    nama: string
    email: string
    setoran?: setoranUncheckedCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutMahasiswaInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutMahasiswaInput, dosenUncheckedCreateWithoutMahasiswaInput>
  }

  export type setoranCreateWithoutMahasiswaInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    dosen: dosenCreateNestedOneWithoutSetoranInput
    komponen_setoran: komponen_setoranCreateNestedOneWithoutSetoranInput
  }

  export type setoranUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nip: string
    id_komponen_setoran: string
  }

  export type setoranCreateOrConnectWithoutMahasiswaInput = {
    where: setoranWhereUniqueInput
    create: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput>
  }

  export type setoranCreateManyMahasiswaInputEnvelope = {
    data: setoranCreateManyMahasiswaInput | setoranCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type log_setoran_hafalanCreateWithoutMahasiswaInput = {
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    dosen: dosenCreateNestedOneWithoutLog_setoran_hafalanInput
  }

  export type log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nip: string
  }

  export type log_setoran_hafalanCreateOrConnectWithoutMahasiswaInput = {
    where: log_setoran_hafalanWhereUniqueInput
    create: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput>
  }

  export type log_setoran_hafalanCreateManyMahasiswaInputEnvelope = {
    data: log_setoran_hafalanCreateManyMahasiswaInput | log_setoran_hafalanCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type dosenUpsertWithoutMahasiswaInput = {
    update: XOR<dosenUpdateWithoutMahasiswaInput, dosenUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<dosenCreateWithoutMahasiswaInput, dosenUncheckedCreateWithoutMahasiswaInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutMahasiswaInput, dosenUncheckedUpdateWithoutMahasiswaInput>
  }

  export type dosenUpdateWithoutMahasiswaInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutMahasiswaInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUncheckedUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type setoranUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: setoranWhereUniqueInput
    update: XOR<setoranUpdateWithoutMahasiswaInput, setoranUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<setoranCreateWithoutMahasiswaInput, setoranUncheckedCreateWithoutMahasiswaInput>
  }

  export type setoranUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: setoranWhereUniqueInput
    data: XOR<setoranUpdateWithoutMahasiswaInput, setoranUncheckedUpdateWithoutMahasiswaInput>
  }

  export type setoranUpdateManyWithWhereWithoutMahasiswaInput = {
    where: setoranScalarWhereInput
    data: XOR<setoranUpdateManyMutationInput, setoranUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type log_setoran_hafalanUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: log_setoran_hafalanWhereUniqueInput
    update: XOR<log_setoran_hafalanUpdateWithoutMahasiswaInput, log_setoran_hafalanUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<log_setoran_hafalanCreateWithoutMahasiswaInput, log_setoran_hafalanUncheckedCreateWithoutMahasiswaInput>
  }

  export type log_setoran_hafalanUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: log_setoran_hafalanWhereUniqueInput
    data: XOR<log_setoran_hafalanUpdateWithoutMahasiswaInput, log_setoran_hafalanUncheckedUpdateWithoutMahasiswaInput>
  }

  export type log_setoran_hafalanUpdateManyWithWhereWithoutMahasiswaInput = {
    where: log_setoran_hafalanScalarWhereInput
    data: XOR<log_setoran_hafalanUpdateManyMutationInput, log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type mahasiswaCreateWithoutSetoranInput = {
    nim: string
    nama: string
    email: string
    dosen: dosenCreateNestedOneWithoutMahasiswaInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutSetoranInput = {
    nim: string
    nama: string
    email: string
    nip: string
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutSetoranInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutSetoranInput, mahasiswaUncheckedCreateWithoutSetoranInput>
  }

  export type dosenCreateWithoutSetoranInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutSetoranInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutDosenInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutSetoranInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutSetoranInput, dosenUncheckedCreateWithoutSetoranInput>
  }

  export type komponen_setoranCreateWithoutSetoranInput = {
    id?: string
    nama: string
    external_id?: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label?: $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranUncheckedCreateWithoutSetoranInput = {
    id?: string
    nama: string
    external_id?: string | null
    jenis: $Enums.type_jenis_komponen_setoran
    label?: $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranCreateOrConnectWithoutSetoranInput = {
    where: komponen_setoranWhereUniqueInput
    create: XOR<komponen_setoranCreateWithoutSetoranInput, komponen_setoranUncheckedCreateWithoutSetoranInput>
  }

  export type mahasiswaUpsertWithoutSetoranInput = {
    update: XOR<mahasiswaUpdateWithoutSetoranInput, mahasiswaUncheckedUpdateWithoutSetoranInput>
    create: XOR<mahasiswaCreateWithoutSetoranInput, mahasiswaUncheckedCreateWithoutSetoranInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutSetoranInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutSetoranInput, mahasiswaUncheckedUpdateWithoutSetoranInput>
  }

  export type mahasiswaUpdateWithoutSetoranInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dosen?: dosenUpdateOneRequiredWithoutMahasiswaNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutSetoranInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenUpsertWithoutSetoranInput = {
    update: XOR<dosenUpdateWithoutSetoranInput, dosenUncheckedUpdateWithoutSetoranInput>
    create: XOR<dosenCreateWithoutSetoranInput, dosenUncheckedCreateWithoutSetoranInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutSetoranInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutSetoranInput, dosenUncheckedUpdateWithoutSetoranInput>
  }

  export type dosenUpdateWithoutSetoranInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutSetoranInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutDosenNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type komponen_setoranUpsertWithoutSetoranInput = {
    update: XOR<komponen_setoranUpdateWithoutSetoranInput, komponen_setoranUncheckedUpdateWithoutSetoranInput>
    create: XOR<komponen_setoranCreateWithoutSetoranInput, komponen_setoranUncheckedCreateWithoutSetoranInput>
    where?: komponen_setoranWhereInput
  }

  export type komponen_setoranUpdateToOneWithWhereWithoutSetoranInput = {
    where?: komponen_setoranWhereInput
    data: XOR<komponen_setoranUpdateWithoutSetoranInput, komponen_setoranUncheckedUpdateWithoutSetoranInput>
  }

  export type komponen_setoranUpdateWithoutSetoranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
  }

  export type komponen_setoranUncheckedUpdateWithoutSetoranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: Enumtype_jenis_komponen_setoranFieldUpdateOperationsInput | $Enums.type_jenis_komponen_setoran
    label?: NullableEnumtype_label_komponen_setoranFieldUpdateOperationsInput | $Enums.type_label_komponen_setoran | null
  }

  export type setoranCreateWithoutKomponen_setoranInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    mahasiswa: mahasiswaCreateNestedOneWithoutSetoranInput
    dosen: dosenCreateNestedOneWithoutSetoranInput
  }

  export type setoranUncheckedCreateWithoutKomponen_setoranInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    nip: string
  }

  export type setoranCreateOrConnectWithoutKomponen_setoranInput = {
    where: setoranWhereUniqueInput
    create: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput>
  }

  export type setoranCreateManyKomponen_setoranInputEnvelope = {
    data: setoranCreateManyKomponen_setoranInput | setoranCreateManyKomponen_setoranInput[]
    skipDuplicates?: boolean
  }

  export type setoranUpsertWithWhereUniqueWithoutKomponen_setoranInput = {
    where: setoranWhereUniqueInput
    update: XOR<setoranUpdateWithoutKomponen_setoranInput, setoranUncheckedUpdateWithoutKomponen_setoranInput>
    create: XOR<setoranCreateWithoutKomponen_setoranInput, setoranUncheckedCreateWithoutKomponen_setoranInput>
  }

  export type setoranUpdateWithWhereUniqueWithoutKomponen_setoranInput = {
    where: setoranWhereUniqueInput
    data: XOR<setoranUpdateWithoutKomponen_setoranInput, setoranUncheckedUpdateWithoutKomponen_setoranInput>
  }

  export type setoranUpdateManyWithWhereWithoutKomponen_setoranInput = {
    where: setoranScalarWhereInput
    data: XOR<setoranUpdateManyMutationInput, setoranUncheckedUpdateManyWithoutKomponen_setoranInput>
  }

  export type mahasiswaCreateWithoutLog_setoran_hafalanInput = {
    nim: string
    nama: string
    email: string
    dosen: dosenCreateNestedOneWithoutMahasiswaInput
    setoran?: setoranCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutLog_setoran_hafalanInput = {
    nim: string
    nama: string
    email: string
    nip: string
    setoran?: setoranUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutLog_setoran_hafalanInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedCreateWithoutLog_setoran_hafalanInput>
  }

  export type dosenCreateWithoutLog_setoran_hafalanInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaCreateNestedManyWithoutDosenInput
    setoran?: setoranCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutLog_setoran_hafalanInput = {
    nip: string
    nama: string
    email: string
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutDosenInput
    setoran?: setoranUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutLog_setoran_hafalanInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutLog_setoran_hafalanInput, dosenUncheckedCreateWithoutLog_setoran_hafalanInput>
  }

  export type mahasiswaUpsertWithoutLog_setoran_hafalanInput = {
    update: XOR<mahasiswaUpdateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedUpdateWithoutLog_setoran_hafalanInput>
    create: XOR<mahasiswaCreateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedCreateWithoutLog_setoran_hafalanInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutLog_setoran_hafalanInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutLog_setoran_hafalanInput, mahasiswaUncheckedUpdateWithoutLog_setoran_hafalanInput>
  }

  export type mahasiswaUpdateWithoutLog_setoran_hafalanInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dosen?: dosenUpdateOneRequiredWithoutMahasiswaNestedInput
    setoran?: setoranUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutLog_setoran_hafalanInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenUpsertWithoutLog_setoran_hafalanInput = {
    update: XOR<dosenUpdateWithoutLog_setoran_hafalanInput, dosenUncheckedUpdateWithoutLog_setoran_hafalanInput>
    create: XOR<dosenCreateWithoutLog_setoran_hafalanInput, dosenUncheckedCreateWithoutLog_setoran_hafalanInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutLog_setoran_hafalanInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutLog_setoran_hafalanInput, dosenUncheckedUpdateWithoutLog_setoran_hafalanInput>
  }

  export type dosenUpdateWithoutLog_setoran_hafalanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUpdateManyWithoutDosenNestedInput
    setoran?: setoranUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutLog_setoran_hafalanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutDosenNestedInput
    setoran?: setoranUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type mahasiswaCreateManyDosenInput = {
    nim: string
    nama: string
    email: string
  }

  export type setoranCreateManyDosenInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    id_komponen_setoran: string
  }

  export type log_setoran_hafalanCreateManyDosenInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nim: string
  }

  export type mahasiswaUpdateWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUpdateManyWithoutMahasiswaNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    setoran?: setoranUncheckedUpdateManyWithoutMahasiswaNestedInput
    log_setoran_hafalan?: log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateManyWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type setoranUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutSetoranNestedInput
    komponen_setoran?: komponen_setoranUpdateOneRequiredWithoutSetoranNestedInput
  }

  export type setoranUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type setoranUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type log_setoran_hafalanUpdateWithoutDosenInput = {
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput
  }

  export type log_setoran_hafalanUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type log_setoran_hafalanUncheckedUpdateManyWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type setoranCreateManyMahasiswaInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nip: string
    id_komponen_setoran: string
  }

  export type log_setoran_hafalanCreateManyMahasiswaInput = {
    id?: number
    keterangan?: string | null
    aksi: $Enums.type_aksi_log_setoran_hafalan
    ip?: string | null
    user_agent?: string | null
    timestamp?: Date | string
    nip: string
  }

  export type setoranUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneRequiredWithoutSetoranNestedInput
    komponen_setoran?: komponen_setoranUpdateOneRequiredWithoutSetoranNestedInput
  }

  export type setoranUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nip?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type setoranUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nip?: StringFieldUpdateOperationsInput | string
    id_komponen_setoran?: StringFieldUpdateOperationsInput | string
  }

  export type log_setoran_hafalanUpdateWithoutMahasiswaInput = {
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: dosenUpdateOneRequiredWithoutLog_setoran_hafalanNestedInput
  }

  export type log_setoran_hafalanUncheckedUpdateWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type log_setoran_hafalanUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    aksi?: Enumtype_aksi_log_setoran_hafalanFieldUpdateOperationsInput | $Enums.type_aksi_log_setoran_hafalan
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type setoranCreateManyKomponen_setoranInput = {
    id?: string
    tgl_setoran?: Date | string | null
    tgl_validasi?: Date | string | null
    nim: string
    nip: string
  }

  export type setoranUpdateWithoutKomponen_setoranInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutSetoranNestedInput
    dosen?: dosenUpdateOneRequiredWithoutSetoranNestedInput
  }

  export type setoranUncheckedUpdateWithoutKomponen_setoranInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type setoranUncheckedUpdateManyWithoutKomponen_setoranInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgl_setoran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_validasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}