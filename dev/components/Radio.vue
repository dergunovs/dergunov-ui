<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model объединяет группу radio и добавляет компоненту двустороннее связывание с data.</p>
      <p>Через value передаётся значение конкретного radio.</p>
      <p class="mb-16">Тип v-model и value может быть boolean, string или number.</p>

      <div class="flex mb-16">
        <label class="flex mr-16"><TheRadio v-model="radioBoolean" :value="true" /> Да</label>
        <label class="flex"><TheRadio v-model="radioBoolean" :value="false" /> Нет</label>
      </div>

      <div class="flex mb-16">
        <label class="flex mr-16"><TheRadio v-model="radioString" value="Первый" /> Первый</label>
        <label class="flex mr-16"><TheRadio v-model="radioString" value="Второй" /> Второй</label>
        <label class="flex"><TheRadio v-model="radioString" value="Третий" /> Третий</label>
      </div>

      <div class="flex mb-16">
        <label class="flex mr-16"><TheRadio v-model="radioNumber" :value="1" /> 1</label>
        <label class="flex mr-16"><TheRadio v-model="radioNumber" :value="2" /> 2</label>
        <label class="flex"><TheRadio v-model="radioNumber" :value="3" /> 3</label>
      </div>

      <p>radioBoolean: {{ radioBoolean }}</p>
      <p>radioString: {{ radioString }}</p>
      <p>radioNumber: {{ radioNumber }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Radio",

    data() {
      return {
        radioBoolean: "",
        radioString: "",
        radioNumber: "",
      };
    },
  });
</script>
