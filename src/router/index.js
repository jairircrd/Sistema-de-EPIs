// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { useSupabase } from "../composables/useSupabase";
// views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Funcionarios from "../views/Funcionarios.vue";
import Entregas from "../views/Entregas.vue";

const { supabase } = useSupabase();

// routes
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard,
meta: { requiresAuth: true }
  },
  { path: "/funcionarios", name: "Funcionarios", component: Funcionarios,
meta: { requiresAuth: true }
  },
  { path: "/entregas", name: "Entregas", component: Entregas,
meta: { requiresAuth: true }
  }
];
const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(r => r.meta.requiresAuth);

const { data: { session } } = await supabase.auth.getSession();

if (requiresAuth && !session) { next("/login"); } 
  else { next(); }
});
export default router;