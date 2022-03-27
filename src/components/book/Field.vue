<template>
  <section>
    <p class="mb-16">Поле является частью компонента формы. Имеет встроенные правила валидации.</p>

    <p><b>label:</b> заголовок поля</p>
    <p><b>field:</b> внутренний компонент поля, например, UiInput или UiSelect</p>
    <p><b>options:</b> массив опций [object, string или number] для select, multiselect и radio</p>
    <p class="mb-32"><b>v-model:</b> для двустороннего связывания</p>

    <p><b>Виды валидации поля</b></p>
    <p><b>tel:</b> формат номера телефона + маска поля, Boolean.</p>
    <p><b>email:</b> электронная почта, Boolean.</p>
    <p><b>numeric:</b> только целые числа, Boolean.</p>
    <p><b>min:</b> минимальное количество символов, Number.</p>
    <p><b>max:</b> максимальное количество символов, Number.</p>
    <p class="mb-32"><b>required:</b> обязательное поле, Boolean.</p>

    <p><b>Поддержка валидации разными типами полей</b></p>
    <p><b>input:</b> tel, email, numeric, min, max, required.</p>
    <p><b>textarea:</b> min, max, required.</p>
    <p class="mb-32"><b>select, multiselect, search, checkbox, radio, upload:</b> required.</p>

    <p class="mb-32">formData: {{ formData }}</p>

    <UiForm class="mb-32">
      <UiField :field="UiInput" label="Телефон" tel type="tel" v-model="formData.tel" class="w-50 mb-8" />

      <UiField :field="UiInput" label="Электронная почта" email v-model="formData.email" class="w-50 mb-8" />

      <UiField :field="UiInput" label="Цифры" numeric v-model="formData.numeric" class="w-50 mb-8" />

      <UiField
        :field="UiInput"
        label="Минимальное количество символов"
        :min="3"
        v-model="formData.min"
        class="w-50 mb-8"
      />

      <UiField
        :field="UiInput"
        label="Максимальное количество символов"
        :max="3"
        v-model="formData.max"
        class="w-50 mb-8"
      />

      <UiField :field="UiTextarea" label="Textarea" required v-model="formData.required" class="w-50 mb-8" />

      <UiField :field="UiSelect" label="Select" v-model="formData.select" :options="selectOptions" class="w-50 mb-8" />

      <UiField
        :field="UiMultiselect"
        label="Multiselect"
        required
        v-model="formData.multiselect"
        :options="multiselectOptions"
        class="w-50 mb-16"
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
        class="mb-16"
      />

      <UiField :field="UiUpload" label="Загрузка файлов" v-model="formData.files" multiple class="mb-32" />
    </UiForm>
  </section>
</template>

<script setup lang="ts">
  import { UiField, UiForm, UiUpload, UiRadio, UiCheckbox, UiMultiselect, UiSelect, UiTextarea, UiInput } from "../ui";
  import { ref } from "vue";

  const formData = ref({
    tel: "",
    email: "",
    numeric: "",
    min: "",
    max: "",
    required: "",
    select: "",
    multiselect: [],
    agree: false,
    rate: "",
    files: [],
  });

  const rateOptions = [1, 2, 3, 4, 5];

  const selectOptions = [
    { value: 1, name: "Нет" },
    { value: 2, name: "Да" },
  ];

  const multiselectOptions = [
    { value: 1, name: "Нет" },
    { value: 2, name: "Да" },
    { value: 3, name: "Может быть" },
  ];
</script>

<script lang="ts">
  export default { name: "Field" };
</script>
