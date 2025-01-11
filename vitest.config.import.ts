import { aliasTs } from '@bemedev/vitest-alias';
import { defineConfig } from 'vitest/config';
import tsconfig from './tsconfig.json';

export default defineConfig({
  plugins: [aliasTs(tsconfig as any)],
  test: {
    include: ['**/*.import.test.ts'],
    bail: 1,
    maxConcurrency: 10,
    slowTestThreshold: 500,
    globals: true,
    logHeapUsage: true,
    coverage: {
      enabled: false,
    },
    globalSetup: ['./vitest.config.import.setup.ts'],
  },
});
