<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Поле является частью компонента формы. Имеет встроенные правила валидации.</p>

      <p><b>label:</b> заголовок поля.</p>
      <p class="mb-16"><b>v-model:</b> для двустороннего связывания.</p>

      <p><b>Встроенная валидация полей </b></p>
      <p><b>tel:</b> формат номера телефона + маска поля, Boolean.</p>
      <p><b>email:</b> электронная почта, Boolean.</p>
      <p><b>min:</b> минимальное количество символов, Number.</p>
      <p><b>max:</b> максимальное количество символов, Number.</p>
      <p class="mb-32"><b>reguired:</b> обязательное поле, Boolean.</p>

      <TheForm>
        <TheField label="Телефон" :tel="true" v-model="tel" class="w-50 mb-8" />
        <TheField label="Электронная почта" :email="true" v-model="email" class="w-50 mb-8" />
        <TheField label="Минимальное количество символов" :min="3" v-model="min" class="w-50 mb-8" />
        <TheField label="Максимальное количество символов" :max="3" v-model="max" class="w-50 mb-8" />
        <TheField label="Обязательное поле" :required="true" v-model="required" class="w-50 mb-8" />
      </TheForm>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Field",

    data() {
      return {
        tel: "",
        email: "",
        min: "",
        max: "",
        required: "",
      };
    },
  };
</script>
