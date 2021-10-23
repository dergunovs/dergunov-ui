## Глобальная установка в Nuxt3

1. Установить пакет:

```sh
npm i dergunov-ui
```

2. Создать файл ui.js в папке /plugins/

3. Внутри ui.js прописать:

```sh
import { defineNuxtPlugin } from "#app";
import ui from "dergunov-ui";
import "dergunov-ui/dist/assets/styles.css";

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(ui));
```

## CSS

В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.
Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.
Цвета по-умолчанию:

```sh
:root {
  --color-primary: #ff5050;
  --color-primary-dark: #ed0d0d;
  --color-primary-light: #db9090;

  --color-success: #3aa636;
  --color-error: #cb0000;

  --color-black: #000;
  --color-gray-dark: #444;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}
```
