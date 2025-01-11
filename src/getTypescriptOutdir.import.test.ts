// @ts-expect-error For test build
import { getTypescriptOutdir } from 'this-gen-1/getTypescriptOutdir';

test('Get TS outDir', () => {
  const actual = getTypescriptOutdir();
  const expected = 'lib';
  expect(actual).toBe(expected);
});
