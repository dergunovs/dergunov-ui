import { App, Plugin } from "vue";

import * as components from "@/lib-components/index";
import "@/lib-components/assets/styles.css";

const install: Exclude<Plugin["install"], undefined> = function installDergunovUi(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;

export * from "@/lib-components/index";
