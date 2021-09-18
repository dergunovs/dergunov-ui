<template>
  <label class="ui-field-label-block">
    <div class="ui-field-label">
      {{ label }}
      <span v-if="required" class="ui-field-label-required">*</span>
    </div>

    <TheInput :value="value" @input="check" :type="this.tel ? 'tel' : 'text'" ref="input" />

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
            check(data, required) {
              return required && !data?.length ? true : false;
            },
            message: "Данное поле обязательное",
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
      required: { type: Boolean },
      min: { type: Number },
      max: { type: Number },
      email: { type: Boolean },
      tel: { type: Boolean },
    },

    methods: {
      check(data) {
        this.$emit("input", data);

        this.error =
          this.rules.required.check(data, this.required) ||
          this.rules.min.check(data, this.min) ||
          this.rules.max.check(data, this.max) ||
          this.rules.email.check(data, this.email) ||
          this.rules.tel.check(data, this.tel, this.$refs.input.$el.value);

        if (this.rules.required.check(data, this.required)) {
          this.errorMessage = this.rules.required.message;
        } else if (this.rules.min.check(data, this.min)) {
          this.errorMessage = this.rules.min.message;
        } else if (this.rules.max.check(data, this.max)) {
          this.errorMessage = this.rules.max.message;
        } else if (this.rules.email.check(data, this.email)) {
          this.errorMessage = this.rules.email.message;
        } else if (this.rules.tel.check(data, this.tel, this.$refs.input.$el.value)) {
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
