<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>title:</b> arrow, copy, views</p>
      <p><b>size:</b> small, medium, big, default: <b>medium</b></p>
      <p><b>type:</b> regular, inverted: <b>regular</b></p>
      <p><b>alt:</b> если не используется, что подставляется title</p>
      <p class="mb-16">
        <b>src:</b> для подключения внешних изображений, например
        <UiIcon src="https://dergunov.com/uploads/service/1618085014591-sozdanie-saitov.svg" size="small" />
      </p>

      <div class="flex mb-16">
        <div class="flex mr-16"><UiIcon title="arrow" />arrow</div>
        <div class="flex mr-16"><UiIcon title="copy" />copy</div>
        <div class="flex mr-16"><UiIcon title="views" />views</div>
        <div class="flex"></div>
      </div>

      <div class="flex mb-8">
        <div class="flex mr-16">size:</div>
        <div class="flex mr-16"><UiIcon title="copy" size="small" />small</div>
        <div class="flex mr-16"><UiIcon title="copy" size="medium" />medium</div>
        <div class="flex"><UiIcon title="copy" size="big" />big</div>
      </div>

      <div class="flex">
        <div class="flex mr-16">type:</div>
        <div class="flex mr-16"><UiIcon title="views" type="regular" />regular</div>
        <div class="flex mr-16"><UiIcon title="views" type="inverted" />inverted</div>
        <div class="flex bg-primary color-white p-8">
          <UiIcon title="views" type="inverted" />inverted внутри div.bg-primary
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiIcon } from "@/components";
</script>

<script lang="ts">
  export default { name: "Icon" };
</script>
