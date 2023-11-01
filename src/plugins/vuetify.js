import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";
import { defaults as vuetifyDefaults } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components,
    directives,
    defaults: vuetifyDefaults,
    ssr: true,
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
  });
  app.vueApp.use(vuetify);
});
