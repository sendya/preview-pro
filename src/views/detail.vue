<template>
  <a-card title="Project Version">
    <p v-for="(dep, key) in projectPkgs" :key="key">
      <strong style="margin-right: 12px">{{ key }}:</strong><a-tag>{{ dep }}</a-tag>
    </p>
  </a-card>
</template>

<script lang="ts" setup>
const projectPkgs = window.PKG;
</script>