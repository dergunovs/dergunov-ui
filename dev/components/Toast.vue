<template>
  <section>
    <p>Нужно импортировать компонент: import { toast } from "dergunov-ui";</p>
    <p>Использование в секции script: toast.info("Текст").</p>
    <p class="mb-16">3 вида сообщений: success, error и info.</p>

    <div class="flex">
      <UiButton @click="toastSuccess" class="mr-16">success</UiButton>
      <UiButton @click="toastError" class="mr-16">error</UiButton>
      <UiButton @click="toastInfo">info</UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { toast, UiButton } from "@/components";

  function toastSuccess() {
    toast.success("success");
  }

  function toastError() {
    toast.error("error");
  }

  function toastInfo() {
    toast.info("info");
  }
</script>

<script lang="ts">
  export default { name: "Toast" };
</script>
