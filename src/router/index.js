import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HabilidadesView from "../views/HabilidadesView.vue";
import SobreView from "../views/SobreView.vue";
import StatusView from "../views/StatusView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "habilidades",
        component: HabilidadesView,
      },
      {
        path: "sobre",
        component: SobreView,
      },
      {
        path: "status",
        component: StatusView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
