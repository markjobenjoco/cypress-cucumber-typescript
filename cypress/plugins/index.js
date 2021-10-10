const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
  }
  options.browserifyOptions.plugin.unshift(['tsify'])
  on('file:preprocessor', cucumber(options))
}
