<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>С помощью props можно задать текст кнопки в свернутом и раскрытом состоянии.</p>
      <p>Внутри компонента через slot прокидывается содержимое спойлера.</p>
      <p class="mb-16">
        Через v-model (boolean) можно сделать двустороннее связываение, чтобы задавать/получать состояние спойлера.
      </p>

      <p><b>title:</b> string. default: <b>Раскрыть</b></p>
      <p class="mb-16"><b>titleExpanded:</b> string. default: <b>Свернуть</b></p>

      <p class="mb-16">expanded: {{ expanded }}</p>

      <TheSpoiler v-model="expanded" title="Раскрыть" titleExpanded="Свернуть">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam tempora deleniti voluptate, a
          consequuntur quae distinctio ea vero, quasi iste quia. A quaerat, excepturi quae hic quidem voluptatem
          similique!
        </p>
      </TheSpoiler>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Spoiler",

    data() {
      return {
        expanded: true,
      };
    },
  });
</script>
