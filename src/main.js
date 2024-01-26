import "./assets/scss/main.scss";
import "./assets/fonts/display.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./services/firebase";
import { getAuth } from "firebase/auth";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.min.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          myBlack: "#1C1D21",
          myPurple: "#2937B1",
        },
      },
    },
  },
});

// Initialize firebase
const app = createApp(App);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth };

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
