<template>
  <section>
    <h1>Список</h1>
    <p><b>type:</b> ul, ol. default: <b>ul</b></p>
    <p><b>direction:</b> vertical, horizontal. default: <b>vertical</b></p>
    <p><b>design:</b> regular, hidden, styled. default: <b>regular</b></p>

    <TheList type="ul" direction="vertical" design="regular">
      <li>ul, vertical, regular</li>
      <li>ul, vertical, regular</li>
      <li>ul, vertical, regular</li>
    </TheList>

    <TheList type="ol" direction="horizontal" design="regular">
      <li>ol, horizontal, regular</li>
      <li>ol, horizontal, regular</li>
      <li>ol, horizontal, regular</li>
    </TheList>

    <TheList type="ul" direction="horizontal" design="hidden">
      <li class="border-gray-light">ul, horizontal, hidden + border-gray-light</li>
      <li class="border-gray-light">ul, horizontal, hidden + border-gray-light</li>
      <li class="border-gray-light">ul, horizontal, hidden + border-gray-light</li>
    </TheList>

    <TheList type="ul" direction="vertical" design="styled">
      <li>ul, vertical, styled</li>
      <li>ul, vertical, styled</li>
      <li>ul, vertical, styled</li>
    </TheList>

    <TheList type="ol" direction="horizontal" design="styled">
      <li>ol, horizontal, styled</li>
      <li>ol, horizontal, styled</li>
      <li>ol, horizontal, styled</li>
    </TheList>

    <TheList type="ol" direction="vertical" design="styled">
      <li>ol, vertical, styled</li>
      <li>ol, vertical, styled</li>
      <li>ol, vertical, styled</li>
    </TheList>
  </section>
</template>

<script>
  import TheList from "@/lib-components/TheList.vue";

  export default {
    name: "List",
    description: "Список",

    components: { TheList },
  };
</script>
