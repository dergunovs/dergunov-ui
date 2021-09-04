<template>
  <iframe
    :src="src"
    :height="height"
    :title="title"
    width="100%"
    frameborder="0"
    allow="accelerometer; encrypted-media; picture-in-picture"
    loading="lazy"
    class="ui-map"
  ></iframe>
</template>

<script>
  export default {
    name: "TheMap",

    props: {
      src: { type: String, required: true },
      height: { type: String, default: "400" },
      title: { type: String, default: "Карта" },
    },
  };
</script>
