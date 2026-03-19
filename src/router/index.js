import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Relatorio from "../views/Relatorio.vue";
import Cadastro from "../views/Cadastro.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/relatorio", name: "Relatorio", component: Relatorio },
  { path: "/cadastro", name: "Cadastro", component: Cadastro },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
