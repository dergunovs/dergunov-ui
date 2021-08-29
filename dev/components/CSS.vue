<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>
      
      <p>Встроенные в библиотеку утилитарные классы и общие стили. Работают после импорта внутри вашего CSS файла:
<pre>@import "dergunov-ui";</pre>
      </p>
      <p>
        * { font-family: "font"; box-sizing: border-box; margin: 0; padding: 0; font-weight: 400; font-size: 18px;
        line-height: 1.5 }
      </p>
      <p>section { margin: 64px 0 }</p>
      <p>img { max-width: 100%, height: auto}</p>
      <p>
        pre { background-color: var(--color-gray-light); border-radius: 8px; padding: 4px 8px; white-space:
        break-spaces; overflow-x: auto; }
      </p>
      <p>.center {width: calc(100% - 80px); margin: 0 auto; max-width: 1600px }</p>
    </section>

    <section>
      <h1>Цвет</h1>
      <div class="flex flex-sb mb-16">
        <div class="bg-primary p-8">color-primary</div>
        <div class="bg-primary-dark p-8">color-primary-dark</div>
        <div class="bg-primary-light p-8">color-primary-light</div>
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
        <div class="border-gray-light p-8">flex</div>
        <div class="border-gray-light p-8">flex</div>
        <div class="border-gray-light p-8">flex</div>
      </div>

      <div class="flex flex-center mb-16">
        <div class="border-gray-light p-8">flex + flex-center</div>
        <div class="border-gray-light p-8">flex + flex-center</div>
        <div class="border-gray-light p-8">flex + flex-center</div>
      </div>

      <div class="flex flex-left mb-16">
        <div class="border-gray-light p-8">flex + flex-left</div>
      </div>

      <div class="flex flex-right mb-16">
        <div class="border-gray-light p-8">flex + flex-right</div>
      </div>

      <div class="flex flex-top mb-16">
        <div class="border-gray-light p-8">flex + flex-top</div>
      </div>

      <div class="flex flex-bottom mb-16">
        <div class="border-gray-light p-8">flex + flex-bottom</div>
      </div>

      <div class="flex flex-sb mb-16">
        <div class="border-gray-light p-8">flex + flex-sb</div>
        <div class="border-gray-light p-8">flex + flex-sb</div>
        <div class="border-gray-light p-8">flex + flex-sb</div>
      </div>

      <div class="flex flex-se mb-16">
        <div class="border-gray-light p-8">flex + flex-se</div>
        <div class="border-gray-light p-8">flex + flex-se</div>
        <div class="border-gray-light p-8">flex + flex-se</div>
      </div>

      <div class="flex flex-column mb-16">
        <div class="border-gray-light p-8">flex + column</div>
        <div class="border-gray-light p-8">flex + column</div>
        <div class="border-gray-light p-8">flex + column</div>
      </div>

      <div class="flex">
        <div class="flex-grow border-gray-light p-8">flex grow</div>
        <div class="flex-shrink border-gray-light p-8">flex-shrink</div>
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

      <div class="flex">
        <div class="bg-gray-light w-50">w-50</div>
        <div class="bg-gray w-50">w-50</div>
      </div>
    </section>

    <section>
      <h1>Текст</h1>
      <p>Обычный шрифт с font-weight: 400 внутри тега p</p>
      <p><b>Жирный шрифт с font-weight: 700</b></p>
      <h1>Заголовок H1</h1>
      <h2>Заголовок H2</h2>
      <h3>Заголовок H3</h3>
      <p class="text-left">text-left</p>
      <p class="text-center">text-center</p>
      <p class="text-right">text-right</p>
      <p class="text-small">text-small, font-size: 14px</p>
      <p class="text-medium">text-medium, font-size: 18px</p>
      <p class="text-big">text-big, font-size: 24px</p>
      <p><a href="#">Ссылка</a></p>
      <p><span class="text-line">text-line</span></p>
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
  </div>
</template>

<script>
  export default {
    name: "CSS",
  };
</script>
