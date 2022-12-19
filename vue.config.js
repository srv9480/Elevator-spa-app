const { defineConfig } = require('@vue/cli-service')
import path from 'path'

module.exports = defineConfig({
  transpileDependencies: true,
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@images' : path.resolve(__dirname, './src/assets/images'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@styles' : path.resolve(__dirname, './src/styles')
    },
  },
})
