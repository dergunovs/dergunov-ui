<template>
  <section>
    <p><b>fit:</b> regular, grow. default: <b>regular</b></p>
    <p><b>design:</b> regular, link, outline. default: <b>regular</b></p>
    <p><b>color:</b> primary, success, error, gray. default: <b>primary</b></p>
    <p><b>disabled:</b> Boolean. default: <b>false</b></p>
    <p class="mb-16"><b>active:</b> Boolean. default: <b>false</b></p>

    <div class="mb-16"><UiButton>design: regular</UiButton></div>
    <div class="mb-16"><UiButton design="outline">design: outline</UiButton></div>
    <div class="mb-16"><UiButton design="link">design: link</UiButton></div>
    <div class="mb-16"><UiButton active>active: true</UiButton></div>
    <div class="mb-16"><UiButton color="error">color: error</UiButton></div>
    <div class="mb-16"><UiButton fit="grow">fit: grow</UiButton></div>
    <div>
      <UiButton @click="count">@click {{ clicks }}</UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { UiButton } from "@/components";
  import { ref } from "vue";

  const clicks = ref(0);

  function count() {
    clicks.value++;
  }
</script>

<script lang="ts">
  export default { name: "Button" };
</script>
