import { createRouter, createWebHistory } from 'vue-router';
// import App from '../App.vue';
import HomeApp from '../pages/HomeApp.vue';
import CarList from '../pages/CarList.vue';

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
    name: 'Conditions',
    component: CarList,
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
    component: CarList,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: CarList,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
