import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import pkg from './package.json'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import PkgConfig from 'vite-plugin-package-config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    PKG: JSON.stringify(pkg.dependencies),
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],

      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dts: 'src/components.d.ts',
      deep: true,
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
          importLess: true,
        }),
      ],
    }),
    PkgConfig(),
    OptimizationPersist(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true,
        modifyVars: {
          // hack: `true; @import 'ant-design-vue/es/style/themes/default.less'`, // dark.less
          '@primary-color': '#52c41a', // 全局主色
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue', 'ant-design-vue'],
  },
})
