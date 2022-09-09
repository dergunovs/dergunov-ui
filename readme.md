Библиотека компонентов для Vue 3. Zero Dependencies.

22 компонента занимают 11 кб (gzip) в бандле вашего приложения. 4 кб (gzip) занимает весь CSS.

Компоненты нужно использовать с префиксом Ui. Например, UiForm или UiTable.

[Перечень всех компонентов и их функциональности](https://ui.dergunov.com).

Code Splitting поддерживался до версии 0.5.17 (Vue-CLI 5 + кастомный билд на Rollup). Начиная с версии 0.6.0
используется Vite + Library mode. Поддержка Code Splitting временно приостановлена, так как в Vite на текущий
момент в качестве rollup.input может использоваться только один файл.

## Установка

```sh
npm i dergunov-ui
```

## Использование

Импортируйте необходимые компоненты из библотеки в своём приложении.

```sh
<template>
  <UiButton>Кнопка</UiButton>
</template>

<script setup>
import { UiButton } from "dergunov-ui"
</script>
```

## CSS

В своём css файле или секции style корневого компонента подключите общие стили библиотеки:

```sh
@import "dergunov-ui";
```

В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.
Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.
Цвета по-умолчанию:

```sh
:root {
  --color-primary: #111bbb;
  --color-primary-dark: #0f0f66;
  --color-primary-light: #7b99db;

  --color-success: #3aa636;
  --color-success-dark: #20811d;
  --color-error: #cb0000;
  --color-error-dark: #830a0a;

  --color-black: #000;
  --color-gray-dark: #444;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}
```
