<template>
  <section>
    <p class="mb-16">
      Оборачивает текст в тег code. Добавляет возможность копировать текст в буфер обмена. Автоматически экранируются
      символы открытия и закрытия тегов &lt;&gt;. Если требуется, то внутри компонента можно добавить тег pre.
    </p>

    <UiCode>Текст</UiCode>
    <UiCode><p>Текст</p></UiCode>
    <UiCode>
      <pre>
Текст внутри дополнительного тега pre можно разбить с сохранением переносов строк,
а также с нужным  количеством   пробелов    внутри     текста</pre
      >
    </UiCode>
  </section>
</template>

<script setup lang="ts">
  import { UiCode } from "../ui";
</script>

<script lang="ts">
  export default { name: "Code" };
</script>
