<template>
  <div class="ui-field-label-block">
    <label @click.stop="openSelectOptions" :for="`input${$.uid}`" class="ui-field-label">
      {{ label }}
      <span v-if="required" class="ui-field-label-required">*</span>
    </label>

    <TheInput
      v-if="type === 'text'"
      :modelValue="modelValue"
      @update:modelValue="check"
      ref="input"
      :id="`input${$.uid}`"
      class="ui-field-input"
      :type="this.tel ? 'tel' : 'text'"
    />

    <TheTextarea
      v-if="type === 'textarea'"
      :modelValue="modelValue"
      @update:modelValue="check"
      ref="input"
      :id="`input${$.uid}`"
      class="ui-field-input"
    />

    <TheSelect
      v-if="type === 'select'"
      :modelValue="modelValue"
      @update:modelValue="check"
      :options="options"
      ref="input"
      :id="`input${$.uid}`"
      class="ui-field-input"
    />

    <TheMultiselect
      v-if="type === 'multiselect'"
      :modelValue="modelValue"
      @update:modelValue="check"
      :options="options"
      ref="input"
      :id="`input${$.uid}`"
      class="ui-field-input"
    />

    <span class="ui-field-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheField",

    data() {
      let emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;

      return {
        error: false,
        errorMessage: "",
        rules: {
          required: {
            check(data: any, required: boolean, tel: boolean) {
              return (required && !data?.length) || (required && data === "+7 (" && tel) ? true : false;
            },
            message: "Заполните это поле",
          },
          min: {
            check(data: any, min: number) {
              return data?.length < min ? true : false;
            },
            message: "Слишком мало символов",
          },
          max: {
            check(data: any, max: number) {
              return data?.length > max ? true : false;
            },
            message: "Слишком много символов",
          },
          email: {
            check(data: any, email: boolean) {
              return data && email && !emailRegexp.test(String(data).toLowerCase()) ? true : false;
            },
            message: "Введите корректный email",
          },
          tel: {
            check(data: any, tel: boolean, value: string) {
              return tel && data?.length < 18 && value?.length ? true : false;
            },
            message: "Введите корректный телефон",
          },
        },
      };
    },

    props: {
      modelValue: { type: [String, Number, Array] },
      label: { type: String },
      type: { type: String, default: "text" },
      required: { type: Boolean },
      min: { type: Number, default: 0 },
      max: { type: Number, default: Infinity },
      email: { type: Boolean },
      tel: { type: Boolean },
      options: { type: Array },
    },

    methods: {
      check(data: any) {
        this.$emit("update:modelValue", data);

        let telInputValue = this.tel ? (this.$refs.input as any).$el.value : false;

        this.error =
          this.rules.required.check(data, this.required, this.tel) ||
          this.rules.min.check(data, this.min) ||
          this.rules.max.check(data, this.max) ||
          this.rules.email.check(data, this.email) ||
          this.rules.tel.check(data, this.tel, telInputValue);

        if (this.rules.required.check(data.toString(), this.required, this.tel)) {
          this.errorMessage = this.rules.required.message;
        } else if (this.rules.min.check(data, this.min)) {
          this.errorMessage = this.rules.min.message;
        } else if (this.rules.max.check(data, this.max)) {
          this.errorMessage = this.rules.max.message;
        } else if (this.rules.email.check(data, this.email)) {
          this.errorMessage = this.rules.email.message;
        } else if (this.rules.tel.check(data, this.tel, telInputValue)) {
          this.errorMessage = this.rules.tel.message;
        } else {
          this.errorMessage = "";
        }
      },

      openSelectOptions() {
        ["select"].includes(this.type)
          ? (this.$refs.input as any).openOptions()
          : (this.$refs.input as any).$el.focus();
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
  .ui-field-label {
    margin-bottom: 2px;
    cursor: pointer;
  }
  .ui-field-input {
    width: 100%;
  }
  .ui-field-error {
    color: var(--color-primary);
  }
</style>
