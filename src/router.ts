import { createRouter, createWebHistory } from 'vue-router';
import BasicLayout from './layouts/BasicLayout.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          meta: { title: 'Welcome' },
          component: () => import('./views/page1.vue'),
        }
      ]
    }
  ]
})