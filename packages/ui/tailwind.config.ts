import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  content: ['./src/**/*.tsx', './app/**/*.tsx'],
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

// import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

// const config: Pick<Config, "prefix" | "presets" | "content"> = {
//   content: ["./src/**/*.tsx"],
//   prefix: "ui-",
//   presets: [sharedConfig],
// };

// export default config;
