<template>
  <div class="ui-field-label-block" :class="`ui-field-type-${fieldType}`">
    <label @click.stop="handleFocus" :for="`input${$.uid}`" class="ui-field-label">
      {{ label }}
      <span v-if="required" class="ui-field-label-required">*</span>
    </label>

    <component
      :is="field"
      :modelValue="modelValue"
      @update:modelValue="check"
      @search="searchHandler"
      ref="input"
      :type="type"
      :rows="rows"
      :id="`input${$.uid}`"
      :options="options"
      :design="design"
      :direction="direction"
      :multiple="multiple"
      class="ui-field-input"
    />

    <span class="ui-field-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ref, ComponentPublicInstance, computed } from "vue";

  type InputData = boolean | string | number | (string | number)[] | DataTransfer;
  type InputDataFormatted = string | (string | number)[];

  const emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;

  const error = ref(false);
  const errorMessage = ref("");
  const input = ref<ComponentPublicInstance>();

  const rules = {
    required: {
      check(data: InputDataFormatted, required?: boolean, tel?: boolean): boolean {
        return (required && !data.length) || (required && data === "+7 (" && tel) ? true : false;
      },
      message: "Заполните это поле",
    },
    min: {
      check(data: InputDataFormatted, min?: number): boolean {
        if (min) {
          return data.length < min ? true : false;
        } else {
          return false;
        }
      },
      message: "Слишком мало символов",
    },
    max: {
      check(data: InputDataFormatted, max?: number): boolean {
        if (max) {
          return data.length > max ? true : false;
        } else {
          return false;
        }
      },
      message: "Слишком много символов",
    },
    email: {
      check(data: InputDataFormatted, email?: boolean): boolean {
        return data && email && !emailRegexp.test(String(data).toLowerCase()) ? true : false;
      },
      message: "Введите корректный email",
    },
    tel: {
      check(data: InputDataFormatted, tel?: boolean, value?: string): boolean {
        if (tel && value) {
          return tel && data.length < 18 && value.length ? true : false;
        } else {
          return false;
        }
      },
      message: "Введите корректный телефон",
    },
  };

  interface Props {
    field: { name: string };
    type?: string;
    rows?: string;
    modelValue?: string | number | [] | boolean | object;
    label?: string;
    options?: string[] | number[] | { value: string | number; name: string }[];
    direction?: "column" | "row";
    multiple?: boolean;
    design?: "none" | "switch" | "buttons";
    required?: boolean;
    email?: boolean;
    tel?: boolean;
    min?: number;
    max?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: Infinity,
  });

  const emit = defineEmits(["update:modelValue", "search"]);

  function searchHandler(searchQuery: string) {
    emit("search", searchQuery);
  }

  function check(data: InputData): void {
    let dataFormatted = data as InputDataFormatted;

    if (typeof data === "number") {
      dataFormatted = data.toString();
    } else if (typeof data === "boolean") {
      dataFormatted = data === false ? "" : data.toString();
    } else if (Object.prototype.toString.call(data) === "[object DataTransfer]") {
      dataFormatted = (data as DataTransfer).items.length ? "got some files" : "";
    }

    const telInputValue: string = props.tel ? input.value!.$el.value : false;

    error.value =
      rules.required.check(dataFormatted, props.required, props.tel) ||
      rules.min.check(dataFormatted, props.min) ||
      rules.max.check(dataFormatted, props.max) ||
      rules.email.check(dataFormatted, props.email) ||
      rules.tel.check(dataFormatted, props.tel, telInputValue);

    if (rules.required.check(dataFormatted, props.required, props.tel)) {
      errorMessage.value = rules.required.message;
    } else if (rules.min.check(dataFormatted, props.min)) {
      errorMessage.value = rules.min.message;
    } else if (rules.max.check(dataFormatted, props.max)) {
      errorMessage.value = rules.max.message;
    } else if (rules.email.check(dataFormatted, props.email)) {
      errorMessage.value = rules.email.message;
    } else if (rules.tel.check(dataFormatted, props.tel, telInputValue)) {
      errorMessage.value = rules.tel.message;
    } else {
      errorMessage.value = "";
    }

    emit("update:modelValue", data);
  }

  const fieldType = computed(() => {
    return props.field.name;
  });

  function handleFocus(): void {
    if (["UiSelect"].includes(fieldType.value)) {
      if (input.value) input.value.$el.querySelector(".ui-select-current").click();
    } else if (["UiMultiselect"].includes(fieldType.value)) {
      if (input.value) input.value.$el.querySelector(".ui-multiselect-current").click();
    } else if (["UiCheckbox"].includes(fieldType.value)) {
      if (input.value) input.value.$el.click();
    } else if (["UiUpload"].includes(fieldType.value)) {
      if (input.value) input.value.$el.querySelector("input").click();
    } else {
      if (input.value) input.value.$el.focus();
    }
  }
</script>

<script lang="ts">
  export default { name: "UiField" };
</script>

<style>
  .ui-field-label-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .ui-field-type-UiCheckbox {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .ui-field-type-UiCheckbox .ui-field-input {
    width: auto;
    order: 0;
  }

  .ui-field-type-UiCheckbox .ui-field-label {
    width: calc(100% - 32px);
    order: 1;
  }

  .ui-field-type-UiCheckbox .ui-field-error {
    order: 2;
  }

  .ui-field-label {
    margin-bottom: 2px;
    cursor: pointer;
  }

  .ui-field-input {
    width: 100%;
  }

  .ui-field-error {
    color: var(--color-error);
  }
</style>
