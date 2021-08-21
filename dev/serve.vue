<template>
  <div id="app">
    <div class="center">
      <component v-for="(component, index) in components" :key="`component${index}`" :is="component" />
    </div>
  </div>
</template>

<script>
  import "@/lib-components/assets/styles.css";

  const requireComponents = require.context("./components/", false, /\.vue$/);

  let components = {};

  requireComponents.keys().forEach((file) => {
    const component = requireComponents(file);
    const componentName = file.replace(/^\.\/(.*)\.\w+$/, "$1");
    components[componentName] = component.default;
  });

  export default {
    name: "Components",

    data() {
      return {
        components: components,
      };
    },

    components: { ...components },
  };
</script>
