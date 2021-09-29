<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <div class="mb-16">
        <p><b>slides:</b> массив слайдов для отображения.</p>
        <p>Работа со слайдером идёт через scoped slots. Нужно сделать bind элемента в слоте v-slot="client".</p>
        <p>После это внутри слайда можно использовать данные в вашем шаблоне, например, client.slide.image.</p>
      </div>

      <TheSlider :slides="clients" v-slot="client">
        <div class="flex flex-sb flex-top">
          <div class="w-40-16">
            <img
              :src="`https://dergunov.com/assets/images/${client.slide.logo}`"
              :alt="`Кейс - ${client.slide.company}`"
              width="600"
              height="446"
              loading="lazy"
            />
          </div>

          <div class="w-60-16">
            <div class="mb-16">
              <b class="text-big text-underline-bold">{{ client.slide.company }}</b>
            </div>

            <div class="mb-16">
              <div><b>Регион:</b> {{ client.slide.region }}</div>
              <div><b>Начало сотрудничества:</b> {{ client.slide.period }} год</div>
            </div>

            <div v-html="client.slide.description" class="bg-gray-light p-32"></div>
          </div>
        </div>
      </TheSlider>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Slider",

    data() {
      return {
        clients: [
          {
            company: "Правовая защита",
            logo: "pz-gr.jpg",
            region: "Россия",
            period: "2013",
            description:
              "<p>Один из самых посещаемых коммерческих сайтов в России по охраны труда.</p><p>За 7 лет менялась структура, дизайн, и технологии. Большой регулярно обновляемый информационный раздел. Ежемесячно клиенты и подписчики получают рассылку с помощью сервиса Mailchimp.</p><p>Функциональность интернет-магазина выполнена на Minishop2 + Яндекс.Касса + АТОЛ Онлайн.</p>",
          },
          {
            company: "Лаборатория труда",
            logo: "labtrud-gr.jpg",
            region: "Москва",
            period: "2016",
            description:
              "<p>Создание и продвижение сайта на Nuxt.js в конкурентной тематике по Москве.</p><p>За достаточно короткий промежуток времени завоеваны места в ТОП 10 поисковой выдачи по самым конверсионным запросам, например, 'соут москва', 'соут цена'.</p><p>7 региональных сайтов на поддоменах с использованием SSG Nuxt.js.</p>",
          },
          {
            company: "Диспетчерская 33",
            logo: "disp-gr.jpg",
            region: "Владимир",
            period: "2014",
            description:
              "<p>Сайт транспортной компании, предлагающей услуги по грузоперевозкам для бизнеса.</p><p>Текущая версия сайта разработка на Nuxt.js. Выполнена SEO-оптимизация. Внедрена разметка Schema.org.</p><p>Также для клиента разработка CRM-система для автоматизации работы логистов и водителей.</p>",
          },
          {
            company: "Дарья Жичкина",
            logo: "fit-gr.jpg",
            region: "Россия",
            period: "2016",
            description:
              "<p>Простой и быстрый сайт на Modx Revo. Адаптивная вёрстка, SEO-оптимизация.</p><p>Основная услуга - составление программы питания. По фразам из семантического ядра сайт на первых местах в поисковой выдаче.</p><p>Дополнительно было снято множество видео-контента: примеры упражнений, информационные видео, советы по похудению.</p>",
          },
          {
            company: "Ken Russia",
            logo: "ken-gr.jpg",
            region: "Россия",
            period: "2018",
            description:
              "<p>Основной продукт интернет-магазина - дрель Ken 6110b.</p><p>По всем целевым запросам сайт находится в ТОП 3 поисковой выдачи по всей России. С нуля компания стала одним из лидеров продаж по конкретной категории продуктов.</p><p>Сайт сделан на Modx Revo + Minishop2. Индивидуальные фильтры товаров: работают моментально, без перезагрузки страницы.</p>",
          },
        ],
      };
    },
  });
</script>
