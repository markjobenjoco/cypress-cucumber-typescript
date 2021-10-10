const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
  }
  options.browserifyOptions.plugin.unshift(['tsify'])
  on('file:preprocessor', cucumber(options))
}
