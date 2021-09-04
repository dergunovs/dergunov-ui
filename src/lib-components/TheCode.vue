<template>
  <div class="ui-code-block">
    <code ref="code" class="ui-code"><slot></slot></code>
    <div class="ui-image-block">
      <button @click="copyToClipboard" class="ui-image-button">
        <img
          :src="$options.components.copy"
          class="ui-image"
          :class="{ 'ui-image-copy': copied }"
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

  export default {
    name: "TheCode",

    data() {
      return {
        copied: false,
      };
    },

    components: { copy },

    methods: {
      copyToClipboard() {
        navigator.clipboard.writeText(this.$refs.code.textContent);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 200);
      },
    },

    mounted() {
      this.$refs.code.innerHTML = this.$refs.code.innerHTML
        .replaceAll("<pre>", "")
        .replaceAll("</pre>", "")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    },
  };
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
    padding: 2px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .ui-image:hover {
    opacity: 1;
  }
  .ui-image-copy {
    border: 1px solid var(--color-gray-dark);
  }
  .ui-code {
    white-space: break-spaces;
    overflow-x: auto;
    flex-grow: 1;
  }
</style>
