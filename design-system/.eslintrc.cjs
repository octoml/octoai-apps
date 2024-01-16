/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  ignorePatterns: ['.storybook', 'dist/', 'node_modules/', 'storybook-static'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prefer-destructuring': 'warn',
  },
};
