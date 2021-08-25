<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>
      <p><b>name:</b> download, facebook, instagram, view, vk, youtube</p>
      <p><b>size:</b> small, medium, big, default: <b>medium</b></p>
      <p><b>type:</b> regular, round, inverted: <b>regular</b></p>

      <div class="flex">
        <TheIcon title="download" />
        <TheIcon title="facebook" />
        <TheIcon title="instagram" />
        <TheIcon title="count" />
        <TheIcon title="vk" />
        <TheIcon title="youtube" />
      </div>
    </section>
  </div>
</template>

<script>
  import TheIcon from "@/lib-components/TheIcon.vue";

  export default {
    name: "Icon",

    data() {
      return {
        clickCount: 0,
      };
    },

    components: { TheIcon },
  };
</script>
