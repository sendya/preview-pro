<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :menuData="menuData"
    :fixSiderbar="true"
    iconfontUrl="//at.alicdn.com/t/font_2804900_c2k6gsut3fn.js"
    layout="top"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Preview Pro</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <RightContent />
    </template>
    <router-view />
  </pro-layout>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout'
import RightContent from '../components/RightContent/index.vue'
import type { RouteContextProps } from '@ant-design-vue/pro-layout'

const router = useRouter()
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()))

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
})

const handleMenuClick = (e: any) => {
  console.log('MenuClick', e);
}

watchEffect(() => {
  if (router.currentRoute) {
    const matched = router.currentRoute.value.matched.concat()
    state.selectedKeys = matched
      .filter((r) => r.name !== 'index')
      .map((r) => r.path)
    state.openKeys = matched
      .filter((r) => r.path !== router.currentRoute.value.path)
      .map((r) => r.path)
  }
})
</script>
