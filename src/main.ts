import '@ant-design-vue/pro-layout/dist/style.less'

import { createApp } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'
import router from './router'
import App from './App.vue'

// not include setup auto imports.
import 'ant-design-vue/es/modal/style'
import 'ant-design-vue/es/message/style'
import 'ant-design-vue/es/notification/style'

createApp(App).use(router).use(ConfigProvider).use(ProLayout).use(PageContainer).mount('#app')
