<template>
  <form @submit.prevent @input="formValidate">
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
    name: "TheForm",

    props: {
      formStatus: { type: String },
    },

    data() {
      return {
        errorsCount: 0,
      };
    },

    methods: {
      formValidate() {
        this.errorsCount = 0;

        this.$el.querySelectorAll(".ui-field-label-block").forEach((element: any) => {
          if (
            (element.querySelector(".ui-field-label-required") && !element.querySelector(".ui-field-input").value) ||
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
