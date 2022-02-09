<template>
  <section>
    <p>Встроенные в библиотеку утилитарные классы и общие стили.</p>
    <p>* { box-sizing: border-box; margin: 0; padding: 0; font-weight: 400; line-height: 1.5 }</p>
    <p>section { margin: 64px 0 }</p>
    <p>img { max-width: 100%, height: auto}</p>
    <p>.center {width: calc(100% - 128px); margin: 0 auto; max-width: 1800px }</p>

    <section>
      <h1>Цвет</h1>
      <div class="flex flex-sb mb-16">
        <div class="bg-primary color-white p-8">color-primary</div>
        <div class="bg-primary-dark color-white p-8">color-primary-dark</div>
        <div class="bg-primary-light p-8">color-primary-light</div>
        <div class="bg-success p-8">color-success</div>
        <div class="bg-error p-8">color-error</div>
      </div>

      <div class="flex flex-sb">
        <div class="bg-black color-white p-8">color-black</div>
        <div class="bg-gray-dark color-white p-8">color-gray-dark</div>
        <div class="bg-gray p-8">color-gray</div>
        <div class="bg-gray-light p-8">color-gray-light</div>
        <div class="bg-white p-8">color-white</div>
      </div>

      <div class="flex flex-sb"></div>
    </section>

    <section>
      <h1>Отступы</h1>
      <p>margin: m-0, m-8, m-16, m-32</p>
      <p>padding: p-0, p-8, p-16, p-32</p>
      <p>Отступ в одну сторону l,r,t,b: pl-0, mr-8, pt-16, mb-32</p>
    </section>

    <section>
      <h1>Блоки</h1>
      <div class="flex mb-16">
        <div class="border-gray p-8">flex</div>
        <div class="border-gray p-8">flex</div>
        <div class="border-gray p-8">flex</div>
      </div>

      <div class="flex flex-wrap mb-32">
        <div class="border-gray w-50 p-8">flex + flex-wrap</div>
        <div class="border-gray w-50 p-8">flex + flex-wrap</div>
        <div class="border-gray w-50 p-8">flex + flex-wrap</div>
      </div>

      <div class="flex flex-wrap gap-16 mb-32">
        <div class="border-gray w-50 p-8">flex + flex-wrap + gap-16</div>
        <div class="border-gray w-50 p-8">flex + flex-wrap + gap-16</div>
        <div class="border-gray w-50 p-8">flex + flex-wrap + gap-16</div>
      </div>

      <div class="flex flex-center mb-16">
        <div class="border-gray p-8">flex + flex-center</div>
        <div class="border-gray p-8">flex + flex-center</div>
        <div class="border-gray p-8">flex + flex-center</div>
      </div>

      <div class="flex flex-left mb-16">
        <div class="border-gray p-8">flex + flex-left</div>
      </div>

      <div class="flex flex-right mb-16">
        <div class="border-gray p-8">flex + flex-right</div>
      </div>

      <div class="flex flex-top mb-16">
        <div class="border-gray p-8">flex + flex-top</div>
      </div>

      <div class="flex flex-middle mb-16">
        <div class="border-gray p-8">flex + flex-middle</div>
      </div>

      <div class="flex flex-bottom mb-16">
        <div class="border-gray p-8">flex + flex-bottom</div>
      </div>

      <div class="flex flex-sb mb-16">
        <div class="border-gray p-8">flex + flex-sb</div>
        <div class="border-gray p-8">flex + flex-sb</div>
        <div class="border-gray p-8">flex + flex-sb</div>
      </div>

      <div class="flex flex-se mb-16">
        <div class="border-gray p-8">flex + flex-se</div>
        <div class="border-gray p-8">flex + flex-se</div>
        <div class="border-gray p-8">flex + flex-se</div>
      </div>

      <div class="flex flex-column mb-16">
        <div class="border-gray p-8">flex + column</div>
        <div class="border-gray p-8">flex + column</div>
        <div class="border-gray p-8">flex + column</div>
      </div>

      <div class="flex">
        <div class="flex-grow border-gray p-8">flex grow</div>
        <div class="flex-shrink border-gray p-8">flex-shrink</div>
      </div>
    </section>

    <section>
      <h1>Ширина</h1>

      <div class="flex mb-16">
        <div class="bg-gray-light w-20">w-20</div>
        <div class="bg-gray w-80">w-80</div>
      </div>

      <div class="flex mb-16">
        <div class="bg-gray-light w-25">w-25</div>
        <div class="bg-gray w-75">w-75</div>
      </div>

      <div class="flex mb-16">
        <div class="bg-gray-light w-33">w-33</div>
        <div class="bg-gray w-66">w-66</div>
      </div>

      <div class="flex mb-16">
        <div class="bg-gray-light w-40">w-40</div>
        <div class="bg-gray w-60">w-60</div>
      </div>

      <div class="flex mb-16">
        <div class="bg-gray-light w-50">w-50</div>
        <div class="bg-gray w-50-32">w-50-32</div>
      </div>

      <p>Можно вычесть 8, 16 или 32 пикселей из каждой ширины, например w-50-8, w-50-16 или w25-32.</p>
    </section>

    <section>
      <h1>Текст</h1>
      <p>Обычный шрифт с font-weight: 400 внутри тега p</p>
      <p><b>Жирный шрифт с font-weight: 700</b></p>
      <p class="text-left">text-left</p>
      <p class="text-center">text-center</p>
      <p class="text-right">text-right</p>
      <p class="text-small">text-small, font-size: 14px</p>
      <p class="text-medium">text-medium, font-size: 18px</p>
      <p class="text-big">text-big, font-size: 24px</p>
      <p><a href="#">Ссылка</a></p>
      <p><a href="#" class="no-hover-color">Ссылка + no-hover-color</a></p>
      <p><span class="text-line">text-line</span></p>
      <p><span class="text-no-line">text-no-line</span></p>
      <p><span class="text-underline">text-underline</span></p>
      <p><span class="text-underline-bold">text-underline-bold</span></p>
    </section>

    <section>
      <h1>Фон, границы, прозрачность</h1>
      <p>background-color: <span class="bg-primary">bg-primary</span></p>
      <p>border: <span class="border-gray">border-gray</span></p>
      <p>color: <span class="color-gray-light">color-gray-light</span></p>
      <p>
        opacity: <span class="opacity-100">opacity-100</span>, <span class="opacity-50">opacity-50</span>,
        <span class="opacity-25">opacity-25</span>, <span class="opacity-0">opacity-0</span> - тут есть opacity-0
      </p>
    </section>
  </section>
</template>

<script lang="ts">
  export default { name: "CSS" };
</script>
