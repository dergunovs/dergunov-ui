<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16"><b>formStatus:</b> success, error.</p>

      <p>Форма является компонентом слотом, в который нужно добавить поля и кнопки.</p>
      <p>Имеет встроенные обработчики для успешной отправки и ошибки сервера.</p>
      <p>На компонент form можно повесить слушатель события @errors="formValidate".</p>
      <p>Функиця formValidate(result: boolean) { this.formErrors = result }.</p>
      <p class="mb-16">Кнопку отправки формы можно отключить при ошибках валидации :disabled="formErrors".</p>

      <p><b>formData:</b> {{ formData }}</p>
      <p class="mb-16"><b>formStatus:</b> {{ formStatus }}</p>

      <TheForm :formStatus="formStatus" @errors="formValidate">
        <h2>Заказать услуги</h2>

        <div class="flex flex-sb flex-top mb-16">
          <TheField label="Ваше имя" v-model="formData.customer" required class="w-50-8" />
          <TheField label="Электронная почта" v-model="formData.email" email class="w-50-8" />
        </div>

        <TheField label="Сообщение" type="textarea" v-model="formData.message" :min="3" :max="9" class="mb-16" />

        <TheField
          label="Нужна обратная связь?"
          type="select"
          v-model="formData.recall"
          :options="optionsRecall"
          required
          class="mb-16"
        />

        <TheField
          label="Предпочтительные типы связи"
          type="multiselect"
          v-model="formData.type"
          :options="optionsType"
          required
          class="mb-16"
        />

        <TheField
          label="Согласие на обработку персональных данных"
          type="checkbox"
          v-model="formData.agree"
          required
          class="mb-16"
        />

        <TheField
          label="Оцените эту форму от 1 до 5"
          type="radio"
          v-model="formData.rate"
          required
          :options="formData.rateOptions"
          class="mb-16"
        />

        <TheField label="Загрузка файлов" type="upload" v-model="formData.files" multiple required class="mb-32" />

        <TheButton @ui-click="formSubmit" :disabled="formErrors">Отправить сообщение</TheButton>
      </TheForm>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Form",

    data() {
      return {
        formData: {
          customer: "",
          email: "",
          message: "",
          recall: "",
          type: [],
          agree: false,
          rate: "",
          rateOptions: [1, 2, 3, 4, 5],
          files: [],
        },
        optionsRecall: [
          { value: 1, name: "Да" },
          { value: 0, name: "Нет" },
        ],
        optionsType: [
          { value: 1, name: "Телефон" },
          { value: 2, name: "Электронная почта" },
          { value: 3, name: "Мессенжер" },
        ],
        formStatus: "",
        formErrors: false,
      };
    },

    methods: {
      formSubmit() {
        this.formStatus = "success";
      },
      formValidate(result: boolean) {
        this.formErrors = result;
      },
    },
  });
</script>
