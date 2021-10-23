<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Нужно импортировать компонент: import { toast } from "dergunov-ui";</p>
      <p>Использование в секции script: toast.info("Текст").</p>
      <p class="mb-16">3 вида сообщений: success, error и info.</p>

      <div class="flex">
        <TheButton @ui-click="toastSuccess" class="mr-16">success</TheButton>
        <TheButton @ui-click="toastError" class="mr-16">error</TheButton>
        <TheButton @ui-click="toastInfo">info</TheButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { toast } from "@/lib-components";
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Toast",

    methods: {
      toastSuccess() {
        toast.success("success");
      },
      toastError() {
        toast.error("error");
      },
      toastInfo() {
        toast.info("info");
      },
    },
  });
</script>
