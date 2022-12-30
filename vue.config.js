const webpackParams = {
  title: 'Statistical Power Applet',
  description:
    "Statistical Power Applet is deprecated, and we recommend checking out Universität Düsseldorf's G*Power app, available on both Mac and Windows.",
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/statistical-power-applet/',
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/statistical-power-applet/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value
      })
      return args
    })
  },
}
