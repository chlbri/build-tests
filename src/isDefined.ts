import { Undefiny } from '@bemedev/types';

export const isDefined = <T>(value?: Undefiny<T>): value is T => !!value;
