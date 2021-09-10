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
      <a-button type="primary" @click="handleClick">Back Home</a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { 
  Result as AResult,
  Button as AButton,
  Select as ASelect,
  message,
} from 'ant-design-vue';
const { 
  Option: ASelectOption,
  OptGroup: ASelectOptGroup
} = ASelect;

const handleClick = () => {
  message.info('Button clicked');
}
</script>