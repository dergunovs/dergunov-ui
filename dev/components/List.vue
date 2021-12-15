<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>type:</b> ul, ol. default: <b>ul</b></p>
      <p><b>direction:</b> column, row. default: <b>column</b></p>
      <p><b>design:</b> regular, none, styled. default: <b>regular</b></p>

      <UiList type="ul" direction="column" design="regular">
        <li>ul, column, regular</li>
        <li>ul, column, regular</li>
        <li>ul, column, regular</li>
      </UiList>

      <UiList type="ol" direction="row" design="regular">
        <li>ol, row, regular</li>
        <li>ol, row, regular</li>
        <li>ol, row, regular</li>
      </UiList>

      <UiList type="ul" direction="row" design="none">
        <li class="border-gray">ul, row, none + border-gray</li>
        <li class="border-gray">ul, row, none + border-gray</li>
        <li class="border-gray">ul, row, none + border-gray</li>
      </UiList>

      <UiList type="ul" direction="vertical" design="styled">
        <li>ul, vertical, styled</li>
        <li>ul, vertical, styled</li>
        <li>ul, vertical, styled</li>
      </UiList>

      <UiList type="ol" direction="row" design="styled">
        <li>ol, row, styled</li>
        <li>ol, row, styled</li>
        <li>ol, row, styled</li>
      </UiList>

      <UiList type="ol" direction="vertical" design="styled">
        <li>ol, vertical, styled</li>
        <li>ol, vertical, styled</li>
        <li>ol, vertical, styled</li>
      </UiList>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiList } from "@/components";
</script>

<script lang="ts">
  export default { name: "List" };
</script>
