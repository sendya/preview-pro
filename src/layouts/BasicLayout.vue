<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :menu-data="menuData"
    :breadcrumb="{ routes: breadcrumb }"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"
    v-bind="proConfig"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Preview Pro</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <RightContent :current-user="currentUser" />
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        <HeartOutlined />
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        <SmileOutlined />
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <setting-drawer v-model="proConfig" />
    <router-view v-slot="{ Component, route }">
      <transition name="zoom" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <template #footerRender>
      <GlobalFooter
        :links="[
          { title: 'Github', href: 'https://github.com/sendya/preview-pro' },
          { title: 'Ant Design Vue', href: 'https://2x.antdv.com' },
        ]"
        copyright="2021 &copy; Sendya"
      />
    </template>
  </pro-layout>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import { GlobalFooter, getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout'
import type { RouteContextProps } from '@ant-design-vue/pro-layout'
import { SmileOutlined, HeartOutlined } from '@ant-design/icons-vue'
import RightContent from '../components/RightContent/RightContent.vue'

const router = useRouter()
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()))

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
})
const proConfig = ref({
  layout: 'mix',
  fixedHeader: false,
  fixSiderbar: false,
  splitMenus: false,

  menuHeaderRender: undefined,
  footerRender: undefined,
  headerRender: undefined,
})
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    }
  }),
)
const currentUser = reactive({
  nickname: 'Admin',
  avatar: 'A',
})

watch(
  router.currentRoute,
  () => {
    const matched = router.currentRoute.value.matched.concat()
    state.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path)
    state.openKeys = matched.filter(r => r.path !== router.currentRoute.value.path).map(r => r.path)
  },
  {
    immediate: true,
  },
)
</script>
