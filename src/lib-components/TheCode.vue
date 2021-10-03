<template>
  <div class="ui-code-block">
    <code ref="code" class="ui-code"><slot></slot></code>
    <div class="ui-code-image-block">
      <button @click="copyToClipboard" class="ui-code-image-button">
        <img
          :src="$options.components.copy"
          class="ui-code-image"
          :class="{ 'ui-code-image-copy': copied }"
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

<script lang="ts">
  import { defineComponent } from "vue";
  import copy from "@/lib-components/assets/icons/copy.svg";

  export default /*#__PURE__*/ defineComponent({
    name: "TheCode",

    data() {
      return {
        copied: false,
      };
    },

    components: { copy },

    computed: {
      code: function(): HTMLElement {
        return this.$refs.code as HTMLElement;
      },
    },

    methods: {
      copyToClipboard(): void {
        navigator.clipboard.writeText(this.code.innerText);
        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 200);
      },
    },

    mounted() {
      this.code.innerHTML = this.code.innerHTML
        .replaceAll("<pre>", "")
        .replaceAll("</pre>", "")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    },
  });
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
  .ui-code {
    white-space: break-spaces;
    overflow-x: auto;
    flex-grow: 1;
  }
  .ui-code-image-block {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .ui-code-image-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .ui-code-image {
    opacity: 0.5;
    transition-duration: 300ms;
    display: block;
    padding: 2px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .ui-code-image:hover {
    opacity: 1;
  }
  .ui-code-image-copy {
    border: 1px solid var(--color-gray-dark);
  }
</style>
