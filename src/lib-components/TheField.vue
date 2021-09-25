<template>
  <label class="ui-field-label-block">
    <div class="ui-field-label">
      {{ label }}
      <span v-if="required">*</span>
    </div>

    <TheInput v-if="type === 'text'" :value="value" @input="check" :type="this.tel ? 'tel' : 'text'" ref="input" />
    <TheTextarea v-if="type === 'textarea'" :value="value" @input="check" />

    <span class="ui-field-error" v-if="errorMessage">{{ errorMessage }}</span>
  </label>
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
      value: { type: String },
      label: { type: String },
      type: { type: String, default: "text" },
      required: { type: Boolean },
      min: { type: Number },
      max: { type: Number },
      email: { type: Boolean },
      tel: { type: Boolean },
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

        if (this.rules.required.check(data, this.required, this.tel)) {
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
    },
  };
</script>

<style>
  .ui-field-label-block {
    display: flex;
    flex-direction: column;
  }
  .ui-field-label {
    margin-bottom: 2px;
  }
  .ui-field-error {
    color: var(--color-primary);
  }
</style>
