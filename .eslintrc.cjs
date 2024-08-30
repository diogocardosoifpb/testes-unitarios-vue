/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    quotes: ['error', 'single']
  }
}
