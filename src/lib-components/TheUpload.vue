<template>
  <div class="ui-upload-block">
    <label @keydown.space="chooseFiles" class="ui-upload-button-block" tabindex="0">
      <input
        type="file"
        ref="upload"
        :multiple="multiple"
        @change="updateFiles($event)"
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

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheUpload",

    data() {
      return {
        files: [] as File[],
        filesSize: 0,
      };
    },

    props: {
      multiple: { type: Boolean, default: false },
    },

    emits: ["update:modelValue"],

    methods: {
      chooseFiles(): void {
        (this.$refs.upload as HTMLElement).click();
      },

      updateFiles(event: InputEvent): void {
        const uploadableFiles: File[] = (event.target as HTMLInputElement).files as any;
        this.files = [...uploadableFiles];

        this.emitFiles();
        this.updateFilesSize();
      },

      updateFilesSize() {
        this.filesSize = 0;
        this.files.forEach((file: File) => {
          this.filesSize = this.filesSize + file.size;
        });
      },

      removeFile(fileName: string): void {
        this.files = this.files.filter((file: File) => file.name !== fileName);
        if (!this.files.length) {
          (this.$refs.upload as HTMLInputElement).value = "";
        }

        this.emitFiles();
        this.updateFilesSize();
      },

      emitFiles(): void {
        let files = new DataTransfer();

        this.files.forEach((file: File) => {
          files.items.add(file);
        });

        this.$emit("update:modelValue", files);
      },
    },
  });
</script>

<style>
  .ui-upload-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    padding: 0px 16px;
    min-height: 44px;
    border-radius: 8px;
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
