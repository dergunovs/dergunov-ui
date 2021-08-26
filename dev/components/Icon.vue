<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>
      <p><b>name:</b> download, facebook, instagram, view, vk, youtube</p>
      <p><b>size:</b> small, medium, big, default: <b>medium</b></p>
      <p class="mb-32"><b>type:</b> regular, round, inverted: <b>regular</b></p>

      <div class="flex mb-16">
        <div class="flex mr-16"><TheIcon title="download" />download</div>
        <div class="flex mr-16"><TheIcon title="facebook" />facebook</div>
        <div class="flex mr-16"><TheIcon title="instagram" />instagram</div>
        <div class="flex mr-16"><TheIcon title="count" />count</div>
        <div class="flex mr-16"><TheIcon title="vk" />vk</div>
        <div class="flex"><TheIcon title="youtube" />youtube</div>
      </div>

      <div class="flex mb-8">
        <div class="flex mr-16">size:</div>
        <div class="flex mr-16"><TheIcon title="download" size="small" />small</div>
        <div class="flex mr-16"><TheIcon title="download" size="medium" />medium</div>
        <div class="flex"><TheIcon title="download" size="big" />big</div>
      </div>

      <div class="flex">
        <div class="flex mr-16">type:</div>
        <div class="flex mr-16"><TheIcon title="youtube" type="regular" />regular</div>
        <div class="flex mr-16"><TheIcon title="youtube" type="round" />round</div>
        <div class="flex mr-16"><TheIcon title="youtube" type="inverted" />inverted</div>
        <div class="flex bg-primary p-8"><TheIcon title="youtube" type="inverted" />inverted внутри div.bg-primary</div>
      </div>
    </section>
  </div>
</template>

<script>
  import TheIcon from "@/lib-components/TheIcon.vue";

  export default {
    name: "Icon",

    data() {
      return {
        clickCount: 0,
      };
    },

    components: { TheIcon },
  };
</script>
