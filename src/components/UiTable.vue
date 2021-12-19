<template>
  <div class="ui-table-block" ref="tableBlock">
    <div v-if="isScrollable" class="ui-table-scroll-message">Можно прокручивать вправо -></div>

    <table
      class="ui-table"
      :class="`ui-table-fit-${props.fit}`"
      :width="props.width"
      ref="table"
      cellspacing="0"
      cellpadding="0"
      border="0"
    >
      <thead class="ui-table-header">
        <tr>
          <th v-for="(header, index) in props.headers" :key="`header${index}`">{{ header }}</th>
        </tr>
      </thead>
      <tbody class="ui-table-body">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const isScrollable = ref(false);
  const tableBlock = ref<HTMLElement>();
  const table = ref<HTMLElement>();

  interface Props {
    headers: string[];
    fit?: string;
    width?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    fit: "regular",
  });

  function checkTableSize(): void {
    if (tableBlock.value && table.value) {
      const tableBlockSize = Number(getComputedStyle(tableBlock.value).width.slice(0, -2));
      const tableSize = Number(getComputedStyle(table.value).width.slice(0, -2));

      isScrollable.value = tableSize > tableBlockSize ? true : false;
    }
  }

  onMounted(() => {
    checkTableSize();
    window.addEventListener("resize", checkTableSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkTableSize);
  });
</script>

<style>
  .ui-table-block {
    overflow-x: auto;
    max-width: 100%;
  }

  .ui-table-scroll-message {
    margin-bottom: 8px;
  }

  .ui-table-fit-grow {
    width: 100%;
  }

  .ui-table-header tr th {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: 700;
    padding: 8px 16px;
    text-align: left;
  }
</style>
