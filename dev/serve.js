import Vue from "vue";
import Dev from "./serve.vue";

import DergunovUi from "@/entry.esm";
Vue.use(DergunovUi);

Vue.config.productionTip = false;

new Vue({ render: (h) => h(Dev) }).$mount("#app");
