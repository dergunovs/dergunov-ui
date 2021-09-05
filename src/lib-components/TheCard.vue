<template>
  <div class="ui-card-block">
    <div v-if="card.thumb" class="ui-card-thumb-block">
      <img :src="card.thumb" :alt="card.h1" class="ui-card-thumb" loading="lazy" />
    </div>

    <div class="ui-card-text-block">
      <div class="ui-card-h1-block">
        <div class="ui-card-h1">{{ card.h1 }}</div>

        <div v-if="card.views" class="ui-card-views-block">
          <img
            :src="$options.components.views"
            class="ui-card-views-icon"
            :alt="`${card.views} просмотров`"
            loading="lazy"
            width="16"
            height="16"
          />
          <div class="ui-card-views">{{ card.views }}</div>
        </div>
      </div>

      <div v-if="card.theme" class="ui-card-theme">{{ card.theme.h1 }}</div>

      <div class="ui-card-intro">{{ card.intro }}</div>

      <div v-if="card.tags" class="ui-card-tag-block">
        <div v-for="(tag, index) in card.tags" :key="`tag${index}`" class="ui-card-tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import views from "@/lib-components/assets/icons/views.svg";
  import youtube from "@/lib-components/assets/icons/youtube.svg";

  export default {
    name: "TheCard",

    props: {
      card: {
        h1: { type: String, required: true },
        intro: { type: String, required: true },
        thumb: { type: String },
        tags: { type: Array },
        theme: { type: Object },
        views: { type: Number },
        level: { type: Number },
        youtube: { type: String },
      },
    },

    components: { views, youtube },
  };
</script>

<style>
  .ui-card-block {
    display: flex;
    flex-direction: column;
  }
  .ui-card-block:hover .ui-card-h1 {
    text-decoration: underline;
  }

  .ui-card-thumb-block {
    display: flex;
    margin-bottom: 8px;
  }
  .ui-card-thumb {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .ui-card-h1-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }
  .ui-card-h1 {
    font-size: 20px;
    color: var(--color-primary);
    font-weight: 700;
    line-height: 1.3;
  }

  .ui-card-theme {
    font-size: 16px;
    opacity: 0.5;
    margin-bottom: 4px;
    line-height: 1;
  }

  .ui-card-intro {
    line-height: 1.3;
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

  .ui-card-views-block {
    display: flex;
    opacity: 0.5;
  }
  .ui-card-views {
    font-size: 16px;
  }
</style>
