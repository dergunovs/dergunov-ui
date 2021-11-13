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
      <template v-if="index < breadcrumbs.length - 1">
        <component
          :is="linkType"
          class="ui-breadcrumb-link"
          :to="item.url"
          :itemid="item.url"
          itemtype="https://schema.org/Thing"
          itemscope
          itemprop="item"
        >
          <span itemprop="name">{{ item.title }}</span>
        </component>

        <span class="ui-breadcrumb-arrow">></span>
      </template>

      <span v-else itemprop="name">{{ item.title }}</span>

      <meta itemprop="position" :content="index + 1" />
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "UiBreadcrumbs",

    props: {
      linkType: { required: true },
      pathUrl: { type: String, required: true },
      pathTitles: { type: Array as PropType<string[]>, required: true },
    },

    computed: {
      breadcrumbs(): object[] {
        let urls = this.pathUrl.split("/");
        urls[0] = "/";

        let urlsFormatted = urls.map((url: string, i: number) => {
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

        let titles = this.pathTitles;

        let breadcrumbs = urlsFormatted.map(function (url: string, i: number) {
          return { url: url, title: titles[i] };
        });

        return breadcrumbs;
      },
    },
  });
</script>

<style>
  .ui-breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .ui-breadcrumb-link {
    color: var(--color-black);
  }

  .ui-breadcrumb-arrow {
    margin: 0 4px;
  }
</style>
