import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  ...tseslint.configs.strict,
  ...astro.configs['flat/recommended'],
  prettier,
  {
    ignores: ['dist/**', '.astro/**'],
  },
);
