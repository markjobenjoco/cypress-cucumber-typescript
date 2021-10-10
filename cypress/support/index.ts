Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
Cypress.Server.defaults({
  ignore: (xhr) => true
})
