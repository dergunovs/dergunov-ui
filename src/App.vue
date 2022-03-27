<template>
  <div class="center flex flex-top">
    <nav class="w-20 pt-32">
      <UiButton design="link" @click="setCurrentComponent(Readme)" class="mb-16">Описание</UiButton>

      <p><b>Компоненты:</b></p>
      <div v-for="component in Object.values(components)" :key="component.name">
        <UiButton design="link" @click="setCurrentComponent(component)">{{ component.name }}</UiButton>
      </div>
    </nav>

    <div class="w-80">
      <h1>{{ currentComponent.name }}</h1>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Component as VueComponent, shallowRef } from "vue";
  import { UiButton } from "./components/ui";

  import Readme from "./components/Readme.vue";
  import * as components from "./components/book";

  const currentComponent = shallowRef<VueComponent>(Readme);

  function setCurrentComponent(component: VueComponent) {
    currentComponent.value = component;
  }
</script>

<style>
  @import "./assets/styles.css";
  @import "./assets/book.css";
</style>
