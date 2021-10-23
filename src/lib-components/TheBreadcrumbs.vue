<template>
  <ul class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li
      v-for="(item, index) in breadcrumbs"
      :key="`item${index}`"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <template v-if="index < breadcrumbs.length - 1">
        <nuxt-link :to="item.url" :itemid="item.url" itemtype="https://schema.org/Thing" itemscope itemprop="item">
          <span itemprop="name">{{ item.title }}</span>
        </nuxt-link>

        <span class="breadcrumbs-arrow"> > </span>
      </template>

      <span v-else itemprop="name">{{ item.title }}</span>

      <meta itemprop="position" :content="index + 1" />
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheBreadcrumbs",

    props: {
      pathUrl: { type: String, required: true },
      pathTitles: { type: Array as PropType<string[]>, required: true },
    },

    computed: {
      breadcrumbs: function(): object[] {
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

        let breadcrumbs = urlsFormatted.map(function(url: string, i: number) {
          return { url: url, title: titles[i] };
        });

        return breadcrumbs;
      },
    },
  });
</script>
