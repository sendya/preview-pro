<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :menuData="menuData"
    :fixSiderbar="true"
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
        <a-avatar
          shape="square"
          size="small"
        >
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout'
import { UserOutlined } from '@ant-design/icons-vue'
import type { RouteContextProps } from '@ant-design-vue/pro-layout'

export default defineComponent({
  components: { UserOutlined },
  setup() {
    const router = useRouter()
    const { menuData } = getMenuData(clearMenuItem(router.getRoutes()))

    const state = reactive<Omit<RouteContextProps, 'menuData'>>({
      collapsed: false,
      openKeys: [],
      selectedKeys: [],
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
    return {
      state,
      menuData,
    }
  },
})
</script>
