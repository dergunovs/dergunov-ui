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

5. Подключить общие стили и утилитарные классы в самом начале вашего css файла:

```sh
@import "dergunov-ui";
```
