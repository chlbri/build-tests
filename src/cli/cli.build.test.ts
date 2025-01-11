import { runSafely } from 'cmd-ts';
import isInCi from 'is-in-ci';
import sh from 'shelljs';
import { BIN, cli } from './cli';

const hasExtension = process.env.VITEST_VSCODE === 'true';

const check = isInCi || hasExtension;

const desc = describe.skipIf(check);

desc('From TARBALL', ({ sequential: test }) => {
  beforeEach(() => {
    sh.exec('pnpm run build');
    return runSafely(cli, ['pretest']);
  });

  const makeTest =
    (...params: string[]) =>
    () => {
      let command = `pnpm ${BIN} test`;
      params.forEach(param => {
        command += ` ${param}`;
      });
      const { code } = sh.exec(command);
      expect(code).toBe(0);
    };

  test('#1 => Test only', makeTest());

  test('#2 => Test and pre', makeTest('--pretest'));

  test('#3 => Test and post', makeTest('--posttest'));

  test(
    '#4 => Test with pre and post',
    makeTest('--pretest', '--posttest'),
  );
});
