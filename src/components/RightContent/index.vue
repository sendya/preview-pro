<template>
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
      <a-avatar shape="square" size="small">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons-vue';
</script>
