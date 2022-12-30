const title = 'Statistical Power Applet'
const description =
  'Clinical Outcomes Research at Washington University in St Louis'

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/statistical-power-applet/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = title
      args[0].description = `${title} | ${description}`
      return args
    })
  },
}
