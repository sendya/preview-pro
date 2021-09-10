<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :menuData="menuData"
    :fixSiderbar="true"
    iconfontUrl="//at.alicdn.com/t/font_2804900_c2k6gsut3fn.js"
    layout="mix"
  >
    <template #menuHeaderRender>
      <a>
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Preview Pro</h1>
      </a>
    </template>
    <template #rightContentRender>
      <div style="margin-right: 12px">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <template #icon>
                  <SettingOutlined />
                </template>
                <span>个人设置</span>
              </a-menu-item>
              <a-menu-item>
                <template #icon>
                  <LogoutOutlined />
                </template>
                <span>退出登录</span>
              </a-menu-item>
            </a-menu>
          </template>
          <a-avatar
            shape="square"
            size="small"
          >
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </a-dropdown>
      </div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout'
import { Avatar as AAvatar, Dropdown as ADropdown, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons-vue'
import type { RouteContextProps } from '@ant-design-vue/pro-layout'

const router = useRouter()
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()))

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
})

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
