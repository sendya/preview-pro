import { defineConfig } from 'vite'
import pkg from './package.json'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

console.log('dependencies', JSON.stringify(pkg.dependencies))

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    PKG: JSON.stringify(pkg.dependencies),
  },
  plugins: [
    vue(),
    AutoImport({ 
      imports: 'vue',
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
      },
    },
  },
})
