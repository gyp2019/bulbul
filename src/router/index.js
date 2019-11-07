import Vue from 'vue';
import VueRouter from 'vue-router';

import TochelinGuide from '../views/TochelinGuide.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Tochelin_Guide' },
  },
  {
    path: '/guide',
    name: 'Tochelin_Guide',
    component: TochelinGuide,
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
