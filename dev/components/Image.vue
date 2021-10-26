<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>src:</b> ссылка на изображение (путь к jpg, png, svg файлу для тега img).</p>
      <p>Увеличение изображения до 200% или занятия всего размера экрана. Уменьшение до 50%.</p>
      <p class="mb-16">Закрытие по клику на кнопку × или нажатию esc на клавиатуре.</p>

      <p>
        <TheImage src="https://dergunov.com/uploads/service/1618082598121-ads.svg">
          <span class="text-underline">SVG</span>
        </TheImage>
        - большая картинка, уже во весь экран
      </p>

      <p>
        <TheImage src="https://dergunov.com/uploads/keis/1615208512334keis-simple-img-1.jpg">
          <span class="text-underline">Jpeg</span>
        </TheImage>
        - маленькая картинка, можно увеличивать
      </p>

      <p>
        <TheImage src="https://dergunov.com/assets/images/main-utp-2.svg">
          <img src="https://dergunov.com/assets/images/main-utp-2.svg" width="32" height="32" />
        </TheImage>
        - ссылка картинка
      </p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Image",
  });
</script>
