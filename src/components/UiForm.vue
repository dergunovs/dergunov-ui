<template>
  <form @submit.prevent>
    <slot v-if="formStatus !== 'success'"></slot>

    <div v-if="formStatus === 'success'" class="ui-form-message">
      Сообщение успешно отправлено.<br />
      Скоро отвечу на почту.
    </div>

    <div v-if="formStatus === 'error'" class="ui-form-message">
      Сообщение не удалось отправить по техническим причинам.<br />
      Попробуйте отправить ещё раз чуть позже.
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "UiForm",

    props: {
      formStatus: { type: String },
    },

    data() {
      return {
        errorsCount: 0,
      };
    },

    methods: {
      formValidate(): void {
        this.errorsCount = 0;

        this.$el.querySelectorAll(".ui-field-label-block").forEach((element: HTMLElement) => {
          let inputValue = (element.querySelector(".ui-field-input") as HTMLInputElement).value ? 1 : 0;

          let selectValue =
            element.querySelectorAll(".ui-select-current-option").length +
            element.querySelectorAll(".ui-multiselect-current-option").length;

          let checkBoxInput = element.querySelector(".ui-checkbox") as HTMLInputElement;
          let checkboxValue = checkBoxInput ? Number(checkBoxInput.checked) : 0;

          let radioValue = 0;
          (element.querySelectorAll(".ui-radio") as any).forEach((radio: HTMLInputElement) => {
            radioValue = radioValue + Number(radio.checked);
          });

          let fileValue = element.querySelectorAll(".ui-file").length;

          let allValues = inputValue + selectValue + checkboxValue + fileValue + radioValue;

          if (
            (element.querySelector(".ui-field-label-required") && !allValues) ||
            element.querySelectorAll(".ui-field-error").length
          ) {
            this.errorsCount = this.errorsCount + 1;
          }
        });

        this.errorsCount > 0 ? this.$emit("errors", true) : this.$emit("errors", false);
      },
    },

    mounted() {
      this.formValidate();
    },

    updated() {
      this.formValidate();
    },
  });
</script>

<style>
  .ui-form-message {
    margin-top: 16px;
    padding: 32px;
    text-align: center;
    background-color: var(--color-gray-light);
  }
</style>
