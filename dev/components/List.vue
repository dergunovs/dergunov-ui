<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>type:</b> ul, ol. default: <b>ul</b></p>
      <p><b>direction:</b> column, row. default: <b>column</b></p>
      <p><b>design:</b> regular, none, styled. default: <b>regular</b></p>

      <TheList type="ul" direction="column" design="regular">
        <li>ul, column, regular</li>
        <li>ul, column, regular</li>
        <li>ul, column, regular</li>
      </TheList>

      <TheList type="ol" direction="row" design="regular">
        <li>ol, row, regular</li>
        <li>ol, row, regular</li>
        <li>ol, row, regular</li>
      </TheList>

      <TheList type="ul" direction="row" design="none">
        <li class="border-gray">ul, row, none + border-gray</li>
        <li class="border-gray">ul, row, none + border-gray</li>
        <li class="border-gray">ul, row, none + border-gray</li>
      </TheList>

      <TheList type="ul" direction="vertical" design="styled">
        <li>ul, vertical, styled</li>
        <li>ul, vertical, styled</li>
        <li>ul, vertical, styled</li>
      </TheList>

      <TheList type="ol" direction="row" design="styled">
        <li>ol, row, styled</li>
        <li>ol, row, styled</li>
        <li>ol, row, styled</li>
      </TheList>

      <TheList type="ol" direction="vertical" design="styled">
        <li>ol, vertical, styled</li>
        <li>ol, vertical, styled</li>
        <li>ol, vertical, styled</li>
      </TheList>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "List",
  });
</script>
