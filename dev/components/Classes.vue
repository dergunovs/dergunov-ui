<template>
  <div>
    <section>
      <h1>Общие классы и стили</h1>
      <p>
        * - font-family: "font"; box-sizing: border-box; margin: 0; padding: 0; font-weight: 400; font-size: 18px;
        line-height: 1.5
      </p>
      <p>section - margin: 64px 0</p>
      <p>.center - общий класс для выравнивания по центру контента сайта</p>
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
      <h1>Текст</h1>
      <p>Обычный шрифт с font-weight: 400 внутри тега p</p>
      <p><b>Жирный шрифт с font-weight: 700</b></p>
      <h1>Заголовок H1</h1>
      <h2>Заголовок H2</h2>
      <h3>Заголовок H3</h3>
      <p class="text-center">text-center</p>
      <p class="text-small">text-small, font-size: 14px</p>
      <p class="text-medium">text-medium, font-size: 18px</p>
      <p class="text-big">text-big, font-size: 24px</p>
      <p class="text-underline">text-underline</p>
      <p class="text-underline-bold">text-underline-bold</p>
      <a href="#">Ссылка</a>
    </section>

    <section>
      <h1>Фон и границы</h1>
      <p>background-color: <span class="bg-primary">bg-primary</span></p>
      <p>border: <span class="border-gray">border-gray</span></p>
      <p>color: <span class="color-gray-light">color-gray-light</span></p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Classes",
    description: "Классы",
  };
</script>
