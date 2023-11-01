import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { axios } from "axios";

// Vuetify
import "vuetify/styles";
// import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

app.use(vuetify);
app.use(router);
app.use(pinia);
app.use(axios);
app.mount("#app");
