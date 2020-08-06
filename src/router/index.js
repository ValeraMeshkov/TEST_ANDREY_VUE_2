import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/sell",
    name: "Sell",
    component: () => import("../views/Sell/Sell.vue")
  },
  {
    path: "/host",
    name: "Host",
    component: () => import("../views/Host/Host.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About/About.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support/Support.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
