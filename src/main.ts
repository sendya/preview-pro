import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-layout/dist/style.css';

import { createApp } from 'vue'
import router from './router';
import antd from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import App from './App.vue';

createApp(App).use(router).use(antd).use(ProLayout).use(PageContainer).mount('#app')
