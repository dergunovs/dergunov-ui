<template>
  <div class="ui-table-block">
    <div v-if="isScrollable" class="ui-table-scroll-message">Таблицу можно прокручивать вправо -></div>

    <table class="ui-table" :class="`ui-table-fit-${fit}`" :width="width" cellspacing="0" cellpadding="0" border="0">
      <thead class="ui-table-header">
        <tr>
          <th v-for="(header, index) in headers" :key="`header${index}`">{{ header }}</th>
        </tr>
      </thead>
      <tbody class="ui-table-body">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "UiTable",

    data() {
      return {
        isScrollable: false,
      };
    },

    props: {
      headers: { type: Array, required: true },
      fit: { type: String, default: "regular" },
      width: { type: String },
    },

    methods: {
      checkTableSize(): void {
        let tableBlock = document.querySelector(".ui-table-block") as HTMLElement;
        let table = document.querySelector(".ui-table") as HTMLElement;

        let tableBlockSize = Number(getComputedStyle(tableBlock).width.slice(0, -2));
        let tableSize = Number(getComputedStyle(table).width.slice(0, -2));

        this.isScrollable = tableSize > tableBlockSize ? true : false;
      },
    },

    mounted() {
      this.checkTableSize();

      window.addEventListener("resize", this.checkTableSize);
    },

    beforeUnmount() {
      window.removeEventListener("resize", this.checkTableSize);
    },
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
