import { createRouter, createWebHistory } from 'vue-router';
// import App from '../App.vue';
import HomeApp from '../pages/HomeApp.vue';
import CarList from '../pages/CarList.vue';
import Lamborgini from '../pages/Lamborgini.vue';
import Conditions from '../pages/Conditions.vue';
import AboutUsApp from '../pages/AboutUsApp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp,
  },
  {
    path: '/carlist',
    name: 'carlist',
    component: CarList,
  },
  {
    path: '/yachtlist',
    name: 'yachtlist',
    component: CarList,
  },
  {
    path: '/chauffeur',
    name: 'chauffeur',
    component: CarList,
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: Conditions,
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: CarList,
  },
  {
    path: '/articles',
    name: 'articles',
    component: CarList,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsApp,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: CarList,
  },
  {
    path: '/lamborgini',
    name: 'lamborgini',
    component: Lamborgini,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
