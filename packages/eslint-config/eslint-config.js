/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural-legacy',
    'plugin:unicorn/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'eslint-config-turbo',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'tailwindcss/enforces-negative-arbitrary-values': 'off',
    'tailwindcss/no-custom-classname': [
      'error',
      {
        whitelist: [],
      },
    ],
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'postcss.config.js'],
}
