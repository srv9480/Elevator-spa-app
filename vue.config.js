const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve('src'),
        '@images': path.resolve('./src/assets/images'),
        '@components': path.resolve('./src/components')
      },
    },
  },
})
