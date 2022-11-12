import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({ cleanVueFileName: true, outputDir: "./dist/types", insertTypesEntry: true, copyDtsFiles: false }),
  ],

  build: {
    target: "esnext",
    lib: { entry: "./src/components/ui/index.ts", fileName: () => "index.js", formats: ["es"] },
    rollupOptions: { external: ["vue"], output: { globals: { vue: "Vue" } } },
  },
});
