import { App, Plugin } from "vue";

import * as components from "@/components/index";
import "@/assets/styles.css";

const install: Exclude<Plugin["install"], undefined> = function installDergunovUi(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;

export * from "@/components/index";
