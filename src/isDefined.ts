import type { types } from '@bemedev/types';

export const isDefined = <T>(
  value?: types.Undefiny<T>,
): value is NonNullable<T> => !!value;
