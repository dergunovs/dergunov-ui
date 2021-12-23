<template>
  <ul class="ui-breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li
      v-for="(item, index) in breadcrumbs"
      :key="`item${index}`"
      class="ui-breabcrumb"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <component
        v-if="index < breadcrumbs.length - 1"
        :is="props.linkType"
        class="ui-breadcrumb-link"
        :to="item.url"
        :itemid="item.url"
        itemtype="https://schema.org/Thing"
        itemscope
        itemprop="item"
      >
        <span itemprop="name">{{ item.title }}</span>
      </component>

      <span v-if="index < breadcrumbs.length - 1" class="ui-breadcrumb-arrow">></span>

      <span v-else itemprop="name">{{ item.title }}</span>

      <meta itemprop="position" :content="(index + 1).toString()" />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    linkType: any;
    pathUrl: string;
    pathTitles: string[];
  }>();

  const breadcrumbs = computed<{ url: string; title: string }[]>(() => {
    const urls = props.pathUrl.split("/");
    urls[0] = "/";

    const urlsFormatted = urls.map((url: string, i: number) => {
      if (i === 0) {
        return `${url}`;
      } else if (i === 1) {
        return `${urls[i - 1]}${url}`;
      } else if (i === 2) {
        return `${urls[i - 2]}${urls[i - 1]}/${url}`;
      } else {
        return `${urls[i - 3]}${urls[i - 2]}/${urls[i - 1]}/${url}`;
      }
    });

    const titles = props.pathTitles;

    const breadcrumbs = urlsFormatted.map(function (url: string, i: number) {
      return { url: url, title: titles[i] };
    });

    return breadcrumbs;
  });
</script>

<script lang="ts">
  export default { name: "UiBreadcrumbs" };
</script>

<style>
  .ui-breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-inline-start: 0;
  }

  .ui-breadcrumb-link {
    color: var(--color-black);
  }

  .ui-breadcrumb-arrow {
    margin: 0 4px;
  }
</style>
