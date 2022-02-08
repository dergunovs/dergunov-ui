<template>
  <div class="ui-card-block">
    <div v-if="props.card.thumb" class="ui-card-thumb-block">
      <img :src="thumbComputed" :alt="props.card.h1" class="ui-card-thumb" loading="lazy" width="345" height="194" />
    </div>

    <div class="ui-card-text-block">
      <div class="ui-card-h1-block">
        <div class="ui-card-h1">{{ props.card.h1 }}</div>

        <div v-if="props.card.views" class="ui-card-views-block">
          <img
            src="@/assets/icons/views.svg"
            class="ui-card-views-icon"
            :alt="`${props.card.views} просмотров`"
            loading="lazy"
            width="16"
            height="16"
          />
          <div class="ui-card-views">{{ props.card.views }}</div>
        </div>
      </div>

      <div v-if="props.card.theme" class="ui-card-theme">{{ props.card.theme.h1 }}</div>

      <div class="ui-card-introtext">{{ props.card.introtext }}</div>

      <div v-if="props.card.tag" class="ui-card-tag-block">
        <template v-if="typeof props.card.tag === 'string'">
          <span class="ui-card-tag">{{ props.card.tag }}</span>
        </template>
        <template v-else>
          <span v-for="(tag, index) in props.card.tag" :key="`tag${index}`" class="ui-card-tag">{{ tag }}</span>
        </template>
      </div>

      <div v-if="props.card.level" class="ui-card-level-block">
        <span>Сложность:</span>
        <div class="ui-card-level" :class="{ 'ui-card-level-active': props.card.level > 0 }"></div>
        <div class="ui-card-level" :class="{ 'ui-card-level-active': props.card.level > 1 }"></div>
        <div class="ui-card-level" :class="{ 'ui-card-level-active': props.card.level > 2 }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  interface Card {
    h1: string;
    introtext: string;
    thumb?: string;
    tag?: string | string[];
    theme?: { h1: string };
    views?: number;
    level?: number;
  }

  const props = defineProps<{
    card: Card;
    thumbPrefix?: string;
  }>();

  const thumbComputed = computed(() => {
    return props.thumbPrefix ? `${props.thumbPrefix}${props.card.thumb}` : props.card.thumb || "";
  });
</script>

<script lang="ts">
  export default { name: "UiCard" };
</script>

<style>
  .ui-card-block {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    font-weight: 700;
    line-height: 1.3;
  }

  .ui-card-theme {
    font-size: 16px;
    opacity: 0.5;
    margin-bottom: 4px;
    line-height: 1;
  }

  .ui-card-introtext {
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
    align-items: center;
    opacity: 0.5;
  }

  .ui-card-views-icon {
    width: 16px;
    height: 16px;
  }

  .ui-card-views {
    font-size: 16px;
  }

  .ui-card-level-block {
    display: flex;
    align-items: center;
  }

  .ui-card-level {
    width: 12px;
    height: 12px;
    background-color: var(--color-gray-light);
    margin-top: 2px;
    margin-left: 4px;
    border-radius: 50%;
  }

  .ui-card-level-active {
    background-color: var(--color-primary);
  }
</style>
