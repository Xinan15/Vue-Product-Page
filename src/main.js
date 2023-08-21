// main.js is the entry point for a Vue.js app 
// It is where you create a new Vue instance, configure global settings, import global libraries, and mount the root Vue component (usually App.vue).

// main.js initializes the Vue application, sets global settings, and mounts the root Vue instance to a DOM element.
// App.vue is the root component that defines the structure and layout of your application.

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";

const app = createApp(App);

app.mount("#app");