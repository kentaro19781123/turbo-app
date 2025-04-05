import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  content: [
    // './src/**/*.tsx',
    // './app/**/*.tsx',
    '../../apps/**/src/app/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        'ui-size': '16px',
      },
    },
  },
} satisfies Config

export default config
