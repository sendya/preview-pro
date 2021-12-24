import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';
import BlankLayout from '../layouts/BlankLayout.vue';

// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const hasGithubPages = import.meta.env.VITE_GHPAGES;

export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
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
          meta: { title: '欢迎', icon: 'icon-icon-test' },
          component: () => import('../views/page1.vue'),
        },
        {
          path: '/admins',
          name: 'admins',
          meta: { title: '管理页', icon: 'icon-tuijian' },
          component: BlankLayout,
          redirect: () => ({ name: 'page1' }),
          children: [
            {
              path: 'page-1',
              name: 'page1',
              meta: { title: '一级页面' },
              component: () => import('../views/admins/page1.vue'),
            },
            {
              path: 'page-2',
              name: 'page2',
              meta: { title: '二级页面' },
              component: () => import('../views/admins/page1.vue'),
            },
            {
              path: 'dynamic-match/:id(\\d+)',
              name: 'dynamic-match',
              // 路由 path 默认参数再 meta.params 里
              meta: { title: '动态参数页面', params: { id: 1 } },
              component: () => import('../views/admins/dynamic-match.vue'),
            },
          ],
        },
        {
          path: '/version',
          name: 'version',
          meta: { title: 'Version', icon: 'icon-antdesign' },
          component: () => import('../views/detail.vue'),
        },
      ],
    },
  ],
});
