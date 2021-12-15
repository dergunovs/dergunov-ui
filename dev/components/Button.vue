<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>fit:</b> regular, grow. default: <b>regular</b></p>
      <p><b>design:</b> regular, link. default: <b>regular</b></p>
      <p><b>disabled:</b> Boolean. default: <b>false</b></p>
      <p class="mb-16"><b>active:</b> Boolean. default: <b>false</b></p>

      <div class="mb-16"><UiButton fit="regular">fit: regular, design: regular</UiButton></div>
      <div class="mb-16"><UiButton fit="regular" active>fit: regular, active: true</UiButton></div>
      <div class="mb-16"><UiButton fit="grow">fit: grow</UiButton></div>

      <div class="mb-16"><UiButton design="link">design: link</UiButton></div>

      <UiButton><UiIcon title="arrow" type="inverted" class="mr-8" />С иконкой внутри</UiButton>

      <h2>Actions</h2>
      <div>
        @ui-click: <UiButton @ui-click="count">clicks: {{ clicks }}</UiButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiButton, UiIcon } from "@/components";
  import { ref } from "vue";

  const clicks = ref(0);

  function count() {
    clicks.value++;
  }
</script>

<script lang="ts">
  export default { name: "Button" };
</script>
