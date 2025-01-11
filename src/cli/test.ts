import { command, flag } from 'cmd-ts';
import sh from 'shelljs';
import { addTarball } from '../addTarball';
import { TEARDOWN_COMMAND } from '../constants';
import { isDefined } from '../isDefined';

export const test = command({
  name: 'test',

  args: {
    pre: flag({
      description: 'The hook pretest',
      short: 'pre',
      // type: boolean,
      long: 'pretest',
    }),

    post: flag({
      description: 'The hook posttest',
      short: 'post',
      long: 'posttest',
    }),
  },

  handler: async ({ pre, post }) => {
    if (pre) await addTarball();

    // #region Test
    const { stderr } = sh.exec('pnpm run test');
    if (isDefined(stderr) && stderr.trim() !== '') console.warn(stderr);
    // #endregion

    if (post) sh.exec(TEARDOWN_COMMAND);
  },
});
