<template>
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

    <UiForm :formStatus="formStatus" @errors="formValidate">
      <h2>Заказать услуги</h2>

      <div class="flex flex-sb flex-top mb-16">
        <UiField :field="UiInput" label="Ваше имя" v-model="formData.customer" required class="w-50-8" />
        <UiField :field="UiInput" label="Электронная почта" v-model="formData.email" email class="w-50-8" />
      </div>

      <UiField :field="UiTextarea" label="Сообщение" v-model="formData.message" :min="3" :max="9" class="mb-16" />

      <UiField
        :field="UiSearch"
        label="Поиск"
        v-model="formData.search"
        :options="rateOptions"
        required
        class="mb-32"
      />

      <UiField
        :field="UiSelect"
        label="Нужна обратная связь?"
        v-model="formData.recall"
        :options="recallOptions"
        required
        class="mb-16"
      />

      <UiField
        :field="UiMultiselect"
        label="Предпочтительные типы связи"
        v-model="formData.type"
        :options="typeOptions"
        required
        class="mb-16"
      />

      <UiField
        :field="UiCheckbox"
        label="Согласие на обработку персональных данных"
        v-model="formData.agree"
        required
        class="mb-16"
      />

      <UiField
        :field="UiRadio"
        label="Оцените эту форму от 1 до 5"
        v-model="formData.rate"
        required
        :options="rateOptions"
        direction="row"
        class="mb-16"
      />

      <UiField :field="UiUpload" label="Загрузка файлов" v-model="formData.files" multiple class="mb-32" />

      <UiButton @click="formSubmit" :disabled="formErrors">Отправить сообщение</UiButton>
    </UiForm>
  </section>
</template>

<script setup lang="ts">
  import {
    UiField,
    UiForm,
    UiButton,
    UiUpload,
    UiRadio,
    UiCheckbox,
    UiSearch,
    UiMultiselect,
    UiSelect,
    UiTextarea,
    UiInput,
  } from "@/components";
  import { ref } from "vue";

  const formData = ref({
    customer: "",
    email: "",
    message: "",
    recall: "",
    search: "",
    type: [],
    agree: false,
    rate: "",
    files: [],
  });

  const formStatus = ref("");
  const formErrors = ref(false);

  const rateOptions = [1, 2, 3, 4, 5];
  const recallOptions = ["Да", "Нет"];
  const typeOptions = [
    { value: "phone", name: "Телефон" },
    { value: "email", name: "Электронная почта" },
    { value: "telegram", name: "Телеграм" },
  ];

  function formSubmit() {
    formStatus.value = "success";
  }

  function formValidate(result: boolean) {
    formErrors.value = result;
  }
</script>

<script lang="ts">
  export default { name: "Form" };
</script>
