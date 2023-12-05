import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss"

export default () => {
  return defineConfig({
    base: "/custom_audio_player",
    plugins: [
      tsconfigPaths(),

      pluginPurgeCss({
        variables: true,
        content: ["src/js/customClasses/index.ts"],
      }),
    ],
  })
}
