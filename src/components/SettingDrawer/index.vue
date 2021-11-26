<template>
  <a-drawer v-model:visible="visible" :width="300" placement="right" :closable="false">
    <template #handle>
      <div class="ant-pro-setting-drawer-handle" @click="handleShowDrawer">
        <SettingOutlined v-if="!visible" />
        <CloseOutlined v-else />
      </div>
    </template>
    <div class="margin-bottom: 24px">
      <h3>导航模式</h3>
      <a-radio-group :value="modelValue.layout" @change="handleLayout">
        <a-radio value="side">左侧菜单布局</a-radio>
        <a-radio value="top">顶部菜单布局</a-radio>
        <a-radio value="mix">混合菜单布局</a-radio>
      </a-radio-group>
      <a-divider />
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">固定 Header</a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixedHeader"
            @change="handleFixedHeader"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">固定 左侧菜单</a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixSiderbar"
            @change="handleFixSiderbar"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">自动分割菜单</a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.splitMenus"
            @change="handleSplitMenus"
          />
        </a-col>
      </a-row>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
import { SettingOutlined, CloseOutlined } from '@ant-design/icons-vue';

const props = defineProps<{
  modelValue: Record<string, any>;
}>();
const emit = defineEmits(['update:modelValue']);

const visible = ref<boolean>(true);
const handleShowDrawer = () => {
  visible.value = !visible.value;
};

const handleLayout = (e: Event) => {
  emit('update:modelValue', {
    ...toRaw(props.modelValue),
    layout: (e.target as HTMLInputElement).value,
  });
};
const handleFixedHeader = (checked: boolean) => {
  emit('update:modelValue', {
    ...toRaw(props.modelValue),
    fixedHeader: checked,
  });
};
const handleFixSiderbar = (checked: boolean) => {
  emit('update:modelValue', {
    ...toRaw(props.modelValue),
    fixSiderbar: checked,
  });
};
const handleSplitMenus = (checked: boolean) => {
  emit('update:modelValue', {
    ...toRaw(props.modelValue),
    splitMenus: checked,
  });
};
</script>

<style lang="less">
.ant-pro-setting-drawer-handle {
  position: absolute;
  top: 240px;
  right: 300px;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: @primary-color;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;

  > span {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
</style>
