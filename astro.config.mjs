import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: "https://alhamed1.github.io",
  base: "/ommar-alardh-portfolio",
  integrations: [react(), tailwind()],
});
