import { boolean, command, flag } from 'cmd-ts';
import sh from 'shelljs';
import { addTarball } from '../addTarball';
import { TEARDOWN_COMMAND } from '../constants';

export const cli = command({
  name: 'build-tests',

  args: {
    pre: flag({
      description: 'The hook pretest',
      short: 'pre',
      type: boolean,
      long: 'pretest',
    }),

    post: flag({
      description: 'The hook posttest',
      short: 'post',
      type: boolean,
      long: 'posttest',
    }),
  },

  handler: async ({ pre, post }) => {
    if (pre) await addTarball();
    if (post) sh.exec(TEARDOWN_COMMAND);
  },
});
