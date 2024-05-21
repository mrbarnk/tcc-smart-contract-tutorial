import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/index.css";
import CryptoDropdown from "./components/CryptoDropdown.vue";
import Spinner from "./components/Spinner.vue";
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// import plugin
const app = createApp(App);
app.component("CryptoDropdown", CryptoDropdown);
app.component("Spinner", Spinner);
app.use(store);

app.use(Vue3Toastify, {
  autoClose: 3000,
});

app.use(router);

app.mount("#app");

