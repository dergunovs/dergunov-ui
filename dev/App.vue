<template>
  <div class="center flex flex-top">
    <nav class="w-20 pt-32">
      <UiButton design="link" @ui-click="setCurrentComponent(Readme)" class="mb-16">Описание</UiButton>

      <p><b>Компоненты:</b></p>
      <div v-for="(component, index) in Object.values(components)" :key="index">
        <UiButton design="link" @ui-click="setCurrentComponent(component)">{{ component.name }}</UiButton>
      </div>
    </nav>

    <component :is="currentComponent" class="w-80" />
  </div>
</template>

<script setup lang="ts">
  import { shallowRef } from "vue";
  import { UiButton } from "@/components";

  import Readme from "./Readme.vue";
  import * as components from "./components/index";

  const currentComponent = shallowRef(Readme);

  function setCurrentComponent(component: any) {
    currentComponent.value = component;
  }

  document.title = "Библиотека компонентов";
</script>

<style>
  @import "@/assets/styles.css";
  @import "./assets/styles.css";
</style>
