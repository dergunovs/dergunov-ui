<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>rules:</b> правила валидации поля.</p>
      <p class="mb-16"><b>label:</b> заголовок поля.</p>

      <p>Поле является частью компонента формы.</p>
      <p class="mb-16">Имеет встроенные правила валидации.</p>

      <TheField label="Ваше имя" class="w-50-8">
        <TheInput v-model="min" />
      </TheField>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Field",

    data() {
      return {
        min: "",
      };
    },
  };
</script>
