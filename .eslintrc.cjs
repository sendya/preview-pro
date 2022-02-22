/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    // unplugin-auto-import :: generated automatically
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // all rules docs https://eslint.org/docs/rules/
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'consistent-return': 0,
    'quote-props': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'no-mixed-operators': 'off',
    'no-unused-vars': ['off'],
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-control-regex': ['off'],
    semi: ['error', 'always'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
