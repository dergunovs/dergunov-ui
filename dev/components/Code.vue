<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Оборачивает текст в тег code. Добавляет возможность копировать текст в буфер обмена.</p>
      <p>Если требуется, то внутри компонента можно использовать тег pre.</p>
      <p>Для экранирования открытия и закрытия тегов & вместе с lt; или gt;</p>

      <TheCode>Текст</TheCode>
      <TheCode>&lt;p&gt;Текст&lt;/p&gt;</TheCode>
      <TheCode>
        <pre>
Текст внутри &lt;pre&gt;
можно разбить с сохранением переносов строк без br,
а также с сохранением нужного количества  пробелов   внутри    текста</pre
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
