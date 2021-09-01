<template>
  <div class="ui-code-block">
    <pre ref="code" class="ui-code"><slot></slot></pre>
    <div class="ui-image-block">
      <button @click="copyToClipboard" class="ui-image-button">
        <img
          :src="$options.components.copy"
          class="ui-image"
          alt="Копировать код"
          title="Копировать код"
          loading="lazy"
          width="24"
          height="24"
        />
      </button>
    </div>
  </div>
</template>

<script>
  import copy from "@/lib-components/assets/icons/copy.svg";
  import Button from "../../dev/components/Button.vue";

  export default {
    name: "TheCode",

    components: { copy },

    methods: {
      copyToClipboard() {
        navigator.clipboard.writeText(this.$refs.code.textContent);
      },
    },
  };

  Button;
</script>

<style>
  .ui-code-block {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray-light);
    border-radius: 8px;
    margin: 8px 0;
    padding: 16px;
  }
  .ui-image-block {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .ui-image-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .ui-image {
    opacity: 0.5;
    transition-duration: 300ms;
    display: block;
  }
  .ui-image:hover {
    opacity: 1;
  }
  .ui-code {
    white-space: break-spaces;
    overflow-x: auto;
    flex-grow: 1;
  }
</style>
