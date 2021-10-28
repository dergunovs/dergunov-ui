import { createApp } from "vue";
import Dev from "./serve.vue";
import DergunovUi from "@/entry.esm";
require("@/components/assets/styles.css");

const app = createApp(Dev);
app.use(DergunovUi);

app.mount("#app");
