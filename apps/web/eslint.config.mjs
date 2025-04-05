import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tailwind from 'eslint-plugin-tailwindcss'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compact = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compact.extends('@repo/eslint-config/eslint-config.js'),
  {
    languageOptions: {
      ecmaVersion: 5,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      sourceType: 'script',
    },
  },
  {
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      ...tailwind.configs['flat/recommended'].rules,
    },
    settings: {
      tailwindcss: {
        config: path.resolve(__dirname, './tailwind.v1.1.0.config.ts'),
        groupByResponsive: true,
      },
    },
  },
  {
    files: ['src/app/(v1)/**/*.{ts,tsx}'],
    settings: {
      tailwindcss: {
        config: path.resolve(__dirname, './tailwind.v1.1.0.config.ts'),
        groupByResponsive: true,
      },
    },
  },
  {
    files: ['src/app/(v2)/**/*.{ts,tsx}'],
    settings: {
      tailwindcss: {
        config: path.resolve(__dirname, './tailwind.v1.2.0.config.ts'),
        groupByResponsive: true,
      },
    },
  },
]

export default eslintConfig
// import { config } from "@repo/eslint-config/react-internal";

// /** @type {import("eslint").Linter.Config} */
// export default config;
