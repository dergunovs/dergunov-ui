<template>
  <div class="ui-field-label-block">
    <label @click.stop="openSelectOptions" :for="`input${_uid}`" class="ui-field-label">
      {{ label }}
      <span v-if="required">*</span>
    </label>

    <TheInput
      v-if="type === 'text'"
      :value="value"
      @input="check"
      ref="input"
      :id="`input${_uid}`"
      class="ui-field-input"
      :type="this.tel ? 'tel' : 'text'"
    />

    <TheTextarea
      v-if="type === 'textarea'"
      :value="value"
      @input="check"
      ref="input"
      :id="`input${_uid}`"
      class="ui-field-input"
    />

    <TheSelect
      v-if="type === 'select'"
      :value="value"
      @input="check"
      :options="options"
      ref="input"
      :id="`input${_uid}`"
      class="ui-field-input"
    />

    <TheMultiselect
      v-if="type === 'multiselect'"
      :value="value"
      @input="check"
      :options="options"
      ref="input"
      :id="`input${_uid}`"
      class="ui-field-input"
    />

    <span class="ui-field-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: "TheField",

    data() {
      let emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;

      return {
        error: false,
        errorMessage: "",
        rules: {
          required: {
            check(data, required, tel) {
              return (required && !data?.length) || (required && data === "+7 (" && tel) ? true : false;
            },
            message: "Заполните это поле",
          },
          min: {
            check(data, min) {
              return data?.length < min ? true : false;
            },
            message: "Слишком мало символов",
          },
          max: {
            check(data, max) {
              return data?.length > max ? true : false;
            },
            message: "Слишком много символов",
          },
          email: {
            check(data, email) {
              return data && email && !emailRegexp.test(String(data).toLowerCase()) ? true : false;
            },
            message: "Введите корректный email",
          },
          tel: {
            check(data, tel, value) {
              return tel && data?.length < 18 && value?.length ? true : false;
            },
            message: "Введите корректный телефон",
          },
        },
      };
    },

    props: {
      value: { type: [String, Number, Array] },
      label: { type: String },
      type: { type: String, default: "text" },
      required: { type: Boolean },
      min: { type: Number },
      max: { type: Number },
      email: { type: Boolean },
      tel: { type: Boolean },
      options: { type: Array },
    },

    methods: {
      check(data) {
        this.$emit("input", data);

        let telInputValue = this.tel ? this.$refs.input.$el.value : false;

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
        ["select"].includes(this.type) ? this.$refs.input.openOptions() : this.$refs.input.$el.focus();
      },
    },
  };
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
