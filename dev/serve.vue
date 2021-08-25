<template>
  <div id="app">
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

      <div v-if="!componentCurrent" class="w-80">
        <section>
          <h1>Установка в Nuxt.js</h1>
          <TheList>
            <li>
              <b>установить пакет:</b><br />
              npm i dergunov-ui
            </li>
            <li>создать файл ui.js в папке /plugins/</li>
            <li>
              <b>внутри ui.js прописать:</b><br />
              import Vue from "vue";<br />
              import ui from "dergunov-ui";<br />
              import "dergunov-ui/dist/assets/styles.css";<br />
              Vue.use(ui);
            </li>
            <li>
              <b>в nuxt.config.js подключить плагин:</b><br />
              plugins: [{ src: "~plugins/ui" }],
            </li>
          </TheList>
        </section>
      </div>

      <div v-else class="w-80"><component :is="componentCurrent" /></div>
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
