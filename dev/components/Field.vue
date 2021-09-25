<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Поле является частью компонента формы. Имеет встроенные правила валидации.</p>

      <p><b>label:</b> заголовок поля.</p>
      <p><b>type:</b> text, textarea, select, multiselect. default: text</p>
      <p><b>options:</b> массив опций [{value: 0, name: "Нет"}, ...] для select и multiselect</p>
      <p class="mb-16"><b>v-model:</b> для двустороннего связывания.</p>

      <p><b>Встроенная валидация полей</b></p>
      <p><b>tel:</b> формат номера телефона + маска поля, Boolean.</p>
      <p><b>email:</b> электронная почта, Boolean.</p>
      <p><b>min:</b> минимальное количество символов, Number.</p>
      <p><b>max:</b> максимальное количество символов, Number.</p>
      <p class="mb-32"><b>reguired:</b> обязательное поле, Boolean.</p>

      <TheForm class="mb-32">
        <TheField label="Телефон" tel v-model="formData.tel" class="w-50 mb-8" />
        <TheField label="Электронная почта" email v-model="formData.email" class="w-50 mb-8" />
        <TheField label="Минимальное количество символов" :min="3" v-model="formData.min" class="w-50 mb-8" />
        <TheField label="Максимальное количество символов" :max="3" v-model="formData.max" class="w-50 mb-8" />
        <TheField label="Textarea" type="textarea" required v-model="formData.required" class="w-50 mb-8" />
        <TheField
          label="Select"
          type="select"
          required
          v-model="formData.select"
          :options="selectOptions"
          class="w-50 mb-8"
        />
        <TheField
          label="Multiselect"
          type="multiselect"
          required
          v-model="formData.multiselect"
          :options="multiselectOptions"
          class="w-50"
        />
      </TheForm>

      <p class="mb-32">formData: {{ formData }}</p>
    </section>
  </div>
</template>

<script>
  export default {
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
          multiselect: "",
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
  };
</script>
