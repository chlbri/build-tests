import { t, type Fn } from '@bemedev/types';
import editJsonFile from 'edit-json-file';
import sortKeys from 'sort-keys';
import { BIN_KEY, EXPORT_KEYS } from './constants';
import { getTypescriptOutdir } from './getTypescriptOutdir';

type BuldPackageJson_F = Fn<
  [],
  {
    packageJson: object;
    outDir: string;
  }
>;

export const buildPackageJson: BuldPackageJson_F = () => {
  const file = editJsonFile('./package.json');
  const outDir = getTypescriptOutdir();
  const lib = `${outDir}/`;

  const replaceLib = (str: string) => str.replace(lib, '');

  // #region Set export values
  EXPORT_KEYS.forEach(key => {
    const value = file.get(key);
    const transformed = replaceLib(value);
    file.set(key, transformed);
  });
  // #endregion

  const bin1 = t.buildObject<Record<string, string>>(file.get(BIN_KEY));
  const bin2 = Object.entries(bin1).reduce((acc, [key, value]) => {
    acc[key] = replaceLib(value);
    return acc;
  }, {} as any);
  const bin3 = sortKeys(bin2);

  file.set(BIN_KEY, bin3);

  // #region Unset some props
  file.unset('files');
  file.unset('scripts');
  file.unset('devDependencies');
  // #endregion

  const packageJson = file.get();

  // Sorting dev deps
  return { packageJson, outDir };
};
