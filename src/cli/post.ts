import { command } from 'cmd-ts';
import sh from 'shelljs';
import { TEARDOWN_COMMAND } from '../constants';

export const posttest = command({
  name: 'posttest',
  aliases: ['post:test', 'post', 'post-test'],
  args: {},
  handler: () => sh.exec(TEARDOWN_COMMAND),
});
