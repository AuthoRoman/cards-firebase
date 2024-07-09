import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { auth } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const app = createApp(App);
const user = ref<User | null>(null);

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
  if (!app._container) {
    app.use(router);
    app.provide("user", user);
    app.mount("#app");
  }
});
