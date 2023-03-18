import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

let isAuthenticated = false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/addstudent",
      name: "addStudent",
      component: () => import("../views/AddStudent.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // Avoid an infinite redirect
    to.name !== 'signin'
  ) {
    // redirect the user to the login page
    return { name: 'signin' }
  }
})

export default router;
