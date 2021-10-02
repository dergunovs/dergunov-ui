import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import ttypescript from "ttypescript";
import typescript from "rollup-plugin-typescript2";
import minimist from "minimist";
import styles from "rollup-plugin-styles";
import images from "rollup-plugin-image-files";

const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter((entry) => entry && entry.substring(0, 2) !== "ie");

const babelPresetEnvConfig = require("../babel.config").presets.filter(
  (entry) => entry[0] === "@babel/preset-env"
)[0][1];

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, "..");

const baseConfig = {
  input: "src/entry.ts",
  plugins: {
    preVue: [alias({ entries: [{ find: "@", replacement: `${path.resolve(projectRoot, "src")}` }] })],
    replace: { "process.env.NODE_ENV": JSON.stringify("production"), preventAssignment: true },
    vue: { css: true, template: { isProduction: true } },
    postVue: [
      resolve({ extensions: [".js", ".ts", ".vue"] }),
      commonjs(),
      styles({ mode: ["extract"], minimize: process.env.NODE_ENV === "production" }),
      images(),
    ],
    babel: { exclude: "node_modules/**", extensions: [".js", ".ts", ".vue"], babelHelpers: "bundled" },
  },
};

const external = ["vue"];
const globals = { vue: "Vue" };

const buildFormats = [];
if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    input: "src/entry.esm.ts",
    external,
    output: {
      dir: "./dist",
      format: "esm",
      exports: "named",
      assetFileNames: "assets/[name].[ext]",
      preserveModules: true,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      typescript({
        typescript: ttypescript,
        useTsconfigDeclarationDir: true,
        emitDeclarationOnly: true,
      }),
      babel({
        ...baseConfig.plugins.babel,
        presets: [["@babel/preset-env", { ...babelPresetEnvConfig, targets: esbrowserslist }]],
      }),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      dir: "./dist",
      format: "cjs",
      name: "DergunovUi",
      exports: "named",
      assetFileNames: "[name].[ext]",
      preserveModules: true,
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
    ],
  };
  buildFormats.push(umdConfig);
}

export default buildFormats;
