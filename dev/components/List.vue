<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>
      <p><b>type:</b> ul, ol. default: <b>ul</b></p>
      <p><b>direction:</b> vertical, horizontal. default: <b>vertical</b></p>
      <p><b>design:</b> regular, none, styled. default: <b>regular</b></p>

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

      <TheList type="ul" direction="horizontal" design="none">
        <li class="border-gray-light">ul, horizontal, none + border-gray-light</li>
        <li class="border-gray-light">ul, horizontal, none + border-gray-light</li>
        <li class="border-gray-light">ul, horizontal, none + border-gray-light</li>
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
  </div>
</template>

<script>
  import TheList from "@/lib-components/TheList.vue";

  export default {
    name: "List",

    components: { TheList },
  };
</script>
