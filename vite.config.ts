import { defineConfig } from 'vite'
import pkg from './package.json'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    PKG: JSON.stringify(pkg.dependencies),
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ]
    }),
  ],
  css: {
    postcss: {},
    preprocessorOptions: {
      less: {
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import 'ant-design-vue/es/style/themes/default.less'`, // dark.less
        }
      },
    },
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue', 'ant-design-vue/es'],
  },
})
