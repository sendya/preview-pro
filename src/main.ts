import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-layout/dist/style.css';

import { createApp } from 'vue'
import router from './router';
import { ConfigProvider } from 'ant-design-vue';
import icons from './menuicons';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import App from './App.vue';

createApp(App).use(router).use(ConfigProvider).use(icons).use(ProLayout).use(PageContainer).mount('#app')
