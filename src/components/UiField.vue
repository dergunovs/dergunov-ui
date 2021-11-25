<template>
  <div class="ui-field-label-block" :class="`ui-field-type-${type}`">
    <label @click.stop="handleFocus" :for="`input${$.uid}`" class="ui-field-label">
      {{ label }}
      <span v-if="required" class="ui-field-label-required">*</span>
    </label>

    <component
      v-if="type"
      :is="fieldType"
      :modelValue="modelValue"
      @update:modelValue="check"
      ref="input"
      :id="`input${$.uid}`"
      class="ui-field-input"
      :options="options"
      :design="design"
      :type="textType"
      :direction="direction"
      :multiple="multiple"
    />

    <span class="ui-field-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ComponentPublicInstance } from "vue";

  interface InputComponent extends ComponentPublicInstance {
    openOptions: () => void;
  }

  type InputData = boolean | string | number | (string | number)[] | DataTransfer;
  type InputDataFormatted = string | (string | number)[];

  export default /*#__PURE__*/ defineComponent({
    name: "UiField",

    data() {
      let emailRegexp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;

      return {
        error: false,
        errorMessage: "",
        rules: {
          required: {
            check(data: InputDataFormatted, required: boolean, tel: boolean): boolean {
              return (required && !data.length) || (required && data === "+7 (" && tel) ? true : false;
            },
            message: "Заполните это поле",
          },
          min: {
            check(data: InputDataFormatted, min: number): boolean {
              return data.length < min ? true : false;
            },
            message: "Слишком мало символов",
          },
          max: {
            check(data: InputDataFormatted, max: number): boolean {
              return data.length > max ? true : false;
            },
            message: "Слишком много символов",
          },
          email: {
            check(data: InputDataFormatted, email: boolean): boolean {
              return data && email && !emailRegexp.test(String(data).toLowerCase()) ? true : false;
            },
            message: "Введите корректный email",
          },
          tel: {
            check(data: InputDataFormatted, tel: boolean, value: string): boolean {
              return tel && data.length < 18 && value.length ? true : false;
            },
            message: "Введите корректный телефон",
          },
        },
      };
    },

    props: {
      modelValue: { type: [String, Number, Array, Boolean, Object] },
      value: { type: String },
      label: { type: String },
      type: { type: String, default: "text" },
      required: { type: Boolean },
      min: { type: Number, default: 0 },
      max: { type: Number, default: Infinity },
      email: { type: Boolean },
      tel: { type: Boolean },
      options: { type: Array },
      direction: { type: String },
      multiple: { type: Boolean },
      design: { type: String },
    },

    computed: {
      input(): InputComponent {
        return this.$refs.input as InputComponent;
      },

      fieldType(): any {
        if (this.type === "text" || this.type === "number" || this.type === "password") {
          return "ui-input";
        } else if (this.type === "textarea") {
          return "ui-textarea";
        } else if (this.type === "select") {
          return "ui-select";
        } else if (this.type === "multiselect") {
          return "ui-multiselect";
        } else if (this.type === "checkbox") {
          return "ui-checkbox";
        } else if (this.type === "radio") {
          return "ui-radio";
        } else if (this.type === "upload") {
          return "ui-upload";
        }
      },

      textType(): string {
        if (this.tel) {
          return "tel";
        } else if (this.type === "password") {
          return "password";
        } else {
          return "text";
        }
      },
    },

    methods: {
      check(data: InputData): void {
        let dataFormatted = data as InputDataFormatted;

        if (typeof data === "number") {
          dataFormatted = data.toString();
        } else if (typeof data === "boolean") {
          dataFormatted = data === false ? "" : data.toString();
        } else if (Object.prototype.toString.call(data) === "[object DataTransfer]") {
          dataFormatted = (data as DataTransfer).items.length ? "got some files" : "";
        }

        let telInputValue = this.tel ? this.input.$el.value : false;

        this.error =
          this.rules.required.check(dataFormatted, this.required, this.tel) ||
          this.rules.min.check(dataFormatted, this.min) ||
          this.rules.max.check(dataFormatted, this.max) ||
          this.rules.email.check(dataFormatted, this.email) ||
          this.rules.tel.check(dataFormatted, this.tel, telInputValue);

        if (this.rules.required.check(dataFormatted, this.required, this.tel)) {
          this.errorMessage = this.rules.required.message;
        } else if (this.rules.min.check(dataFormatted, this.min)) {
          this.errorMessage = this.rules.min.message;
        } else if (this.rules.max.check(dataFormatted, this.max)) {
          this.errorMessage = this.rules.max.message;
        } else if (this.rules.email.check(dataFormatted, this.email)) {
          this.errorMessage = this.rules.email.message;
        } else if (this.rules.tel.check(dataFormatted, this.tel, telInputValue)) {
          this.errorMessage = this.rules.tel.message;
        } else {
          this.errorMessage = "";
        }

        this.$emit("update:modelValue", data);
      },

      handleFocus(): void {
        if (["select", "multiselect"].includes(this.type)) {
          this.input.openOptions();
        } else if (["checkbox", "radio"].includes(this.type)) {
          this.input.$el.click();
        } else if (["upload"].includes(this.type)) {
          this.input.$el.querySelector("input").click();
        } else {
          this.input.$el.focus();
        }
      },
    },
  });
</script>

<style>
  .ui-field-label-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .ui-field-type-checkbox {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .ui-field-type-checkbox .ui-field-input {
    width: auto;
    order: 0;
  }

  .ui-field-type-checkbox .ui-field-label {
    width: calc(100% - 32px);
    order: 1;
  }

  .ui-field-type-checkbox .ui-field-error {
    order: 2;
  }

  .ui-field-label {
    margin-bottom: 2px;
    cursor: pointer;
  }

  .ui-field-input {
    width: 100%;
  }

  .ui-field-error {
    color: var(--color-error);
  }
</style>
