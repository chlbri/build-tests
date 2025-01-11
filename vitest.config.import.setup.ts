import { runSafely } from 'cmd-ts';
import { cli } from './src/cli/cli';
import { env } from './vitest.config.import.env';

export const setup = () => {
  if (env.onlySetup) runSafely(cli, ['pretest']);
  env.onlySetup = false;
};

export const teardown = () => {
  if (env.onlyTeardown) runSafely(cli, ['posttest']);
  env.onlyTeardown = false;
};
