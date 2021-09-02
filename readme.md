## Глобальная установка в Nuxt.js

1. Установить пакет:

```sh
npm i dergunov-ui
```

2. Создать файл ui.js в папке /plugins/

3. Внутри ui.js прописать:

```sh
import Vue from "vue";
import ui from "dergunov-ui";

Vue.use(ui);
```

4. В nuxt.config.js подключить плагин:

```sh
plugins: [ { src: "~plugins/ui" } ]
```

```sh
build: { transpile: ["dergunov-ui"] }
```

## CSS

Опционально можно подключить общие стили и утилитарные классы. В самом начале вашего css файла допишите:

```sh
@import "dergunov-ui";
```

Внутри компонентов данные стили не используются, то есть подключать css из библиотеки компонентов не обязательно.

Если общие стили не подключены то в вашем css файле необходимо прописать переменные. Ниже представлены их значения по-умолчанию.

```sh
:root {
--color-primary: #ff5050;
--color-primary-dark: #ed0d0d;
--color-primary-light: #db9090;

--color-black: #000;
--color-gray-dark: #333;
--color-gray: #999;
--color-gray-light: #eee;
--color-white: #fff;
}
```
