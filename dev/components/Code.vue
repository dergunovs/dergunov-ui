<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">
        Оборачивает текст в тег code. Добавляет возможность копировать текст в буфер обмена. Автоматически экранируются
        символы открытия и закрытия тегов &lt;&gt;. Если требуется, то внутри компонента можно добавить тег pre.
      </p>

      <TheCode>Текст</TheCode>
      <TheCode><p>Текст</p></TheCode>
      <TheCode>
        <pre>
Текст внутри дополнительного тега pre можно разбить с сохранением переносов строк,
а также с нужным  количеством   пробелов    внутри     текста</pre
        >
      </TheCode>
    </section>
  </div>
</template>

<script>
  import TheCode from "@/lib-components/TheCode.vue";

  export default {
    name: "Code",

    components: { TheCode },
  };
</script>
