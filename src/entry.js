import plugin, * as components from "@/entry.esm";
import "@/lib-components/assets/styles.css";

Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== "default") {
    plugin[componentName] = component;
  }
});

export default plugin;
