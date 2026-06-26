import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

export default defineConfig(
  tseslint.configs.strict,
  astro.configs['flat/recommended'],
  prettier,
  globalIgnores(['dist/**', '.astro/**']),
);
