<template>
  <div class="ui-card-block">
    <div v-if="card.image" class="ui-card-image-block">
      <img :src="card.image" :alt="card.title" class="ui-card-image" loading="lazy" />
    </div>
    <div class="ui-card-text-block">
      <div class="ui-card-title">{{ card.title }}</div>
      <div class="ui-card-description">{{ card.description }}</div>
      <div v-if="card.tags" class="ui-card-tag-block">
        <div v-for="(tag, index) in card.tags" :key="`tag${index}`" class="ui-card-tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheCard",

    props: {
      card: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        tags: { type: Array },
      },
    },
  };
</script>

<style>
  .ui-card-block {
    display: flex;
    flex-direction: column;
  }

  .ui-card-block:hover .ui-card-title {
    text-decoration: underline;
  }

  .ui-card-image-block {
    display: flex;
    margin-bottom: 8px;
  }
  .ui-card-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .ui-card-text-block {
    line-height: 1.3;
  }
  .ui-card-title {
    font-size: 20px;
    color: var(--color-primary);
    font-weight: 700;
  }
  .ui-card-tag-block {
    display: flex;
    flex-wrap: wrap;
  }
  .ui-card-tag {
    background-color: var(--color-gray-light);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 8px;
    margin-top: 8px;
  }
  .ui-card-tag:last-child {
    margin-right: 0;
  }
</style>
