import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['dist/', 'node_modules/'],
  },
);
