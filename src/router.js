import { createRouter, createWebHistory } from "vue-router";
import profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    component: profile
  },
  {
    path: "/contact",
    component: Contact
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
