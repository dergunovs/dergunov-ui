<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Является компонентов слотом внутри которого необходимо разместить ваш компонент строки таблицы.</p>
      <p class="mb-32">Если таблица не влезает в родительный блок, то появляется скролл + сообщение о нём.</p>

      <p><b>headers:</b> массив из заголовков столбцов</p>
      <p><b>fit:</b> regular, grow. default: regular</p>
      <p class="mb-32"><b>width:</b> если требуется, то можно указать ширину. type: string</p>

      <UiTable :headers="headers" width="800">
        <tr v-for="member in staff" :key="member.id" :row="member">
          <td class="p-16">{{ member.id }}</td>
          <td class="p-16">{{ member.name }}</td>
          <td class="p-16">{{ member.job }}</td>
        </tr>
      </UiTable>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiTable } from "@/components";

  const headers = ["№", "Имя", "Должность"];
  const staff = [
    { id: "1", name: "Иван", job: "Дворник" },
    { id: "2", name: "Петр", job: "Водитель" },
    { id: "3", name: "Костя", job: "Столяр" },
    { id: "4", name: "Коля", job: "Плотник" },
  ];
</script>

<script lang="ts">
  export default { name: "Table" };
</script>
