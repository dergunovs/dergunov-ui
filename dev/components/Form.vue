<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16"><b>formStatus:</b> success, error.</p>

      <p>Форма является компонентом слотом, в который нужно добавить поля и кнопки.</p>
      <p>Имеет встроенные обработчики для успешной отправки и ошибки сервера.</p>

      <p><b>formData:</b> {{ formData }}</p>
      <p class="mb-16"><b>formStatus:</b> {{ formStatus }}</p>

      <TheForm :formStatus="formStatus">
        <h2>Заказать услуги</h2>
        <div class="flex flex-sb mb-16">
          <TheField label="Ваше имя" class="w-50-8">
            <TheInput v-model="formData.customer" />
          </TheField>
          <TheField label="Электронная почта" class="w-50-8">
            <TheInput v-model="formData.email" />
          </TheField>
        </div>
        <TheField label="Сообщение" class="mb-16">
          <TheTextarea v-model="formData.message" rows="4" />
        </TheField>

        <TheButton @ui-click="formSubmit">Отправить сообщение</TheButton>
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
      };
    },

    methods: {
      formSubmit() {
        this.formStatus = "success";
      },
    },
  };
</script>
