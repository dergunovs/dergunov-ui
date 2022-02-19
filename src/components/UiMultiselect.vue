<template>
  <div @click.stop class="ui-multiselect-block">
    <div
      @click="toggleOptions"
      @keydown.space="toggleOptions"
      @keydown.esc="hideOptions"
      class="ui-multiselect-current"
      :class="{ 'ui-multiselect-current-active': isShowOptions }"
      tabindex="0"
    >
      <div v-if="!currentOptions.length">Выбрать</div>
      <div v-else class="ui-multiselect-current-option-block">
        <div
          v-for="(option, index) in currentOptions"
          :key="`option${index}`"
          @click.stop
          class="ui-multiselect-current-option"
        >
          <span class="ui-multiselect-current-option-name">{{ option.name }}</span>
          <span @click="removeOption(option.value)" class="ui-multiselect-current-option-remove"> × </span>
        </div>
      </div>

      <img
        src="@/assets/icons/arrow.svg"
        class="ui-multiselect-current-arrow"
        width="16"
        height="16"
        alt="select"
        loading="lazy"
      />
    </div>

    <ul class="ui-multiselect-dropdown-block" v-show="isShowOptions">
      <li v-if="!optionsComputed.length" @click="hideOptions" class="ui-multiselect-dropdown">Нет элементов</li>
      <li
        v-for="(option, index) in optionsComputed"
        :key="`option${index}`"
        :ref="setOptionElementRef"
        @click="addOption(option)"
        @mouseover="focusAt(index)"
        @keydown.up="focusUp(index)"
        @keydown.down="focusDown(index)"
        @keydown.enter="addOption(option)"
        @keydown.esc="hideOptions"
        class="ui-multiselect-dropdown"
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
  const currentOptions = ref<Option[]>([]);
  const optionElements = ref<HTMLElement[]>();

  const props = defineProps<{
    modelValue: OptionValue[];
    options: Option[] | OptionValue[];
  }>();

  const emit = defineEmits(["update:modelValue"]);

  const optionsComputed = computed(() => {
    const currentOptionsValues: OptionValue[] = currentOptions.value.map((option: Option) => {
      return option.value;
    });

    const optionsTypeUpdated = props.options.map((option: OptionValue | Option) => {
      if (typeof option === "string" || typeof option === "number") {
        return { value: option, name: option.toString() };
      } else {
        return option;
      }
    });

    return optionsTypeUpdated.filter((option) => !currentOptionsValues.includes(option.value));
  });

  watch(currentOptions, () => {
    const udpatedValues = currentOptions.value.map((option: Option) => option.value);
    if (props.modelValue.length !== udpatedValues.length) emit("update:modelValue", udpatedValues);
  });

  function hideOptions(): void {
    isShowOptions.value = false;
  }

  function toggleOptions(): void {
    isShowOptions.value = !isShowOptions.value;
    focusOnFirstOptionElement();
  }

  function addOption(option: Option): void {
    currentOptions.value = [...currentOptions.value, option];
    if (!optionsComputed.value.length) hideOptions();
  }

  function removeOption(optionValueToRemove: OptionValue): void {
    currentOptions.value = currentOptions.value.filter((option: Option) => option.value !== optionValueToRemove);
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

  function setOptionElementRef(el: any): void {
    if (optionElements.value && el) optionElements.value.push(el);
  }

  onBeforeUpdate(() => {
    optionElements.value = [];
  });

  onMounted(() => {
    setTimeout(() => {
      if (typeof props.options[0] === "object") {
        currentOptions.value = (props.options as Option[]).filter((option: Option) => {
          if (props.modelValue) return props.modelValue.includes(option.value);
        }) as Option[];
      } else if (typeof props.options[0] === "string" || typeof props.options[0] === "number") {
        const optionsTypeUpdated = (props.options as OptionValue[]).filter((option: OptionValue) => {
          if (props.modelValue) return props.modelValue.includes(option);
        });
        currentOptions.value = optionsTypeUpdated.map((option) => {
          return { value: option, name: option };
        }) as Option[];
      }
    }, 100);

    document.addEventListener("click", hideOptions);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", hideOptions);
  });
</script>

<style>
  .ui-multiselect-block {
    position: relative;
  }

  .ui-multiselect-current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    padding: 0 8px;
    min-height: 44px;
    line-height: 42px;
    transition-duration: 300ms;
    vertical-align: top;
    cursor: default;
    user-select: none;
    position: relative;
    word-break: break-all;
    white-space: pre;
    overflow: hidden;
  }

  .ui-multiselect-current-option-block {
    display: flex;
    flex-wrap: wrap;
  }

  .ui-multiselect-current-option {
    display: flex;
    align-items: center;
    background-color: var(--color-gray-light);
    margin-right: 8px;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 2px 8px;
    border-radius: 4px;
    transition-duration: 300ms;
  }

  .ui-multiselect-current-option-name {
    line-height: 1;
  }

  .ui-multiselect-current-option:last-child {
    margin-right: 0;
  }

  .ui-multiselect-current-option-remove {
    margin-left: 4px;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    background-color: var(--color-gray);
    font-size: 16px;
    font-weight: 700;
    color: var(--color-white);
    width: 24px;
    text-align: center;
  }

  .ui-multiselect-current-option-remove:hover {
    background-color: var(--color-primary);
  }

  .ui-multiselect-current-active {
    border: 1px solid var(--color-gray-dark);
  }

  .ui-multiselect-current-active .ui-multiselect-current-arrow {
    transform: rotate(180deg);
  }

  .ui-multiselect-current:disabled {
    background-color: var(--color-gray);
  }

  .ui-multiselect-dropdown-block {
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

  .ui-multiselect-dropdown {
    padding: 4px 0;
    color: var(--color-black);
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  .ui-multiselect-dropdown:hover {
    text-decoration: underline;
  }

  .ui-multiselect-dropdown:focus {
    text-decoration: underline;
  }
</style>
