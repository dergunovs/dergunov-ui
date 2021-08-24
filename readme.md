## Установка в Nuxt.js

1. Установить пакет:

```sh
npm i dergunov-ui
```

2. Создать файл ui.js в папке /plugins/

3. Внутри ui.js прописать:

```sh
import Vue from "vue";
import ui from "dergunov-ui";
import "dergunov-ui/dist/assets/styles.css";
Vue.use(ui);
```

4. В nuxt.config.js подключить плагин:

```sh
plugins: [{ src: "~plugins/ui" }]
```
