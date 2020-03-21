const webpack = require('webpack')

module.exports = {
  chainWebpack: config =>{
    config.module.rules.delete('eslint');
  },
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
