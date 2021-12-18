import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";

const files = fs.readdirSync("./src/components");
const components = files.reduce((obj, component) => {
  obj[component.split(".")[0]] = "src/components/" + component;
  return obj;
}, {});

export default {
  input: components,

  output: {
    dir: "dist/esm",
    format: "es",
    exports: "named",
    assetFileNames: "assets/[name].[ext]",
    compact: true,
  },

  external: ["vue"],

  plugins: [
    alias({ entries: [{ find: "@", replacement: `${path.resolve(path.resolve(__dirname, ".."), "src")}` }] }),
    vue({ defaultLang: { script: "ts" }, css: false, template: { isProduction: true } }),
    styles({ mode: ["extract", "styles.css"], minimize: process.env.NODE_ENV === "production" }),
    image(),
    terser(),
    typescript({ useTsconfigDeclarationDir: true, emitDeclarationOnly: true }),
  ],
};
