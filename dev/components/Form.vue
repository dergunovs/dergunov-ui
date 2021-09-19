<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16"><b>formStatus:</b> success, error.</p>

      <p>Форма является компонентом слотом, в который нужно добавить поля и кнопки.</p>
      <p>Имеет встроенные обработчики для успешной отправки и ошибки сервера.</p>

      <p><b>formData:</b> {{ formData }}</p>
      <p class="mb-16"><b>formStatus:</b> {{ formStatus }}</p>

      <TheForm :formStatus="formStatus" @validate="formValidate">
        <h2>Заказать услуги</h2>
        <div class="flex flex-sb flex-top mb-16">
          <TheField label="Ваше имя" v-model="formData.customer" tel required class="w-50-8" />
          <TheField label="Электронная почта" v-model="formData.email" required email class="w-50-8" />
        </div>
        <TheField
          label="Сообщение"
          type="textarea"
          v-model="formData.message"
          required
          :min="5"
          :max="10"
          class="mb-16"
        />
        <TheButton @ui-click="formSubmit" :disabled="formErrors">Отправить сообщение</TheButton>
      </TheForm>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Form",

    data() {
      return {
        formData: {
          customer: "",
          email: "",
          message: "",
        },
        formStatus: "",
        formErrors: false,
      };
    },

    methods: {
      formSubmit() {
        this.formStatus = "success";
      },
      formValidate(result) {
        this.formErrors = result;
      },
    },
  };
</script>
