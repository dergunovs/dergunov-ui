<template>
  <iframe
    :src="props.src"
    :height="props.height"
    :title="props.title"
    width="100%"
    frameborder="0"
    allow="accelerometer; encrypted-media; picture-in-picture"
    loading="lazy"
    class="ui-map"
  ></iframe>
</template>

<script setup lang="ts">
  interface Props {
    src: string;
    height?: string;
    title?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    height: "400",
    title: "Карта",
  });
</script>

<script lang="ts">
  export default { name: "UiMap" };
</script>
