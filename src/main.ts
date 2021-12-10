import { createApp } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from './App.vue';

import 'ant-design-vue/dist/antd.less';
import '@ant-design-vue/pro-layout/dist/style.less';

createApp(App).use(router).use(ConfigProvider).use(ProLayout).use(PageContainer).mount('#app');
