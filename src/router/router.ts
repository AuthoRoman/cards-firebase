import { createRouter, createWebHistory } from "vue-router";

import { auth } from "../firebase";
import MainMenu from "../pages/MainMenu.vue";
import About from "../pages/About.vue";
import Contacts from "../pages/Contacts.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    component: MainMenu,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: "/contacts",
    component: Contacts,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = auth.currentUser;
  if (requiresAuth && !currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
