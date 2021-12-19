<template>
  <div class="ui-spoler-block">
    <button @click="isExpanded = !isExpanded" class="ui-spoler-button">
      <img
        src="@/assets/icons/arrow.svg"
        class="ui-spoiler-arrow"
        :class="{ 'ui-spoiler-arrow-expanded': isExpanded }"
        width="16"
        height="16"
        alt="spoiler"
        loading="lazy"
      />
      {{ isExpanded ? props.titleExpanded : props.title }}
    </button>

    <transition name="fade">
      <div v-show="isExpanded" class="ui-spoler" :class="{ 'ui-spoler-expanded': isExpanded }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";

  const isExpanded = ref(false);

  interface Props {
    modelValue?: boolean;
    title?: string;
    titleExpanded?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    title: "Раскрыть",
    titleExpanded: "Свернуть",
  });

  const emit = defineEmits(["update:modelValue"]);

  watch(isExpanded, () => {
    emit("update:modelValue", isExpanded.value);
  });

  isExpanded.value = props.modelValue;
</script>

<script lang="ts">
  export default { name: "UiSpoiler" };
</script>

<style>
  .ui-spoler-block {
    display: flex;
    flex-direction: column;
  }

  .ui-spoler-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border: none;
    background-color: var(--color-gray-light);
    padding: 0px 24px;
    height: 44px;
    font-weight: 700;
    transition-duration: 300ms;
  }

  .ui-spoler-button:hover {
    background-color: var(--color-gray);
  }

  .ui-spoiler-arrow {
    transform: rotate(270deg);
    margin-right: 4px;
    transition-duration: 200ms;
  }
  .ui-spoiler-arrow-expanded {
    transform: rotate(360deg);
  }

  .ui-spoler {
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-gray-light);
    border-left: 1px solid var(--color-gray-light);
    border-right: 1px solid var(--color-gray-light);
  }
</style>
