<template>
  <tr class="ui-table-row">
    <td v-for="(cell, index) in row" :key="`cell${index}`">{{ cell }}</td>
  </tr>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheTable",

    props: {
      row: { type: Object, required: true },
    },
  });
</script>

<style>
  .ui-table-row td {
    padding: 8px 16px;
    border-bottom: 1px solid var(--color-gray);
  }
</style>
