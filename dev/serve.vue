<template>
  <div id="app">
    <div class="center">
      <nav>
        <TheList direction="horizontal" design="hidden">
          <li v-for="component in Object.values(components)" :key="component.name">
            <TheButton
              :class="{ active: componentCurrent === component.name }"
              @ui-click="componentCurrent = component.name"
            >
              {{ component.description }}
            </TheButton>
          </li>
        </TheList>
      </nav>

      <div v-if="!componentCurrent">123</div>
      <div v-else><component :is="componentCurrent" /></div>
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
        componentCurrent: "",
      };
    },

    components: { ...components },
  };
</script>
