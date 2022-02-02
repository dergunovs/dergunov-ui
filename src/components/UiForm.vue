<template>
  <form @submit.prevent ref="form">
    <slot v-if="props.formStatus !== 'success'"></slot>

    <div v-if="props.formStatus === 'success'" class="ui-form-message">
      Сообщение успешно отправлено.<br />
      Скоро отвечу на почту.
    </div>

    <div v-if="props.formStatus === 'error'" class="ui-form-message">
      Сообщение не удалось отправить по техническим причинам.<br />
      Попробуйте ещё раз чуть позже.
    </div>
  </form>
</template>

<script setup lang="ts">
  import { onMounted, onUpdated, ref } from "vue";

  const props = defineProps<{
    formStatus?: string;
  }>();

  const errorsCount = ref(0);
  const form = ref<HTMLElement>();

  const emit = defineEmits(["errors"]);

  function formValidate(): void {
    errorsCount.value = 0;

    if (form.value) {
      form.value.querySelectorAll(".ui-field-label-block").forEach((element: Element) => {
        const inputValue = (element.querySelector(".ui-field-input") as HTMLInputElement).value ? 1 : 0;

        const selectValue =
          element.querySelectorAll(".ui-select-current-option").length +
          element.querySelectorAll(".ui-multiselect-current-option").length;

        const searchValue = element.querySelectorAll(".ui-search-current-option").length;

        const checkBoxInput = element.querySelector(".ui-checkbox") as HTMLInputElement;
        const checkboxValue = checkBoxInput ? Number(checkBoxInput.checked) : 0;

        let radioValue = 0;
        (element.querySelectorAll(".ui-radio") as any).forEach((radio: HTMLInputElement) => {
          radioValue = radioValue + Number(radio.checked);
        });

        const fileValue = element.querySelectorAll(".ui-file").length;

        const allValues = inputValue + searchValue + selectValue + checkboxValue + fileValue + radioValue;

        if (
          (element.querySelector(".ui-field-label-required") && !allValues) ||
          element.querySelectorAll(".ui-field-error").length
        ) {
          errorsCount.value++;
        }
      });
    }

    errorsCount.value > 0 ? emit("errors", true) : emit("errors", false);
  }

  onMounted(() => {
    setTimeout(() => {
      formValidate();
    }, 100);
  });

  onUpdated(() => {
    formValidate();
  });
</script>

<script lang="ts">
  export default { name: "UiForm" };
</script>

<style>
  .ui-form-message {
    margin-top: 16px;
    padding: 32px;
    text-align: center;
    background-color: var(--color-gray-light);
  }
</style>
