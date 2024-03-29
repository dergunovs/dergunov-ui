<template>
  <div class="ui-upload-block">
    <label @keydown.space="chooseFiles" class="ui-upload-button-block" tabindex="0">
      <input
        type="file"
        ref="upload"
        :multiple="props.multiple"
        @change="updateFiles()"
        class="ui-upload-button-hidden"
      />

      <div class="ui-upload-button">Загрузить</div>
    </label>

    <div v-if="files.length" class="ui-file-block">
      <span class="ui-file-intro">
        Файл<template v-if="files.length > 1"
          >ы ({{ files.length }} шт., {{ filesSize > 1000 ? filesSize.toString().slice(0, -3) : "< 1" }} kb)</template
        >:
      </span>
      <ol class="ui-file-list">
        <li v-for="file in files" :key="file.name" class="ui-file">
          <b>{{ file.name }}</b> {{ file.size > 1000 ? file.size.toString().slice(0, -3) : "< 1" }} kb
          <button @click="removeFile(file.name)" class="ui-file-remove" type="button">×</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const files = ref<File[]>([]);
  const filesSize = ref(0);
  const upload = ref();

  interface Props {
    multiple?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    multiple: false,
  });

  const emit = defineEmits(["update:modelValue"]);

  function chooseFiles(): void {
    upload.value.click();
  }

  function updateFiles(): void {
    files.value = [...upload.value.files];

    emitFiles();
    updateFilesSize();
  }

  function updateFilesSize(): void {
    filesSize.value = 0;
    files.value.forEach((file: File) => {
      filesSize.value = filesSize.value + file.size;
    });
  }

  function removeFile(fileName: string): void {
    files.value = files.value.filter((file: File) => file.name !== fileName);
    if (!files.value.length) upload.value.value = "";

    emitFiles();
    updateFilesSize();
  }

  function emitFiles(): void {
    const filesToEmit = new DataTransfer();

    files.value.forEach((file: File) => {
      filesToEmit.items.add(file);
    });

    emit("update:modelValue", filesToEmit);
  }

  const fieldType = "UiUpload";
  defineExpose({ fieldType });
</script>

<style>
  .ui-upload-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    padding: 0px 16px;
    min-height: 44px;
    border-radius: 4px;
  }

  .ui-upload-button-block {
    position: relative;
  }

  .ui-upload-button-hidden {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }

  .ui-upload-button {
    margin-right: 16px;
    text-decoration: underline;
    cursor: pointer;
  }

  .ui-file-block {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-grow: 1;
  }

  .ui-file-intro {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .ui-file-list {
    display: flex;
    flex-wrap: wrap;
  }

  .ui-file {
    margin-left: 20px;
    margin-right: 8px;
    flex-shrink: 0;
    padding: 2px 0;
  }

  .ui-file-remove {
    background-color: var(--color-gray);
    color: var(--color-white);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    transition-duration: 300ms;
  }

  .ui-file-remove:hover {
    background-color: var(--color-gray-dark);
  }
</style>
