<template>
  <a-result
    status="404"
    :style="{
        height: '100%',
        background: '#fff',
      }"
    title="Hello World"
    sub-title="Sorry, you are not authorized to access this page."
  >
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>