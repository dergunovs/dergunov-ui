import path from "path";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";

export default {
  input: {
    UiBreadcrumbs: "src/components/UiBreadcrumbs.vue",
    UiButton: "src/components/UiButton.vue",
    UiCard: "src/components/UiCard.vue",
    UiCheckbox: "src/components/UiCheckbox.vue",
    UiCode: "src/components/UiCode.vue",
    UiField: "src/components/UiField.vue",
    UiForm: "src/components/UiForm.vue",
    UiIcon: "src/components/UiIcon.vue",
    UiImage: "src/components/UiImage.vue",
    UiInput: "src/components/UiInput.vue",
    UiList: "src/components/UiList.vue",
    UiMap: "src/components/UiMap.vue",
    UiMultiselect: "src/components/UiMultiselect.vue",
    UiPopup: "src/components/UiPopup.vue",
    UiRadio: "src/components/UiRadio.vue",
    UiRow: "src/components/UiRow.vue",
    UiSelect: "src/components/UiSelect.vue",
    UiSlider: "src/components/UiSlider.vue",
    UiSpoiler: "src/components/UiSpoiler.vue",
    UiTable: "src/components/UiTable.vue",
    UiTextarea: "src/components/UiTextarea.vue",
    UiUpload: "src/components/UiUpload.vue",
    toast: "src/components/toast.vue",
    index: "src/components/index.ts",
  },
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
