require('./bootstrap');
import {createApp} from "vue";
import store from "./store";
import router from "./router/index"

import App from "./components/App.vue";



createApp(App).use(store).use(router).mount("#app");
