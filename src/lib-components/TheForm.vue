<template>
  <form @submit.prevent>
    <slot v-if="formStatus !== 'success'"></slot>

    <div v-if="formStatus === 'success'" class="ui-form-message">
      Сообщение успешно отправлено.<br />
      Скоро отвечу на почту.
    </div>

    <div v-if="formStatus === 'error'" class="ui-form-message">
      Сообщение не удалось отправить по техническим причинам.<br />
      Попробуйте отправить ещё раз чуть позже.
    </div>
  </form>
</template>

<script>
  export default {
    name: "TheForm",

    props: {
      formStatus: { type: String },
    },
  };
</script>

<style>
  .ui-form-message {
    margin-top: 16px;
    padding: 32px;
    text-align: center;
    background-color: var(--color-gray-light);
  }
</style>
