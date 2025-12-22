import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Projects from "./pages/Projects.vue";
import Skills from "./pages/Skills.vue";
import Contact from "./pages/Contact.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
    { path: "/skills", component: Skills },
    { path: "/contact", component: Contact },
  ],
});
