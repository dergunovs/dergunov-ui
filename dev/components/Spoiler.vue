<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>С помощью props можно задать текст кнопки в свернутом и раскрытом состоянии.</p>
      <p>Внутри компонента через slot прокидывается содержимое спойлера.</p>
      <p class="mb-16">
        Через v-model (boolean) можно задать начальное состояние спойлера/получать текущее состояние спойлера.
      </p>

      <p><b>title:</b> string. default: <b>Раскрыть</b></p>
      <p class="mb-16"><b>titleExpanded:</b> string. default: <b>Свернуть</b></p>

      <p class="mb-16">expanded: {{ isExpanded }}</p>

      <UiSpoiler v-model="isExpanded" title="Раскрыть" titleExpanded="Свернуть">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam tempora deleniti voluptate, a
          consequuntur quae distinctio ea vero, quasi iste quia. A quaerat, excepturi quae hic quidem voluptatem
          similique!
        </p>
      </UiSpoiler>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiSpoiler } from "@/components";
  import { ref } from "vue";

  const isExpanded = ref(true);
</script>

<script lang="ts">
  export default { name: "Spoiler" };
</script>
