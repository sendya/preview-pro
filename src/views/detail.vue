<template>
  <a-card title="Project Version">
    <p v-for="(dep, key) in pkg.dependencies" :key="key">
      <strong style="margin-right: 12px">{{ key }}:</strong><a-tag>{{ dep }}</a-tag>
    </p>
  </a-card>
</template>

<script lang="ts" setup>
import pkg from '../../package.json';
import { 
  Card as ACard,
  Tag as ATag,
} from 'ant-design-vue';
</script>