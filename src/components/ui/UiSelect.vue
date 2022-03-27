<template>
  <div @click.stop class="ui-select-block">
    <div
      @click="toggleOptions"
      @keydown.space="toggleOptions"
      @keydown.esc="hideOptions"
      class="ui-select-current"
      :class="{ 'ui-select-current-active': isShowOptions }"
      tabindex="0"
    >
      <div :class="{ 'ui-select-current-option': currentOption.name }">{{ currentOption.name || "Выбрать" }}</div>
      <img
        src="../../assets/icons/arrow.svg"
        class="ui-select-current-arrow"
        width="16"
        height="16"
        alt="select"
        loading="lazy"
      />
    </div>

    <ul class="ui-select-dropdown-block" v-show="isShowOptions">
      <li
        v-for="(option, index) in optionsComputed"
        :key="`option${index}`"
        :ref="setOptionElementRef"
        @click="setOption(option)"
        @mouseover="focusAt(index)"
        @keydown.up="focusUp(index)"
        @keydown.down="focusDown(index)"
        @keydown.enter="setOption(option)"
        @keydown.esc="hideOptions"
        class="ui-select-dropdown"
        :class="{ 'ui-select-dropdown-current': option.name === currentOption.name }"
        tabindex="0"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue";

  interface Option {
    value: string | number;
    name: string;
  }

  type OptionValue = string | number;

  const isShowOptions = ref(false);
  const currentOption = ref<Option>({ value: "", name: "" });
  const optionElements = ref<HTMLElement[]>();

  const props = defineProps<{
    modelValue: OptionValue;
    options: Option[] | OptionValue[];
  }>();

  const emit = defineEmits(["update:modelValue"]);

  const optionsComputed = computed(() => {
    return props.options.map((option: OptionValue | Option) => {
      if (typeof option === "string" || typeof option === "number") return { value: option, name: option.toString() };
      else return option;
    });
  });

  watch(currentOption, () => {
    if (currentOption.value) emit("update:modelValue", currentOption.value.value);
  });

  function hideOptions(): void {
    isShowOptions.value = false;
  }

  function toggleOptions(): void {
    isShowOptions.value = !isShowOptions.value;
    focusOnFirstOptionElement();
  }

  function setOption(option: Option): void {
    currentOption.value = option;
    hideOptions();
  }

  function focusOnFirstOptionElement(): void {
    setTimeout(() => {
      if (optionElements.value?.length) optionElements.value[0].focus();
    }, 100);
  }

  function focusAt(index: number): void {
    if (optionElements.value) optionElements.value[index].focus();
  }

  function focusUp(index: number): void {
    if (index !== 0 && optionElements.value) optionElements.value[index - 1].focus();
  }

  function focusDown(index: number): void {
    if (optionElements.value && index !== optionElements.value.length - 1) {
      if (optionElements.value) optionElements.value[index + 1].focus();
    }
  }

  function setOptionElementRef(el: any) {
    if (optionElements.value && el) optionElements.value.push(el);
  }

  onBeforeUpdate(() => {
    optionElements.value = [];
  });

  onMounted(() => {
    setTimeout(() => {
      if (props.modelValue || props.modelValue === 0) {
        if (typeof props.options[0] === "string" || typeof props.options[0] === "number") {
          currentOption.value = { value: props.modelValue, name: props.modelValue.toString() };
        }
        if (typeof props.options[0] === "object") {
          currentOption.value = (props.options as Option[]).find(
            (option) => option.value === props.modelValue
          ) as Option;
        }
      }
    }, 100);

    document.addEventListener("click", hideOptions);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", hideOptions);
  });

  const fieldType = "UiSelect";
  defineExpose({ fieldType });
</script>

<style>
  .ui-select-block {
    position: relative;
  }

  .ui-select-current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    padding: 0 8px;
    height: 44px;
    line-height: 44px;
    transition-duration: 300ms;
    vertical-align: top;
    cursor: default;
    user-select: none;
    position: relative;
    word-break: break-all;
    white-space: pre;
    overflow: hidden;
  }

  .ui-select-current-active {
    border: 1px solid var(--color-gray-dark);
  }

  .ui-select-current-active .ui-select-current-arrow {
    transform: rotate(180deg);
  }

  .ui-select-current:disabled {
    background-color: var(--color-gray);
  }

  .ui-select-dropdown-block {
    position: absolute;
    z-index: 3;
    width: 100%;
    background-color: var(--color-white);
    margin: 0;
    margin-top: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    list-style: none;
    box-shadow: 0px 2px 8px -2px var(--color-gray);
    max-height: 188px;
    overflow-y: auto;
  }

  .ui-select-dropdown {
    padding: 4px 0;
    color: var(--color-black);
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  .ui-select-dropdown:hover {
    text-decoration: underline;
  }

  .ui-select-dropdown:focus {
    text-decoration: underline;
  }

  .ui-select-dropdown-current {
    font-weight: 700;
  }
</style>
