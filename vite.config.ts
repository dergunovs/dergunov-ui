import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  build: {
    target: "esnext",

    lib: {
      entry: "./src/components/ui/index.ts",
      fileName: () => "index.js",
      formats: ["es"],
    },

    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
});
