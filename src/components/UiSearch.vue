<template>
  <div @click.stop class="ui-search-block">
    <div class="ui-search-current-block">
      <input
        type="text"
        v-model="searchQuery"
        @input="showOptions"
        @keydown.esc="hideOptions"
        ref="searchQueryElement"
        class="ui-search-current"
        :class="[
          { 'ui-search-current-active': isShowOptions },
          { 'ui-search-current-option': currentOption.value !== '' },
        ]"
        :disabled="currentOption.value !== ''"
      />
      <button v-if="searchQuery" @click="clearSearchQuery" class="ui-search-current-clear">×</button>
    </div>

    <ul class="ui-search-dropdown-block" v-show="isShowOptions">
      <li v-if="searchQuery.length < 3" @click="hideOptions" @keydown.esc="hideOptions" class="ui-search-dropdown">
        Напишите хотя бы 3 символа
      </li>

      <template v-if="searchQuery.length > 2 && options.length">
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
          class="ui-search-dropdown"
          tabindex="0"
        >
          {{ option.name }}
        </li>
      </template>

      <li
        v-if="searchQuery.length > 2 && !options.length"
        @click="hideOptions"
        @keydown.esc="hideOptions"
        class="ui-search-dropdown"
      >
        Нет результатов
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
  const searchQueryElement = ref<HTMLElement>();
  const optionElements = ref<HTMLElement[]>();
  const searchQuery = ref("");

  const props = defineProps<{
    modelValue: OptionValue;
    options: Option[] | OptionValue[];
  }>();

  const emit = defineEmits(["update:modelValue", "search"]);

  const optionsComputed = computed(() => {
    return props.options.map((option: OptionValue | Option) => {
      if (typeof option === "string" || typeof option === "number") return { value: option, name: option.toString() };
      else return option;
    });
  });

  watch(currentOption, () => {
    if (currentOption.value) emit("update:modelValue", currentOption.value.value);
  });

  watch(searchQuery, () => {
    if (searchQuery.value.length > 2) emit("search", searchQuery.value);
  });

  function clearSearchQuery() {
    currentOption.value = { value: "", name: "" };
    searchQuery.value = "";
    searchQueryElement.value?.focus();
    hideOptions();
  }

  function showOptions() {
    isShowOptions.value = searchQuery.value.length > 0 ? true : false;
  }

  function hideOptions(): void {
    isShowOptions.value = false;
  }

  function setOption(option: Option): void {
    currentOption.value = option;
    searchQuery.value = option.name;
    hideOptions();
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
          searchQuery.value = props.options[0].toString();
        }
        if (typeof props.options[0] === "object") {
          currentOption.value = (props.options as Option[]).find(
            (option) => option.value === props.modelValue
          ) as Option;
          searchQuery.value = props.options[0].name;
        }
      }
    }, 100);

    document.addEventListener("click", hideOptions);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", hideOptions);
  });

  const fieldType = "UiSearch";
  defineExpose({ fieldType });
</script>

<style>
  .ui-search-block {
    position: relative;
  }

  .ui-search-current-block {
    display: flex;
    align-items: center;
    position: relative;
  }

  .ui-search-current {
    flex: 1;
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

  .ui-search-current:disabled {
    background-color: var(--color-gray-light);
  }

  .ui-search-current-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    right: 0;
    padding-right: 8px;
    color: var(--color-gray-dark);
  }

  .ui-search-dropdown-block {
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

  .ui-search-dropdown {
    padding: 4px 0;
    color: var(--color-black);
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  .ui-search-dropdown:hover {
    text-decoration: underline;
  }

  .ui-search-dropdown:focus {
    text-decoration: underline;
  }
</style>
