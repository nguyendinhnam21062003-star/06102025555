
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
 * Model auth_accounts
 * 
 */
export type auth_accounts = $Result.DefaultSelection<Prisma.$auth_accountsPayload>
/**
 * Model document_fields
 * 
 */
export type document_fields = $Result.DefaultSelection<Prisma.$document_fieldsPayload>
/**
 * Model document_subjects
 * 
 */
export type document_subjects = $Result.DefaultSelection<Prisma.$document_subjectsPayload>
/**
 * Model documents
 * 
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model fields
 * 
 */
export type fields = $Result.DefaultSelection<Prisma.$fieldsPayload>
/**
 * Model subject_fields
 * 
 */
export type subject_fields = $Result.DefaultSelection<Prisma.$subject_fieldsPayload>
/**
 * Model subjects
 * 
 */
export type subjects = $Result.DefaultSelection<Prisma.$subjectsPayload>
/**
 * Model user_academic_fields
 * 
 */
export type user_academic_fields = $Result.DefaultSelection<Prisma.$user_academic_fieldsPayload>
/**
 * Model user_subjects
 * 
 */
export type user_subjects = $Result.DefaultSelection<Prisma.$user_subjectsPayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auth_accounts
 * const auth_accounts = await prisma.auth_accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Auth_accounts
   * const auth_accounts = await prisma.auth_accounts.findMany()
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
   * `prisma.auth_accounts`: Exposes CRUD operations for the **auth_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_accounts
    * const auth_accounts = await prisma.auth_accounts.findMany()
    * ```
    */
  get auth_accounts(): Prisma.auth_accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document_fields`: Exposes CRUD operations for the **document_fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_fields
    * const document_fields = await prisma.document_fields.findMany()
    * ```
    */
  get document_fields(): Prisma.document_fieldsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document_subjects`: Exposes CRUD operations for the **document_subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_subjects
    * const document_subjects = await prisma.document_subjects.findMany()
    * ```
    */
  get document_subjects(): Prisma.document_subjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fields`: Exposes CRUD operations for the **fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.fields.findMany()
    * ```
    */
  get fields(): Prisma.fieldsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject_fields`: Exposes CRUD operations for the **subject_fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subject_fields
    * const subject_fields = await prisma.subject_fields.findMany()
    * ```
    */
  get subject_fields(): Prisma.subject_fieldsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.subjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_academic_fields`: Exposes CRUD operations for the **user_academic_fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_academic_fields
    * const user_academic_fields = await prisma.user_academic_fields.findMany()
    * ```
    */
  get user_academic_fields(): Prisma.user_academic_fieldsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_subjects`: Exposes CRUD operations for the **user_subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_subjects
    * const user_subjects = await prisma.user_subjects.findMany()
    * ```
    */
  get user_subjects(): Prisma.user_subjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    auth_accounts: 'auth_accounts',
    document_fields: 'document_fields',
    document_subjects: 'document_subjects',
    documents: 'documents',
    fields: 'fields',
    subject_fields: 'subject_fields',
    subjects: 'subjects',
    user_academic_fields: 'user_academic_fields',
    user_subjects: 'user_subjects',
    users: 'users'
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
      modelProps: "auth_accounts" | "document_fields" | "document_subjects" | "documents" | "fields" | "subject_fields" | "subjects" | "user_academic_fields" | "user_subjects" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth_accounts: {
        payload: Prisma.$auth_accountsPayload<ExtArgs>
        fields: Prisma.auth_accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          findFirst: {
            args: Prisma.auth_accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          findMany: {
            args: Prisma.auth_accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>[]
          }
          create: {
            args: Prisma.auth_accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          createMany: {
            args: Prisma.auth_accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>[]
          }
          delete: {
            args: Prisma.auth_accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          update: {
            args: Prisma.auth_accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          deleteMany: {
            args: Prisma.auth_accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>[]
          }
          upsert: {
            args: Prisma.auth_accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountsPayload>
          }
          aggregate: {
            args: Prisma.Auth_accountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_accounts>
          }
          groupBy: {
            args: Prisma.auth_accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_accountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_accountsCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_accountsCountAggregateOutputType> | number
          }
        }
      }
      document_fields: {
        payload: Prisma.$document_fieldsPayload<ExtArgs>
        fields: Prisma.document_fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          findFirst: {
            args: Prisma.document_fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          findMany: {
            args: Prisma.document_fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          create: {
            args: Prisma.document_fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          createMany: {
            args: Prisma.document_fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.document_fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          delete: {
            args: Prisma.document_fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          update: {
            args: Prisma.document_fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          deleteMany: {
            args: Prisma.document_fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.document_fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          upsert: {
            args: Prisma.document_fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          aggregate: {
            args: Prisma.Document_fieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_fields>
          }
          groupBy: {
            args: Prisma.document_fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_fieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_fieldsCountAggregateOutputType> | number
          }
        }
      }
      document_subjects: {
        payload: Prisma.$document_subjectsPayload<ExtArgs>
        fields: Prisma.document_subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          findFirst: {
            args: Prisma.document_subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          findMany: {
            args: Prisma.document_subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>[]
          }
          create: {
            args: Prisma.document_subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          createMany: {
            args: Prisma.document_subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.document_subjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>[]
          }
          delete: {
            args: Prisma.document_subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          update: {
            args: Prisma.document_subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          deleteMany: {
            args: Prisma.document_subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.document_subjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>[]
          }
          upsert: {
            args: Prisma.document_subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_subjectsPayload>
          }
          aggregate: {
            args: Prisma.Document_subjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_subjects>
          }
          groupBy: {
            args: Prisma.document_subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_subjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_subjectsCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      fields: {
        payload: Prisma.$fieldsPayload<ExtArgs>
        fields: Prisma.fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          findFirst: {
            args: Prisma.fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          findMany: {
            args: Prisma.fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          create: {
            args: Prisma.fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          createMany: {
            args: Prisma.fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          delete: {
            args: Prisma.fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          update: {
            args: Prisma.fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          deleteMany: {
            args: Prisma.fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>[]
          }
          upsert: {
            args: Prisma.fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldsPayload>
          }
          aggregate: {
            args: Prisma.FieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFields>
          }
          groupBy: {
            args: Prisma.fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<FieldsCountAggregateOutputType> | number
          }
        }
      }
      subject_fields: {
        payload: Prisma.$subject_fieldsPayload<ExtArgs>
        fields: Prisma.subject_fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subject_fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subject_fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          findFirst: {
            args: Prisma.subject_fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subject_fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          findMany: {
            args: Prisma.subject_fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>[]
          }
          create: {
            args: Prisma.subject_fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          createMany: {
            args: Prisma.subject_fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subject_fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>[]
          }
          delete: {
            args: Prisma.subject_fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          update: {
            args: Prisma.subject_fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          deleteMany: {
            args: Prisma.subject_fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subject_fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subject_fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>[]
          }
          upsert: {
            args: Prisma.subject_fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_fieldsPayload>
          }
          aggregate: {
            args: Prisma.Subject_fieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject_fields>
          }
          groupBy: {
            args: Prisma.subject_fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Subject_fieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subject_fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<Subject_fieldsCountAggregateOutputType> | number
          }
        }
      }
      subjects: {
        payload: Prisma.$subjectsPayload<ExtArgs>
        fields: Prisma.subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findFirst: {
            args: Prisma.subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findMany: {
            args: Prisma.subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>[]
          }
          create: {
            args: Prisma.subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          createMany: {
            args: Prisma.subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>[]
          }
          delete: {
            args: Prisma.subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          update: {
            args: Prisma.subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          deleteMany: {
            args: Prisma.subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>[]
          }
          upsert: {
            args: Prisma.subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          aggregate: {
            args: Prisma.SubjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjects>
          }
          groupBy: {
            args: Prisma.subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectsCountAggregateOutputType> | number
          }
        }
      }
      user_academic_fields: {
        payload: Prisma.$user_academic_fieldsPayload<ExtArgs>
        fields: Prisma.user_academic_fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_academic_fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_academic_fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          findFirst: {
            args: Prisma.user_academic_fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_academic_fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          findMany: {
            args: Prisma.user_academic_fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>[]
          }
          create: {
            args: Prisma.user_academic_fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          createMany: {
            args: Prisma.user_academic_fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_academic_fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>[]
          }
          delete: {
            args: Prisma.user_academic_fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          update: {
            args: Prisma.user_academic_fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          deleteMany: {
            args: Prisma.user_academic_fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_academic_fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_academic_fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>[]
          }
          upsert: {
            args: Prisma.user_academic_fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_academic_fieldsPayload>
          }
          aggregate: {
            args: Prisma.User_academic_fieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_academic_fields>
          }
          groupBy: {
            args: Prisma.user_academic_fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_academic_fieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_academic_fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<User_academic_fieldsCountAggregateOutputType> | number
          }
        }
      }
      user_subjects: {
        payload: Prisma.$user_subjectsPayload<ExtArgs>
        fields: Prisma.user_subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          findFirst: {
            args: Prisma.user_subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          findMany: {
            args: Prisma.user_subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>[]
          }
          create: {
            args: Prisma.user_subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          createMany: {
            args: Prisma.user_subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_subjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>[]
          }
          delete: {
            args: Prisma.user_subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          update: {
            args: Prisma.user_subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          deleteMany: {
            args: Prisma.user_subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_subjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>[]
          }
          upsert: {
            args: Prisma.user_subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_subjectsPayload>
          }
          aggregate: {
            args: Prisma.User_subjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_subjects>
          }
          groupBy: {
            args: Prisma.user_subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_subjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<User_subjectsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    auth_accounts?: auth_accountsOmit
    document_fields?: document_fieldsOmit
    document_subjects?: document_subjectsOmit
    documents?: documentsOmit
    fields?: fieldsOmit
    subject_fields?: subject_fieldsOmit
    subjects?: subjectsOmit
    user_academic_fields?: user_academic_fieldsOmit
    user_subjects?: user_subjectsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DocumentsCountOutputType
   */

  export type DocumentsCountOutputType = {
    document_fields: number
    document_subjects: number
  }

  export type DocumentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_fields?: boolean | DocumentsCountOutputTypeCountDocument_fieldsArgs
    document_subjects?: boolean | DocumentsCountOutputTypeCountDocument_subjectsArgs
  }

  // Custom InputTypes
  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsCountOutputType
     */
    select?: DocumentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeCountDocument_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
  }

  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeCountDocument_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_subjectsWhereInput
  }


  /**
   * Count Type FieldsCountOutputType
   */

  export type FieldsCountOutputType = {
    document_fields: number
    subject_fields: number
    user_academic_fields: number
  }

  export type FieldsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_fields?: boolean | FieldsCountOutputTypeCountDocument_fieldsArgs
    subject_fields?: boolean | FieldsCountOutputTypeCountSubject_fieldsArgs
    user_academic_fields?: boolean | FieldsCountOutputTypeCountUser_academic_fieldsArgs
  }

  // Custom InputTypes
  /**
   * FieldsCountOutputType without action
   */
  export type FieldsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldsCountOutputType
     */
    select?: FieldsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldsCountOutputType without action
   */
  export type FieldsCountOutputTypeCountDocument_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
  }

  /**
   * FieldsCountOutputType without action
   */
  export type FieldsCountOutputTypeCountSubject_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_fieldsWhereInput
  }

  /**
   * FieldsCountOutputType without action
   */
  export type FieldsCountOutputTypeCountUser_academic_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_academic_fieldsWhereInput
  }


  /**
   * Count Type SubjectsCountOutputType
   */

  export type SubjectsCountOutputType = {
    document_subjects: number
    subject_fields: number
    user_subjects: number
  }

  export type SubjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_subjects?: boolean | SubjectsCountOutputTypeCountDocument_subjectsArgs
    subject_fields?: boolean | SubjectsCountOutputTypeCountSubject_fieldsArgs
    user_subjects?: boolean | SubjectsCountOutputTypeCountUser_subjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: SubjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountDocument_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_subjectsWhereInput
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountSubject_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_fieldsWhereInput
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountUser_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_subjectsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    auth_accounts: number
    documents: number
    user_academic_fields: number
    user_subjects: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_accounts?: boolean | UsersCountOutputTypeCountAuth_accountsArgs
    documents?: boolean | UsersCountOutputTypeCountDocumentsArgs
    user_academic_fields?: boolean | UsersCountOutputTypeCountUser_academic_fieldsArgs
    user_subjects?: boolean | UsersCountOutputTypeCountUser_subjectsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAuth_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_academic_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_academic_fieldsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_subjectsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model auth_accounts
   */

  export type AggregateAuth_accounts = {
    _count: Auth_accountsCountAggregateOutputType | null
    _avg: Auth_accountsAvgAggregateOutputType | null
    _sum: Auth_accountsSumAggregateOutputType | null
    _min: Auth_accountsMinAggregateOutputType | null
    _max: Auth_accountsMaxAggregateOutputType | null
  }

  export type Auth_accountsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Auth_accountsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Auth_accountsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    provider: string | null
    provider_account_id: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Auth_accountsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    provider: string | null
    provider_account_id: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Auth_accountsCountAggregateOutputType = {
    id: number
    user_id: number
    provider: number
    provider_account_id: number
    access_token: number
    refresh_token: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Auth_accountsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Auth_accountsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Auth_accountsMinAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    provider_account_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Auth_accountsMaxAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    provider_account_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Auth_accountsCountAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    provider_account_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Auth_accountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_accounts to aggregate.
     */
    where?: auth_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountsOrderByWithRelationInput | auth_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_accounts
    **/
    _count?: true | Auth_accountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_accountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_accountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_accountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_accountsMaxAggregateInputType
  }

  export type GetAuth_accountsAggregateType<T extends Auth_accountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_accounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_accounts[P]>
      : GetScalarType<T[P], AggregateAuth_accounts[P]>
  }




  export type auth_accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountsWhereInput
    orderBy?: auth_accountsOrderByWithAggregationInput | auth_accountsOrderByWithAggregationInput[]
    by: Auth_accountsScalarFieldEnum[] | Auth_accountsScalarFieldEnum
    having?: auth_accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_accountsCountAggregateInputType | true
    _avg?: Auth_accountsAvgAggregateInputType
    _sum?: Auth_accountsSumAggregateInputType
    _min?: Auth_accountsMinAggregateInputType
    _max?: Auth_accountsMaxAggregateInputType
  }

  export type Auth_accountsGroupByOutputType = {
    id: number
    user_id: number
    provider: string
    provider_account_id: string
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Auth_accountsCountAggregateOutputType | null
    _avg: Auth_accountsAvgAggregateOutputType | null
    _sum: Auth_accountsSumAggregateOutputType | null
    _min: Auth_accountsMinAggregateOutputType | null
    _max: Auth_accountsMaxAggregateOutputType | null
  }

  type GetAuth_accountsGroupByPayload<T extends auth_accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_accountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_accountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_accountsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_accountsGroupByOutputType[P]>
        }
      >
    >


  export type auth_accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    provider_account_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_accounts"]>

  export type auth_accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    provider_account_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_accounts"]>

  export type auth_accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    provider_account_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_accounts"]>

  export type auth_accountsSelectScalar = {
    id?: boolean
    user_id?: boolean
    provider?: boolean
    provider_account_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type auth_accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "provider" | "provider_account_id" | "access_token" | "refresh_token" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["auth_accounts"]>
  export type auth_accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type auth_accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type auth_accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $auth_accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_accounts"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      provider: string
      provider_account_id: string
      access_token: string | null
      refresh_token: string | null
      expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["auth_accounts"]>
    composites: {}
  }

  type auth_accountsGetPayload<S extends boolean | null | undefined | auth_accountsDefaultArgs> = $Result.GetResult<Prisma.$auth_accountsPayload, S>

  type auth_accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_accountsCountAggregateInputType | true
    }

  export interface auth_accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_accounts'], meta: { name: 'auth_accounts' } }
    /**
     * Find zero or one Auth_accounts that matches the filter.
     * @param {auth_accountsFindUniqueArgs} args - Arguments to find a Auth_accounts
     * @example
     * // Get one Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_accountsFindUniqueArgs>(args: SelectSubset<T, auth_accountsFindUniqueArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_accountsFindUniqueOrThrowArgs} args - Arguments to find a Auth_accounts
     * @example
     * // Get one Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsFindFirstArgs} args - Arguments to find a Auth_accounts
     * @example
     * // Get one Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_accountsFindFirstArgs>(args?: SelectSubset<T, auth_accountsFindFirstArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsFindFirstOrThrowArgs} args - Arguments to find a Auth_accounts
     * @example
     * // Get one Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findMany()
     * 
     * // Get first 10 Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_accountsWithIdOnly = await prisma.auth_accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_accountsFindManyArgs>(args?: SelectSubset<T, auth_accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_accounts.
     * @param {auth_accountsCreateArgs} args - Arguments to create a Auth_accounts.
     * @example
     * // Create one Auth_accounts
     * const Auth_accounts = await prisma.auth_accounts.create({
     *   data: {
     *     // ... data to create a Auth_accounts
     *   }
     * })
     * 
     */
    create<T extends auth_accountsCreateArgs>(args: SelectSubset<T, auth_accountsCreateArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_accounts.
     * @param {auth_accountsCreateManyArgs} args - Arguments to create many Auth_accounts.
     * @example
     * // Create many Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_accountsCreateManyArgs>(args?: SelectSubset<T, auth_accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_accounts and returns the data saved in the database.
     * @param {auth_accountsCreateManyAndReturnArgs} args - Arguments to create many Auth_accounts.
     * @example
     * // Create many Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_accounts and only return the `id`
     * const auth_accountsWithIdOnly = await prisma.auth_accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_accounts.
     * @param {auth_accountsDeleteArgs} args - Arguments to delete one Auth_accounts.
     * @example
     * // Delete one Auth_accounts
     * const Auth_accounts = await prisma.auth_accounts.delete({
     *   where: {
     *     // ... filter to delete one Auth_accounts
     *   }
     * })
     * 
     */
    delete<T extends auth_accountsDeleteArgs>(args: SelectSubset<T, auth_accountsDeleteArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_accounts.
     * @param {auth_accountsUpdateArgs} args - Arguments to update one Auth_accounts.
     * @example
     * // Update one Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_accountsUpdateArgs>(args: SelectSubset<T, auth_accountsUpdateArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_accounts.
     * @param {auth_accountsDeleteManyArgs} args - Arguments to filter Auth_accounts to delete.
     * @example
     * // Delete a few Auth_accounts
     * const { count } = await prisma.auth_accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_accountsDeleteManyArgs>(args?: SelectSubset<T, auth_accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_accountsUpdateManyArgs>(args: SelectSubset<T, auth_accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_accounts and returns the data updated in the database.
     * @param {auth_accountsUpdateManyAndReturnArgs} args - Arguments to update many Auth_accounts.
     * @example
     * // Update many Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_accounts and only return the `id`
     * const auth_accountsWithIdOnly = await prisma.auth_accounts.updateManyAndReturn({
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
    updateManyAndReturn<T extends auth_accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_accounts.
     * @param {auth_accountsUpsertArgs} args - Arguments to update or create a Auth_accounts.
     * @example
     * // Update or create a Auth_accounts
     * const auth_accounts = await prisma.auth_accounts.upsert({
     *   create: {
     *     // ... data to create a Auth_accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_accounts we want to update
     *   }
     * })
     */
    upsert<T extends auth_accountsUpsertArgs>(args: SelectSubset<T, auth_accountsUpsertArgs<ExtArgs>>): Prisma__auth_accountsClient<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsCountArgs} args - Arguments to filter Auth_accounts to count.
     * @example
     * // Count the number of Auth_accounts
     * const count = await prisma.auth_accounts.count({
     *   where: {
     *     // ... the filter for the Auth_accounts we want to count
     *   }
     * })
    **/
    count<T extends auth_accountsCountArgs>(
      args?: Subset<T, auth_accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_accountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_accountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_accountsAggregateArgs>(args: Subset<T, Auth_accountsAggregateArgs>): Prisma.PrismaPromise<GetAuth_accountsAggregateType<T>>

    /**
     * Group by Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountsGroupByArgs} args - Group by arguments.
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
      T extends auth_accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_accountsGroupByArgs['orderBy'] }
        : { orderBy?: auth_accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auth_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_accounts model
   */
  readonly fields: auth_accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the auth_accounts model
   */
  interface auth_accountsFieldRefs {
    readonly id: FieldRef<"auth_accounts", 'Int'>
    readonly user_id: FieldRef<"auth_accounts", 'Int'>
    readonly provider: FieldRef<"auth_accounts", 'String'>
    readonly provider_account_id: FieldRef<"auth_accounts", 'String'>
    readonly access_token: FieldRef<"auth_accounts", 'String'>
    readonly refresh_token: FieldRef<"auth_accounts", 'String'>
    readonly expires_at: FieldRef<"auth_accounts", 'DateTime'>
    readonly created_at: FieldRef<"auth_accounts", 'DateTime'>
    readonly updated_at: FieldRef<"auth_accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_accounts findUnique
   */
  export type auth_accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where: auth_accountsWhereUniqueInput
  }

  /**
   * auth_accounts findUniqueOrThrow
   */
  export type auth_accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where: auth_accountsWhereUniqueInput
  }

  /**
   * auth_accounts findFirst
   */
  export type auth_accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where?: auth_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountsOrderByWithRelationInput | auth_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_accounts.
     */
    cursor?: auth_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_accounts.
     */
    distinct?: Auth_accountsScalarFieldEnum | Auth_accountsScalarFieldEnum[]
  }

  /**
   * auth_accounts findFirstOrThrow
   */
  export type auth_accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where?: auth_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountsOrderByWithRelationInput | auth_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_accounts.
     */
    cursor?: auth_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_accounts.
     */
    distinct?: Auth_accountsScalarFieldEnum | Auth_accountsScalarFieldEnum[]
  }

  /**
   * auth_accounts findMany
   */
  export type auth_accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where?: auth_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountsOrderByWithRelationInput | auth_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_accounts.
     */
    cursor?: auth_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    distinct?: Auth_accountsScalarFieldEnum | Auth_accountsScalarFieldEnum[]
  }

  /**
   * auth_accounts create
   */
  export type auth_accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_accounts.
     */
    data: XOR<auth_accountsCreateInput, auth_accountsUncheckedCreateInput>
  }

  /**
   * auth_accounts createMany
   */
  export type auth_accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_accounts.
     */
    data: auth_accountsCreateManyInput | auth_accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_accounts createManyAndReturn
   */
  export type auth_accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * The data used to create many auth_accounts.
     */
    data: auth_accountsCreateManyInput | auth_accountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_accounts update
   */
  export type auth_accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_accounts.
     */
    data: XOR<auth_accountsUpdateInput, auth_accountsUncheckedUpdateInput>
    /**
     * Choose, which auth_accounts to update.
     */
    where: auth_accountsWhereUniqueInput
  }

  /**
   * auth_accounts updateMany
   */
  export type auth_accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_accounts.
     */
    data: XOR<auth_accountsUpdateManyMutationInput, auth_accountsUncheckedUpdateManyInput>
    /**
     * Filter which auth_accounts to update
     */
    where?: auth_accountsWhereInput
    /**
     * Limit how many auth_accounts to update.
     */
    limit?: number
  }

  /**
   * auth_accounts updateManyAndReturn
   */
  export type auth_accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * The data used to update auth_accounts.
     */
    data: XOR<auth_accountsUpdateManyMutationInput, auth_accountsUncheckedUpdateManyInput>
    /**
     * Filter which auth_accounts to update
     */
    where?: auth_accountsWhereInput
    /**
     * Limit how many auth_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_accounts upsert
   */
  export type auth_accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_accounts to update in case it exists.
     */
    where: auth_accountsWhereUniqueInput
    /**
     * In case the auth_accounts found by the `where` argument doesn't exist, create a new auth_accounts with this data.
     */
    create: XOR<auth_accountsCreateInput, auth_accountsUncheckedCreateInput>
    /**
     * In case the auth_accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_accountsUpdateInput, auth_accountsUncheckedUpdateInput>
  }

  /**
   * auth_accounts delete
   */
  export type auth_accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    /**
     * Filter which auth_accounts to delete.
     */
    where: auth_accountsWhereUniqueInput
  }

  /**
   * auth_accounts deleteMany
   */
  export type auth_accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_accounts to delete
     */
    where?: auth_accountsWhereInput
    /**
     * Limit how many auth_accounts to delete.
     */
    limit?: number
  }

  /**
   * auth_accounts without action
   */
  export type auth_accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
  }


  /**
   * Model document_fields
   */

  export type AggregateDocument_fields = {
    _count: Document_fieldsCountAggregateOutputType | null
    _avg: Document_fieldsAvgAggregateOutputType | null
    _sum: Document_fieldsSumAggregateOutputType | null
    _min: Document_fieldsMinAggregateOutputType | null
    _max: Document_fieldsMaxAggregateOutputType | null
  }

  export type Document_fieldsAvgAggregateOutputType = {
    id: number | null
    document_id: number | null
    field_id: number | null
  }

  export type Document_fieldsSumAggregateOutputType = {
    id: number | null
    document_id: number | null
    field_id: number | null
  }

  export type Document_fieldsMinAggregateOutputType = {
    id: number | null
    document_id: number | null
    field_id: number | null
    created_at: Date | null
  }

  export type Document_fieldsMaxAggregateOutputType = {
    id: number | null
    document_id: number | null
    field_id: number | null
    created_at: Date | null
  }

  export type Document_fieldsCountAggregateOutputType = {
    id: number
    document_id: number
    field_id: number
    created_at: number
    _all: number
  }


  export type Document_fieldsAvgAggregateInputType = {
    id?: true
    document_id?: true
    field_id?: true
  }

  export type Document_fieldsSumAggregateInputType = {
    id?: true
    document_id?: true
    field_id?: true
  }

  export type Document_fieldsMinAggregateInputType = {
    id?: true
    document_id?: true
    field_id?: true
    created_at?: true
  }

  export type Document_fieldsMaxAggregateInputType = {
    id?: true
    document_id?: true
    field_id?: true
    created_at?: true
  }

  export type Document_fieldsCountAggregateInputType = {
    id?: true
    document_id?: true
    field_id?: true
    created_at?: true
    _all?: true
  }

  export type Document_fieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_fields to aggregate.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_fields
    **/
    _count?: true | Document_fieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_fieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_fieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_fieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_fieldsMaxAggregateInputType
  }

  export type GetDocument_fieldsAggregateType<T extends Document_fieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_fields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_fields[P]>
      : GetScalarType<T[P], AggregateDocument_fields[P]>
  }




  export type document_fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithAggregationInput | document_fieldsOrderByWithAggregationInput[]
    by: Document_fieldsScalarFieldEnum[] | Document_fieldsScalarFieldEnum
    having?: document_fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_fieldsCountAggregateInputType | true
    _avg?: Document_fieldsAvgAggregateInputType
    _sum?: Document_fieldsSumAggregateInputType
    _min?: Document_fieldsMinAggregateInputType
    _max?: Document_fieldsMaxAggregateInputType
  }

  export type Document_fieldsGroupByOutputType = {
    id: number
    document_id: number
    field_id: number
    created_at: Date | null
    _count: Document_fieldsCountAggregateOutputType | null
    _avg: Document_fieldsAvgAggregateOutputType | null
    _sum: Document_fieldsSumAggregateOutputType | null
    _min: Document_fieldsMinAggregateOutputType | null
    _max: Document_fieldsMaxAggregateOutputType | null
  }

  type GetDocument_fieldsGroupByPayload<T extends document_fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_fieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_fieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_fieldsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_fieldsGroupByOutputType[P]>
        }
      >
    >


  export type document_fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    field_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    field_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    field_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectScalar = {
    id?: boolean
    document_id?: boolean
    field_id?: boolean
    created_at?: boolean
  }

  export type document_fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "field_id" | "created_at", ExtArgs["result"]["document_fields"]>
  export type document_fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }
  export type document_fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }
  export type document_fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    fields?: boolean | fieldsDefaultArgs<ExtArgs>
  }

  export type $document_fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_fields"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>
      fields: Prisma.$fieldsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_id: number
      field_id: number
      created_at: Date | null
    }, ExtArgs["result"]["document_fields"]>
    composites: {}
  }

  type document_fieldsGetPayload<S extends boolean | null | undefined | document_fieldsDefaultArgs> = $Result.GetResult<Prisma.$document_fieldsPayload, S>

  type document_fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<document_fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_fieldsCountAggregateInputType | true
    }

  export interface document_fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_fields'], meta: { name: 'document_fields' } }
    /**
     * Find zero or one Document_fields that matches the filter.
     * @param {document_fieldsFindUniqueArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_fieldsFindUniqueArgs>(args: SelectSubset<T, document_fieldsFindUniqueArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {document_fieldsFindUniqueOrThrowArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindFirstArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_fieldsFindFirstArgs>(args?: SelectSubset<T, document_fieldsFindFirstArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindFirstOrThrowArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_fields
     * const document_fields = await prisma.document_fields.findMany()
     * 
     * // Get first 10 Document_fields
     * const document_fields = await prisma.document_fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends document_fieldsFindManyArgs>(args?: SelectSubset<T, document_fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_fields.
     * @param {document_fieldsCreateArgs} args - Arguments to create a Document_fields.
     * @example
     * // Create one Document_fields
     * const Document_fields = await prisma.document_fields.create({
     *   data: {
     *     // ... data to create a Document_fields
     *   }
     * })
     * 
     */
    create<T extends document_fieldsCreateArgs>(args: SelectSubset<T, document_fieldsCreateArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_fields.
     * @param {document_fieldsCreateManyArgs} args - Arguments to create many Document_fields.
     * @example
     * // Create many Document_fields
     * const document_fields = await prisma.document_fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_fieldsCreateManyArgs>(args?: SelectSubset<T, document_fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Document_fields and returns the data saved in the database.
     * @param {document_fieldsCreateManyAndReturnArgs} args - Arguments to create many Document_fields.
     * @example
     * // Create many Document_fields
     * const document_fields = await prisma.document_fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Document_fields and only return the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends document_fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, document_fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document_fields.
     * @param {document_fieldsDeleteArgs} args - Arguments to delete one Document_fields.
     * @example
     * // Delete one Document_fields
     * const Document_fields = await prisma.document_fields.delete({
     *   where: {
     *     // ... filter to delete one Document_fields
     *   }
     * })
     * 
     */
    delete<T extends document_fieldsDeleteArgs>(args: SelectSubset<T, document_fieldsDeleteArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_fields.
     * @param {document_fieldsUpdateArgs} args - Arguments to update one Document_fields.
     * @example
     * // Update one Document_fields
     * const document_fields = await prisma.document_fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_fieldsUpdateArgs>(args: SelectSubset<T, document_fieldsUpdateArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_fields.
     * @param {document_fieldsDeleteManyArgs} args - Arguments to filter Document_fields to delete.
     * @example
     * // Delete a few Document_fields
     * const { count } = await prisma.document_fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_fieldsDeleteManyArgs>(args?: SelectSubset<T, document_fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_fields
     * const document_fields = await prisma.document_fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_fieldsUpdateManyArgs>(args: SelectSubset<T, document_fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_fields and returns the data updated in the database.
     * @param {document_fieldsUpdateManyAndReturnArgs} args - Arguments to update many Document_fields.
     * @example
     * // Update many Document_fields
     * const document_fields = await prisma.document_fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Document_fields and only return the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.updateManyAndReturn({
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
    updateManyAndReturn<T extends document_fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, document_fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document_fields.
     * @param {document_fieldsUpsertArgs} args - Arguments to update or create a Document_fields.
     * @example
     * // Update or create a Document_fields
     * const document_fields = await prisma.document_fields.upsert({
     *   create: {
     *     // ... data to create a Document_fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_fields we want to update
     *   }
     * })
     */
    upsert<T extends document_fieldsUpsertArgs>(args: SelectSubset<T, document_fieldsUpsertArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsCountArgs} args - Arguments to filter Document_fields to count.
     * @example
     * // Count the number of Document_fields
     * const count = await prisma.document_fields.count({
     *   where: {
     *     // ... the filter for the Document_fields we want to count
     *   }
     * })
    **/
    count<T extends document_fieldsCountArgs>(
      args?: Subset<T, document_fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_fieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_fieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Document_fieldsAggregateArgs>(args: Subset<T, Document_fieldsAggregateArgs>): Prisma.PrismaPromise<GetDocument_fieldsAggregateType<T>>

    /**
     * Group by Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsGroupByArgs} args - Group by arguments.
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
      T extends document_fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_fieldsGroupByArgs['orderBy'] }
        : { orderBy?: document_fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, document_fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_fieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_fields model
   */
  readonly fields: document_fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends documentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, documentsDefaultArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fields<T extends fieldsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, fieldsDefaultArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the document_fields model
   */
  interface document_fieldsFieldRefs {
    readonly id: FieldRef<"document_fields", 'Int'>
    readonly document_id: FieldRef<"document_fields", 'Int'>
    readonly field_id: FieldRef<"document_fields", 'Int'>
    readonly created_at: FieldRef<"document_fields", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * document_fields findUnique
   */
  export type document_fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields findUniqueOrThrow
   */
  export type document_fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields findFirst
   */
  export type document_fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_fields.
     */
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields findFirstOrThrow
   */
  export type document_fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_fields.
     */
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields findMany
   */
  export type document_fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields create
   */
  export type document_fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a document_fields.
     */
    data: XOR<document_fieldsCreateInput, document_fieldsUncheckedCreateInput>
  }

  /**
   * document_fields createMany
   */
  export type document_fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_fields.
     */
    data: document_fieldsCreateManyInput | document_fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_fields createManyAndReturn
   */
  export type document_fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many document_fields.
     */
    data: document_fieldsCreateManyInput | document_fieldsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_fields update
   */
  export type document_fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a document_fields.
     */
    data: XOR<document_fieldsUpdateInput, document_fieldsUncheckedUpdateInput>
    /**
     * Choose, which document_fields to update.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields updateMany
   */
  export type document_fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_fields.
     */
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which document_fields to update
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to update.
     */
    limit?: number
  }

  /**
   * document_fields updateManyAndReturn
   */
  export type document_fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * The data used to update document_fields.
     */
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which document_fields to update
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_fields upsert
   */
  export type document_fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the document_fields to update in case it exists.
     */
    where: document_fieldsWhereUniqueInput
    /**
     * In case the document_fields found by the `where` argument doesn't exist, create a new document_fields with this data.
     */
    create: XOR<document_fieldsCreateInput, document_fieldsUncheckedCreateInput>
    /**
     * In case the document_fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_fieldsUpdateInput, document_fieldsUncheckedUpdateInput>
  }

  /**
   * document_fields delete
   */
  export type document_fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter which document_fields to delete.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields deleteMany
   */
  export type document_fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_fields to delete
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to delete.
     */
    limit?: number
  }

  /**
   * document_fields without action
   */
  export type document_fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
  }


  /**
   * Model document_subjects
   */

  export type AggregateDocument_subjects = {
    _count: Document_subjectsCountAggregateOutputType | null
    _avg: Document_subjectsAvgAggregateOutputType | null
    _sum: Document_subjectsSumAggregateOutputType | null
    _min: Document_subjectsMinAggregateOutputType | null
    _max: Document_subjectsMaxAggregateOutputType | null
  }

  export type Document_subjectsAvgAggregateOutputType = {
    id: number | null
    document_id: number | null
    subject_id: number | null
  }

  export type Document_subjectsSumAggregateOutputType = {
    id: number | null
    document_id: number | null
    subject_id: number | null
  }

  export type Document_subjectsMinAggregateOutputType = {
    id: number | null
    document_id: number | null
    subject_id: number | null
    created_at: Date | null
  }

  export type Document_subjectsMaxAggregateOutputType = {
    id: number | null
    document_id: number | null
    subject_id: number | null
    created_at: Date | null
  }

  export type Document_subjectsCountAggregateOutputType = {
    id: number
    document_id: number
    subject_id: number
    created_at: number
    _all: number
  }


  export type Document_subjectsAvgAggregateInputType = {
    id?: true
    document_id?: true
    subject_id?: true
  }

  export type Document_subjectsSumAggregateInputType = {
    id?: true
    document_id?: true
    subject_id?: true
  }

  export type Document_subjectsMinAggregateInputType = {
    id?: true
    document_id?: true
    subject_id?: true
    created_at?: true
  }

  export type Document_subjectsMaxAggregateInputType = {
    id?: true
    document_id?: true
    subject_id?: true
    created_at?: true
  }

  export type Document_subjectsCountAggregateInputType = {
    id?: true
    document_id?: true
    subject_id?: true
    created_at?: true
    _all?: true
  }

  export type Document_subjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_subjects to aggregate.
     */
    where?: document_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_subjects to fetch.
     */
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_subjects
    **/
    _count?: true | Document_subjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_subjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_subjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_subjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_subjectsMaxAggregateInputType
  }

  export type GetDocument_subjectsAggregateType<T extends Document_subjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_subjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_subjects[P]>
      : GetScalarType<T[P], AggregateDocument_subjects[P]>
  }




  export type document_subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_subjectsWhereInput
    orderBy?: document_subjectsOrderByWithAggregationInput | document_subjectsOrderByWithAggregationInput[]
    by: Document_subjectsScalarFieldEnum[] | Document_subjectsScalarFieldEnum
    having?: document_subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_subjectsCountAggregateInputType | true
    _avg?: Document_subjectsAvgAggregateInputType
    _sum?: Document_subjectsSumAggregateInputType
    _min?: Document_subjectsMinAggregateInputType
    _max?: Document_subjectsMaxAggregateInputType
  }

  export type Document_subjectsGroupByOutputType = {
    id: number
    document_id: number
    subject_id: number
    created_at: Date | null
    _count: Document_subjectsCountAggregateOutputType | null
    _avg: Document_subjectsAvgAggregateOutputType | null
    _sum: Document_subjectsSumAggregateOutputType | null
    _min: Document_subjectsMinAggregateOutputType | null
    _max: Document_subjectsMaxAggregateOutputType | null
  }

  type GetDocument_subjectsGroupByPayload<T extends document_subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_subjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_subjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_subjectsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_subjectsGroupByOutputType[P]>
        }
      >
    >


  export type document_subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    subject_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_subjects"]>

  export type document_subjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    subject_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_subjects"]>

  export type document_subjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    subject_id?: boolean
    created_at?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_subjects"]>

  export type document_subjectsSelectScalar = {
    id?: boolean
    document_id?: boolean
    subject_id?: boolean
    created_at?: boolean
  }

  export type document_subjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "subject_id" | "created_at", ExtArgs["result"]["document_subjects"]>
  export type document_subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }
  export type document_subjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }
  export type document_subjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
  }

  export type $document_subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_subjects"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>
      subjects: Prisma.$subjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_id: number
      subject_id: number
      created_at: Date | null
    }, ExtArgs["result"]["document_subjects"]>
    composites: {}
  }

  type document_subjectsGetPayload<S extends boolean | null | undefined | document_subjectsDefaultArgs> = $Result.GetResult<Prisma.$document_subjectsPayload, S>

  type document_subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<document_subjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_subjectsCountAggregateInputType | true
    }

  export interface document_subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_subjects'], meta: { name: 'document_subjects' } }
    /**
     * Find zero or one Document_subjects that matches the filter.
     * @param {document_subjectsFindUniqueArgs} args - Arguments to find a Document_subjects
     * @example
     * // Get one Document_subjects
     * const document_subjects = await prisma.document_subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_subjectsFindUniqueArgs>(args: SelectSubset<T, document_subjectsFindUniqueArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {document_subjectsFindUniqueOrThrowArgs} args - Arguments to find a Document_subjects
     * @example
     * // Get one Document_subjects
     * const document_subjects = await prisma.document_subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsFindFirstArgs} args - Arguments to find a Document_subjects
     * @example
     * // Get one Document_subjects
     * const document_subjects = await prisma.document_subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_subjectsFindFirstArgs>(args?: SelectSubset<T, document_subjectsFindFirstArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsFindFirstOrThrowArgs} args - Arguments to find a Document_subjects
     * @example
     * // Get one Document_subjects
     * const document_subjects = await prisma.document_subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_subjects
     * const document_subjects = await prisma.document_subjects.findMany()
     * 
     * // Get first 10 Document_subjects
     * const document_subjects = await prisma.document_subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const document_subjectsWithIdOnly = await prisma.document_subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends document_subjectsFindManyArgs>(args?: SelectSubset<T, document_subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_subjects.
     * @param {document_subjectsCreateArgs} args - Arguments to create a Document_subjects.
     * @example
     * // Create one Document_subjects
     * const Document_subjects = await prisma.document_subjects.create({
     *   data: {
     *     // ... data to create a Document_subjects
     *   }
     * })
     * 
     */
    create<T extends document_subjectsCreateArgs>(args: SelectSubset<T, document_subjectsCreateArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_subjects.
     * @param {document_subjectsCreateManyArgs} args - Arguments to create many Document_subjects.
     * @example
     * // Create many Document_subjects
     * const document_subjects = await prisma.document_subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_subjectsCreateManyArgs>(args?: SelectSubset<T, document_subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Document_subjects and returns the data saved in the database.
     * @param {document_subjectsCreateManyAndReturnArgs} args - Arguments to create many Document_subjects.
     * @example
     * // Create many Document_subjects
     * const document_subjects = await prisma.document_subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Document_subjects and only return the `id`
     * const document_subjectsWithIdOnly = await prisma.document_subjects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends document_subjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, document_subjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document_subjects.
     * @param {document_subjectsDeleteArgs} args - Arguments to delete one Document_subjects.
     * @example
     * // Delete one Document_subjects
     * const Document_subjects = await prisma.document_subjects.delete({
     *   where: {
     *     // ... filter to delete one Document_subjects
     *   }
     * })
     * 
     */
    delete<T extends document_subjectsDeleteArgs>(args: SelectSubset<T, document_subjectsDeleteArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_subjects.
     * @param {document_subjectsUpdateArgs} args - Arguments to update one Document_subjects.
     * @example
     * // Update one Document_subjects
     * const document_subjects = await prisma.document_subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_subjectsUpdateArgs>(args: SelectSubset<T, document_subjectsUpdateArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_subjects.
     * @param {document_subjectsDeleteManyArgs} args - Arguments to filter Document_subjects to delete.
     * @example
     * // Delete a few Document_subjects
     * const { count } = await prisma.document_subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_subjectsDeleteManyArgs>(args?: SelectSubset<T, document_subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_subjects
     * const document_subjects = await prisma.document_subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_subjectsUpdateManyArgs>(args: SelectSubset<T, document_subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_subjects and returns the data updated in the database.
     * @param {document_subjectsUpdateManyAndReturnArgs} args - Arguments to update many Document_subjects.
     * @example
     * // Update many Document_subjects
     * const document_subjects = await prisma.document_subjects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Document_subjects and only return the `id`
     * const document_subjectsWithIdOnly = await prisma.document_subjects.updateManyAndReturn({
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
    updateManyAndReturn<T extends document_subjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, document_subjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document_subjects.
     * @param {document_subjectsUpsertArgs} args - Arguments to update or create a Document_subjects.
     * @example
     * // Update or create a Document_subjects
     * const document_subjects = await prisma.document_subjects.upsert({
     *   create: {
     *     // ... data to create a Document_subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_subjects we want to update
     *   }
     * })
     */
    upsert<T extends document_subjectsUpsertArgs>(args: SelectSubset<T, document_subjectsUpsertArgs<ExtArgs>>): Prisma__document_subjectsClient<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsCountArgs} args - Arguments to filter Document_subjects to count.
     * @example
     * // Count the number of Document_subjects
     * const count = await prisma.document_subjects.count({
     *   where: {
     *     // ... the filter for the Document_subjects we want to count
     *   }
     * })
    **/
    count<T extends document_subjectsCountArgs>(
      args?: Subset<T, document_subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_subjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_subjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Document_subjectsAggregateArgs>(args: Subset<T, Document_subjectsAggregateArgs>): Prisma.PrismaPromise<GetDocument_subjectsAggregateType<T>>

    /**
     * Group by Document_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_subjectsGroupByArgs} args - Group by arguments.
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
      T extends document_subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_subjectsGroupByArgs['orderBy'] }
        : { orderBy?: document_subjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, document_subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_subjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_subjects model
   */
  readonly fields: document_subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends documentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, documentsDefaultArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends subjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectsDefaultArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the document_subjects model
   */
  interface document_subjectsFieldRefs {
    readonly id: FieldRef<"document_subjects", 'Int'>
    readonly document_id: FieldRef<"document_subjects", 'Int'>
    readonly subject_id: FieldRef<"document_subjects", 'Int'>
    readonly created_at: FieldRef<"document_subjects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * document_subjects findUnique
   */
  export type document_subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which document_subjects to fetch.
     */
    where: document_subjectsWhereUniqueInput
  }

  /**
   * document_subjects findUniqueOrThrow
   */
  export type document_subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which document_subjects to fetch.
     */
    where: document_subjectsWhereUniqueInput
  }

  /**
   * document_subjects findFirst
   */
  export type document_subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which document_subjects to fetch.
     */
    where?: document_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_subjects to fetch.
     */
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_subjects.
     */
    cursor?: document_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_subjects.
     */
    distinct?: Document_subjectsScalarFieldEnum | Document_subjectsScalarFieldEnum[]
  }

  /**
   * document_subjects findFirstOrThrow
   */
  export type document_subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which document_subjects to fetch.
     */
    where?: document_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_subjects to fetch.
     */
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_subjects.
     */
    cursor?: document_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_subjects.
     */
    distinct?: Document_subjectsScalarFieldEnum | Document_subjectsScalarFieldEnum[]
  }

  /**
   * document_subjects findMany
   */
  export type document_subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which document_subjects to fetch.
     */
    where?: document_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_subjects to fetch.
     */
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_subjects.
     */
    cursor?: document_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_subjects.
     */
    skip?: number
    distinct?: Document_subjectsScalarFieldEnum | Document_subjectsScalarFieldEnum[]
  }

  /**
   * document_subjects create
   */
  export type document_subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a document_subjects.
     */
    data: XOR<document_subjectsCreateInput, document_subjectsUncheckedCreateInput>
  }

  /**
   * document_subjects createMany
   */
  export type document_subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_subjects.
     */
    data: document_subjectsCreateManyInput | document_subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_subjects createManyAndReturn
   */
  export type document_subjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * The data used to create many document_subjects.
     */
    data: document_subjectsCreateManyInput | document_subjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_subjects update
   */
  export type document_subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a document_subjects.
     */
    data: XOR<document_subjectsUpdateInput, document_subjectsUncheckedUpdateInput>
    /**
     * Choose, which document_subjects to update.
     */
    where: document_subjectsWhereUniqueInput
  }

  /**
   * document_subjects updateMany
   */
  export type document_subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_subjects.
     */
    data: XOR<document_subjectsUpdateManyMutationInput, document_subjectsUncheckedUpdateManyInput>
    /**
     * Filter which document_subjects to update
     */
    where?: document_subjectsWhereInput
    /**
     * Limit how many document_subjects to update.
     */
    limit?: number
  }

  /**
   * document_subjects updateManyAndReturn
   */
  export type document_subjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * The data used to update document_subjects.
     */
    data: XOR<document_subjectsUpdateManyMutationInput, document_subjectsUncheckedUpdateManyInput>
    /**
     * Filter which document_subjects to update
     */
    where?: document_subjectsWhereInput
    /**
     * Limit how many document_subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_subjects upsert
   */
  export type document_subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the document_subjects to update in case it exists.
     */
    where: document_subjectsWhereUniqueInput
    /**
     * In case the document_subjects found by the `where` argument doesn't exist, create a new document_subjects with this data.
     */
    create: XOR<document_subjectsCreateInput, document_subjectsUncheckedCreateInput>
    /**
     * In case the document_subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_subjectsUpdateInput, document_subjectsUncheckedUpdateInput>
  }

  /**
   * document_subjects delete
   */
  export type document_subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    /**
     * Filter which document_subjects to delete.
     */
    where: document_subjectsWhereUniqueInput
  }

  /**
   * document_subjects deleteMany
   */
  export type document_subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_subjects to delete
     */
    where?: document_subjectsWhereInput
    /**
     * Limit how many document_subjects to delete.
     */
    limit?: number
  }

  /**
   * document_subjects without action
   */
  export type document_subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    numeric_score: Decimal | null
    price: Decimal | null
    file_size: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    numeric_score: Decimal | null
    price: Decimal | null
    file_size: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    numeric_score: Decimal | null
    grade_band: string | null
    instructor_name: string | null
    document_type: string | null
    access_type: string | null
    price: Decimal | null
    suitable_school: string | null
    short_description: string | null
    resource_type: string | null
    resource_url: string | null
    embed_allowed: boolean | null
    mime_type: string | null
    storage_provider: string | null
    file_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    numeric_score: Decimal | null
    grade_band: string | null
    instructor_name: string | null
    document_type: string | null
    access_type: string | null
    price: Decimal | null
    suitable_school: string | null
    short_description: string | null
    resource_type: string | null
    resource_url: string | null
    embed_allowed: boolean | null
    mime_type: string | null
    storage_provider: string | null
    file_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    numeric_score: number
    grade_band: number
    instructor_name: number
    document_type: number
    access_type: number
    price: number
    suitable_school: number
    short_description: number
    resource_type: number
    resource_url: number
    embed_allowed: number
    mime_type: number
    storage_provider: number
    file_size: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    numeric_score?: true
    price?: true
    file_size?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    user_id?: true
    numeric_score?: true
    price?: true
    file_size?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    numeric_score?: true
    grade_band?: true
    instructor_name?: true
    document_type?: true
    access_type?: true
    price?: true
    suitable_school?: true
    short_description?: true
    resource_type?: true
    resource_url?: true
    embed_allowed?: true
    mime_type?: true
    storage_provider?: true
    file_size?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    numeric_score?: true
    grade_band?: true
    instructor_name?: true
    document_type?: true
    access_type?: true
    price?: true
    suitable_school?: true
    short_description?: true
    resource_type?: true
    resource_url?: true
    embed_allowed?: true
    mime_type?: true
    storage_provider?: true
    file_size?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    numeric_score?: true
    grade_band?: true
    instructor_name?: true
    document_type?: true
    access_type?: true
    price?: true
    suitable_school?: true
    short_description?: true
    resource_type?: true
    resource_url?: true
    embed_allowed?: true
    mime_type?: true
    storage_provider?: true
    file_size?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    user_id: number
    title: string
    numeric_score: Decimal | null
    grade_band: string | null
    instructor_name: string | null
    document_type: string | null
    access_type: string | null
    price: Decimal | null
    suitable_school: string | null
    short_description: string | null
    resource_type: string
    resource_url: string
    embed_allowed: boolean | null
    mime_type: string | null
    storage_provider: string | null
    file_size: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    numeric_score?: boolean
    grade_band?: boolean
    instructor_name?: boolean
    document_type?: boolean
    access_type?: boolean
    price?: boolean
    suitable_school?: boolean
    short_description?: boolean
    resource_type?: boolean
    resource_url?: boolean
    embed_allowed?: boolean
    mime_type?: boolean
    storage_provider?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_fields?: boolean | documents$document_fieldsArgs<ExtArgs>
    document_subjects?: boolean | documents$document_subjectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | DocumentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    numeric_score?: boolean
    grade_band?: boolean
    instructor_name?: boolean
    document_type?: boolean
    access_type?: boolean
    price?: boolean
    suitable_school?: boolean
    short_description?: boolean
    resource_type?: boolean
    resource_url?: boolean
    embed_allowed?: boolean
    mime_type?: boolean
    storage_provider?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    numeric_score?: boolean
    grade_band?: boolean
    instructor_name?: boolean
    document_type?: boolean
    access_type?: boolean
    price?: boolean
    suitable_school?: boolean
    short_description?: boolean
    resource_type?: boolean
    resource_url?: boolean
    embed_allowed?: boolean
    mime_type?: boolean
    storage_provider?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    numeric_score?: boolean
    grade_band?: boolean
    instructor_name?: boolean
    document_type?: boolean
    access_type?: boolean
    price?: boolean
    suitable_school?: boolean
    short_description?: boolean
    resource_type?: boolean
    resource_url?: boolean
    embed_allowed?: boolean
    mime_type?: boolean
    storage_provider?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "numeric_score" | "grade_band" | "instructor_name" | "document_type" | "access_type" | "price" | "suitable_school" | "short_description" | "resource_type" | "resource_url" | "embed_allowed" | "mime_type" | "storage_provider" | "file_size" | "created_at" | "updated_at", ExtArgs["result"]["documents"]>
  export type documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_fields?: boolean | documents$document_fieldsArgs<ExtArgs>
    document_subjects?: boolean | documents$document_subjectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | DocumentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type documentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type documentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
      document_subjects: Prisma.$document_subjectsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      numeric_score: Prisma.Decimal | null
      grade_band: string | null
      instructor_name: string | null
      document_type: string | null
      access_type: string | null
      price: Prisma.Decimal | null
      suitable_school: string | null
      short_description: string | null
      resource_type: string
      resource_url: string
      embed_allowed: boolean | null
      mime_type: string | null
      storage_provider: string | null
      file_size: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {documentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documentsCreateManyAndReturnArgs>(args?: SelectSubset<T, documentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {documentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.updateManyAndReturn({
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
    updateManyAndReturn<T extends documentsUpdateManyAndReturnArgs>(args: SelectSubset<T, documentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
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
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_fields<T extends documents$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, documents$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_subjects<T extends documents$document_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, documents$document_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the documents model
   */
  interface documentsFieldRefs {
    readonly id: FieldRef<"documents", 'Int'>
    readonly user_id: FieldRef<"documents", 'Int'>
    readonly title: FieldRef<"documents", 'String'>
    readonly numeric_score: FieldRef<"documents", 'Decimal'>
    readonly grade_band: FieldRef<"documents", 'String'>
    readonly instructor_name: FieldRef<"documents", 'String'>
    readonly document_type: FieldRef<"documents", 'String'>
    readonly access_type: FieldRef<"documents", 'String'>
    readonly price: FieldRef<"documents", 'Decimal'>
    readonly suitable_school: FieldRef<"documents", 'String'>
    readonly short_description: FieldRef<"documents", 'String'>
    readonly resource_type: FieldRef<"documents", 'String'>
    readonly resource_url: FieldRef<"documents", 'String'>
    readonly embed_allowed: FieldRef<"documents", 'Boolean'>
    readonly mime_type: FieldRef<"documents", 'String'>
    readonly storage_provider: FieldRef<"documents", 'String'>
    readonly file_size: FieldRef<"documents", 'Int'>
    readonly created_at: FieldRef<"documents", 'DateTime'>
    readonly updated_at: FieldRef<"documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents createManyAndReturn
   */
  export type documentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * documents updateManyAndReturn
   */
  export type documentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * documents.document_fields
   */
  export type documents$document_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    cursor?: document_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * documents.document_subjects
   */
  export type documents$document_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    where?: document_subjectsWhereInput
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    cursor?: document_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_subjectsScalarFieldEnum | Document_subjectsScalarFieldEnum[]
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
  }


  /**
   * Model fields
   */

  export type AggregateFields = {
    _count: FieldsCountAggregateOutputType | null
    _avg: FieldsAvgAggregateOutputType | null
    _sum: FieldsSumAggregateOutputType | null
    _min: FieldsMinAggregateOutputType | null
    _max: FieldsMaxAggregateOutputType | null
  }

  export type FieldsAvgAggregateOutputType = {
    id: number | null
  }

  export type FieldsSumAggregateOutputType = {
    id: number | null
  }

  export type FieldsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type FieldsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type FieldsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type FieldsAvgAggregateInputType = {
    id?: true
  }

  export type FieldsSumAggregateInputType = {
    id?: true
  }

  export type FieldsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type FieldsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type FieldsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type FieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fields to aggregate.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fields
    **/
    _count?: true | FieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldsMaxAggregateInputType
  }

  export type GetFieldsAggregateType<T extends FieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateFields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFields[P]>
      : GetScalarType<T[P], AggregateFields[P]>
  }




  export type fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldsWhereInput
    orderBy?: fieldsOrderByWithAggregationInput | fieldsOrderByWithAggregationInput[]
    by: FieldsScalarFieldEnum[] | FieldsScalarFieldEnum
    having?: fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldsCountAggregateInputType | true
    _avg?: FieldsAvgAggregateInputType
    _sum?: FieldsSumAggregateInputType
    _min?: FieldsMinAggregateInputType
    _max?: FieldsMaxAggregateInputType
  }

  export type FieldsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    _count: FieldsCountAggregateOutputType | null
    _avg: FieldsAvgAggregateOutputType | null
    _sum: FieldsSumAggregateOutputType | null
    _min: FieldsMinAggregateOutputType | null
    _max: FieldsMaxAggregateOutputType | null
  }

  type GetFieldsGroupByPayload<T extends fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldsGroupByOutputType[P]>
            : GetScalarType<T[P], FieldsGroupByOutputType[P]>
        }
      >
    >


  export type fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    document_fields?: boolean | fields$document_fieldsArgs<ExtArgs>
    subject_fields?: boolean | fields$subject_fieldsArgs<ExtArgs>
    user_academic_fields?: boolean | fields$user_academic_fieldsArgs<ExtArgs>
    _count?: boolean | FieldsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["fields"]>

  export type fieldsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["fields"]>
  export type fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_fields?: boolean | fields$document_fieldsArgs<ExtArgs>
    subject_fields?: boolean | fields$subject_fieldsArgs<ExtArgs>
    user_academic_fields?: boolean | fields$user_academic_fieldsArgs<ExtArgs>
    _count?: boolean | FieldsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fields"
    objects: {
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
      subject_fields: Prisma.$subject_fieldsPayload<ExtArgs>[]
      user_academic_fields: Prisma.$user_academic_fieldsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["fields"]>
    composites: {}
  }

  type fieldsGetPayload<S extends boolean | null | undefined | fieldsDefaultArgs> = $Result.GetResult<Prisma.$fieldsPayload, S>

  type fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldsCountAggregateInputType | true
    }

  export interface fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fields'], meta: { name: 'fields' } }
    /**
     * Find zero or one Fields that matches the filter.
     * @param {fieldsFindUniqueArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fieldsFindUniqueArgs>(args: SelectSubset<T, fieldsFindUniqueArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fieldsFindUniqueOrThrowArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindFirstArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fieldsFindFirstArgs>(args?: SelectSubset<T, fieldsFindFirstArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindFirstOrThrowArgs} args - Arguments to find a Fields
     * @example
     * // Get one Fields
     * const fields = await prisma.fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.fields.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldsWithIdOnly = await prisma.fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fieldsFindManyArgs>(args?: SelectSubset<T, fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fields.
     * @param {fieldsCreateArgs} args - Arguments to create a Fields.
     * @example
     * // Create one Fields
     * const Fields = await prisma.fields.create({
     *   data: {
     *     // ... data to create a Fields
     *   }
     * })
     * 
     */
    create<T extends fieldsCreateArgs>(args: SelectSubset<T, fieldsCreateArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {fieldsCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const fields = await prisma.fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fieldsCreateManyArgs>(args?: SelectSubset<T, fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {fieldsCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const fields = await prisma.fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldsWithIdOnly = await prisma.fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fields.
     * @param {fieldsDeleteArgs} args - Arguments to delete one Fields.
     * @example
     * // Delete one Fields
     * const Fields = await prisma.fields.delete({
     *   where: {
     *     // ... filter to delete one Fields
     *   }
     * })
     * 
     */
    delete<T extends fieldsDeleteArgs>(args: SelectSubset<T, fieldsDeleteArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fields.
     * @param {fieldsUpdateArgs} args - Arguments to update one Fields.
     * @example
     * // Update one Fields
     * const fields = await prisma.fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fieldsUpdateArgs>(args: SelectSubset<T, fieldsUpdateArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {fieldsDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fieldsDeleteManyArgs>(args?: SelectSubset<T, fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const fields = await prisma.fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fieldsUpdateManyArgs>(args: SelectSubset<T, fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {fieldsUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const fields = await prisma.fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldsWithIdOnly = await prisma.fields.updateManyAndReturn({
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
    updateManyAndReturn<T extends fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fields.
     * @param {fieldsUpsertArgs} args - Arguments to update or create a Fields.
     * @example
     * // Update or create a Fields
     * const fields = await prisma.fields.upsert({
     *   create: {
     *     // ... data to create a Fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fields we want to update
     *   }
     * })
     */
    upsert<T extends fieldsUpsertArgs>(args: SelectSubset<T, fieldsUpsertArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.fields.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends fieldsCountArgs>(
      args?: Subset<T, fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldsAggregateArgs>(args: Subset<T, FieldsAggregateArgs>): Prisma.PrismaPromise<GetFieldsAggregateType<T>>

    /**
     * Group by Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldsGroupByArgs} args - Group by arguments.
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
      T extends fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fieldsGroupByArgs['orderBy'] }
        : { orderBy?: fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fields model
   */
  readonly fields: fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_fields<T extends fields$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, fields$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subject_fields<T extends fields$subject_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, fields$subject_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_academic_fields<T extends fields$user_academic_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, fields$user_academic_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the fields model
   */
  interface fieldsFieldRefs {
    readonly id: FieldRef<"fields", 'Int'>
    readonly name: FieldRef<"fields", 'String'>
    readonly description: FieldRef<"fields", 'String'>
    readonly created_at: FieldRef<"fields", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fields findUnique
   */
  export type fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields findUniqueOrThrow
   */
  export type fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields findFirst
   */
  export type fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields findFirstOrThrow
   */
  export type fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields findMany
   */
  export type fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldsOrderByWithRelationInput | fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fields.
     */
    cursor?: fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    distinct?: FieldsScalarFieldEnum | FieldsScalarFieldEnum[]
  }

  /**
   * fields create
   */
  export type fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a fields.
     */
    data: XOR<fieldsCreateInput, fieldsUncheckedCreateInput>
  }

  /**
   * fields createMany
   */
  export type fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fields.
     */
    data: fieldsCreateManyInput | fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fields createManyAndReturn
   */
  export type fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many fields.
     */
    data: fieldsCreateManyInput | fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fields update
   */
  export type fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a fields.
     */
    data: XOR<fieldsUpdateInput, fieldsUncheckedUpdateInput>
    /**
     * Choose, which fields to update.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields updateMany
   */
  export type fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fields.
     */
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
  }

  /**
   * fields updateManyAndReturn
   */
  export type fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * The data used to update fields.
     */
    data: XOR<fieldsUpdateManyMutationInput, fieldsUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
  }

  /**
   * fields upsert
   */
  export type fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the fields to update in case it exists.
     */
    where: fieldsWhereUniqueInput
    /**
     * In case the fields found by the `where` argument doesn't exist, create a new fields with this data.
     */
    create: XOR<fieldsCreateInput, fieldsUncheckedCreateInput>
    /**
     * In case the fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fieldsUpdateInput, fieldsUncheckedUpdateInput>
  }

  /**
   * fields delete
   */
  export type fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    /**
     * Filter which fields to delete.
     */
    where: fieldsWhereUniqueInput
  }

  /**
   * fields deleteMany
   */
  export type fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fields to delete
     */
    where?: fieldsWhereInput
    /**
     * Limit how many fields to delete.
     */
    limit?: number
  }

  /**
   * fields.document_fields
   */
  export type fields$document_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    cursor?: document_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * fields.subject_fields
   */
  export type fields$subject_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    where?: subject_fieldsWhereInput
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    cursor?: subject_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_fieldsScalarFieldEnum | Subject_fieldsScalarFieldEnum[]
  }

  /**
   * fields.user_academic_fields
   */
  export type fields$user_academic_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    where?: user_academic_fieldsWhereInput
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    cursor?: user_academic_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_academic_fieldsScalarFieldEnum | User_academic_fieldsScalarFieldEnum[]
  }

  /**
   * fields without action
   */
  export type fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
  }


  /**
   * Model subject_fields
   */

  export type AggregateSubject_fields = {
    _count: Subject_fieldsCountAggregateOutputType | null
    _avg: Subject_fieldsAvgAggregateOutputType | null
    _sum: Subject_fieldsSumAggregateOutputType | null
    _min: Subject_fieldsMinAggregateOutputType | null
    _max: Subject_fieldsMaxAggregateOutputType | null
  }

  export type Subject_fieldsAvgAggregateOutputType = {
    id: number | null
    subject_id: number | null
    field_id: number | null
  }

  export type Subject_fieldsSumAggregateOutputType = {
    id: number | null
    subject_id: number | null
    field_id: number | null
  }

  export type Subject_fieldsMinAggregateOutputType = {
    id: number | null
    subject_id: number | null
    field_id: number | null
    created_at: Date | null
  }

  export type Subject_fieldsMaxAggregateOutputType = {
    id: number | null
    subject_id: number | null
    field_id: number | null
    created_at: Date | null
  }

  export type Subject_fieldsCountAggregateOutputType = {
    id: number
    subject_id: number
    field_id: number
    created_at: number
    _all: number
  }


  export type Subject_fieldsAvgAggregateInputType = {
    id?: true
    subject_id?: true
    field_id?: true
  }

  export type Subject_fieldsSumAggregateInputType = {
    id?: true
    subject_id?: true
    field_id?: true
  }

  export type Subject_fieldsMinAggregateInputType = {
    id?: true
    subject_id?: true
    field_id?: true
    created_at?: true
  }

  export type Subject_fieldsMaxAggregateInputType = {
    id?: true
    subject_id?: true
    field_id?: true
    created_at?: true
  }

  export type Subject_fieldsCountAggregateInputType = {
    id?: true
    subject_id?: true
    field_id?: true
    created_at?: true
    _all?: true
  }

  export type Subject_fieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_fields to aggregate.
     */
    where?: subject_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_fields to fetch.
     */
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subject_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subject_fields
    **/
    _count?: true | Subject_fieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subject_fieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subject_fieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subject_fieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subject_fieldsMaxAggregateInputType
  }

  export type GetSubject_fieldsAggregateType<T extends Subject_fieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject_fields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject_fields[P]>
      : GetScalarType<T[P], AggregateSubject_fields[P]>
  }




  export type subject_fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_fieldsWhereInput
    orderBy?: subject_fieldsOrderByWithAggregationInput | subject_fieldsOrderByWithAggregationInput[]
    by: Subject_fieldsScalarFieldEnum[] | Subject_fieldsScalarFieldEnum
    having?: subject_fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subject_fieldsCountAggregateInputType | true
    _avg?: Subject_fieldsAvgAggregateInputType
    _sum?: Subject_fieldsSumAggregateInputType
    _min?: Subject_fieldsMinAggregateInputType
    _max?: Subject_fieldsMaxAggregateInputType
  }

  export type Subject_fieldsGroupByOutputType = {
    id: number
    subject_id: number | null
    field_id: number | null
    created_at: Date | null
    _count: Subject_fieldsCountAggregateOutputType | null
    _avg: Subject_fieldsAvgAggregateOutputType | null
    _sum: Subject_fieldsSumAggregateOutputType | null
    _min: Subject_fieldsMinAggregateOutputType | null
    _max: Subject_fieldsMaxAggregateOutputType | null
  }

  type GetSubject_fieldsGroupByPayload<T extends subject_fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subject_fieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subject_fieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subject_fieldsGroupByOutputType[P]>
            : GetScalarType<T[P], Subject_fieldsGroupByOutputType[P]>
        }
      >
    >


  export type subject_fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    field_id?: boolean
    created_at?: boolean
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }, ExtArgs["result"]["subject_fields"]>

  export type subject_fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    field_id?: boolean
    created_at?: boolean
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }, ExtArgs["result"]["subject_fields"]>

  export type subject_fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    field_id?: boolean
    created_at?: boolean
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }, ExtArgs["result"]["subject_fields"]>

  export type subject_fieldsSelectScalar = {
    id?: boolean
    subject_id?: boolean
    field_id?: boolean
    created_at?: boolean
  }

  export type subject_fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject_id" | "field_id" | "created_at", ExtArgs["result"]["subject_fields"]>
  export type subject_fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }
  export type subject_fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }
  export type subject_fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | subject_fields$fieldsArgs<ExtArgs>
    subjects?: boolean | subject_fields$subjectsArgs<ExtArgs>
  }

  export type $subject_fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject_fields"
    objects: {
      fields: Prisma.$fieldsPayload<ExtArgs> | null
      subjects: Prisma.$subjectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject_id: number | null
      field_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["subject_fields"]>
    composites: {}
  }

  type subject_fieldsGetPayload<S extends boolean | null | undefined | subject_fieldsDefaultArgs> = $Result.GetResult<Prisma.$subject_fieldsPayload, S>

  type subject_fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subject_fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Subject_fieldsCountAggregateInputType | true
    }

  export interface subject_fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject_fields'], meta: { name: 'subject_fields' } }
    /**
     * Find zero or one Subject_fields that matches the filter.
     * @param {subject_fieldsFindUniqueArgs} args - Arguments to find a Subject_fields
     * @example
     * // Get one Subject_fields
     * const subject_fields = await prisma.subject_fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subject_fieldsFindUniqueArgs>(args: SelectSubset<T, subject_fieldsFindUniqueArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject_fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subject_fieldsFindUniqueOrThrowArgs} args - Arguments to find a Subject_fields
     * @example
     * // Get one Subject_fields
     * const subject_fields = await prisma.subject_fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subject_fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, subject_fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsFindFirstArgs} args - Arguments to find a Subject_fields
     * @example
     * // Get one Subject_fields
     * const subject_fields = await prisma.subject_fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subject_fieldsFindFirstArgs>(args?: SelectSubset<T, subject_fieldsFindFirstArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsFindFirstOrThrowArgs} args - Arguments to find a Subject_fields
     * @example
     * // Get one Subject_fields
     * const subject_fields = await prisma.subject_fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subject_fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, subject_fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subject_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subject_fields
     * const subject_fields = await prisma.subject_fields.findMany()
     * 
     * // Get first 10 Subject_fields
     * const subject_fields = await prisma.subject_fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subject_fieldsWithIdOnly = await prisma.subject_fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subject_fieldsFindManyArgs>(args?: SelectSubset<T, subject_fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject_fields.
     * @param {subject_fieldsCreateArgs} args - Arguments to create a Subject_fields.
     * @example
     * // Create one Subject_fields
     * const Subject_fields = await prisma.subject_fields.create({
     *   data: {
     *     // ... data to create a Subject_fields
     *   }
     * })
     * 
     */
    create<T extends subject_fieldsCreateArgs>(args: SelectSubset<T, subject_fieldsCreateArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subject_fields.
     * @param {subject_fieldsCreateManyArgs} args - Arguments to create many Subject_fields.
     * @example
     * // Create many Subject_fields
     * const subject_fields = await prisma.subject_fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subject_fieldsCreateManyArgs>(args?: SelectSubset<T, subject_fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subject_fields and returns the data saved in the database.
     * @param {subject_fieldsCreateManyAndReturnArgs} args - Arguments to create many Subject_fields.
     * @example
     * // Create many Subject_fields
     * const subject_fields = await prisma.subject_fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subject_fields and only return the `id`
     * const subject_fieldsWithIdOnly = await prisma.subject_fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subject_fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, subject_fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject_fields.
     * @param {subject_fieldsDeleteArgs} args - Arguments to delete one Subject_fields.
     * @example
     * // Delete one Subject_fields
     * const Subject_fields = await prisma.subject_fields.delete({
     *   where: {
     *     // ... filter to delete one Subject_fields
     *   }
     * })
     * 
     */
    delete<T extends subject_fieldsDeleteArgs>(args: SelectSubset<T, subject_fieldsDeleteArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject_fields.
     * @param {subject_fieldsUpdateArgs} args - Arguments to update one Subject_fields.
     * @example
     * // Update one Subject_fields
     * const subject_fields = await prisma.subject_fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subject_fieldsUpdateArgs>(args: SelectSubset<T, subject_fieldsUpdateArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subject_fields.
     * @param {subject_fieldsDeleteManyArgs} args - Arguments to filter Subject_fields to delete.
     * @example
     * // Delete a few Subject_fields
     * const { count } = await prisma.subject_fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subject_fieldsDeleteManyArgs>(args?: SelectSubset<T, subject_fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subject_fields
     * const subject_fields = await prisma.subject_fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subject_fieldsUpdateManyArgs>(args: SelectSubset<T, subject_fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_fields and returns the data updated in the database.
     * @param {subject_fieldsUpdateManyAndReturnArgs} args - Arguments to update many Subject_fields.
     * @example
     * // Update many Subject_fields
     * const subject_fields = await prisma.subject_fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subject_fields and only return the `id`
     * const subject_fieldsWithIdOnly = await prisma.subject_fields.updateManyAndReturn({
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
    updateManyAndReturn<T extends subject_fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, subject_fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject_fields.
     * @param {subject_fieldsUpsertArgs} args - Arguments to update or create a Subject_fields.
     * @example
     * // Update or create a Subject_fields
     * const subject_fields = await prisma.subject_fields.upsert({
     *   create: {
     *     // ... data to create a Subject_fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject_fields we want to update
     *   }
     * })
     */
    upsert<T extends subject_fieldsUpsertArgs>(args: SelectSubset<T, subject_fieldsUpsertArgs<ExtArgs>>): Prisma__subject_fieldsClient<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subject_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsCountArgs} args - Arguments to filter Subject_fields to count.
     * @example
     * // Count the number of Subject_fields
     * const count = await prisma.subject_fields.count({
     *   where: {
     *     // ... the filter for the Subject_fields we want to count
     *   }
     * })
    **/
    count<T extends subject_fieldsCountArgs>(
      args?: Subset<T, subject_fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subject_fieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subject_fieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Subject_fieldsAggregateArgs>(args: Subset<T, Subject_fieldsAggregateArgs>): Prisma.PrismaPromise<GetSubject_fieldsAggregateType<T>>

    /**
     * Group by Subject_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_fieldsGroupByArgs} args - Group by arguments.
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
      T extends subject_fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subject_fieldsGroupByArgs['orderBy'] }
        : { orderBy?: subject_fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subject_fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubject_fieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject_fields model
   */
  readonly fields: subject_fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject_fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subject_fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends subject_fields$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, subject_fields$fieldsArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subjects<T extends subject_fields$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, subject_fields$subjectsArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subject_fields model
   */
  interface subject_fieldsFieldRefs {
    readonly id: FieldRef<"subject_fields", 'Int'>
    readonly subject_id: FieldRef<"subject_fields", 'Int'>
    readonly field_id: FieldRef<"subject_fields", 'Int'>
    readonly created_at: FieldRef<"subject_fields", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subject_fields findUnique
   */
  export type subject_fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which subject_fields to fetch.
     */
    where: subject_fieldsWhereUniqueInput
  }

  /**
   * subject_fields findUniqueOrThrow
   */
  export type subject_fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which subject_fields to fetch.
     */
    where: subject_fieldsWhereUniqueInput
  }

  /**
   * subject_fields findFirst
   */
  export type subject_fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which subject_fields to fetch.
     */
    where?: subject_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_fields to fetch.
     */
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_fields.
     */
    cursor?: subject_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_fields.
     */
    distinct?: Subject_fieldsScalarFieldEnum | Subject_fieldsScalarFieldEnum[]
  }

  /**
   * subject_fields findFirstOrThrow
   */
  export type subject_fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which subject_fields to fetch.
     */
    where?: subject_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_fields to fetch.
     */
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_fields.
     */
    cursor?: subject_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_fields.
     */
    distinct?: Subject_fieldsScalarFieldEnum | Subject_fieldsScalarFieldEnum[]
  }

  /**
   * subject_fields findMany
   */
  export type subject_fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which subject_fields to fetch.
     */
    where?: subject_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_fields to fetch.
     */
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subject_fields.
     */
    cursor?: subject_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_fields.
     */
    skip?: number
    distinct?: Subject_fieldsScalarFieldEnum | Subject_fieldsScalarFieldEnum[]
  }

  /**
   * subject_fields create
   */
  export type subject_fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a subject_fields.
     */
    data?: XOR<subject_fieldsCreateInput, subject_fieldsUncheckedCreateInput>
  }

  /**
   * subject_fields createMany
   */
  export type subject_fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subject_fields.
     */
    data: subject_fieldsCreateManyInput | subject_fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject_fields createManyAndReturn
   */
  export type subject_fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many subject_fields.
     */
    data: subject_fieldsCreateManyInput | subject_fieldsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_fields update
   */
  export type subject_fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a subject_fields.
     */
    data: XOR<subject_fieldsUpdateInput, subject_fieldsUncheckedUpdateInput>
    /**
     * Choose, which subject_fields to update.
     */
    where: subject_fieldsWhereUniqueInput
  }

  /**
   * subject_fields updateMany
   */
  export type subject_fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subject_fields.
     */
    data: XOR<subject_fieldsUpdateManyMutationInput, subject_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which subject_fields to update
     */
    where?: subject_fieldsWhereInput
    /**
     * Limit how many subject_fields to update.
     */
    limit?: number
  }

  /**
   * subject_fields updateManyAndReturn
   */
  export type subject_fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * The data used to update subject_fields.
     */
    data: XOR<subject_fieldsUpdateManyMutationInput, subject_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which subject_fields to update
     */
    where?: subject_fieldsWhereInput
    /**
     * Limit how many subject_fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_fields upsert
   */
  export type subject_fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the subject_fields to update in case it exists.
     */
    where: subject_fieldsWhereUniqueInput
    /**
     * In case the subject_fields found by the `where` argument doesn't exist, create a new subject_fields with this data.
     */
    create: XOR<subject_fieldsCreateInput, subject_fieldsUncheckedCreateInput>
    /**
     * In case the subject_fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subject_fieldsUpdateInput, subject_fieldsUncheckedUpdateInput>
  }

  /**
   * subject_fields delete
   */
  export type subject_fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    /**
     * Filter which subject_fields to delete.
     */
    where: subject_fieldsWhereUniqueInput
  }

  /**
   * subject_fields deleteMany
   */
  export type subject_fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_fields to delete
     */
    where?: subject_fieldsWhereInput
    /**
     * Limit how many subject_fields to delete.
     */
    limit?: number
  }

  /**
   * subject_fields.fields
   */
  export type subject_fields$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    where?: fieldsWhereInput
  }

  /**
   * subject_fields.subjects
   */
  export type subject_fields$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
  }

  /**
   * subject_fields without action
   */
  export type subject_fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
  }


  /**
   * Model subjects
   */

  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectsSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type SubjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type SubjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type SubjectsAvgAggregateInputType = {
    id?: true
  }

  export type SubjectsSumAggregateInputType = {
    id?: true
  }

  export type SubjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type SubjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type SubjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type SubjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to aggregate.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithAggregationInput | subjectsOrderByWithAggregationInput[]
    by: SubjectsScalarFieldEnum[] | SubjectsScalarFieldEnum
    having?: subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _avg?: SubjectsAvgAggregateInputType
    _sum?: SubjectsSumAggregateInputType
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }

  export type SubjectsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    document_subjects?: boolean | subjects$document_subjectsArgs<ExtArgs>
    subject_fields?: boolean | subjects$subject_fieldsArgs<ExtArgs>
    user_subjects?: boolean | subjects$user_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjects"]>

  export type subjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["subjects"]>

  export type subjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["subjects"]>

  export type subjectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type subjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["subjects"]>
  export type subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_subjects?: boolean | subjects$document_subjectsArgs<ExtArgs>
    subject_fields?: boolean | subjects$subject_fieldsArgs<ExtArgs>
    user_subjects?: boolean | subjects$user_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type subjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subjects"
    objects: {
      document_subjects: Prisma.$document_subjectsPayload<ExtArgs>[]
      subject_fields: Prisma.$subject_fieldsPayload<ExtArgs>[]
      user_subjects: Prisma.$user_subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["subjects"]>
    composites: {}
  }

  type subjectsGetPayload<S extends boolean | null | undefined | subjectsDefaultArgs> = $Result.GetResult<Prisma.$subjectsPayload, S>

  type subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectsCountAggregateInputType | true
    }

  export interface subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subjects'], meta: { name: 'subjects' } }
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {subjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectsFindUniqueArgs>(args: SelectSubset<T, subjectsFindUniqueArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectsFindFirstArgs>(args?: SelectSubset<T, subjectsFindFirstArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectsFindManyArgs>(args?: SelectSubset<T, subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subjects.
     * @param {subjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
     */
    create<T extends subjectsCreateArgs>(args: SelectSubset<T, subjectsCreateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectsCreateManyArgs>(args?: SelectSubset<T, subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectsCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, subjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subjects.
     * @param {subjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
     */
    delete<T extends subjectsDeleteArgs>(args: SelectSubset<T, subjectsDeleteArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subjects.
     * @param {subjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectsUpdateArgs>(args: SelectSubset<T, subjectsUpdateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectsDeleteManyArgs>(args?: SelectSubset<T, subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectsUpdateManyArgs>(args: SelectSubset<T, subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {subjectsUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.updateManyAndReturn({
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
    updateManyAndReturn<T extends subjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, subjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subjects.
     * @param {subjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends subjectsUpsertArgs>(args: SelectSubset<T, subjectsUpsertArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectsCountArgs>(
      args?: Subset<T, subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsGroupByArgs} args - Group by arguments.
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
      T extends subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectsGroupByArgs['orderBy'] }
        : { orderBy?: subjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subjects model
   */
  readonly fields: subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_subjects<T extends subjects$document_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$document_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subject_fields<T extends subjects$subject_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$subject_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_subjects<T extends subjects$user_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$user_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the subjects model
   */
  interface subjectsFieldRefs {
    readonly id: FieldRef<"subjects", 'Int'>
    readonly name: FieldRef<"subjects", 'String'>
    readonly description: FieldRef<"subjects", 'String'>
    readonly created_at: FieldRef<"subjects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subjects findUnique
   */
  export type subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findUniqueOrThrow
   */
  export type subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findFirst
   */
  export type subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findFirstOrThrow
   */
  export type subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findMany
   */
  export type subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects create
   */
  export type subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a subjects.
     */
    data: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
  }

  /**
   * subjects createMany
   */
  export type subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectsCreateManyInput | subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subjects createManyAndReturn
   */
  export type subjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * The data used to create many subjects.
     */
    data: subjectsCreateManyInput | subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subjects update
   */
  export type subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a subjects.
     */
    data: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
    /**
     * Choose, which subjects to update.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects updateMany
   */
  export type subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subjects updateManyAndReturn
   */
  export type subjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subjects upsert
   */
  export type subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the subjects to update in case it exists.
     */
    where: subjectsWhereUniqueInput
    /**
     * In case the subjects found by the `where` argument doesn't exist, create a new subjects with this data.
     */
    create: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
    /**
     * In case the subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
  }

  /**
   * subjects delete
   */
  export type subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter which subjects to delete.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects deleteMany
   */
  export type subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subjects.document_subjects
   */
  export type subjects$document_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_subjects
     */
    select?: document_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_subjects
     */
    omit?: document_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_subjectsInclude<ExtArgs> | null
    where?: document_subjectsWhereInput
    orderBy?: document_subjectsOrderByWithRelationInput | document_subjectsOrderByWithRelationInput[]
    cursor?: document_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_subjectsScalarFieldEnum | Document_subjectsScalarFieldEnum[]
  }

  /**
   * subjects.subject_fields
   */
  export type subjects$subject_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_fields
     */
    select?: subject_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_fields
     */
    omit?: subject_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_fieldsInclude<ExtArgs> | null
    where?: subject_fieldsWhereInput
    orderBy?: subject_fieldsOrderByWithRelationInput | subject_fieldsOrderByWithRelationInput[]
    cursor?: subject_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_fieldsScalarFieldEnum | Subject_fieldsScalarFieldEnum[]
  }

  /**
   * subjects.user_subjects
   */
  export type subjects$user_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    where?: user_subjectsWhereInput
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    cursor?: user_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_subjectsScalarFieldEnum | User_subjectsScalarFieldEnum[]
  }

  /**
   * subjects without action
   */
  export type subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
  }


  /**
   * Model user_academic_fields
   */

  export type AggregateUser_academic_fields = {
    _count: User_academic_fieldsCountAggregateOutputType | null
    _avg: User_academic_fieldsAvgAggregateOutputType | null
    _sum: User_academic_fieldsSumAggregateOutputType | null
    _min: User_academic_fieldsMinAggregateOutputType | null
    _max: User_academic_fieldsMaxAggregateOutputType | null
  }

  export type User_academic_fieldsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    field_id: number | null
    experience_years: number | null
  }

  export type User_academic_fieldsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    field_id: number | null
    experience_years: number | null
  }

  export type User_academic_fieldsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    field_id: number | null
    experience_years: number | null
    created_at: Date | null
  }

  export type User_academic_fieldsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    field_id: number | null
    experience_years: number | null
    created_at: Date | null
  }

  export type User_academic_fieldsCountAggregateOutputType = {
    id: number
    user_id: number
    field_id: number
    experience_years: number
    created_at: number
    _all: number
  }


  export type User_academic_fieldsAvgAggregateInputType = {
    id?: true
    user_id?: true
    field_id?: true
    experience_years?: true
  }

  export type User_academic_fieldsSumAggregateInputType = {
    id?: true
    user_id?: true
    field_id?: true
    experience_years?: true
  }

  export type User_academic_fieldsMinAggregateInputType = {
    id?: true
    user_id?: true
    field_id?: true
    experience_years?: true
    created_at?: true
  }

  export type User_academic_fieldsMaxAggregateInputType = {
    id?: true
    user_id?: true
    field_id?: true
    experience_years?: true
    created_at?: true
  }

  export type User_academic_fieldsCountAggregateInputType = {
    id?: true
    user_id?: true
    field_id?: true
    experience_years?: true
    created_at?: true
    _all?: true
  }

  export type User_academic_fieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_academic_fields to aggregate.
     */
    where?: user_academic_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_academic_fields to fetch.
     */
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_academic_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_academic_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_academic_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_academic_fields
    **/
    _count?: true | User_academic_fieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_academic_fieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_academic_fieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_academic_fieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_academic_fieldsMaxAggregateInputType
  }

  export type GetUser_academic_fieldsAggregateType<T extends User_academic_fieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_academic_fields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_academic_fields[P]>
      : GetScalarType<T[P], AggregateUser_academic_fields[P]>
  }




  export type user_academic_fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_academic_fieldsWhereInput
    orderBy?: user_academic_fieldsOrderByWithAggregationInput | user_academic_fieldsOrderByWithAggregationInput[]
    by: User_academic_fieldsScalarFieldEnum[] | User_academic_fieldsScalarFieldEnum
    having?: user_academic_fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_academic_fieldsCountAggregateInputType | true
    _avg?: User_academic_fieldsAvgAggregateInputType
    _sum?: User_academic_fieldsSumAggregateInputType
    _min?: User_academic_fieldsMinAggregateInputType
    _max?: User_academic_fieldsMaxAggregateInputType
  }

  export type User_academic_fieldsGroupByOutputType = {
    id: number
    user_id: number | null
    field_id: number | null
    experience_years: number | null
    created_at: Date | null
    _count: User_academic_fieldsCountAggregateOutputType | null
    _avg: User_academic_fieldsAvgAggregateOutputType | null
    _sum: User_academic_fieldsSumAggregateOutputType | null
    _min: User_academic_fieldsMinAggregateOutputType | null
    _max: User_academic_fieldsMaxAggregateOutputType | null
  }

  type GetUser_academic_fieldsGroupByPayload<T extends user_academic_fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_academic_fieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_academic_fieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_academic_fieldsGroupByOutputType[P]>
            : GetScalarType<T[P], User_academic_fieldsGroupByOutputType[P]>
        }
      >
    >


  export type user_academic_fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    field_id?: boolean
    experience_years?: boolean
    created_at?: boolean
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_academic_fields"]>

  export type user_academic_fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    field_id?: boolean
    experience_years?: boolean
    created_at?: boolean
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_academic_fields"]>

  export type user_academic_fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    field_id?: boolean
    experience_years?: boolean
    created_at?: boolean
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_academic_fields"]>

  export type user_academic_fieldsSelectScalar = {
    id?: boolean
    user_id?: boolean
    field_id?: boolean
    experience_years?: boolean
    created_at?: boolean
  }

  export type user_academic_fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "field_id" | "experience_years" | "created_at", ExtArgs["result"]["user_academic_fields"]>
  export type user_academic_fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }
  export type user_academic_fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }
  export type user_academic_fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | user_academic_fields$fieldsArgs<ExtArgs>
    users?: boolean | user_academic_fields$usersArgs<ExtArgs>
  }

  export type $user_academic_fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_academic_fields"
    objects: {
      fields: Prisma.$fieldsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      field_id: number | null
      experience_years: number | null
      created_at: Date | null
    }, ExtArgs["result"]["user_academic_fields"]>
    composites: {}
  }

  type user_academic_fieldsGetPayload<S extends boolean | null | undefined | user_academic_fieldsDefaultArgs> = $Result.GetResult<Prisma.$user_academic_fieldsPayload, S>

  type user_academic_fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_academic_fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_academic_fieldsCountAggregateInputType | true
    }

  export interface user_academic_fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_academic_fields'], meta: { name: 'user_academic_fields' } }
    /**
     * Find zero or one User_academic_fields that matches the filter.
     * @param {user_academic_fieldsFindUniqueArgs} args - Arguments to find a User_academic_fields
     * @example
     * // Get one User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_academic_fieldsFindUniqueArgs>(args: SelectSubset<T, user_academic_fieldsFindUniqueArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_academic_fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_academic_fieldsFindUniqueOrThrowArgs} args - Arguments to find a User_academic_fields
     * @example
     * // Get one User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_academic_fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_academic_fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_academic_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsFindFirstArgs} args - Arguments to find a User_academic_fields
     * @example
     * // Get one User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_academic_fieldsFindFirstArgs>(args?: SelectSubset<T, user_academic_fieldsFindFirstArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_academic_fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsFindFirstOrThrowArgs} args - Arguments to find a User_academic_fields
     * @example
     * // Get one User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_academic_fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_academic_fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_academic_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findMany()
     * 
     * // Get first 10 User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_academic_fieldsWithIdOnly = await prisma.user_academic_fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_academic_fieldsFindManyArgs>(args?: SelectSubset<T, user_academic_fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_academic_fields.
     * @param {user_academic_fieldsCreateArgs} args - Arguments to create a User_academic_fields.
     * @example
     * // Create one User_academic_fields
     * const User_academic_fields = await prisma.user_academic_fields.create({
     *   data: {
     *     // ... data to create a User_academic_fields
     *   }
     * })
     * 
     */
    create<T extends user_academic_fieldsCreateArgs>(args: SelectSubset<T, user_academic_fieldsCreateArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_academic_fields.
     * @param {user_academic_fieldsCreateManyArgs} args - Arguments to create many User_academic_fields.
     * @example
     * // Create many User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_academic_fieldsCreateManyArgs>(args?: SelectSubset<T, user_academic_fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_academic_fields and returns the data saved in the database.
     * @param {user_academic_fieldsCreateManyAndReturnArgs} args - Arguments to create many User_academic_fields.
     * @example
     * // Create many User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_academic_fields and only return the `id`
     * const user_academic_fieldsWithIdOnly = await prisma.user_academic_fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_academic_fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_academic_fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_academic_fields.
     * @param {user_academic_fieldsDeleteArgs} args - Arguments to delete one User_academic_fields.
     * @example
     * // Delete one User_academic_fields
     * const User_academic_fields = await prisma.user_academic_fields.delete({
     *   where: {
     *     // ... filter to delete one User_academic_fields
     *   }
     * })
     * 
     */
    delete<T extends user_academic_fieldsDeleteArgs>(args: SelectSubset<T, user_academic_fieldsDeleteArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_academic_fields.
     * @param {user_academic_fieldsUpdateArgs} args - Arguments to update one User_academic_fields.
     * @example
     * // Update one User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_academic_fieldsUpdateArgs>(args: SelectSubset<T, user_academic_fieldsUpdateArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_academic_fields.
     * @param {user_academic_fieldsDeleteManyArgs} args - Arguments to filter User_academic_fields to delete.
     * @example
     * // Delete a few User_academic_fields
     * const { count } = await prisma.user_academic_fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_academic_fieldsDeleteManyArgs>(args?: SelectSubset<T, user_academic_fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_academic_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_academic_fieldsUpdateManyArgs>(args: SelectSubset<T, user_academic_fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_academic_fields and returns the data updated in the database.
     * @param {user_academic_fieldsUpdateManyAndReturnArgs} args - Arguments to update many User_academic_fields.
     * @example
     * // Update many User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_academic_fields and only return the `id`
     * const user_academic_fieldsWithIdOnly = await prisma.user_academic_fields.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_academic_fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_academic_fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_academic_fields.
     * @param {user_academic_fieldsUpsertArgs} args - Arguments to update or create a User_academic_fields.
     * @example
     * // Update or create a User_academic_fields
     * const user_academic_fields = await prisma.user_academic_fields.upsert({
     *   create: {
     *     // ... data to create a User_academic_fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_academic_fields we want to update
     *   }
     * })
     */
    upsert<T extends user_academic_fieldsUpsertArgs>(args: SelectSubset<T, user_academic_fieldsUpsertArgs<ExtArgs>>): Prisma__user_academic_fieldsClient<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_academic_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsCountArgs} args - Arguments to filter User_academic_fields to count.
     * @example
     * // Count the number of User_academic_fields
     * const count = await prisma.user_academic_fields.count({
     *   where: {
     *     // ... the filter for the User_academic_fields we want to count
     *   }
     * })
    **/
    count<T extends user_academic_fieldsCountArgs>(
      args?: Subset<T, user_academic_fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_academic_fieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_academic_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_academic_fieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_academic_fieldsAggregateArgs>(args: Subset<T, User_academic_fieldsAggregateArgs>): Prisma.PrismaPromise<GetUser_academic_fieldsAggregateType<T>>

    /**
     * Group by User_academic_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_academic_fieldsGroupByArgs} args - Group by arguments.
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
      T extends user_academic_fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_academic_fieldsGroupByArgs['orderBy'] }
        : { orderBy?: user_academic_fieldsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_academic_fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_academic_fieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_academic_fields model
   */
  readonly fields: user_academic_fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_academic_fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_academic_fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends user_academic_fields$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, user_academic_fields$fieldsArgs<ExtArgs>>): Prisma__fieldsClient<$Result.GetResult<Prisma.$fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends user_academic_fields$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_academic_fields$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_academic_fields model
   */
  interface user_academic_fieldsFieldRefs {
    readonly id: FieldRef<"user_academic_fields", 'Int'>
    readonly user_id: FieldRef<"user_academic_fields", 'Int'>
    readonly field_id: FieldRef<"user_academic_fields", 'Int'>
    readonly experience_years: FieldRef<"user_academic_fields", 'Int'>
    readonly created_at: FieldRef<"user_academic_fields", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_academic_fields findUnique
   */
  export type user_academic_fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which user_academic_fields to fetch.
     */
    where: user_academic_fieldsWhereUniqueInput
  }

  /**
   * user_academic_fields findUniqueOrThrow
   */
  export type user_academic_fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which user_academic_fields to fetch.
     */
    where: user_academic_fieldsWhereUniqueInput
  }

  /**
   * user_academic_fields findFirst
   */
  export type user_academic_fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which user_academic_fields to fetch.
     */
    where?: user_academic_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_academic_fields to fetch.
     */
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_academic_fields.
     */
    cursor?: user_academic_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_academic_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_academic_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_academic_fields.
     */
    distinct?: User_academic_fieldsScalarFieldEnum | User_academic_fieldsScalarFieldEnum[]
  }

  /**
   * user_academic_fields findFirstOrThrow
   */
  export type user_academic_fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which user_academic_fields to fetch.
     */
    where?: user_academic_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_academic_fields to fetch.
     */
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_academic_fields.
     */
    cursor?: user_academic_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_academic_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_academic_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_academic_fields.
     */
    distinct?: User_academic_fieldsScalarFieldEnum | User_academic_fieldsScalarFieldEnum[]
  }

  /**
   * user_academic_fields findMany
   */
  export type user_academic_fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which user_academic_fields to fetch.
     */
    where?: user_academic_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_academic_fields to fetch.
     */
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_academic_fields.
     */
    cursor?: user_academic_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_academic_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_academic_fields.
     */
    skip?: number
    distinct?: User_academic_fieldsScalarFieldEnum | User_academic_fieldsScalarFieldEnum[]
  }

  /**
   * user_academic_fields create
   */
  export type user_academic_fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_academic_fields.
     */
    data?: XOR<user_academic_fieldsCreateInput, user_academic_fieldsUncheckedCreateInput>
  }

  /**
   * user_academic_fields createMany
   */
  export type user_academic_fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_academic_fields.
     */
    data: user_academic_fieldsCreateManyInput | user_academic_fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_academic_fields createManyAndReturn
   */
  export type user_academic_fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many user_academic_fields.
     */
    data: user_academic_fieldsCreateManyInput | user_academic_fieldsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_academic_fields update
   */
  export type user_academic_fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_academic_fields.
     */
    data: XOR<user_academic_fieldsUpdateInput, user_academic_fieldsUncheckedUpdateInput>
    /**
     * Choose, which user_academic_fields to update.
     */
    where: user_academic_fieldsWhereUniqueInput
  }

  /**
   * user_academic_fields updateMany
   */
  export type user_academic_fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_academic_fields.
     */
    data: XOR<user_academic_fieldsUpdateManyMutationInput, user_academic_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which user_academic_fields to update
     */
    where?: user_academic_fieldsWhereInput
    /**
     * Limit how many user_academic_fields to update.
     */
    limit?: number
  }

  /**
   * user_academic_fields updateManyAndReturn
   */
  export type user_academic_fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * The data used to update user_academic_fields.
     */
    data: XOR<user_academic_fieldsUpdateManyMutationInput, user_academic_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which user_academic_fields to update
     */
    where?: user_academic_fieldsWhereInput
    /**
     * Limit how many user_academic_fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_academic_fields upsert
   */
  export type user_academic_fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_academic_fields to update in case it exists.
     */
    where: user_academic_fieldsWhereUniqueInput
    /**
     * In case the user_academic_fields found by the `where` argument doesn't exist, create a new user_academic_fields with this data.
     */
    create: XOR<user_academic_fieldsCreateInput, user_academic_fieldsUncheckedCreateInput>
    /**
     * In case the user_academic_fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_academic_fieldsUpdateInput, user_academic_fieldsUncheckedUpdateInput>
  }

  /**
   * user_academic_fields delete
   */
  export type user_academic_fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    /**
     * Filter which user_academic_fields to delete.
     */
    where: user_academic_fieldsWhereUniqueInput
  }

  /**
   * user_academic_fields deleteMany
   */
  export type user_academic_fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_academic_fields to delete
     */
    where?: user_academic_fieldsWhereInput
    /**
     * Limit how many user_academic_fields to delete.
     */
    limit?: number
  }

  /**
   * user_academic_fields.fields
   */
  export type user_academic_fields$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fields
     */
    select?: fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fields
     */
    omit?: fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldsInclude<ExtArgs> | null
    where?: fieldsWhereInput
  }

  /**
   * user_academic_fields.users
   */
  export type user_academic_fields$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_academic_fields without action
   */
  export type user_academic_fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
  }


  /**
   * Model user_subjects
   */

  export type AggregateUser_subjects = {
    _count: User_subjectsCountAggregateOutputType | null
    _avg: User_subjectsAvgAggregateOutputType | null
    _sum: User_subjectsSumAggregateOutputType | null
    _min: User_subjectsMinAggregateOutputType | null
    _max: User_subjectsMaxAggregateOutputType | null
  }

  export type User_subjectsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    subject_id: number | null
  }

  export type User_subjectsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    subject_id: number | null
  }

  export type User_subjectsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    subject_id: number | null
    skill_level: string | null
    created_at: Date | null
  }

  export type User_subjectsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    subject_id: number | null
    skill_level: string | null
    created_at: Date | null
  }

  export type User_subjectsCountAggregateOutputType = {
    id: number
    user_id: number
    subject_id: number
    skill_level: number
    created_at: number
    _all: number
  }


  export type User_subjectsAvgAggregateInputType = {
    id?: true
    user_id?: true
    subject_id?: true
  }

  export type User_subjectsSumAggregateInputType = {
    id?: true
    user_id?: true
    subject_id?: true
  }

  export type User_subjectsMinAggregateInputType = {
    id?: true
    user_id?: true
    subject_id?: true
    skill_level?: true
    created_at?: true
  }

  export type User_subjectsMaxAggregateInputType = {
    id?: true
    user_id?: true
    subject_id?: true
    skill_level?: true
    created_at?: true
  }

  export type User_subjectsCountAggregateInputType = {
    id?: true
    user_id?: true
    subject_id?: true
    skill_level?: true
    created_at?: true
    _all?: true
  }

  export type User_subjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_subjects to aggregate.
     */
    where?: user_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_subjects to fetch.
     */
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_subjects
    **/
    _count?: true | User_subjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_subjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_subjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_subjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_subjectsMaxAggregateInputType
  }

  export type GetUser_subjectsAggregateType<T extends User_subjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_subjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_subjects[P]>
      : GetScalarType<T[P], AggregateUser_subjects[P]>
  }




  export type user_subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_subjectsWhereInput
    orderBy?: user_subjectsOrderByWithAggregationInput | user_subjectsOrderByWithAggregationInput[]
    by: User_subjectsScalarFieldEnum[] | User_subjectsScalarFieldEnum
    having?: user_subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_subjectsCountAggregateInputType | true
    _avg?: User_subjectsAvgAggregateInputType
    _sum?: User_subjectsSumAggregateInputType
    _min?: User_subjectsMinAggregateInputType
    _max?: User_subjectsMaxAggregateInputType
  }

  export type User_subjectsGroupByOutputType = {
    id: number
    user_id: number | null
    subject_id: number | null
    skill_level: string | null
    created_at: Date | null
    _count: User_subjectsCountAggregateOutputType | null
    _avg: User_subjectsAvgAggregateOutputType | null
    _sum: User_subjectsSumAggregateOutputType | null
    _min: User_subjectsMinAggregateOutputType | null
    _max: User_subjectsMaxAggregateOutputType | null
  }

  type GetUser_subjectsGroupByPayload<T extends user_subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_subjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_subjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_subjectsGroupByOutputType[P]>
            : GetScalarType<T[P], User_subjectsGroupByOutputType[P]>
        }
      >
    >


  export type user_subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject_id?: boolean
    skill_level?: boolean
    created_at?: boolean
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_subjects"]>

  export type user_subjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject_id?: boolean
    skill_level?: boolean
    created_at?: boolean
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_subjects"]>

  export type user_subjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject_id?: boolean
    skill_level?: boolean
    created_at?: boolean
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_subjects"]>

  export type user_subjectsSelectScalar = {
    id?: boolean
    user_id?: boolean
    subject_id?: boolean
    skill_level?: boolean
    created_at?: boolean
  }

  export type user_subjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subject_id" | "skill_level" | "created_at", ExtArgs["result"]["user_subjects"]>
  export type user_subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }
  export type user_subjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }
  export type user_subjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | user_subjects$subjectsArgs<ExtArgs>
    users?: boolean | user_subjects$usersArgs<ExtArgs>
  }

  export type $user_subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_subjects"
    objects: {
      subjects: Prisma.$subjectsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      subject_id: number | null
      skill_level: string | null
      created_at: Date | null
    }, ExtArgs["result"]["user_subjects"]>
    composites: {}
  }

  type user_subjectsGetPayload<S extends boolean | null | undefined | user_subjectsDefaultArgs> = $Result.GetResult<Prisma.$user_subjectsPayload, S>

  type user_subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_subjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_subjectsCountAggregateInputType | true
    }

  export interface user_subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_subjects'], meta: { name: 'user_subjects' } }
    /**
     * Find zero or one User_subjects that matches the filter.
     * @param {user_subjectsFindUniqueArgs} args - Arguments to find a User_subjects
     * @example
     * // Get one User_subjects
     * const user_subjects = await prisma.user_subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_subjectsFindUniqueArgs>(args: SelectSubset<T, user_subjectsFindUniqueArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_subjectsFindUniqueOrThrowArgs} args - Arguments to find a User_subjects
     * @example
     * // Get one User_subjects
     * const user_subjects = await prisma.user_subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsFindFirstArgs} args - Arguments to find a User_subjects
     * @example
     * // Get one User_subjects
     * const user_subjects = await prisma.user_subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_subjectsFindFirstArgs>(args?: SelectSubset<T, user_subjectsFindFirstArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsFindFirstOrThrowArgs} args - Arguments to find a User_subjects
     * @example
     * // Get one User_subjects
     * const user_subjects = await prisma.user_subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_subjects
     * const user_subjects = await prisma.user_subjects.findMany()
     * 
     * // Get first 10 User_subjects
     * const user_subjects = await prisma.user_subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_subjectsWithIdOnly = await prisma.user_subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_subjectsFindManyArgs>(args?: SelectSubset<T, user_subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_subjects.
     * @param {user_subjectsCreateArgs} args - Arguments to create a User_subjects.
     * @example
     * // Create one User_subjects
     * const User_subjects = await prisma.user_subjects.create({
     *   data: {
     *     // ... data to create a User_subjects
     *   }
     * })
     * 
     */
    create<T extends user_subjectsCreateArgs>(args: SelectSubset<T, user_subjectsCreateArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_subjects.
     * @param {user_subjectsCreateManyArgs} args - Arguments to create many User_subjects.
     * @example
     * // Create many User_subjects
     * const user_subjects = await prisma.user_subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_subjectsCreateManyArgs>(args?: SelectSubset<T, user_subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_subjects and returns the data saved in the database.
     * @param {user_subjectsCreateManyAndReturnArgs} args - Arguments to create many User_subjects.
     * @example
     * // Create many User_subjects
     * const user_subjects = await prisma.user_subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_subjects and only return the `id`
     * const user_subjectsWithIdOnly = await prisma.user_subjects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_subjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_subjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_subjects.
     * @param {user_subjectsDeleteArgs} args - Arguments to delete one User_subjects.
     * @example
     * // Delete one User_subjects
     * const User_subjects = await prisma.user_subjects.delete({
     *   where: {
     *     // ... filter to delete one User_subjects
     *   }
     * })
     * 
     */
    delete<T extends user_subjectsDeleteArgs>(args: SelectSubset<T, user_subjectsDeleteArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_subjects.
     * @param {user_subjectsUpdateArgs} args - Arguments to update one User_subjects.
     * @example
     * // Update one User_subjects
     * const user_subjects = await prisma.user_subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_subjectsUpdateArgs>(args: SelectSubset<T, user_subjectsUpdateArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_subjects.
     * @param {user_subjectsDeleteManyArgs} args - Arguments to filter User_subjects to delete.
     * @example
     * // Delete a few User_subjects
     * const { count } = await prisma.user_subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_subjectsDeleteManyArgs>(args?: SelectSubset<T, user_subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_subjects
     * const user_subjects = await prisma.user_subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_subjectsUpdateManyArgs>(args: SelectSubset<T, user_subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_subjects and returns the data updated in the database.
     * @param {user_subjectsUpdateManyAndReturnArgs} args - Arguments to update many User_subjects.
     * @example
     * // Update many User_subjects
     * const user_subjects = await prisma.user_subjects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_subjects and only return the `id`
     * const user_subjectsWithIdOnly = await prisma.user_subjects.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_subjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_subjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_subjects.
     * @param {user_subjectsUpsertArgs} args - Arguments to update or create a User_subjects.
     * @example
     * // Update or create a User_subjects
     * const user_subjects = await prisma.user_subjects.upsert({
     *   create: {
     *     // ... data to create a User_subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_subjects we want to update
     *   }
     * })
     */
    upsert<T extends user_subjectsUpsertArgs>(args: SelectSubset<T, user_subjectsUpsertArgs<ExtArgs>>): Prisma__user_subjectsClient<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsCountArgs} args - Arguments to filter User_subjects to count.
     * @example
     * // Count the number of User_subjects
     * const count = await prisma.user_subjects.count({
     *   where: {
     *     // ... the filter for the User_subjects we want to count
     *   }
     * })
    **/
    count<T extends user_subjectsCountArgs>(
      args?: Subset<T, user_subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_subjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_subjectsAggregateArgs>(args: Subset<T, User_subjectsAggregateArgs>): Prisma.PrismaPromise<GetUser_subjectsAggregateType<T>>

    /**
     * Group by User_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subjectsGroupByArgs} args - Group by arguments.
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
      T extends user_subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_subjectsGroupByArgs['orderBy'] }
        : { orderBy?: user_subjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_subjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_subjects model
   */
  readonly fields: user_subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends user_subjects$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, user_subjects$subjectsArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends user_subjects$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_subjects$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_subjects model
   */
  interface user_subjectsFieldRefs {
    readonly id: FieldRef<"user_subjects", 'Int'>
    readonly user_id: FieldRef<"user_subjects", 'Int'>
    readonly subject_id: FieldRef<"user_subjects", 'Int'>
    readonly skill_level: FieldRef<"user_subjects", 'String'>
    readonly created_at: FieldRef<"user_subjects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_subjects findUnique
   */
  export type user_subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which user_subjects to fetch.
     */
    where: user_subjectsWhereUniqueInput
  }

  /**
   * user_subjects findUniqueOrThrow
   */
  export type user_subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which user_subjects to fetch.
     */
    where: user_subjectsWhereUniqueInput
  }

  /**
   * user_subjects findFirst
   */
  export type user_subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which user_subjects to fetch.
     */
    where?: user_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_subjects to fetch.
     */
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_subjects.
     */
    cursor?: user_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_subjects.
     */
    distinct?: User_subjectsScalarFieldEnum | User_subjectsScalarFieldEnum[]
  }

  /**
   * user_subjects findFirstOrThrow
   */
  export type user_subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which user_subjects to fetch.
     */
    where?: user_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_subjects to fetch.
     */
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_subjects.
     */
    cursor?: user_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_subjects.
     */
    distinct?: User_subjectsScalarFieldEnum | User_subjectsScalarFieldEnum[]
  }

  /**
   * user_subjects findMany
   */
  export type user_subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which user_subjects to fetch.
     */
    where?: user_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_subjects to fetch.
     */
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_subjects.
     */
    cursor?: user_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_subjects.
     */
    skip?: number
    distinct?: User_subjectsScalarFieldEnum | User_subjectsScalarFieldEnum[]
  }

  /**
   * user_subjects create
   */
  export type user_subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_subjects.
     */
    data?: XOR<user_subjectsCreateInput, user_subjectsUncheckedCreateInput>
  }

  /**
   * user_subjects createMany
   */
  export type user_subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_subjects.
     */
    data: user_subjectsCreateManyInput | user_subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_subjects createManyAndReturn
   */
  export type user_subjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * The data used to create many user_subjects.
     */
    data: user_subjectsCreateManyInput | user_subjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_subjects update
   */
  export type user_subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_subjects.
     */
    data: XOR<user_subjectsUpdateInput, user_subjectsUncheckedUpdateInput>
    /**
     * Choose, which user_subjects to update.
     */
    where: user_subjectsWhereUniqueInput
  }

  /**
   * user_subjects updateMany
   */
  export type user_subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_subjects.
     */
    data: XOR<user_subjectsUpdateManyMutationInput, user_subjectsUncheckedUpdateManyInput>
    /**
     * Filter which user_subjects to update
     */
    where?: user_subjectsWhereInput
    /**
     * Limit how many user_subjects to update.
     */
    limit?: number
  }

  /**
   * user_subjects updateManyAndReturn
   */
  export type user_subjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * The data used to update user_subjects.
     */
    data: XOR<user_subjectsUpdateManyMutationInput, user_subjectsUncheckedUpdateManyInput>
    /**
     * Filter which user_subjects to update
     */
    where?: user_subjectsWhereInput
    /**
     * Limit how many user_subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_subjects upsert
   */
  export type user_subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_subjects to update in case it exists.
     */
    where: user_subjectsWhereUniqueInput
    /**
     * In case the user_subjects found by the `where` argument doesn't exist, create a new user_subjects with this data.
     */
    create: XOR<user_subjectsCreateInput, user_subjectsUncheckedCreateInput>
    /**
     * In case the user_subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_subjectsUpdateInput, user_subjectsUncheckedUpdateInput>
  }

  /**
   * user_subjects delete
   */
  export type user_subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    /**
     * Filter which user_subjects to delete.
     */
    where: user_subjectsWhereUniqueInput
  }

  /**
   * user_subjects deleteMany
   */
  export type user_subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_subjects to delete
     */
    where?: user_subjectsWhereInput
    /**
     * Limit how many user_subjects to delete.
     */
    limit?: number
  }

  /**
   * user_subjects.subjects
   */
  export type user_subjects$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
  }

  /**
   * user_subjects.users
   */
  export type user_subjects$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_subjects without action
   */
  export type user_subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    gender: string | null
    birth_day: Date | null
    email: string | null
    google_id: string | null
    avatar_url: string | null
    current_position: string | null
    organization: string | null
    location: string | null
    facebook_link_contact: string | null
    zalo_link_contact: string | null
    tiktok_link_contact: string | null
    website_link_contact: string | null
    portfolio_link: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    gender: string | null
    birth_day: Date | null
    email: string | null
    google_id: string | null
    avatar_url: string | null
    current_position: string | null
    organization: string | null
    location: string | null
    facebook_link_contact: string | null
    zalo_link_contact: string | null
    tiktok_link_contact: string | null
    website_link_contact: string | null
    portfolio_link: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    gender: number
    birth_day: number
    email: number
    google_id: number
    avatar_url: number
    current_position: number
    organization: number
    location: number
    facebook_link_contact: number
    zalo_link_contact: number
    tiktok_link_contact: number
    website_link_contact: number
    portfolio_link: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    gender?: true
    birth_day?: true
    email?: true
    google_id?: true
    avatar_url?: true
    current_position?: true
    organization?: true
    location?: true
    facebook_link_contact?: true
    zalo_link_contact?: true
    tiktok_link_contact?: true
    website_link_contact?: true
    portfolio_link?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    gender?: true
    birth_day?: true
    email?: true
    google_id?: true
    avatar_url?: true
    current_position?: true
    organization?: true
    location?: true
    facebook_link_contact?: true
    zalo_link_contact?: true
    tiktok_link_contact?: true
    website_link_contact?: true
    portfolio_link?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    gender?: true
    birth_day?: true
    email?: true
    google_id?: true
    avatar_url?: true
    current_position?: true
    organization?: true
    location?: true
    facebook_link_contact?: true
    zalo_link_contact?: true
    tiktok_link_contact?: true
    website_link_contact?: true
    portfolio_link?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    full_name: string | null
    gender: string | null
    birth_day: Date | null
    email: string
    google_id: string | null
    avatar_url: string | null
    current_position: string | null
    organization: string | null
    location: string | null
    facebook_link_contact: string | null
    zalo_link_contact: string | null
    tiktok_link_contact: string | null
    website_link_contact: string | null
    portfolio_link: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    gender?: boolean
    birth_day?: boolean
    email?: boolean
    google_id?: boolean
    avatar_url?: boolean
    current_position?: boolean
    organization?: boolean
    location?: boolean
    facebook_link_contact?: boolean
    zalo_link_contact?: boolean
    tiktok_link_contact?: boolean
    website_link_contact?: boolean
    portfolio_link?: boolean
    created_at?: boolean
    auth_accounts?: boolean | users$auth_accountsArgs<ExtArgs>
    documents?: boolean | users$documentsArgs<ExtArgs>
    user_academic_fields?: boolean | users$user_academic_fieldsArgs<ExtArgs>
    user_subjects?: boolean | users$user_subjectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    gender?: boolean
    birth_day?: boolean
    email?: boolean
    google_id?: boolean
    avatar_url?: boolean
    current_position?: boolean
    organization?: boolean
    location?: boolean
    facebook_link_contact?: boolean
    zalo_link_contact?: boolean
    tiktok_link_contact?: boolean
    website_link_contact?: boolean
    portfolio_link?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    gender?: boolean
    birth_day?: boolean
    email?: boolean
    google_id?: boolean
    avatar_url?: boolean
    current_position?: boolean
    organization?: boolean
    location?: boolean
    facebook_link_contact?: boolean
    zalo_link_contact?: boolean
    tiktok_link_contact?: boolean
    website_link_contact?: boolean
    portfolio_link?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    full_name?: boolean
    gender?: boolean
    birth_day?: boolean
    email?: boolean
    google_id?: boolean
    avatar_url?: boolean
    current_position?: boolean
    organization?: boolean
    location?: boolean
    facebook_link_contact?: boolean
    zalo_link_contact?: boolean
    tiktok_link_contact?: boolean
    website_link_contact?: boolean
    portfolio_link?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "gender" | "birth_day" | "email" | "google_id" | "avatar_url" | "current_position" | "organization" | "location" | "facebook_link_contact" | "zalo_link_contact" | "tiktok_link_contact" | "website_link_contact" | "portfolio_link" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_accounts?: boolean | users$auth_accountsArgs<ExtArgs>
    documents?: boolean | users$documentsArgs<ExtArgs>
    user_academic_fields?: boolean | users$user_academic_fieldsArgs<ExtArgs>
    user_subjects?: boolean | users$user_subjectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      auth_accounts: Prisma.$auth_accountsPayload<ExtArgs>[]
      documents: Prisma.$documentsPayload<ExtArgs>[]
      user_academic_fields: Prisma.$user_academic_fieldsPayload<ExtArgs>[]
      user_subjects: Prisma.$user_subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string | null
      gender: string | null
      birth_day: Date | null
      email: string
      google_id: string | null
      avatar_url: string | null
      current_position: string | null
      organization: string | null
      location: string | null
      facebook_link_contact: string | null
      zalo_link_contact: string | null
      tiktok_link_contact: string | null
      website_link_contact: string | null
      portfolio_link: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_accounts<T extends users$auth_accountsArgs<ExtArgs> = {}>(args?: Subset<T, users$auth_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends users$documentsArgs<ExtArgs> = {}>(args?: Subset<T, users$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_academic_fields<T extends users$user_academic_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_academic_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_academic_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_subjects<T extends users$user_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'String'>
    readonly birth_day: FieldRef<"users", 'DateTime'>
    readonly email: FieldRef<"users", 'String'>
    readonly google_id: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly current_position: FieldRef<"users", 'String'>
    readonly organization: FieldRef<"users", 'String'>
    readonly location: FieldRef<"users", 'String'>
    readonly facebook_link_contact: FieldRef<"users", 'String'>
    readonly zalo_link_contact: FieldRef<"users", 'String'>
    readonly tiktok_link_contact: FieldRef<"users", 'String'>
    readonly website_link_contact: FieldRef<"users", 'String'>
    readonly portfolio_link: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.auth_accounts
   */
  export type users$auth_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_accounts
     */
    select?: auth_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_accounts
     */
    omit?: auth_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountsInclude<ExtArgs> | null
    where?: auth_accountsWhereInput
    orderBy?: auth_accountsOrderByWithRelationInput | auth_accountsOrderByWithRelationInput[]
    cursor?: auth_accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_accountsScalarFieldEnum | Auth_accountsScalarFieldEnum[]
  }

  /**
   * users.documents
   */
  export type users$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    cursor?: documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * users.user_academic_fields
   */
  export type users$user_academic_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_academic_fields
     */
    select?: user_academic_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_academic_fields
     */
    omit?: user_academic_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_academic_fieldsInclude<ExtArgs> | null
    where?: user_academic_fieldsWhereInput
    orderBy?: user_academic_fieldsOrderByWithRelationInput | user_academic_fieldsOrderByWithRelationInput[]
    cursor?: user_academic_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_academic_fieldsScalarFieldEnum | User_academic_fieldsScalarFieldEnum[]
  }

  /**
   * users.user_subjects
   */
  export type users$user_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subjects
     */
    select?: user_subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_subjects
     */
    omit?: user_subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_subjectsInclude<ExtArgs> | null
    where?: user_subjectsWhereInput
    orderBy?: user_subjectsOrderByWithRelationInput | user_subjectsOrderByWithRelationInput[]
    cursor?: user_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_subjectsScalarFieldEnum | User_subjectsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Auth_accountsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    provider: 'provider',
    provider_account_id: 'provider_account_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Auth_accountsScalarFieldEnum = (typeof Auth_accountsScalarFieldEnum)[keyof typeof Auth_accountsScalarFieldEnum]


  export const Document_fieldsScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    field_id: 'field_id',
    created_at: 'created_at'
  };

  export type Document_fieldsScalarFieldEnum = (typeof Document_fieldsScalarFieldEnum)[keyof typeof Document_fieldsScalarFieldEnum]


  export const Document_subjectsScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    subject_id: 'subject_id',
    created_at: 'created_at'
  };

  export type Document_subjectsScalarFieldEnum = (typeof Document_subjectsScalarFieldEnum)[keyof typeof Document_subjectsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    numeric_score: 'numeric_score',
    grade_band: 'grade_band',
    instructor_name: 'instructor_name',
    document_type: 'document_type',
    access_type: 'access_type',
    price: 'price',
    suitable_school: 'suitable_school',
    short_description: 'short_description',
    resource_type: 'resource_type',
    resource_url: 'resource_url',
    embed_allowed: 'embed_allowed',
    mime_type: 'mime_type',
    storage_provider: 'storage_provider',
    file_size: 'file_size',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const FieldsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type FieldsScalarFieldEnum = (typeof FieldsScalarFieldEnum)[keyof typeof FieldsScalarFieldEnum]


  export const Subject_fieldsScalarFieldEnum: {
    id: 'id',
    subject_id: 'subject_id',
    field_id: 'field_id',
    created_at: 'created_at'
  };

  export type Subject_fieldsScalarFieldEnum = (typeof Subject_fieldsScalarFieldEnum)[keyof typeof Subject_fieldsScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const User_academic_fieldsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    field_id: 'field_id',
    experience_years: 'experience_years',
    created_at: 'created_at'
  };

  export type User_academic_fieldsScalarFieldEnum = (typeof User_academic_fieldsScalarFieldEnum)[keyof typeof User_academic_fieldsScalarFieldEnum]


  export const User_subjectsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subject_id: 'subject_id',
    skill_level: 'skill_level',
    created_at: 'created_at'
  };

  export type User_subjectsScalarFieldEnum = (typeof User_subjectsScalarFieldEnum)[keyof typeof User_subjectsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    gender: 'gender',
    birth_day: 'birth_day',
    email: 'email',
    google_id: 'google_id',
    avatar_url: 'avatar_url',
    current_position: 'current_position',
    organization: 'organization',
    location: 'location',
    facebook_link_contact: 'facebook_link_contact',
    zalo_link_contact: 'zalo_link_contact',
    tiktok_link_contact: 'tiktok_link_contact',
    website_link_contact: 'website_link_contact',
    portfolio_link: 'portfolio_link',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type auth_accountsWhereInput = {
    AND?: auth_accountsWhereInput | auth_accountsWhereInput[]
    OR?: auth_accountsWhereInput[]
    NOT?: auth_accountsWhereInput | auth_accountsWhereInput[]
    id?: IntFilter<"auth_accounts"> | number
    user_id?: IntFilter<"auth_accounts"> | number
    provider?: StringFilter<"auth_accounts"> | string
    provider_account_id?: StringFilter<"auth_accounts"> | string
    access_token?: StringNullableFilter<"auth_accounts"> | string | null
    refresh_token?: StringNullableFilter<"auth_accounts"> | string | null
    expires_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type auth_accountsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type auth_accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_account_id?: string
    AND?: auth_accountsWhereInput | auth_accountsWhereInput[]
    OR?: auth_accountsWhereInput[]
    NOT?: auth_accountsWhereInput | auth_accountsWhereInput[]
    user_id?: IntFilter<"auth_accounts"> | number
    provider?: StringFilter<"auth_accounts"> | string
    access_token?: StringNullableFilter<"auth_accounts"> | string | null
    refresh_token?: StringNullableFilter<"auth_accounts"> | string | null
    expires_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "provider_account_id">

  export type auth_accountsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: auth_accountsCountOrderByAggregateInput
    _avg?: auth_accountsAvgOrderByAggregateInput
    _max?: auth_accountsMaxOrderByAggregateInput
    _min?: auth_accountsMinOrderByAggregateInput
    _sum?: auth_accountsSumOrderByAggregateInput
  }

  export type auth_accountsScalarWhereWithAggregatesInput = {
    AND?: auth_accountsScalarWhereWithAggregatesInput | auth_accountsScalarWhereWithAggregatesInput[]
    OR?: auth_accountsScalarWhereWithAggregatesInput[]
    NOT?: auth_accountsScalarWhereWithAggregatesInput | auth_accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_accounts"> | number
    user_id?: IntWithAggregatesFilter<"auth_accounts"> | number
    provider?: StringWithAggregatesFilter<"auth_accounts"> | string
    provider_account_id?: StringWithAggregatesFilter<"auth_accounts"> | string
    access_token?: StringNullableWithAggregatesFilter<"auth_accounts"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"auth_accounts"> | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"auth_accounts"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"auth_accounts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"auth_accounts"> | Date | string | null
  }

  export type document_fieldsWhereInput = {
    AND?: document_fieldsWhereInput | document_fieldsWhereInput[]
    OR?: document_fieldsWhereInput[]
    NOT?: document_fieldsWhereInput | document_fieldsWhereInput[]
    id?: IntFilter<"document_fields"> | number
    document_id?: IntFilter<"document_fields"> | number
    field_id?: IntFilter<"document_fields"> | number
    created_at?: DateTimeNullableFilter<"document_fields"> | Date | string | null
    documents?: XOR<DocumentsScalarRelationFilter, documentsWhereInput>
    fields?: XOR<FieldsScalarRelationFilter, fieldsWhereInput>
  }

  export type document_fieldsOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    documents?: documentsOrderByWithRelationInput
    fields?: fieldsOrderByWithRelationInput
  }

  export type document_fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: document_fieldsWhereInput | document_fieldsWhereInput[]
    OR?: document_fieldsWhereInput[]
    NOT?: document_fieldsWhereInput | document_fieldsWhereInput[]
    document_id?: IntFilter<"document_fields"> | number
    field_id?: IntFilter<"document_fields"> | number
    created_at?: DateTimeNullableFilter<"document_fields"> | Date | string | null
    documents?: XOR<DocumentsScalarRelationFilter, documentsWhereInput>
    fields?: XOR<FieldsScalarRelationFilter, fieldsWhereInput>
  }, "id">

  export type document_fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: document_fieldsCountOrderByAggregateInput
    _avg?: document_fieldsAvgOrderByAggregateInput
    _max?: document_fieldsMaxOrderByAggregateInput
    _min?: document_fieldsMinOrderByAggregateInput
    _sum?: document_fieldsSumOrderByAggregateInput
  }

  export type document_fieldsScalarWhereWithAggregatesInput = {
    AND?: document_fieldsScalarWhereWithAggregatesInput | document_fieldsScalarWhereWithAggregatesInput[]
    OR?: document_fieldsScalarWhereWithAggregatesInput[]
    NOT?: document_fieldsScalarWhereWithAggregatesInput | document_fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document_fields"> | number
    document_id?: IntWithAggregatesFilter<"document_fields"> | number
    field_id?: IntWithAggregatesFilter<"document_fields"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"document_fields"> | Date | string | null
  }

  export type document_subjectsWhereInput = {
    AND?: document_subjectsWhereInput | document_subjectsWhereInput[]
    OR?: document_subjectsWhereInput[]
    NOT?: document_subjectsWhereInput | document_subjectsWhereInput[]
    id?: IntFilter<"document_subjects"> | number
    document_id?: IntFilter<"document_subjects"> | number
    subject_id?: IntFilter<"document_subjects"> | number
    created_at?: DateTimeNullableFilter<"document_subjects"> | Date | string | null
    documents?: XOR<DocumentsScalarRelationFilter, documentsWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }

  export type document_subjectsOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    documents?: documentsOrderByWithRelationInput
    subjects?: subjectsOrderByWithRelationInput
  }

  export type document_subjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: document_subjectsWhereInput | document_subjectsWhereInput[]
    OR?: document_subjectsWhereInput[]
    NOT?: document_subjectsWhereInput | document_subjectsWhereInput[]
    document_id?: IntFilter<"document_subjects"> | number
    subject_id?: IntFilter<"document_subjects"> | number
    created_at?: DateTimeNullableFilter<"document_subjects"> | Date | string | null
    documents?: XOR<DocumentsScalarRelationFilter, documentsWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }, "id">

  export type document_subjectsOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: document_subjectsCountOrderByAggregateInput
    _avg?: document_subjectsAvgOrderByAggregateInput
    _max?: document_subjectsMaxOrderByAggregateInput
    _min?: document_subjectsMinOrderByAggregateInput
    _sum?: document_subjectsSumOrderByAggregateInput
  }

  export type document_subjectsScalarWhereWithAggregatesInput = {
    AND?: document_subjectsScalarWhereWithAggregatesInput | document_subjectsScalarWhereWithAggregatesInput[]
    OR?: document_subjectsScalarWhereWithAggregatesInput[]
    NOT?: document_subjectsScalarWhereWithAggregatesInput | document_subjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document_subjects"> | number
    document_id?: IntWithAggregatesFilter<"document_subjects"> | number
    subject_id?: IntWithAggregatesFilter<"document_subjects"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"document_subjects"> | Date | string | null
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: IntFilter<"documents"> | number
    user_id?: IntFilter<"documents"> | number
    title?: StringFilter<"documents"> | string
    numeric_score?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    grade_band?: StringNullableFilter<"documents"> | string | null
    instructor_name?: StringNullableFilter<"documents"> | string | null
    document_type?: StringNullableFilter<"documents"> | string | null
    access_type?: StringNullableFilter<"documents"> | string | null
    price?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    suitable_school?: StringNullableFilter<"documents"> | string | null
    short_description?: StringNullableFilter<"documents"> | string | null
    resource_type?: StringFilter<"documents"> | string
    resource_url?: StringFilter<"documents"> | string
    embed_allowed?: BoolNullableFilter<"documents"> | boolean | null
    mime_type?: StringNullableFilter<"documents"> | string | null
    storage_provider?: StringNullableFilter<"documents"> | string | null
    file_size?: IntNullableFilter<"documents"> | number | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    document_fields?: Document_fieldsListRelationFilter
    document_subjects?: Document_subjectsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type documentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    numeric_score?: SortOrderInput | SortOrder
    grade_band?: SortOrderInput | SortOrder
    instructor_name?: SortOrderInput | SortOrder
    document_type?: SortOrderInput | SortOrder
    access_type?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    suitable_school?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    resource_type?: SortOrder
    resource_url?: SortOrder
    embed_allowed?: SortOrderInput | SortOrder
    mime_type?: SortOrderInput | SortOrder
    storage_provider?: SortOrderInput | SortOrder
    file_size?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    document_fields?: document_fieldsOrderByRelationAggregateInput
    document_subjects?: document_subjectsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    user_id?: IntFilter<"documents"> | number
    title?: StringFilter<"documents"> | string
    numeric_score?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    grade_band?: StringNullableFilter<"documents"> | string | null
    instructor_name?: StringNullableFilter<"documents"> | string | null
    document_type?: StringNullableFilter<"documents"> | string | null
    access_type?: StringNullableFilter<"documents"> | string | null
    price?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    suitable_school?: StringNullableFilter<"documents"> | string | null
    short_description?: StringNullableFilter<"documents"> | string | null
    resource_type?: StringFilter<"documents"> | string
    resource_url?: StringFilter<"documents"> | string
    embed_allowed?: BoolNullableFilter<"documents"> | boolean | null
    mime_type?: StringNullableFilter<"documents"> | string | null
    storage_provider?: StringNullableFilter<"documents"> | string | null
    file_size?: IntNullableFilter<"documents"> | number | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    document_fields?: Document_fieldsListRelationFilter
    document_subjects?: Document_subjectsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    numeric_score?: SortOrderInput | SortOrder
    grade_band?: SortOrderInput | SortOrder
    instructor_name?: SortOrderInput | SortOrder
    document_type?: SortOrderInput | SortOrder
    access_type?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    suitable_school?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    resource_type?: SortOrder
    resource_url?: SortOrder
    embed_allowed?: SortOrderInput | SortOrder
    mime_type?: SortOrderInput | SortOrder
    storage_provider?: SortOrderInput | SortOrder
    file_size?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: documentsCountOrderByAggregateInput
    _avg?: documentsAvgOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
    _sum?: documentsSumOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"documents"> | number
    user_id?: IntWithAggregatesFilter<"documents"> | number
    title?: StringWithAggregatesFilter<"documents"> | string
    numeric_score?: DecimalNullableWithAggregatesFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    grade_band?: StringNullableWithAggregatesFilter<"documents"> | string | null
    instructor_name?: StringNullableWithAggregatesFilter<"documents"> | string | null
    document_type?: StringNullableWithAggregatesFilter<"documents"> | string | null
    access_type?: StringNullableWithAggregatesFilter<"documents"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    suitable_school?: StringNullableWithAggregatesFilter<"documents"> | string | null
    short_description?: StringNullableWithAggregatesFilter<"documents"> | string | null
    resource_type?: StringWithAggregatesFilter<"documents"> | string
    resource_url?: StringWithAggregatesFilter<"documents"> | string
    embed_allowed?: BoolNullableWithAggregatesFilter<"documents"> | boolean | null
    mime_type?: StringNullableWithAggregatesFilter<"documents"> | string | null
    storage_provider?: StringNullableWithAggregatesFilter<"documents"> | string | null
    file_size?: IntNullableWithAggregatesFilter<"documents"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
  }

  export type fieldsWhereInput = {
    AND?: fieldsWhereInput | fieldsWhereInput[]
    OR?: fieldsWhereInput[]
    NOT?: fieldsWhereInput | fieldsWhereInput[]
    id?: IntFilter<"fields"> | number
    name?: StringFilter<"fields"> | string
    description?: StringNullableFilter<"fields"> | string | null
    created_at?: DateTimeNullableFilter<"fields"> | Date | string | null
    document_fields?: Document_fieldsListRelationFilter
    subject_fields?: Subject_fieldsListRelationFilter
    user_academic_fields?: User_academic_fieldsListRelationFilter
  }

  export type fieldsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    document_fields?: document_fieldsOrderByRelationAggregateInput
    subject_fields?: subject_fieldsOrderByRelationAggregateInput
    user_academic_fields?: user_academic_fieldsOrderByRelationAggregateInput
  }

  export type fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: fieldsWhereInput | fieldsWhereInput[]
    OR?: fieldsWhereInput[]
    NOT?: fieldsWhereInput | fieldsWhereInput[]
    description?: StringNullableFilter<"fields"> | string | null
    created_at?: DateTimeNullableFilter<"fields"> | Date | string | null
    document_fields?: Document_fieldsListRelationFilter
    subject_fields?: Subject_fieldsListRelationFilter
    user_academic_fields?: User_academic_fieldsListRelationFilter
  }, "id" | "name">

  export type fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: fieldsCountOrderByAggregateInput
    _avg?: fieldsAvgOrderByAggregateInput
    _max?: fieldsMaxOrderByAggregateInput
    _min?: fieldsMinOrderByAggregateInput
    _sum?: fieldsSumOrderByAggregateInput
  }

  export type fieldsScalarWhereWithAggregatesInput = {
    AND?: fieldsScalarWhereWithAggregatesInput | fieldsScalarWhereWithAggregatesInput[]
    OR?: fieldsScalarWhereWithAggregatesInput[]
    NOT?: fieldsScalarWhereWithAggregatesInput | fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fields"> | number
    name?: StringWithAggregatesFilter<"fields"> | string
    description?: StringNullableWithAggregatesFilter<"fields"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"fields"> | Date | string | null
  }

  export type subject_fieldsWhereInput = {
    AND?: subject_fieldsWhereInput | subject_fieldsWhereInput[]
    OR?: subject_fieldsWhereInput[]
    NOT?: subject_fieldsWhereInput | subject_fieldsWhereInput[]
    id?: IntFilter<"subject_fields"> | number
    subject_id?: IntNullableFilter<"subject_fields"> | number | null
    field_id?: IntNullableFilter<"subject_fields"> | number | null
    created_at?: DateTimeNullableFilter<"subject_fields"> | Date | string | null
    fields?: XOR<FieldsNullableScalarRelationFilter, fieldsWhereInput> | null
    subjects?: XOR<SubjectsNullableScalarRelationFilter, subjectsWhereInput> | null
  }

  export type subject_fieldsOrderByWithRelationInput = {
    id?: SortOrder
    subject_id?: SortOrderInput | SortOrder
    field_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    fields?: fieldsOrderByWithRelationInput
    subjects?: subjectsOrderByWithRelationInput
  }

  export type subject_fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subject_fieldsWhereInput | subject_fieldsWhereInput[]
    OR?: subject_fieldsWhereInput[]
    NOT?: subject_fieldsWhereInput | subject_fieldsWhereInput[]
    subject_id?: IntNullableFilter<"subject_fields"> | number | null
    field_id?: IntNullableFilter<"subject_fields"> | number | null
    created_at?: DateTimeNullableFilter<"subject_fields"> | Date | string | null
    fields?: XOR<FieldsNullableScalarRelationFilter, fieldsWhereInput> | null
    subjects?: XOR<SubjectsNullableScalarRelationFilter, subjectsWhereInput> | null
  }, "id">

  export type subject_fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    subject_id?: SortOrderInput | SortOrder
    field_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: subject_fieldsCountOrderByAggregateInput
    _avg?: subject_fieldsAvgOrderByAggregateInput
    _max?: subject_fieldsMaxOrderByAggregateInput
    _min?: subject_fieldsMinOrderByAggregateInput
    _sum?: subject_fieldsSumOrderByAggregateInput
  }

  export type subject_fieldsScalarWhereWithAggregatesInput = {
    AND?: subject_fieldsScalarWhereWithAggregatesInput | subject_fieldsScalarWhereWithAggregatesInput[]
    OR?: subject_fieldsScalarWhereWithAggregatesInput[]
    NOT?: subject_fieldsScalarWhereWithAggregatesInput | subject_fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subject_fields"> | number
    subject_id?: IntNullableWithAggregatesFilter<"subject_fields"> | number | null
    field_id?: IntNullableWithAggregatesFilter<"subject_fields"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"subject_fields"> | Date | string | null
  }

  export type subjectsWhereInput = {
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    id?: IntFilter<"subjects"> | number
    name?: StringFilter<"subjects"> | string
    description?: StringNullableFilter<"subjects"> | string | null
    created_at?: DateTimeNullableFilter<"subjects"> | Date | string | null
    document_subjects?: Document_subjectsListRelationFilter
    subject_fields?: Subject_fieldsListRelationFilter
    user_subjects?: User_subjectsListRelationFilter
  }

  export type subjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    document_subjects?: document_subjectsOrderByRelationAggregateInput
    subject_fields?: subject_fieldsOrderByRelationAggregateInput
    user_subjects?: user_subjectsOrderByRelationAggregateInput
  }

  export type subjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    description?: StringNullableFilter<"subjects"> | string | null
    created_at?: DateTimeNullableFilter<"subjects"> | Date | string | null
    document_subjects?: Document_subjectsListRelationFilter
    subject_fields?: Subject_fieldsListRelationFilter
    user_subjects?: User_subjectsListRelationFilter
  }, "id" | "name">

  export type subjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: subjectsCountOrderByAggregateInput
    _avg?: subjectsAvgOrderByAggregateInput
    _max?: subjectsMaxOrderByAggregateInput
    _min?: subjectsMinOrderByAggregateInput
    _sum?: subjectsSumOrderByAggregateInput
  }

  export type subjectsScalarWhereWithAggregatesInput = {
    AND?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    OR?: subjectsScalarWhereWithAggregatesInput[]
    NOT?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subjects"> | number
    name?: StringWithAggregatesFilter<"subjects"> | string
    description?: StringNullableWithAggregatesFilter<"subjects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"subjects"> | Date | string | null
  }

  export type user_academic_fieldsWhereInput = {
    AND?: user_academic_fieldsWhereInput | user_academic_fieldsWhereInput[]
    OR?: user_academic_fieldsWhereInput[]
    NOT?: user_academic_fieldsWhereInput | user_academic_fieldsWhereInput[]
    id?: IntFilter<"user_academic_fields"> | number
    user_id?: IntNullableFilter<"user_academic_fields"> | number | null
    field_id?: IntNullableFilter<"user_academic_fields"> | number | null
    experience_years?: IntNullableFilter<"user_academic_fields"> | number | null
    created_at?: DateTimeNullableFilter<"user_academic_fields"> | Date | string | null
    fields?: XOR<FieldsNullableScalarRelationFilter, fieldsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_academic_fieldsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    field_id?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    fields?: fieldsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_academic_fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_academic_fieldsWhereInput | user_academic_fieldsWhereInput[]
    OR?: user_academic_fieldsWhereInput[]
    NOT?: user_academic_fieldsWhereInput | user_academic_fieldsWhereInput[]
    user_id?: IntNullableFilter<"user_academic_fields"> | number | null
    field_id?: IntNullableFilter<"user_academic_fields"> | number | null
    experience_years?: IntNullableFilter<"user_academic_fields"> | number | null
    created_at?: DateTimeNullableFilter<"user_academic_fields"> | Date | string | null
    fields?: XOR<FieldsNullableScalarRelationFilter, fieldsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type user_academic_fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    field_id?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: user_academic_fieldsCountOrderByAggregateInput
    _avg?: user_academic_fieldsAvgOrderByAggregateInput
    _max?: user_academic_fieldsMaxOrderByAggregateInput
    _min?: user_academic_fieldsMinOrderByAggregateInput
    _sum?: user_academic_fieldsSumOrderByAggregateInput
  }

  export type user_academic_fieldsScalarWhereWithAggregatesInput = {
    AND?: user_academic_fieldsScalarWhereWithAggregatesInput | user_academic_fieldsScalarWhereWithAggregatesInput[]
    OR?: user_academic_fieldsScalarWhereWithAggregatesInput[]
    NOT?: user_academic_fieldsScalarWhereWithAggregatesInput | user_academic_fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_academic_fields"> | number
    user_id?: IntNullableWithAggregatesFilter<"user_academic_fields"> | number | null
    field_id?: IntNullableWithAggregatesFilter<"user_academic_fields"> | number | null
    experience_years?: IntNullableWithAggregatesFilter<"user_academic_fields"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_academic_fields"> | Date | string | null
  }

  export type user_subjectsWhereInput = {
    AND?: user_subjectsWhereInput | user_subjectsWhereInput[]
    OR?: user_subjectsWhereInput[]
    NOT?: user_subjectsWhereInput | user_subjectsWhereInput[]
    id?: IntFilter<"user_subjects"> | number
    user_id?: IntNullableFilter<"user_subjects"> | number | null
    subject_id?: IntNullableFilter<"user_subjects"> | number | null
    skill_level?: StringNullableFilter<"user_subjects"> | string | null
    created_at?: DateTimeNullableFilter<"user_subjects"> | Date | string | null
    subjects?: XOR<SubjectsNullableScalarRelationFilter, subjectsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_subjectsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    skill_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    subjects?: subjectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_subjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_subjectsWhereInput | user_subjectsWhereInput[]
    OR?: user_subjectsWhereInput[]
    NOT?: user_subjectsWhereInput | user_subjectsWhereInput[]
    user_id?: IntNullableFilter<"user_subjects"> | number | null
    subject_id?: IntNullableFilter<"user_subjects"> | number | null
    skill_level?: StringNullableFilter<"user_subjects"> | string | null
    created_at?: DateTimeNullableFilter<"user_subjects"> | Date | string | null
    subjects?: XOR<SubjectsNullableScalarRelationFilter, subjectsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type user_subjectsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    skill_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: user_subjectsCountOrderByAggregateInput
    _avg?: user_subjectsAvgOrderByAggregateInput
    _max?: user_subjectsMaxOrderByAggregateInput
    _min?: user_subjectsMinOrderByAggregateInput
    _sum?: user_subjectsSumOrderByAggregateInput
  }

  export type user_subjectsScalarWhereWithAggregatesInput = {
    AND?: user_subjectsScalarWhereWithAggregatesInput | user_subjectsScalarWhereWithAggregatesInput[]
    OR?: user_subjectsScalarWhereWithAggregatesInput[]
    NOT?: user_subjectsScalarWhereWithAggregatesInput | user_subjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_subjects"> | number
    user_id?: IntNullableWithAggregatesFilter<"user_subjects"> | number | null
    subject_id?: IntNullableWithAggregatesFilter<"user_subjects"> | number | null
    skill_level?: StringNullableWithAggregatesFilter<"user_subjects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_subjects"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    full_name?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    birth_day?: DateTimeNullableFilter<"users"> | Date | string | null
    email?: StringFilter<"users"> | string
    google_id?: StringNullableFilter<"users"> | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    current_position?: StringNullableFilter<"users"> | string | null
    organization?: StringNullableFilter<"users"> | string | null
    location?: StringNullableFilter<"users"> | string | null
    facebook_link_contact?: StringNullableFilter<"users"> | string | null
    zalo_link_contact?: StringNullableFilter<"users"> | string | null
    tiktok_link_contact?: StringNullableFilter<"users"> | string | null
    website_link_contact?: StringNullableFilter<"users"> | string | null
    portfolio_link?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    auth_accounts?: Auth_accountsListRelationFilter
    documents?: DocumentsListRelationFilter
    user_academic_fields?: User_academic_fieldsListRelationFilter
    user_subjects?: User_subjectsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birth_day?: SortOrderInput | SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    facebook_link_contact?: SortOrderInput | SortOrder
    zalo_link_contact?: SortOrderInput | SortOrder
    tiktok_link_contact?: SortOrderInput | SortOrder
    website_link_contact?: SortOrderInput | SortOrder
    portfolio_link?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    auth_accounts?: auth_accountsOrderByRelationAggregateInput
    documents?: documentsOrderByRelationAggregateInput
    user_academic_fields?: user_academic_fieldsOrderByRelationAggregateInput
    user_subjects?: user_subjectsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    google_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    birth_day?: DateTimeNullableFilter<"users"> | Date | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    current_position?: StringNullableFilter<"users"> | string | null
    organization?: StringNullableFilter<"users"> | string | null
    location?: StringNullableFilter<"users"> | string | null
    facebook_link_contact?: StringNullableFilter<"users"> | string | null
    zalo_link_contact?: StringNullableFilter<"users"> | string | null
    tiktok_link_contact?: StringNullableFilter<"users"> | string | null
    website_link_contact?: StringNullableFilter<"users"> | string | null
    portfolio_link?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    auth_accounts?: Auth_accountsListRelationFilter
    documents?: DocumentsListRelationFilter
    user_academic_fields?: User_academic_fieldsListRelationFilter
    user_subjects?: User_subjectsListRelationFilter
  }, "id" | "email" | "google_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birth_day?: SortOrderInput | SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    facebook_link_contact?: SortOrderInput | SortOrder
    zalo_link_contact?: SortOrderInput | SortOrder
    tiktok_link_contact?: SortOrderInput | SortOrder
    website_link_contact?: SortOrderInput | SortOrder
    portfolio_link?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    birth_day?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    google_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    current_position?: StringNullableWithAggregatesFilter<"users"> | string | null
    organization?: StringNullableWithAggregatesFilter<"users"> | string | null
    location?: StringNullableWithAggregatesFilter<"users"> | string | null
    facebook_link_contact?: StringNullableWithAggregatesFilter<"users"> | string | null
    zalo_link_contact?: StringNullableWithAggregatesFilter<"users"> | string | null
    tiktok_link_contact?: StringNullableWithAggregatesFilter<"users"> | string | null
    website_link_contact?: StringNullableWithAggregatesFilter<"users"> | string | null
    portfolio_link?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type auth_accountsCreateInput = {
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutAuth_accountsInput
  }

  export type auth_accountsUncheckedCreateInput = {
    id?: number
    user_id: number
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_accountsUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAuth_accountsNestedInput
  }

  export type auth_accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_accountsCreateManyInput = {
    id?: number
    user_id: number
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_accountsUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsCreateInput = {
    created_at?: Date | string | null
    documents: documentsCreateNestedOneWithoutDocument_fieldsInput
    fields: fieldsCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateInput = {
    id?: number
    document_id: number
    field_id: number
    created_at?: Date | string | null
  }

  export type document_fieldsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateOneRequiredWithoutDocument_fieldsNestedInput
    fields?: fieldsUpdateOneRequiredWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsCreateManyInput = {
    id?: number
    document_id: number
    field_id: number
    created_at?: Date | string | null
  }

  export type document_fieldsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsCreateInput = {
    created_at?: Date | string | null
    documents: documentsCreateNestedOneWithoutDocument_subjectsInput
    subjects: subjectsCreateNestedOneWithoutDocument_subjectsInput
  }

  export type document_subjectsUncheckedCreateInput = {
    id?: number
    document_id: number
    subject_id: number
    created_at?: Date | string | null
  }

  export type document_subjectsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateOneRequiredWithoutDocument_subjectsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutDocument_subjectsNestedInput
  }

  export type document_subjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsCreateManyInput = {
    id?: number
    document_id: number
    subject_id: number
    created_at?: Date | string | null
  }

  export type document_subjectsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateInput = {
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutDocumentsInput
    document_subjects?: document_subjectsCreateNestedManyWithoutDocumentsInput
    users: usersCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocumentsInput
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutDocumentsNestedInput
    document_subjects?: document_subjectsUpdateManyWithoutDocumentsNestedInput
    users?: usersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocumentsNestedInput
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsCreateManyInput = {
    id?: number
    user_id: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type documentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fieldsCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutFieldsInput
    subject_fields?: subject_fieldsCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutFieldsInput
  }

  export type fieldsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutFieldsInput
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutFieldsInput
  }

  export type fieldsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutFieldsNestedInput
    subject_fields?: subject_fieldsUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
  }

  export type fieldsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type fieldsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsCreateInput = {
    created_at?: Date | string | null
    fields?: fieldsCreateNestedOneWithoutSubject_fieldsInput
    subjects?: subjectsCreateNestedOneWithoutSubject_fieldsInput
  }

  export type subject_fieldsUncheckedCreateInput = {
    id?: number
    subject_id?: number | null
    field_id?: number | null
    created_at?: Date | string | null
  }

  export type subject_fieldsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fields?: fieldsUpdateOneWithoutSubject_fieldsNestedInput
    subjects?: subjectsUpdateOneWithoutSubject_fieldsNestedInput
  }

  export type subject_fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsCreateManyInput = {
    id?: number
    subject_id?: number | null
    field_id?: number | null
    created_at?: Date | string | null
  }

  export type subject_fieldsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectsCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsCreateNestedManyWithoutSubjectsInput
    subject_fields?: subject_fieldsCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUpdateManyWithoutSubjectsNestedInput
    subject_fields?: subject_fieldsUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type subjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsCreateInput = {
    experience_years?: number | null
    created_at?: Date | string | null
    fields?: fieldsCreateNestedOneWithoutUser_academic_fieldsInput
    users?: usersCreateNestedOneWithoutUser_academic_fieldsInput
  }

  export type user_academic_fieldsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    field_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type user_academic_fieldsUpdateInput = {
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fields?: fieldsUpdateOneWithoutUser_academic_fieldsNestedInput
    users?: usersUpdateOneWithoutUser_academic_fieldsNestedInput
  }

  export type user_academic_fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsCreateManyInput = {
    id?: number
    user_id?: number | null
    field_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type user_academic_fieldsUpdateManyMutationInput = {
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsCreateInput = {
    skill_level?: string | null
    created_at?: Date | string | null
    subjects?: subjectsCreateNestedOneWithoutUser_subjectsInput
    users?: usersCreateNestedOneWithoutUser_subjectsInput
  }

  export type user_subjectsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    subject_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type user_subjectsUpdateInput = {
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectsUpdateOneWithoutUser_subjectsNestedInput
    users?: usersUpdateOneWithoutUser_subjectsNestedInput
  }

  export type user_subjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsCreateManyInput = {
    id?: number
    user_id?: number | null
    subject_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type user_subjectsUpdateManyMutationInput = {
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auth_accountsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type auth_accountsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type auth_accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type auth_accountsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type auth_accountsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type DocumentsScalarRelationFilter = {
    is?: documentsWhereInput
    isNot?: documentsWhereInput
  }

  export type FieldsScalarRelationFilter = {
    is?: fieldsWhereInput
    isNot?: fieldsWhereInput
  }

  export type document_fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
  }

  export type document_fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_fieldsSumOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    field_id?: SortOrder
  }

  export type SubjectsScalarRelationFilter = {
    is?: subjectsWhereInput
    isNot?: subjectsWhereInput
  }

  export type document_subjectsCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_subjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
  }

  export type document_subjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_subjectsMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
    created_at?: SortOrder
  }

  export type document_subjectsSumOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    subject_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Document_fieldsListRelationFilter = {
    every?: document_fieldsWhereInput
    some?: document_fieldsWhereInput
    none?: document_fieldsWhereInput
  }

  export type Document_subjectsListRelationFilter = {
    every?: document_subjectsWhereInput
    some?: document_subjectsWhereInput
    none?: document_subjectsWhereInput
  }

  export type document_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type document_subjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    numeric_score?: SortOrder
    grade_band?: SortOrder
    instructor_name?: SortOrder
    document_type?: SortOrder
    access_type?: SortOrder
    price?: SortOrder
    suitable_school?: SortOrder
    short_description?: SortOrder
    resource_type?: SortOrder
    resource_url?: SortOrder
    embed_allowed?: SortOrder
    mime_type?: SortOrder
    storage_provider?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    numeric_score?: SortOrder
    price?: SortOrder
    file_size?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    numeric_score?: SortOrder
    grade_band?: SortOrder
    instructor_name?: SortOrder
    document_type?: SortOrder
    access_type?: SortOrder
    price?: SortOrder
    suitable_school?: SortOrder
    short_description?: SortOrder
    resource_type?: SortOrder
    resource_url?: SortOrder
    embed_allowed?: SortOrder
    mime_type?: SortOrder
    storage_provider?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    numeric_score?: SortOrder
    grade_band?: SortOrder
    instructor_name?: SortOrder
    document_type?: SortOrder
    access_type?: SortOrder
    price?: SortOrder
    suitable_school?: SortOrder
    short_description?: SortOrder
    resource_type?: SortOrder
    resource_url?: SortOrder
    embed_allowed?: SortOrder
    mime_type?: SortOrder
    storage_provider?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    numeric_score?: SortOrder
    price?: SortOrder
    file_size?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Subject_fieldsListRelationFilter = {
    every?: subject_fieldsWhereInput
    some?: subject_fieldsWhereInput
    none?: subject_fieldsWhereInput
  }

  export type User_academic_fieldsListRelationFilter = {
    every?: user_academic_fieldsWhereInput
    some?: user_academic_fieldsWhereInput
    none?: user_academic_fieldsWhereInput
  }

  export type subject_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_academic_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type fieldsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FieldsNullableScalarRelationFilter = {
    is?: fieldsWhereInput | null
    isNot?: fieldsWhereInput | null
  }

  export type SubjectsNullableScalarRelationFilter = {
    is?: subjectsWhereInput | null
    isNot?: subjectsWhereInput | null
  }

  export type subject_fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type subject_fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    field_id?: SortOrder
  }

  export type subject_fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type subject_fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    field_id?: SortOrder
    created_at?: SortOrder
  }

  export type subject_fieldsSumOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    field_id?: SortOrder
  }

  export type User_subjectsListRelationFilter = {
    every?: user_subjectsWhereInput
    some?: user_subjectsWhereInput
    none?: user_subjectsWhereInput
  }

  export type user_subjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type subjectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type subjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type subjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type subjectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type user_academic_fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    field_id?: SortOrder
    experience_years?: SortOrder
    created_at?: SortOrder
  }

  export type user_academic_fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    field_id?: SortOrder
    experience_years?: SortOrder
  }

  export type user_academic_fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    field_id?: SortOrder
    experience_years?: SortOrder
    created_at?: SortOrder
  }

  export type user_academic_fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    field_id?: SortOrder
    experience_years?: SortOrder
    created_at?: SortOrder
  }

  export type user_academic_fieldsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    field_id?: SortOrder
    experience_years?: SortOrder
  }

  export type user_subjectsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject_id?: SortOrder
    skill_level?: SortOrder
    created_at?: SortOrder
  }

  export type user_subjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject_id?: SortOrder
  }

  export type user_subjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject_id?: SortOrder
    skill_level?: SortOrder
    created_at?: SortOrder
  }

  export type user_subjectsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject_id?: SortOrder
    skill_level?: SortOrder
    created_at?: SortOrder
  }

  export type user_subjectsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject_id?: SortOrder
  }

  export type Auth_accountsListRelationFilter = {
    every?: auth_accountsWhereInput
    some?: auth_accountsWhereInput
    none?: auth_accountsWhereInput
  }

  export type DocumentsListRelationFilter = {
    every?: documentsWhereInput
    some?: documentsWhereInput
    none?: documentsWhereInput
  }

  export type auth_accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birth_day?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    avatar_url?: SortOrder
    current_position?: SortOrder
    organization?: SortOrder
    location?: SortOrder
    facebook_link_contact?: SortOrder
    zalo_link_contact?: SortOrder
    tiktok_link_contact?: SortOrder
    website_link_contact?: SortOrder
    portfolio_link?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birth_day?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    avatar_url?: SortOrder
    current_position?: SortOrder
    organization?: SortOrder
    location?: SortOrder
    facebook_link_contact?: SortOrder
    zalo_link_contact?: SortOrder
    tiktok_link_contact?: SortOrder
    website_link_contact?: SortOrder
    portfolio_link?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birth_day?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    avatar_url?: SortOrder
    current_position?: SortOrder
    organization?: SortOrder
    location?: SortOrder
    facebook_link_contact?: SortOrder
    zalo_link_contact?: SortOrder
    tiktok_link_contact?: SortOrder
    website_link_contact?: SortOrder
    portfolio_link?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutAuth_accountsInput = {
    create?: XOR<usersCreateWithoutAuth_accountsInput, usersUncheckedCreateWithoutAuth_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuth_accountsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutAuth_accountsNestedInput = {
    create?: XOR<usersCreateWithoutAuth_accountsInput, usersUncheckedCreateWithoutAuth_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuth_accountsInput
    upsert?: usersUpsertWithoutAuth_accountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAuth_accountsInput, usersUpdateWithoutAuth_accountsInput>, usersUncheckedUpdateWithoutAuth_accountsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type documentsCreateNestedOneWithoutDocument_fieldsInput = {
    create?: XOR<documentsCreateWithoutDocument_fieldsInput, documentsUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_fieldsInput
    connect?: documentsWhereUniqueInput
  }

  export type fieldsCreateNestedOneWithoutDocument_fieldsInput = {
    create?: XOR<fieldsCreateWithoutDocument_fieldsInput, fieldsUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutDocument_fieldsInput
    connect?: fieldsWhereUniqueInput
  }

  export type documentsUpdateOneRequiredWithoutDocument_fieldsNestedInput = {
    create?: XOR<documentsCreateWithoutDocument_fieldsInput, documentsUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_fieldsInput
    upsert?: documentsUpsertWithoutDocument_fieldsInput
    connect?: documentsWhereUniqueInput
    update?: XOR<XOR<documentsUpdateToOneWithWhereWithoutDocument_fieldsInput, documentsUpdateWithoutDocument_fieldsInput>, documentsUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type fieldsUpdateOneRequiredWithoutDocument_fieldsNestedInput = {
    create?: XOR<fieldsCreateWithoutDocument_fieldsInput, fieldsUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutDocument_fieldsInput
    upsert?: fieldsUpsertWithoutDocument_fieldsInput
    connect?: fieldsWhereUniqueInput
    update?: XOR<XOR<fieldsUpdateToOneWithWhereWithoutDocument_fieldsInput, fieldsUpdateWithoutDocument_fieldsInput>, fieldsUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type documentsCreateNestedOneWithoutDocument_subjectsInput = {
    create?: XOR<documentsCreateWithoutDocument_subjectsInput, documentsUncheckedCreateWithoutDocument_subjectsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_subjectsInput
    connect?: documentsWhereUniqueInput
  }

  export type subjectsCreateNestedOneWithoutDocument_subjectsInput = {
    create?: XOR<subjectsCreateWithoutDocument_subjectsInput, subjectsUncheckedCreateWithoutDocument_subjectsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutDocument_subjectsInput
    connect?: subjectsWhereUniqueInput
  }

  export type documentsUpdateOneRequiredWithoutDocument_subjectsNestedInput = {
    create?: XOR<documentsCreateWithoutDocument_subjectsInput, documentsUncheckedCreateWithoutDocument_subjectsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_subjectsInput
    upsert?: documentsUpsertWithoutDocument_subjectsInput
    connect?: documentsWhereUniqueInput
    update?: XOR<XOR<documentsUpdateToOneWithWhereWithoutDocument_subjectsInput, documentsUpdateWithoutDocument_subjectsInput>, documentsUncheckedUpdateWithoutDocument_subjectsInput>
  }

  export type subjectsUpdateOneRequiredWithoutDocument_subjectsNestedInput = {
    create?: XOR<subjectsCreateWithoutDocument_subjectsInput, subjectsUncheckedCreateWithoutDocument_subjectsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutDocument_subjectsInput
    upsert?: subjectsUpsertWithoutDocument_subjectsInput
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutDocument_subjectsInput, subjectsUpdateWithoutDocument_subjectsInput>, subjectsUncheckedUpdateWithoutDocument_subjectsInput>
  }

  export type document_fieldsCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput> | document_fieldsCreateWithoutDocumentsInput[] | document_fieldsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocumentsInput | document_fieldsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_fieldsCreateManyDocumentsInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type document_subjectsCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput> | document_subjectsCreateWithoutDocumentsInput[] | document_subjectsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutDocumentsInput | document_subjectsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_subjectsCreateManyDocumentsInputEnvelope
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDocumentsInput
    connect?: usersWhereUniqueInput
  }

  export type document_fieldsUncheckedCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput> | document_fieldsCreateWithoutDocumentsInput[] | document_fieldsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocumentsInput | document_fieldsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_fieldsCreateManyDocumentsInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type document_subjectsUncheckedCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput> | document_subjectsCreateWithoutDocumentsInput[] | document_subjectsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutDocumentsInput | document_subjectsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_subjectsCreateManyDocumentsInputEnvelope
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type document_fieldsUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput> | document_fieldsCreateWithoutDocumentsInput[] | document_fieldsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocumentsInput | document_fieldsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocumentsInput | document_fieldsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_fieldsCreateManyDocumentsInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocumentsInput | document_fieldsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocumentsInput | document_fieldsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type document_subjectsUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput> | document_subjectsCreateWithoutDocumentsInput[] | document_subjectsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutDocumentsInput | document_subjectsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_subjectsUpsertWithWhereUniqueWithoutDocumentsInput | document_subjectsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_subjectsCreateManyDocumentsInputEnvelope
    set?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    disconnect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    delete?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    update?: document_subjectsUpdateWithWhereUniqueWithoutDocumentsInput | document_subjectsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_subjectsUpdateManyWithWhereWithoutDocumentsInput | document_subjectsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDocumentsInput
    upsert?: usersUpsertWithoutDocumentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDocumentsInput, usersUpdateWithoutDocumentsInput>, usersUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput> | document_fieldsCreateWithoutDocumentsInput[] | document_fieldsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocumentsInput | document_fieldsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocumentsInput | document_fieldsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_fieldsCreateManyDocumentsInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocumentsInput | document_fieldsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocumentsInput | document_fieldsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type document_subjectsUncheckedUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput> | document_subjectsCreateWithoutDocumentsInput[] | document_subjectsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutDocumentsInput | document_subjectsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_subjectsUpsertWithWhereUniqueWithoutDocumentsInput | document_subjectsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_subjectsCreateManyDocumentsInputEnvelope
    set?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    disconnect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    delete?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    update?: document_subjectsUpdateWithWhereUniqueWithoutDocumentsInput | document_subjectsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_subjectsUpdateManyWithWhereWithoutDocumentsInput | document_subjectsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
  }

  export type document_fieldsCreateNestedManyWithoutFieldsInput = {
    create?: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput> | document_fieldsCreateWithoutFieldsInput[] | document_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutFieldsInput | document_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: document_fieldsCreateManyFieldsInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type subject_fieldsCreateNestedManyWithoutFieldsInput = {
    create?: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput> | subject_fieldsCreateWithoutFieldsInput[] | subject_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutFieldsInput | subject_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: subject_fieldsCreateManyFieldsInputEnvelope
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
  }

  export type user_academic_fieldsCreateNestedManyWithoutFieldsInput = {
    create?: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput> | user_academic_fieldsCreateWithoutFieldsInput[] | user_academic_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutFieldsInput | user_academic_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: user_academic_fieldsCreateManyFieldsInputEnvelope
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
  }

  export type document_fieldsUncheckedCreateNestedManyWithoutFieldsInput = {
    create?: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput> | document_fieldsCreateWithoutFieldsInput[] | document_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutFieldsInput | document_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: document_fieldsCreateManyFieldsInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type subject_fieldsUncheckedCreateNestedManyWithoutFieldsInput = {
    create?: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput> | subject_fieldsCreateWithoutFieldsInput[] | subject_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutFieldsInput | subject_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: subject_fieldsCreateManyFieldsInputEnvelope
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
  }

  export type user_academic_fieldsUncheckedCreateNestedManyWithoutFieldsInput = {
    create?: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput> | user_academic_fieldsCreateWithoutFieldsInput[] | user_academic_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutFieldsInput | user_academic_fieldsCreateOrConnectWithoutFieldsInput[]
    createMany?: user_academic_fieldsCreateManyFieldsInputEnvelope
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
  }

  export type document_fieldsUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput> | document_fieldsCreateWithoutFieldsInput[] | document_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutFieldsInput | document_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutFieldsInput | document_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: document_fieldsCreateManyFieldsInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutFieldsInput | document_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutFieldsInput | document_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type subject_fieldsUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput> | subject_fieldsCreateWithoutFieldsInput[] | subject_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutFieldsInput | subject_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: subject_fieldsUpsertWithWhereUniqueWithoutFieldsInput | subject_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: subject_fieldsCreateManyFieldsInputEnvelope
    set?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    disconnect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    delete?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    update?: subject_fieldsUpdateWithWhereUniqueWithoutFieldsInput | subject_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: subject_fieldsUpdateManyWithWhereWithoutFieldsInput | subject_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
  }

  export type user_academic_fieldsUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput> | user_academic_fieldsCreateWithoutFieldsInput[] | user_academic_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutFieldsInput | user_academic_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: user_academic_fieldsUpsertWithWhereUniqueWithoutFieldsInput | user_academic_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: user_academic_fieldsCreateManyFieldsInputEnvelope
    set?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    disconnect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    delete?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    update?: user_academic_fieldsUpdateWithWhereUniqueWithoutFieldsInput | user_academic_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: user_academic_fieldsUpdateManyWithWhereWithoutFieldsInput | user_academic_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
  }

  export type document_fieldsUncheckedUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput> | document_fieldsCreateWithoutFieldsInput[] | document_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutFieldsInput | document_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutFieldsInput | document_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: document_fieldsCreateManyFieldsInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutFieldsInput | document_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutFieldsInput | document_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type subject_fieldsUncheckedUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput> | subject_fieldsCreateWithoutFieldsInput[] | subject_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutFieldsInput | subject_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: subject_fieldsUpsertWithWhereUniqueWithoutFieldsInput | subject_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: subject_fieldsCreateManyFieldsInputEnvelope
    set?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    disconnect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    delete?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    update?: subject_fieldsUpdateWithWhereUniqueWithoutFieldsInput | subject_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: subject_fieldsUpdateManyWithWhereWithoutFieldsInput | subject_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
  }

  export type user_academic_fieldsUncheckedUpdateManyWithoutFieldsNestedInput = {
    create?: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput> | user_academic_fieldsCreateWithoutFieldsInput[] | user_academic_fieldsUncheckedCreateWithoutFieldsInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutFieldsInput | user_academic_fieldsCreateOrConnectWithoutFieldsInput[]
    upsert?: user_academic_fieldsUpsertWithWhereUniqueWithoutFieldsInput | user_academic_fieldsUpsertWithWhereUniqueWithoutFieldsInput[]
    createMany?: user_academic_fieldsCreateManyFieldsInputEnvelope
    set?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    disconnect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    delete?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    update?: user_academic_fieldsUpdateWithWhereUniqueWithoutFieldsInput | user_academic_fieldsUpdateWithWhereUniqueWithoutFieldsInput[]
    updateMany?: user_academic_fieldsUpdateManyWithWhereWithoutFieldsInput | user_academic_fieldsUpdateManyWithWhereWithoutFieldsInput[]
    deleteMany?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
  }

  export type fieldsCreateNestedOneWithoutSubject_fieldsInput = {
    create?: XOR<fieldsCreateWithoutSubject_fieldsInput, fieldsUncheckedCreateWithoutSubject_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutSubject_fieldsInput
    connect?: fieldsWhereUniqueInput
  }

  export type subjectsCreateNestedOneWithoutSubject_fieldsInput = {
    create?: XOR<subjectsCreateWithoutSubject_fieldsInput, subjectsUncheckedCreateWithoutSubject_fieldsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutSubject_fieldsInput
    connect?: subjectsWhereUniqueInput
  }

  export type fieldsUpdateOneWithoutSubject_fieldsNestedInput = {
    create?: XOR<fieldsCreateWithoutSubject_fieldsInput, fieldsUncheckedCreateWithoutSubject_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutSubject_fieldsInput
    upsert?: fieldsUpsertWithoutSubject_fieldsInput
    disconnect?: fieldsWhereInput | boolean
    delete?: fieldsWhereInput | boolean
    connect?: fieldsWhereUniqueInput
    update?: XOR<XOR<fieldsUpdateToOneWithWhereWithoutSubject_fieldsInput, fieldsUpdateWithoutSubject_fieldsInput>, fieldsUncheckedUpdateWithoutSubject_fieldsInput>
  }

  export type subjectsUpdateOneWithoutSubject_fieldsNestedInput = {
    create?: XOR<subjectsCreateWithoutSubject_fieldsInput, subjectsUncheckedCreateWithoutSubject_fieldsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutSubject_fieldsInput
    upsert?: subjectsUpsertWithoutSubject_fieldsInput
    disconnect?: subjectsWhereInput | boolean
    delete?: subjectsWhereInput | boolean
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutSubject_fieldsInput, subjectsUpdateWithoutSubject_fieldsInput>, subjectsUncheckedUpdateWithoutSubject_fieldsInput>
  }

  export type document_subjectsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput> | document_subjectsCreateWithoutSubjectsInput[] | document_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutSubjectsInput | document_subjectsCreateOrConnectWithoutSubjectsInput[]
    createMany?: document_subjectsCreateManySubjectsInputEnvelope
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
  }

  export type subject_fieldsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput> | subject_fieldsCreateWithoutSubjectsInput[] | subject_fieldsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutSubjectsInput | subject_fieldsCreateOrConnectWithoutSubjectsInput[]
    createMany?: subject_fieldsCreateManySubjectsInputEnvelope
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
  }

  export type user_subjectsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput> | user_subjectsCreateWithoutSubjectsInput[] | user_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutSubjectsInput | user_subjectsCreateOrConnectWithoutSubjectsInput[]
    createMany?: user_subjectsCreateManySubjectsInputEnvelope
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
  }

  export type document_subjectsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput> | document_subjectsCreateWithoutSubjectsInput[] | document_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutSubjectsInput | document_subjectsCreateOrConnectWithoutSubjectsInput[]
    createMany?: document_subjectsCreateManySubjectsInputEnvelope
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
  }

  export type subject_fieldsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput> | subject_fieldsCreateWithoutSubjectsInput[] | subject_fieldsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutSubjectsInput | subject_fieldsCreateOrConnectWithoutSubjectsInput[]
    createMany?: subject_fieldsCreateManySubjectsInputEnvelope
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
  }

  export type user_subjectsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput> | user_subjectsCreateWithoutSubjectsInput[] | user_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutSubjectsInput | user_subjectsCreateOrConnectWithoutSubjectsInput[]
    createMany?: user_subjectsCreateManySubjectsInputEnvelope
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
  }

  export type document_subjectsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput> | document_subjectsCreateWithoutSubjectsInput[] | document_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutSubjectsInput | document_subjectsCreateOrConnectWithoutSubjectsInput[]
    upsert?: document_subjectsUpsertWithWhereUniqueWithoutSubjectsInput | document_subjectsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: document_subjectsCreateManySubjectsInputEnvelope
    set?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    disconnect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    delete?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    update?: document_subjectsUpdateWithWhereUniqueWithoutSubjectsInput | document_subjectsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: document_subjectsUpdateManyWithWhereWithoutSubjectsInput | document_subjectsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
  }

  export type subject_fieldsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput> | subject_fieldsCreateWithoutSubjectsInput[] | subject_fieldsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutSubjectsInput | subject_fieldsCreateOrConnectWithoutSubjectsInput[]
    upsert?: subject_fieldsUpsertWithWhereUniqueWithoutSubjectsInput | subject_fieldsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: subject_fieldsCreateManySubjectsInputEnvelope
    set?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    disconnect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    delete?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    update?: subject_fieldsUpdateWithWhereUniqueWithoutSubjectsInput | subject_fieldsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: subject_fieldsUpdateManyWithWhereWithoutSubjectsInput | subject_fieldsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
  }

  export type user_subjectsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput> | user_subjectsCreateWithoutSubjectsInput[] | user_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutSubjectsInput | user_subjectsCreateOrConnectWithoutSubjectsInput[]
    upsert?: user_subjectsUpsertWithWhereUniqueWithoutSubjectsInput | user_subjectsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: user_subjectsCreateManySubjectsInputEnvelope
    set?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    disconnect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    delete?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    update?: user_subjectsUpdateWithWhereUniqueWithoutSubjectsInput | user_subjectsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: user_subjectsUpdateManyWithWhereWithoutSubjectsInput | user_subjectsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
  }

  export type document_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput> | document_subjectsCreateWithoutSubjectsInput[] | document_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: document_subjectsCreateOrConnectWithoutSubjectsInput | document_subjectsCreateOrConnectWithoutSubjectsInput[]
    upsert?: document_subjectsUpsertWithWhereUniqueWithoutSubjectsInput | document_subjectsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: document_subjectsCreateManySubjectsInputEnvelope
    set?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    disconnect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    delete?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    connect?: document_subjectsWhereUniqueInput | document_subjectsWhereUniqueInput[]
    update?: document_subjectsUpdateWithWhereUniqueWithoutSubjectsInput | document_subjectsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: document_subjectsUpdateManyWithWhereWithoutSubjectsInput | document_subjectsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
  }

  export type subject_fieldsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput> | subject_fieldsCreateWithoutSubjectsInput[] | subject_fieldsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: subject_fieldsCreateOrConnectWithoutSubjectsInput | subject_fieldsCreateOrConnectWithoutSubjectsInput[]
    upsert?: subject_fieldsUpsertWithWhereUniqueWithoutSubjectsInput | subject_fieldsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: subject_fieldsCreateManySubjectsInputEnvelope
    set?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    disconnect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    delete?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    connect?: subject_fieldsWhereUniqueInput | subject_fieldsWhereUniqueInput[]
    update?: subject_fieldsUpdateWithWhereUniqueWithoutSubjectsInput | subject_fieldsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: subject_fieldsUpdateManyWithWhereWithoutSubjectsInput | subject_fieldsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
  }

  export type user_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput> | user_subjectsCreateWithoutSubjectsInput[] | user_subjectsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutSubjectsInput | user_subjectsCreateOrConnectWithoutSubjectsInput[]
    upsert?: user_subjectsUpsertWithWhereUniqueWithoutSubjectsInput | user_subjectsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: user_subjectsCreateManySubjectsInputEnvelope
    set?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    disconnect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    delete?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    update?: user_subjectsUpdateWithWhereUniqueWithoutSubjectsInput | user_subjectsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: user_subjectsUpdateManyWithWhereWithoutSubjectsInput | user_subjectsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
  }

  export type fieldsCreateNestedOneWithoutUser_academic_fieldsInput = {
    create?: XOR<fieldsCreateWithoutUser_academic_fieldsInput, fieldsUncheckedCreateWithoutUser_academic_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutUser_academic_fieldsInput
    connect?: fieldsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_academic_fieldsInput = {
    create?: XOR<usersCreateWithoutUser_academic_fieldsInput, usersUncheckedCreateWithoutUser_academic_fieldsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_academic_fieldsInput
    connect?: usersWhereUniqueInput
  }

  export type fieldsUpdateOneWithoutUser_academic_fieldsNestedInput = {
    create?: XOR<fieldsCreateWithoutUser_academic_fieldsInput, fieldsUncheckedCreateWithoutUser_academic_fieldsInput>
    connectOrCreate?: fieldsCreateOrConnectWithoutUser_academic_fieldsInput
    upsert?: fieldsUpsertWithoutUser_academic_fieldsInput
    disconnect?: fieldsWhereInput | boolean
    delete?: fieldsWhereInput | boolean
    connect?: fieldsWhereUniqueInput
    update?: XOR<XOR<fieldsUpdateToOneWithWhereWithoutUser_academic_fieldsInput, fieldsUpdateWithoutUser_academic_fieldsInput>, fieldsUncheckedUpdateWithoutUser_academic_fieldsInput>
  }

  export type usersUpdateOneWithoutUser_academic_fieldsNestedInput = {
    create?: XOR<usersCreateWithoutUser_academic_fieldsInput, usersUncheckedCreateWithoutUser_academic_fieldsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_academic_fieldsInput
    upsert?: usersUpsertWithoutUser_academic_fieldsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_academic_fieldsInput, usersUpdateWithoutUser_academic_fieldsInput>, usersUncheckedUpdateWithoutUser_academic_fieldsInput>
  }

  export type subjectsCreateNestedOneWithoutUser_subjectsInput = {
    create?: XOR<subjectsCreateWithoutUser_subjectsInput, subjectsUncheckedCreateWithoutUser_subjectsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutUser_subjectsInput
    connect?: subjectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_subjectsInput = {
    create?: XOR<usersCreateWithoutUser_subjectsInput, usersUncheckedCreateWithoutUser_subjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_subjectsInput
    connect?: usersWhereUniqueInput
  }

  export type subjectsUpdateOneWithoutUser_subjectsNestedInput = {
    create?: XOR<subjectsCreateWithoutUser_subjectsInput, subjectsUncheckedCreateWithoutUser_subjectsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutUser_subjectsInput
    upsert?: subjectsUpsertWithoutUser_subjectsInput
    disconnect?: subjectsWhereInput | boolean
    delete?: subjectsWhereInput | boolean
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutUser_subjectsInput, subjectsUpdateWithoutUser_subjectsInput>, subjectsUncheckedUpdateWithoutUser_subjectsInput>
  }

  export type usersUpdateOneWithoutUser_subjectsNestedInput = {
    create?: XOR<usersCreateWithoutUser_subjectsInput, usersUncheckedCreateWithoutUser_subjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_subjectsInput
    upsert?: usersUpsertWithoutUser_subjectsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_subjectsInput, usersUpdateWithoutUser_subjectsInput>, usersUncheckedUpdateWithoutUser_subjectsInput>
  }

  export type auth_accountsCreateNestedManyWithoutUsersInput = {
    create?: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput> | auth_accountsCreateWithoutUsersInput[] | auth_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auth_accountsCreateOrConnectWithoutUsersInput | auth_accountsCreateOrConnectWithoutUsersInput[]
    createMany?: auth_accountsCreateManyUsersInputEnvelope
    connect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
  }

  export type documentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type user_academic_fieldsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput> | user_academic_fieldsCreateWithoutUsersInput[] | user_academic_fieldsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutUsersInput | user_academic_fieldsCreateOrConnectWithoutUsersInput[]
    createMany?: user_academic_fieldsCreateManyUsersInputEnvelope
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
  }

  export type user_subjectsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput> | user_subjectsCreateWithoutUsersInput[] | user_subjectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutUsersInput | user_subjectsCreateOrConnectWithoutUsersInput[]
    createMany?: user_subjectsCreateManyUsersInputEnvelope
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
  }

  export type auth_accountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput> | auth_accountsCreateWithoutUsersInput[] | auth_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auth_accountsCreateOrConnectWithoutUsersInput | auth_accountsCreateOrConnectWithoutUsersInput[]
    createMany?: auth_accountsCreateManyUsersInputEnvelope
    connect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
  }

  export type documentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type user_academic_fieldsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput> | user_academic_fieldsCreateWithoutUsersInput[] | user_academic_fieldsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutUsersInput | user_academic_fieldsCreateOrConnectWithoutUsersInput[]
    createMany?: user_academic_fieldsCreateManyUsersInputEnvelope
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
  }

  export type user_subjectsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput> | user_subjectsCreateWithoutUsersInput[] | user_subjectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutUsersInput | user_subjectsCreateOrConnectWithoutUsersInput[]
    createMany?: user_subjectsCreateManyUsersInputEnvelope
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
  }

  export type auth_accountsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput> | auth_accountsCreateWithoutUsersInput[] | auth_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auth_accountsCreateOrConnectWithoutUsersInput | auth_accountsCreateOrConnectWithoutUsersInput[]
    upsert?: auth_accountsUpsertWithWhereUniqueWithoutUsersInput | auth_accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: auth_accountsCreateManyUsersInputEnvelope
    set?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    disconnect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    delete?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    connect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    update?: auth_accountsUpdateWithWhereUniqueWithoutUsersInput | auth_accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: auth_accountsUpdateManyWithWhereWithoutUsersInput | auth_accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: auth_accountsScalarWhereInput | auth_accountsScalarWhereInput[]
  }

  export type documentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutUsersInput | documentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutUsersInput | documentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutUsersInput | documentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type user_academic_fieldsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput> | user_academic_fieldsCreateWithoutUsersInput[] | user_academic_fieldsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutUsersInput | user_academic_fieldsCreateOrConnectWithoutUsersInput[]
    upsert?: user_academic_fieldsUpsertWithWhereUniqueWithoutUsersInput | user_academic_fieldsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_academic_fieldsCreateManyUsersInputEnvelope
    set?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    disconnect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    delete?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    update?: user_academic_fieldsUpdateWithWhereUniqueWithoutUsersInput | user_academic_fieldsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_academic_fieldsUpdateManyWithWhereWithoutUsersInput | user_academic_fieldsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
  }

  export type user_subjectsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput> | user_subjectsCreateWithoutUsersInput[] | user_subjectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutUsersInput | user_subjectsCreateOrConnectWithoutUsersInput[]
    upsert?: user_subjectsUpsertWithWhereUniqueWithoutUsersInput | user_subjectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_subjectsCreateManyUsersInputEnvelope
    set?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    disconnect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    delete?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    update?: user_subjectsUpdateWithWhereUniqueWithoutUsersInput | user_subjectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_subjectsUpdateManyWithWhereWithoutUsersInput | user_subjectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
  }

  export type auth_accountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput> | auth_accountsCreateWithoutUsersInput[] | auth_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auth_accountsCreateOrConnectWithoutUsersInput | auth_accountsCreateOrConnectWithoutUsersInput[]
    upsert?: auth_accountsUpsertWithWhereUniqueWithoutUsersInput | auth_accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: auth_accountsCreateManyUsersInputEnvelope
    set?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    disconnect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    delete?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    connect?: auth_accountsWhereUniqueInput | auth_accountsWhereUniqueInput[]
    update?: auth_accountsUpdateWithWhereUniqueWithoutUsersInput | auth_accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: auth_accountsUpdateManyWithWhereWithoutUsersInput | auth_accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: auth_accountsScalarWhereInput | auth_accountsScalarWhereInput[]
  }

  export type documentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutUsersInput | documentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutUsersInput | documentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutUsersInput | documentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type user_academic_fieldsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput> | user_academic_fieldsCreateWithoutUsersInput[] | user_academic_fieldsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_academic_fieldsCreateOrConnectWithoutUsersInput | user_academic_fieldsCreateOrConnectWithoutUsersInput[]
    upsert?: user_academic_fieldsUpsertWithWhereUniqueWithoutUsersInput | user_academic_fieldsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_academic_fieldsCreateManyUsersInputEnvelope
    set?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    disconnect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    delete?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    connect?: user_academic_fieldsWhereUniqueInput | user_academic_fieldsWhereUniqueInput[]
    update?: user_academic_fieldsUpdateWithWhereUniqueWithoutUsersInput | user_academic_fieldsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_academic_fieldsUpdateManyWithWhereWithoutUsersInput | user_academic_fieldsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
  }

  export type user_subjectsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput> | user_subjectsCreateWithoutUsersInput[] | user_subjectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_subjectsCreateOrConnectWithoutUsersInput | user_subjectsCreateOrConnectWithoutUsersInput[]
    upsert?: user_subjectsUpsertWithWhereUniqueWithoutUsersInput | user_subjectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_subjectsCreateManyUsersInputEnvelope
    set?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    disconnect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    delete?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    connect?: user_subjectsWhereUniqueInput | user_subjectsWhereUniqueInput[]
    update?: user_subjectsUpdateWithWhereUniqueWithoutUsersInput | user_subjectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_subjectsUpdateManyWithWhereWithoutUsersInput | user_subjectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutAuth_accountsInput = {
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    documents?: documentsCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAuth_accountsInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAuth_accountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAuth_accountsInput, usersUncheckedCreateWithoutAuth_accountsInput>
  }

  export type usersUpsertWithoutAuth_accountsInput = {
    update: XOR<usersUpdateWithoutAuth_accountsInput, usersUncheckedUpdateWithoutAuth_accountsInput>
    create: XOR<usersCreateWithoutAuth_accountsInput, usersUncheckedCreateWithoutAuth_accountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAuth_accountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAuth_accountsInput, usersUncheckedUpdateWithoutAuth_accountsInput>
  }

  export type usersUpdateWithoutAuth_accountsInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAuth_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type documentsCreateWithoutDocument_fieldsInput = {
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_subjects?: document_subjectsCreateNestedManyWithoutDocumentsInput
    users: usersCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutDocument_fieldsInput = {
    id?: number
    user_id: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutDocument_fieldsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutDocument_fieldsInput, documentsUncheckedCreateWithoutDocument_fieldsInput>
  }

  export type fieldsCreateWithoutDocument_fieldsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    subject_fields?: subject_fieldsCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutFieldsInput
  }

  export type fieldsUncheckedCreateWithoutDocument_fieldsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutFieldsInput
  }

  export type fieldsCreateOrConnectWithoutDocument_fieldsInput = {
    where: fieldsWhereUniqueInput
    create: XOR<fieldsCreateWithoutDocument_fieldsInput, fieldsUncheckedCreateWithoutDocument_fieldsInput>
  }

  export type documentsUpsertWithoutDocument_fieldsInput = {
    update: XOR<documentsUpdateWithoutDocument_fieldsInput, documentsUncheckedUpdateWithoutDocument_fieldsInput>
    create: XOR<documentsCreateWithoutDocument_fieldsInput, documentsUncheckedCreateWithoutDocument_fieldsInput>
    where?: documentsWhereInput
  }

  export type documentsUpdateToOneWithWhereWithoutDocument_fieldsInput = {
    where?: documentsWhereInput
    data: XOR<documentsUpdateWithoutDocument_fieldsInput, documentsUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type documentsUpdateWithoutDocument_fieldsInput = {
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUpdateManyWithoutDocumentsNestedInput
    users?: usersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutDocument_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type fieldsUpsertWithoutDocument_fieldsInput = {
    update: XOR<fieldsUpdateWithoutDocument_fieldsInput, fieldsUncheckedUpdateWithoutDocument_fieldsInput>
    create: XOR<fieldsCreateWithoutDocument_fieldsInput, fieldsUncheckedCreateWithoutDocument_fieldsInput>
    where?: fieldsWhereInput
  }

  export type fieldsUpdateToOneWithWhereWithoutDocument_fieldsInput = {
    where?: fieldsWhereInput
    data: XOR<fieldsUpdateWithoutDocument_fieldsInput, fieldsUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type fieldsUpdateWithoutDocument_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_fields?: subject_fieldsUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateWithoutDocument_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
  }

  export type documentsCreateWithoutDocument_subjectsInput = {
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutDocumentsInput
    users: usersCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutDocument_subjectsInput = {
    id?: number
    user_id: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutDocument_subjectsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutDocument_subjectsInput, documentsUncheckedCreateWithoutDocument_subjectsInput>
  }

  export type subjectsCreateWithoutDocument_subjectsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    subject_fields?: subject_fieldsCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutDocument_subjectsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutDocument_subjectsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutDocument_subjectsInput, subjectsUncheckedCreateWithoutDocument_subjectsInput>
  }

  export type documentsUpsertWithoutDocument_subjectsInput = {
    update: XOR<documentsUpdateWithoutDocument_subjectsInput, documentsUncheckedUpdateWithoutDocument_subjectsInput>
    create: XOR<documentsCreateWithoutDocument_subjectsInput, documentsUncheckedCreateWithoutDocument_subjectsInput>
    where?: documentsWhereInput
  }

  export type documentsUpdateToOneWithWhereWithoutDocument_subjectsInput = {
    where?: documentsWhereInput
    data: XOR<documentsUpdateWithoutDocument_subjectsInput, documentsUncheckedUpdateWithoutDocument_subjectsInput>
  }

  export type documentsUpdateWithoutDocument_subjectsInput = {
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutDocumentsNestedInput
    users?: usersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutDocument_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type subjectsUpsertWithoutDocument_subjectsInput = {
    update: XOR<subjectsUpdateWithoutDocument_subjectsInput, subjectsUncheckedUpdateWithoutDocument_subjectsInput>
    create: XOR<subjectsCreateWithoutDocument_subjectsInput, subjectsUncheckedCreateWithoutDocument_subjectsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutDocument_subjectsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutDocument_subjectsInput, subjectsUncheckedUpdateWithoutDocument_subjectsInput>
  }

  export type subjectsUpdateWithoutDocument_subjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_fields?: subject_fieldsUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutDocument_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type document_fieldsCreateWithoutDocumentsInput = {
    created_at?: Date | string | null
    fields: fieldsCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateWithoutDocumentsInput = {
    id?: number
    field_id: number
    created_at?: Date | string | null
  }

  export type document_fieldsCreateOrConnectWithoutDocumentsInput = {
    where: document_fieldsWhereUniqueInput
    create: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_fieldsCreateManyDocumentsInputEnvelope = {
    data: document_fieldsCreateManyDocumentsInput | document_fieldsCreateManyDocumentsInput[]
    skipDuplicates?: boolean
  }

  export type document_subjectsCreateWithoutDocumentsInput = {
    created_at?: Date | string | null
    subjects: subjectsCreateNestedOneWithoutDocument_subjectsInput
  }

  export type document_subjectsUncheckedCreateWithoutDocumentsInput = {
    id?: number
    subject_id: number
    created_at?: Date | string | null
  }

  export type document_subjectsCreateOrConnectWithoutDocumentsInput = {
    where: document_subjectsWhereUniqueInput
    create: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_subjectsCreateManyDocumentsInputEnvelope = {
    data: document_subjectsCreateManyDocumentsInput | document_subjectsCreateManyDocumentsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDocumentsInput = {
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDocumentsInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsUncheckedCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDocumentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
  }

  export type document_fieldsUpsertWithWhereUniqueWithoutDocumentsInput = {
    where: document_fieldsWhereUniqueInput
    update: XOR<document_fieldsUpdateWithoutDocumentsInput, document_fieldsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<document_fieldsCreateWithoutDocumentsInput, document_fieldsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_fieldsUpdateWithWhereUniqueWithoutDocumentsInput = {
    where: document_fieldsWhereUniqueInput
    data: XOR<document_fieldsUpdateWithoutDocumentsInput, document_fieldsUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_fieldsUpdateManyWithWhereWithoutDocumentsInput = {
    where: document_fieldsScalarWhereInput
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyWithoutDocumentsInput>
  }

  export type document_fieldsScalarWhereInput = {
    AND?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
    OR?: document_fieldsScalarWhereInput[]
    NOT?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
    id?: IntFilter<"document_fields"> | number
    document_id?: IntFilter<"document_fields"> | number
    field_id?: IntFilter<"document_fields"> | number
    created_at?: DateTimeNullableFilter<"document_fields"> | Date | string | null
  }

  export type document_subjectsUpsertWithWhereUniqueWithoutDocumentsInput = {
    where: document_subjectsWhereUniqueInput
    update: XOR<document_subjectsUpdateWithoutDocumentsInput, document_subjectsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<document_subjectsCreateWithoutDocumentsInput, document_subjectsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_subjectsUpdateWithWhereUniqueWithoutDocumentsInput = {
    where: document_subjectsWhereUniqueInput
    data: XOR<document_subjectsUpdateWithoutDocumentsInput, document_subjectsUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_subjectsUpdateManyWithWhereWithoutDocumentsInput = {
    where: document_subjectsScalarWhereInput
    data: XOR<document_subjectsUpdateManyMutationInput, document_subjectsUncheckedUpdateManyWithoutDocumentsInput>
  }

  export type document_subjectsScalarWhereInput = {
    AND?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
    OR?: document_subjectsScalarWhereInput[]
    NOT?: document_subjectsScalarWhereInput | document_subjectsScalarWhereInput[]
    id?: IntFilter<"document_subjects"> | number
    document_id?: IntFilter<"document_subjects"> | number
    subject_id?: IntFilter<"document_subjects"> | number
    created_at?: DateTimeNullableFilter<"document_subjects"> | Date | string | null
  }

  export type usersUpsertWithoutDocumentsInput = {
    update: XOR<usersUpdateWithoutDocumentsInput, usersUncheckedUpdateWithoutDocumentsInput>
    create: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDocumentsInput, usersUncheckedUpdateWithoutDocumentsInput>
  }

  export type usersUpdateWithoutDocumentsInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUncheckedUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type document_fieldsCreateWithoutFieldsInput = {
    created_at?: Date | string | null
    documents: documentsCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateWithoutFieldsInput = {
    id?: number
    document_id: number
    created_at?: Date | string | null
  }

  export type document_fieldsCreateOrConnectWithoutFieldsInput = {
    where: document_fieldsWhereUniqueInput
    create: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type document_fieldsCreateManyFieldsInputEnvelope = {
    data: document_fieldsCreateManyFieldsInput | document_fieldsCreateManyFieldsInput[]
    skipDuplicates?: boolean
  }

  export type subject_fieldsCreateWithoutFieldsInput = {
    created_at?: Date | string | null
    subjects?: subjectsCreateNestedOneWithoutSubject_fieldsInput
  }

  export type subject_fieldsUncheckedCreateWithoutFieldsInput = {
    id?: number
    subject_id?: number | null
    created_at?: Date | string | null
  }

  export type subject_fieldsCreateOrConnectWithoutFieldsInput = {
    where: subject_fieldsWhereUniqueInput
    create: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type subject_fieldsCreateManyFieldsInputEnvelope = {
    data: subject_fieldsCreateManyFieldsInput | subject_fieldsCreateManyFieldsInput[]
    skipDuplicates?: boolean
  }

  export type user_academic_fieldsCreateWithoutFieldsInput = {
    experience_years?: number | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_academic_fieldsInput
  }

  export type user_academic_fieldsUncheckedCreateWithoutFieldsInput = {
    id?: number
    user_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type user_academic_fieldsCreateOrConnectWithoutFieldsInput = {
    where: user_academic_fieldsWhereUniqueInput
    create: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type user_academic_fieldsCreateManyFieldsInputEnvelope = {
    data: user_academic_fieldsCreateManyFieldsInput | user_academic_fieldsCreateManyFieldsInput[]
    skipDuplicates?: boolean
  }

  export type document_fieldsUpsertWithWhereUniqueWithoutFieldsInput = {
    where: document_fieldsWhereUniqueInput
    update: XOR<document_fieldsUpdateWithoutFieldsInput, document_fieldsUncheckedUpdateWithoutFieldsInput>
    create: XOR<document_fieldsCreateWithoutFieldsInput, document_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type document_fieldsUpdateWithWhereUniqueWithoutFieldsInput = {
    where: document_fieldsWhereUniqueInput
    data: XOR<document_fieldsUpdateWithoutFieldsInput, document_fieldsUncheckedUpdateWithoutFieldsInput>
  }

  export type document_fieldsUpdateManyWithWhereWithoutFieldsInput = {
    where: document_fieldsScalarWhereInput
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyWithoutFieldsInput>
  }

  export type subject_fieldsUpsertWithWhereUniqueWithoutFieldsInput = {
    where: subject_fieldsWhereUniqueInput
    update: XOR<subject_fieldsUpdateWithoutFieldsInput, subject_fieldsUncheckedUpdateWithoutFieldsInput>
    create: XOR<subject_fieldsCreateWithoutFieldsInput, subject_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type subject_fieldsUpdateWithWhereUniqueWithoutFieldsInput = {
    where: subject_fieldsWhereUniqueInput
    data: XOR<subject_fieldsUpdateWithoutFieldsInput, subject_fieldsUncheckedUpdateWithoutFieldsInput>
  }

  export type subject_fieldsUpdateManyWithWhereWithoutFieldsInput = {
    where: subject_fieldsScalarWhereInput
    data: XOR<subject_fieldsUpdateManyMutationInput, subject_fieldsUncheckedUpdateManyWithoutFieldsInput>
  }

  export type subject_fieldsScalarWhereInput = {
    AND?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
    OR?: subject_fieldsScalarWhereInput[]
    NOT?: subject_fieldsScalarWhereInput | subject_fieldsScalarWhereInput[]
    id?: IntFilter<"subject_fields"> | number
    subject_id?: IntNullableFilter<"subject_fields"> | number | null
    field_id?: IntNullableFilter<"subject_fields"> | number | null
    created_at?: DateTimeNullableFilter<"subject_fields"> | Date | string | null
  }

  export type user_academic_fieldsUpsertWithWhereUniqueWithoutFieldsInput = {
    where: user_academic_fieldsWhereUniqueInput
    update: XOR<user_academic_fieldsUpdateWithoutFieldsInput, user_academic_fieldsUncheckedUpdateWithoutFieldsInput>
    create: XOR<user_academic_fieldsCreateWithoutFieldsInput, user_academic_fieldsUncheckedCreateWithoutFieldsInput>
  }

  export type user_academic_fieldsUpdateWithWhereUniqueWithoutFieldsInput = {
    where: user_academic_fieldsWhereUniqueInput
    data: XOR<user_academic_fieldsUpdateWithoutFieldsInput, user_academic_fieldsUncheckedUpdateWithoutFieldsInput>
  }

  export type user_academic_fieldsUpdateManyWithWhereWithoutFieldsInput = {
    where: user_academic_fieldsScalarWhereInput
    data: XOR<user_academic_fieldsUpdateManyMutationInput, user_academic_fieldsUncheckedUpdateManyWithoutFieldsInput>
  }

  export type user_academic_fieldsScalarWhereInput = {
    AND?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
    OR?: user_academic_fieldsScalarWhereInput[]
    NOT?: user_academic_fieldsScalarWhereInput | user_academic_fieldsScalarWhereInput[]
    id?: IntFilter<"user_academic_fields"> | number
    user_id?: IntNullableFilter<"user_academic_fields"> | number | null
    field_id?: IntNullableFilter<"user_academic_fields"> | number | null
    experience_years?: IntNullableFilter<"user_academic_fields"> | number | null
    created_at?: DateTimeNullableFilter<"user_academic_fields"> | Date | string | null
  }

  export type fieldsCreateWithoutSubject_fieldsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutFieldsInput
  }

  export type fieldsUncheckedCreateWithoutSubject_fieldsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutFieldsInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutFieldsInput
  }

  export type fieldsCreateOrConnectWithoutSubject_fieldsInput = {
    where: fieldsWhereUniqueInput
    create: XOR<fieldsCreateWithoutSubject_fieldsInput, fieldsUncheckedCreateWithoutSubject_fieldsInput>
  }

  export type subjectsCreateWithoutSubject_fieldsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutSubject_fieldsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutSubject_fieldsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutSubject_fieldsInput, subjectsUncheckedCreateWithoutSubject_fieldsInput>
  }

  export type fieldsUpsertWithoutSubject_fieldsInput = {
    update: XOR<fieldsUpdateWithoutSubject_fieldsInput, fieldsUncheckedUpdateWithoutSubject_fieldsInput>
    create: XOR<fieldsCreateWithoutSubject_fieldsInput, fieldsUncheckedCreateWithoutSubject_fieldsInput>
    where?: fieldsWhereInput
  }

  export type fieldsUpdateToOneWithWhereWithoutSubject_fieldsInput = {
    where?: fieldsWhereInput
    data: XOR<fieldsUpdateWithoutSubject_fieldsInput, fieldsUncheckedUpdateWithoutSubject_fieldsInput>
  }

  export type fieldsUpdateWithoutSubject_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateWithoutSubject_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
  }

  export type subjectsUpsertWithoutSubject_fieldsInput = {
    update: XOR<subjectsUpdateWithoutSubject_fieldsInput, subjectsUncheckedUpdateWithoutSubject_fieldsInput>
    create: XOR<subjectsCreateWithoutSubject_fieldsInput, subjectsUncheckedCreateWithoutSubject_fieldsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutSubject_fieldsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutSubject_fieldsInput, subjectsUncheckedUpdateWithoutSubject_fieldsInput>
  }

  export type subjectsUpdateWithoutSubject_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutSubject_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type document_subjectsCreateWithoutSubjectsInput = {
    created_at?: Date | string | null
    documents: documentsCreateNestedOneWithoutDocument_subjectsInput
  }

  export type document_subjectsUncheckedCreateWithoutSubjectsInput = {
    id?: number
    document_id: number
    created_at?: Date | string | null
  }

  export type document_subjectsCreateOrConnectWithoutSubjectsInput = {
    where: document_subjectsWhereUniqueInput
    create: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput>
  }

  export type document_subjectsCreateManySubjectsInputEnvelope = {
    data: document_subjectsCreateManySubjectsInput | document_subjectsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type subject_fieldsCreateWithoutSubjectsInput = {
    created_at?: Date | string | null
    fields?: fieldsCreateNestedOneWithoutSubject_fieldsInput
  }

  export type subject_fieldsUncheckedCreateWithoutSubjectsInput = {
    id?: number
    field_id?: number | null
    created_at?: Date | string | null
  }

  export type subject_fieldsCreateOrConnectWithoutSubjectsInput = {
    where: subject_fieldsWhereUniqueInput
    create: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput>
  }

  export type subject_fieldsCreateManySubjectsInputEnvelope = {
    data: subject_fieldsCreateManySubjectsInput | subject_fieldsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type user_subjectsCreateWithoutSubjectsInput = {
    skill_level?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_subjectsInput
  }

  export type user_subjectsUncheckedCreateWithoutSubjectsInput = {
    id?: number
    user_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type user_subjectsCreateOrConnectWithoutSubjectsInput = {
    where: user_subjectsWhereUniqueInput
    create: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput>
  }

  export type user_subjectsCreateManySubjectsInputEnvelope = {
    data: user_subjectsCreateManySubjectsInput | user_subjectsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type document_subjectsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: document_subjectsWhereUniqueInput
    update: XOR<document_subjectsUpdateWithoutSubjectsInput, document_subjectsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<document_subjectsCreateWithoutSubjectsInput, document_subjectsUncheckedCreateWithoutSubjectsInput>
  }

  export type document_subjectsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: document_subjectsWhereUniqueInput
    data: XOR<document_subjectsUpdateWithoutSubjectsInput, document_subjectsUncheckedUpdateWithoutSubjectsInput>
  }

  export type document_subjectsUpdateManyWithWhereWithoutSubjectsInput = {
    where: document_subjectsScalarWhereInput
    data: XOR<document_subjectsUpdateManyMutationInput, document_subjectsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type subject_fieldsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: subject_fieldsWhereUniqueInput
    update: XOR<subject_fieldsUpdateWithoutSubjectsInput, subject_fieldsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<subject_fieldsCreateWithoutSubjectsInput, subject_fieldsUncheckedCreateWithoutSubjectsInput>
  }

  export type subject_fieldsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: subject_fieldsWhereUniqueInput
    data: XOR<subject_fieldsUpdateWithoutSubjectsInput, subject_fieldsUncheckedUpdateWithoutSubjectsInput>
  }

  export type subject_fieldsUpdateManyWithWhereWithoutSubjectsInput = {
    where: subject_fieldsScalarWhereInput
    data: XOR<subject_fieldsUpdateManyMutationInput, subject_fieldsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type user_subjectsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: user_subjectsWhereUniqueInput
    update: XOR<user_subjectsUpdateWithoutSubjectsInput, user_subjectsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<user_subjectsCreateWithoutSubjectsInput, user_subjectsUncheckedCreateWithoutSubjectsInput>
  }

  export type user_subjectsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: user_subjectsWhereUniqueInput
    data: XOR<user_subjectsUpdateWithoutSubjectsInput, user_subjectsUncheckedUpdateWithoutSubjectsInput>
  }

  export type user_subjectsUpdateManyWithWhereWithoutSubjectsInput = {
    where: user_subjectsScalarWhereInput
    data: XOR<user_subjectsUpdateManyMutationInput, user_subjectsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type user_subjectsScalarWhereInput = {
    AND?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
    OR?: user_subjectsScalarWhereInput[]
    NOT?: user_subjectsScalarWhereInput | user_subjectsScalarWhereInput[]
    id?: IntFilter<"user_subjects"> | number
    user_id?: IntNullableFilter<"user_subjects"> | number | null
    subject_id?: IntNullableFilter<"user_subjects"> | number | null
    skill_level?: StringNullableFilter<"user_subjects"> | string | null
    created_at?: DateTimeNullableFilter<"user_subjects"> | Date | string | null
  }

  export type fieldsCreateWithoutUser_academic_fieldsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutFieldsInput
    subject_fields?: subject_fieldsCreateNestedManyWithoutFieldsInput
  }

  export type fieldsUncheckedCreateWithoutUser_academic_fieldsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutFieldsInput
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutFieldsInput
  }

  export type fieldsCreateOrConnectWithoutUser_academic_fieldsInput = {
    where: fieldsWhereUniqueInput
    create: XOR<fieldsCreateWithoutUser_academic_fieldsInput, fieldsUncheckedCreateWithoutUser_academic_fieldsInput>
  }

  export type usersCreateWithoutUser_academic_fieldsInput = {
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_academic_fieldsInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    user_subjects?: user_subjectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_academic_fieldsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_academic_fieldsInput, usersUncheckedCreateWithoutUser_academic_fieldsInput>
  }

  export type fieldsUpsertWithoutUser_academic_fieldsInput = {
    update: XOR<fieldsUpdateWithoutUser_academic_fieldsInput, fieldsUncheckedUpdateWithoutUser_academic_fieldsInput>
    create: XOR<fieldsCreateWithoutUser_academic_fieldsInput, fieldsUncheckedCreateWithoutUser_academic_fieldsInput>
    where?: fieldsWhereInput
  }

  export type fieldsUpdateToOneWithWhereWithoutUser_academic_fieldsInput = {
    where?: fieldsWhereInput
    data: XOR<fieldsUpdateWithoutUser_academic_fieldsInput, fieldsUncheckedUpdateWithoutUser_academic_fieldsInput>
  }

  export type fieldsUpdateWithoutUser_academic_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutFieldsNestedInput
    subject_fields?: subject_fieldsUpdateManyWithoutFieldsNestedInput
  }

  export type fieldsUncheckedUpdateWithoutUser_academic_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutFieldsNestedInput
  }

  export type usersUpsertWithoutUser_academic_fieldsInput = {
    update: XOR<usersUpdateWithoutUser_academic_fieldsInput, usersUncheckedUpdateWithoutUser_academic_fieldsInput>
    create: XOR<usersCreateWithoutUser_academic_fieldsInput, usersUncheckedCreateWithoutUser_academic_fieldsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_academic_fieldsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_academic_fieldsInput, usersUncheckedUpdateWithoutUser_academic_fieldsInput>
  }

  export type usersUpdateWithoutUser_academic_fieldsInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_academic_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    user_subjects?: user_subjectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type subjectsCreateWithoutUser_subjectsInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsCreateNestedManyWithoutSubjectsInput
    subject_fields?: subject_fieldsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutUser_subjectsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutSubjectsInput
    subject_fields?: subject_fieldsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutUser_subjectsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutUser_subjectsInput, subjectsUncheckedCreateWithoutUser_subjectsInput>
  }

  export type usersCreateWithoutUser_subjectsInput = {
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_subjectsInput = {
    id?: number
    full_name?: string | null
    gender?: string | null
    birth_day?: Date | string | null
    email: string
    google_id?: string | null
    avatar_url?: string | null
    current_position?: string | null
    organization?: string | null
    location?: string | null
    facebook_link_contact?: string | null
    zalo_link_contact?: string | null
    tiktok_link_contact?: string | null
    website_link_contact?: string | null
    portfolio_link?: string | null
    created_at?: Date | string | null
    auth_accounts?: auth_accountsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    user_academic_fields?: user_academic_fieldsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_subjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_subjectsInput, usersUncheckedCreateWithoutUser_subjectsInput>
  }

  export type subjectsUpsertWithoutUser_subjectsInput = {
    update: XOR<subjectsUpdateWithoutUser_subjectsInput, subjectsUncheckedUpdateWithoutUser_subjectsInput>
    create: XOR<subjectsCreateWithoutUser_subjectsInput, subjectsUncheckedCreateWithoutUser_subjectsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutUser_subjectsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutUser_subjectsInput, subjectsUncheckedUpdateWithoutUser_subjectsInput>
  }

  export type subjectsUpdateWithoutUser_subjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUpdateManyWithoutSubjectsNestedInput
    subject_fields?: subject_fieldsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutUser_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutSubjectsNestedInput
    subject_fields?: subject_fieldsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type usersUpsertWithoutUser_subjectsInput = {
    update: XOR<usersUpdateWithoutUser_subjectsInput, usersUncheckedUpdateWithoutUser_subjectsInput>
    create: XOR<usersCreateWithoutUser_subjectsInput, usersUncheckedCreateWithoutUser_subjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_subjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_subjectsInput, usersUncheckedUpdateWithoutUser_subjectsInput>
  }

  export type usersUpdateWithoutUser_subjectsInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    zalo_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    website_link_contact?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auth_accounts?: auth_accountsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    user_academic_fields?: user_academic_fieldsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type auth_accountsCreateWithoutUsersInput = {
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_accountsUncheckedCreateWithoutUsersInput = {
    id?: number
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type auth_accountsCreateOrConnectWithoutUsersInput = {
    where: auth_accountsWhereUniqueInput
    create: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput>
  }

  export type auth_accountsCreateManyUsersInputEnvelope = {
    data: auth_accountsCreateManyUsersInput | auth_accountsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type documentsCreateWithoutUsersInput = {
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsCreateNestedManyWithoutDocumentsInput
    document_subjects?: document_subjectsCreateNestedManyWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocumentsInput
    document_subjects?: document_subjectsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutUsersInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput>
  }

  export type documentsCreateManyUsersInputEnvelope = {
    data: documentsCreateManyUsersInput | documentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_academic_fieldsCreateWithoutUsersInput = {
    experience_years?: number | null
    created_at?: Date | string | null
    fields?: fieldsCreateNestedOneWithoutUser_academic_fieldsInput
  }

  export type user_academic_fieldsUncheckedCreateWithoutUsersInput = {
    id?: number
    field_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type user_academic_fieldsCreateOrConnectWithoutUsersInput = {
    where: user_academic_fieldsWhereUniqueInput
    create: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput>
  }

  export type user_academic_fieldsCreateManyUsersInputEnvelope = {
    data: user_academic_fieldsCreateManyUsersInput | user_academic_fieldsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_subjectsCreateWithoutUsersInput = {
    skill_level?: string | null
    created_at?: Date | string | null
    subjects?: subjectsCreateNestedOneWithoutUser_subjectsInput
  }

  export type user_subjectsUncheckedCreateWithoutUsersInput = {
    id?: number
    subject_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type user_subjectsCreateOrConnectWithoutUsersInput = {
    where: user_subjectsWhereUniqueInput
    create: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput>
  }

  export type user_subjectsCreateManyUsersInputEnvelope = {
    data: user_subjectsCreateManyUsersInput | user_subjectsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type auth_accountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: auth_accountsWhereUniqueInput
    update: XOR<auth_accountsUpdateWithoutUsersInput, auth_accountsUncheckedUpdateWithoutUsersInput>
    create: XOR<auth_accountsCreateWithoutUsersInput, auth_accountsUncheckedCreateWithoutUsersInput>
  }

  export type auth_accountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: auth_accountsWhereUniqueInput
    data: XOR<auth_accountsUpdateWithoutUsersInput, auth_accountsUncheckedUpdateWithoutUsersInput>
  }

  export type auth_accountsUpdateManyWithWhereWithoutUsersInput = {
    where: auth_accountsScalarWhereInput
    data: XOR<auth_accountsUpdateManyMutationInput, auth_accountsUncheckedUpdateManyWithoutUsersInput>
  }

  export type auth_accountsScalarWhereInput = {
    AND?: auth_accountsScalarWhereInput | auth_accountsScalarWhereInput[]
    OR?: auth_accountsScalarWhereInput[]
    NOT?: auth_accountsScalarWhereInput | auth_accountsScalarWhereInput[]
    id?: IntFilter<"auth_accounts"> | number
    user_id?: IntFilter<"auth_accounts"> | number
    provider?: StringFilter<"auth_accounts"> | string
    provider_account_id?: StringFilter<"auth_accounts"> | string
    access_token?: StringNullableFilter<"auth_accounts"> | string | null
    refresh_token?: StringNullableFilter<"auth_accounts"> | string | null
    expires_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"auth_accounts"> | Date | string | null
  }

  export type documentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: documentsWhereUniqueInput
    update: XOR<documentsUpdateWithoutUsersInput, documentsUncheckedUpdateWithoutUsersInput>
    create: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput>
  }

  export type documentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: documentsWhereUniqueInput
    data: XOR<documentsUpdateWithoutUsersInput, documentsUncheckedUpdateWithoutUsersInput>
  }

  export type documentsUpdateManyWithWhereWithoutUsersInput = {
    where: documentsScalarWhereInput
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type documentsScalarWhereInput = {
    AND?: documentsScalarWhereInput | documentsScalarWhereInput[]
    OR?: documentsScalarWhereInput[]
    NOT?: documentsScalarWhereInput | documentsScalarWhereInput[]
    id?: IntFilter<"documents"> | number
    user_id?: IntFilter<"documents"> | number
    title?: StringFilter<"documents"> | string
    numeric_score?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    grade_band?: StringNullableFilter<"documents"> | string | null
    instructor_name?: StringNullableFilter<"documents"> | string | null
    document_type?: StringNullableFilter<"documents"> | string | null
    access_type?: StringNullableFilter<"documents"> | string | null
    price?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    suitable_school?: StringNullableFilter<"documents"> | string | null
    short_description?: StringNullableFilter<"documents"> | string | null
    resource_type?: StringFilter<"documents"> | string
    resource_url?: StringFilter<"documents"> | string
    embed_allowed?: BoolNullableFilter<"documents"> | boolean | null
    mime_type?: StringNullableFilter<"documents"> | string | null
    storage_provider?: StringNullableFilter<"documents"> | string | null
    file_size?: IntNullableFilter<"documents"> | number | null
    created_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"documents"> | Date | string | null
  }

  export type user_academic_fieldsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_academic_fieldsWhereUniqueInput
    update: XOR<user_academic_fieldsUpdateWithoutUsersInput, user_academic_fieldsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_academic_fieldsCreateWithoutUsersInput, user_academic_fieldsUncheckedCreateWithoutUsersInput>
  }

  export type user_academic_fieldsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_academic_fieldsWhereUniqueInput
    data: XOR<user_academic_fieldsUpdateWithoutUsersInput, user_academic_fieldsUncheckedUpdateWithoutUsersInput>
  }

  export type user_academic_fieldsUpdateManyWithWhereWithoutUsersInput = {
    where: user_academic_fieldsScalarWhereInput
    data: XOR<user_academic_fieldsUpdateManyMutationInput, user_academic_fieldsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_subjectsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_subjectsWhereUniqueInput
    update: XOR<user_subjectsUpdateWithoutUsersInput, user_subjectsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_subjectsCreateWithoutUsersInput, user_subjectsUncheckedCreateWithoutUsersInput>
  }

  export type user_subjectsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_subjectsWhereUniqueInput
    data: XOR<user_subjectsUpdateWithoutUsersInput, user_subjectsUncheckedUpdateWithoutUsersInput>
  }

  export type user_subjectsUpdateManyWithWhereWithoutUsersInput = {
    where: user_subjectsScalarWhereInput
    data: XOR<user_subjectsUpdateManyMutationInput, user_subjectsUncheckedUpdateManyWithoutUsersInput>
  }

  export type document_fieldsCreateManyDocumentsInput = {
    id?: number
    field_id: number
    created_at?: Date | string | null
  }

  export type document_subjectsCreateManyDocumentsInput = {
    id?: number
    subject_id: number
    created_at?: Date | string | null
  }

  export type document_fieldsUpdateWithoutDocumentsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fields?: fieldsUpdateOneRequiredWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsUpdateWithoutDocumentsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectsUpdateOneRequiredWithoutDocument_subjectsNestedInput
  }

  export type document_subjectsUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsUncheckedUpdateManyWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsCreateManyFieldsInput = {
    id?: number
    document_id: number
    created_at?: Date | string | null
  }

  export type subject_fieldsCreateManyFieldsInput = {
    id?: number
    subject_id?: number | null
    created_at?: Date | string | null
  }

  export type user_academic_fieldsCreateManyFieldsInput = {
    id?: number
    user_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type document_fieldsUpdateWithoutFieldsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateOneRequiredWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_fieldsUncheckedUpdateManyWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsUpdateWithoutFieldsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectsUpdateOneWithoutSubject_fieldsNestedInput
  }

  export type subject_fieldsUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsUncheckedUpdateManyWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsUpdateWithoutFieldsInput = {
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_academic_fieldsNestedInput
  }

  export type user_academic_fieldsUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsUncheckedUpdateManyWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsCreateManySubjectsInput = {
    id?: number
    document_id: number
    created_at?: Date | string | null
  }

  export type subject_fieldsCreateManySubjectsInput = {
    id?: number
    field_id?: number | null
    created_at?: Date | string | null
  }

  export type user_subjectsCreateManySubjectsInput = {
    id?: number
    user_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type document_subjectsUpdateWithoutSubjectsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateOneRequiredWithoutDocument_subjectsNestedInput
  }

  export type document_subjectsUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_subjectsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsUpdateWithoutSubjectsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fields?: fieldsUpdateOneWithoutSubject_fieldsNestedInput
  }

  export type subject_fieldsUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subject_fieldsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsUpdateWithoutSubjectsInput = {
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_subjectsNestedInput
  }

  export type user_subjectsUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_accountsCreateManyUsersInput = {
    id?: number
    provider: string
    provider_account_id: string
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type documentsCreateManyUsersInput = {
    id?: number
    title: string
    numeric_score?: Decimal | DecimalJsLike | number | string | null
    grade_band?: string | null
    instructor_name?: string | null
    document_type?: string | null
    access_type?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    suitable_school?: string | null
    short_description?: string | null
    resource_type: string
    resource_url: string
    embed_allowed?: boolean | null
    mime_type?: string | null
    storage_provider?: string | null
    file_size?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_academic_fieldsCreateManyUsersInput = {
    id?: number
    field_id?: number | null
    experience_years?: number | null
    created_at?: Date | string | null
  }

  export type user_subjectsCreateManyUsersInput = {
    id?: number
    subject_id?: number | null
    skill_level?: string | null
    created_at?: Date | string | null
  }

  export type auth_accountsUpdateWithoutUsersInput = {
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_accountsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_accountsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUpdateManyWithoutDocumentsNestedInput
    document_subjects?: document_subjectsUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocumentsNestedInput
    document_subjects?: document_subjectsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    numeric_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade_band?: NullableStringFieldUpdateOperationsInput | string | null
    instructor_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suitable_school?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_url?: StringFieldUpdateOperationsInput | string
    embed_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_provider?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsUpdateWithoutUsersInput = {
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fields?: fieldsUpdateOneWithoutUser_academic_fieldsNestedInput
  }

  export type user_academic_fieldsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_academic_fieldsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: NullableIntFieldUpdateOperationsInput | number | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsUpdateWithoutUsersInput = {
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectsUpdateOneWithoutUser_subjectsNestedInput
  }

  export type user_subjectsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_subjectsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    skill_level?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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