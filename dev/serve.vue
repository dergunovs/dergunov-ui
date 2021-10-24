<template>
  <div class="center flex flex-top">
    <nav class="w-20 pt-32">
      <TheButton design="none" @ui-click="componentCurrent = ''" :active="componentCurrent === ''" class="mb-16">
        Описание
      </TheButton>

      <p><b>Компоненты:</b></p>
      <TheList design="none">
        <li v-for="component in Object.values(components)" :key="component.name">
          <TheButton
            design="none"
            :active="componentCurrent === component.name"
            @ui-click="componentCurrent = component.name"
          >
            {{ component.name }}
          </TheButton>
        </li>
      </TheList>
    </nav>

    <div v-if="!componentCurrent" class="w-80"><Readme /></div>
    <div v-else class="w-80"><component :is="componentCurrent" /></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Readme from "./Readme.vue";

  declare var require: any;

  const requireComponents = require.context("./components/", false, /\.vue$/);
  let components: any = {};
  requireComponents.keys().forEach((file: string) => {
    const component = requireComponents(file);
    const componentName = file.replace(/^\.\/(.*)\.\w+$/, "$1");
    components[componentName] = component.default;
  });

  export default defineComponent({
    name: "Components",

    data() {
      return {
        components: components,
        componentCurrent: "",
      };
    },

    components: { ...components, Readme },

    beforeCreate() {
      document.title = "Библиотека компонентов";
    },
  });
</script>
