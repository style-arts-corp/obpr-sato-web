export type IsNever<T> = T[] extends never[] ? true : false;

export type TypeEq<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

/**
 * @desc Type testing with a set of TypeEq.
 * @example Assert<TypeEq<string, string>>  // valid
 * @example Assert<TypeEq<string, number>>  // invalid (error)
 */
export type Assert<Describe extends string, T extends true> = {
  __type: 'Assert';
  isValid: T;
  description: Describe;
};

export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type Simplify<T> = T extends object
  ? T extends (props: unknown) => unknown
    ? T
    : T extends infer O
      ? { [K in keyof O]: Simplify<O[K]> }
      : never
  : T;

export type NormalizePath<T extends string> = FlattenSlash<
  RemoveTrailingSlash<T>
>;

export type FlattenSlash<T extends string> =
  T extends `${infer Head}//${infer Rest}`
    ? FlattenSlash<`${Head}/${Rest}`>
    : T;

export type RemoveTrailingSlash<S extends string> = S extends `${infer T}/`
  ? T
  : S;
