<template>
  <div class="ui-code-block">
    <code ref="code" class="ui-code"><slot></slot></code>
    <div class="ui-code-image-block">
      <button @click="copyToClipboard" class="ui-code-image-button">
        <img
          src="@/assets/icons/copy.svg"
          class="ui-code-image"
          :class="{ 'ui-code-image-copy': copied }"
          alt="Копировать"
          title="Копировать"
          loading="lazy"
          width="24"
          height="24"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";

  const copied = ref(false);
  const code = ref<HTMLElement>();

  function copyToClipboard(): void {
    if (code.value) {
      navigator.clipboard.writeText(code.value.innerText);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 200);
    }
  }

  onMounted(() => {
    if (code.value) {
      code.value.innerHTML = code.value.innerHTML
        .replaceAll("<pre>", "")
        .replaceAll("</pre>", "")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    }
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
