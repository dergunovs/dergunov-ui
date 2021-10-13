<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <TheUpload multiple />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Upload",
  });
</script>
