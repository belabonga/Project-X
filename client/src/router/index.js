import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/MainSection.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import GameDetail from '../views/GameDetail.vue'
import Swal from 'sweetalert2'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    //? HOME + GAMES LIST
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    //? LOGIN
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },

    //? REGISTER
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },

    //? DETAIL PAGE
    {
      path: '/detail/:id',
      name: 'detail',
      component: GameDetail
    },
  ]
})

router.beforeEach(async (to, from) => {
  if (
    localStorage.getItem("access_token") &&
    (to.name === "login" || to.name === "register")
  ) {
    Swal.fire({
      title: 'You already logged in',
      text: "Back to home and use our services!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Lets Go!'
    })
    .then((result) => {
      if (result.isConfirmed) {

          //REDIRECT TO LOGIN PAGE
          return { path: "/" };
      }
    })
  }
});

export default router

