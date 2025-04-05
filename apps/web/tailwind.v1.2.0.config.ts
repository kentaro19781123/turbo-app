// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/ui2/tailwind.config.ts'

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
}

export default config

// tailwind config is required for editor support

// import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

// const config: Pick<Config, "content" | "presets"> = {
//   content: ["./app/**/*.tsx"],
//   presets: [sharedConfig],
// };

// export default config;
