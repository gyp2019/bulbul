import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import YachelinGuide from '../views/YachelinGuide.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/yachelin-guide',
    naem: 'Yachelin_Guide',
    component: YachelinGuide,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
