import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // outDir: "./docs",
  // site: "https://alhamed1.github.io",
  // base: "/ommar-alardh-portfolio",

  output: "static",
  adapter: vercel(),
});
