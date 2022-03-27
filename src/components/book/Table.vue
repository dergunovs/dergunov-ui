<template>
  <section>
    <p>Является компонентов слотом внутри которого необходимо разместить ваш компонент строки таблицы.</p>
    <p class="mb-32">Если таблица не влезает в родительный блок, то появляется скролл + сообщение о нём.</p>

    <p>По событию reachBottom можно понять, когда таблица приближается к нижнему краю экрана.</p>
    <p class="mb-32">
      Через v-model (false, если загрузка не нужна) можно остановить выполнение события reachBottom, если идёт загрузка
      данных при бесконечном скролле или данных уже нет. По-умолчанию, modelValue = false.
    </p>

    <p><b>headers:</b> массив из заголовков столбцов</p>
    <p><b>fit:</b> regular, grow. default: regular</p>
    <p class="mb-32"><b>width:</b> если требуется, то можно указать ширину. type: string</p>

    <UiTable v-model="isLoading" :headers="headers" @reachBottom="showMessage" width="800">
      <tr v-for="member in staff" :key="member.id" :row="member">
        <td class="p-16">{{ member.id }}</td>
        <td class="p-16">{{ member.name }}</td>
        <td class="p-16">{{ member.job }}</td>
      </tr>
    </UiTable>
  </section>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { UiTable, toast } from "../ui";

  const isLoading = ref(true);

  const headers = ["№", "Имя", "Должность"];
  const staff = [
    { id: "1", name: "Иван", job: "Дворник" },
    { id: "2", name: "Петр", job: "Водитель" },
    { id: "3", name: "Костя", job: "Столяр" },
    { id: "4", name: "Коля", job: "Плотник" },
    { id: "5", name: "Артём", job: "Дворник" },
    { id: "6", name: "Саша", job: "Водитель" },
    { id: "7", name: "Никита", job: "Столяр" },
    { id: "8", name: "Антон", job: "Плотник" },
  ];

  function showMessage() {
    toast.success("Таблица внизу экрана");
    isLoading.value = false;
  }
</script>

<script lang="ts">
  export default { name: "Table" };
</script>
