export class Homepage {
  openMainpage() {
    return cy.visit('/')
  }
  getTitle(title) {
    return cy.title().should('contain', title.toString())
  }
  getHeaderHref() {
    return cy.get('[href="https://demoqa.com"]').should('exist')
  }
  getBanner() {
    return cy.get('[class="banner-image"]').should('exist')
  }
  openChallengePage(page) {
    return cy.contains(page.toString()).click()
  }
  getHeaderName(header) {
    return cy.get('.main-header').invoke('text').should('eq', header.toString())
  }
}
