import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Vuetify
import "vuetify/styles";
// import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});
axios.defaults.baseURL = "http://localhost:8080";

app.use(vuetify);
app.use(router);
app.use(pinia);
app.config.globalProperties.axios = axios;
app.mount("#app");
