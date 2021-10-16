<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Поле является частью компонента формы. Имеет встроенные правила валидации.</p>

      <p><b>label:</b> заголовок поля.</p>
      <p><b>type:</b> text, textarea, select, multiselect, checkbox, radio, upload. default: text</p>
      <p><b>options:</b> массив опций [object, string или number] для select, multiselect и radio</p>
      <p><b>value:</b> текстовое значение для radio</p>
      <p class="mb-32"><b>v-model:</b> для двустороннего связывания.</p>

      <p><b>Виды валидации поля</b></p>
      <p><b>tel:</b> формат номера телефона + маска поля, Boolean.</p>
      <p><b>email:</b> электронная почта, Boolean.</p>
      <p><b>min:</b> минимальное количество символов, Number.</p>
      <p><b>max:</b> максимальное количество символов, Number.</p>
      <p class="mb-32"><b>reguired:</b> обязательное поле, Boolean.</p>

      <p><b>Поддержка валидации разными типами полей</b></p>
      <p><b>text:</b> tel, email, min, max, required.</p>
      <p><b>textarea:</b> min, max, required.</p>
      <p class="mb-32"><b>select, multiselect, checkbox, radio, upload:</b> required.</p>

      <p class="mb-32">formData: {{ formData }}</p>

      <TheForm class="mb-32">
        <TheField label="Телефон" tel v-model="formData.tel" class="w-50 mb-8" />
        <TheField label="Электронная почта" email v-model="formData.email" class="w-50 mb-8" />
        <TheField label="Минимальное количество символов" :min="3" v-model="formData.min" class="w-50 mb-8" />
        <TheField label="Максимальное количество символов" :max="3" v-model="formData.max" class="w-50 mb-8" />

        <TheField label="Textarea" type="textarea" required v-model="formData.required" class="w-50 mb-8" />

        <TheField label="Select" type="select" v-model="formData.select" :options="selectOptions" class="w-50 mb-8" />

        <TheField
          label="Multiselect"
          type="multiselect"
          required
          v-model="formData.multiselect"
          :options="multiselectOptions"
          class="w-50 mb-16"
        />
        <TheField
          label="Согласие на обработку персональных данных"
          type="checkbox"
          v-model="formData.agree"
          required
          class="mb-16"
        />

        <p class="mb-8">Оцените эту форму от 1 до 5</p>
        <div class="flex mb-16">
          <TheRadio v-model="formData.rate" :options="formData.rateOptions" />
        </div>

        <TheField label="Загрузка файлов" type="upload" v-model="formData.files" multiple class="mb-32" />
      </TheForm>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Field",

    data() {
      return {
        formData: {
          tel: "",
          email: "",
          min: "",
          max: "",
          required: "",
          select: "",
          multiselect: [],
          agree: false,
          rate: "",
          rateOptions: [1, 2, 3, 4, 5],
          files: [],
        },
        selectOptions: [
          { value: 0, name: "Нет" },
          { value: 1, name: "Да" },
        ],
        multiselectOptions: [
          { value: 0, name: "Нет" },
          { value: 1, name: "Да" },
          { value: 2, name: "Может быть" },
        ],
      };
    },
  });
</script>
