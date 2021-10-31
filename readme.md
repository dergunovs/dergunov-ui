Библиотека компонентов на основе vue-sfc-rollup для Nuxt3 и Vue CLI 5. Zero Dependencies.

22 компонента занимают 9 кб (gzip) в бандле вашего приложения. 4 кб (gzip) занимает весь CSS.

Компоненты нужно использовать с префиксом Ui. Например, UiForm или UiTable.

[Перечень всех компонентов и их функциональности](https://ui.dergunov.com).

## Установка

```sh
npm i dergunov-ui
```

### Nuxt3

Создать файл ui.js в папке /plugins/. В файле ui.js прописать:

```sh
import { defineNuxtPlugin } from "#app";
import ui from "dergunov-ui";
import "dergunov-ui/dist/assets/styles.css";

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(ui));
```

### Vue CLI 5

В файле main.js подключить библиотеку:

```sh
import ui from "dergunov-ui";
app.use(ui);
```

В css файле или секции style компонента подключите общие стили библиотеки:

```sh
@import "dergunov-ui/dist/assets/styles.css";
```

## CSS

В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.
Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.
Цвета по-умолчанию:

```sh
:root {
  --color-primary: #111bbb;
  --color-primary-dark: #0f0f66;
  --color-primary-light: #7b7bdb;

  --color-success: #3aa636;
  --color-error: #cb0000;

  --color-black: #000;
  --color-gray-dark: #444;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}
```
