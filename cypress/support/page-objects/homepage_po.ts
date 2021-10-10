export class Homepage {
  openMainpage() {
    return cy.visit('/')
  }
  getTitle(title: string) {
    return cy.title().should('contain', title)
  }
  getHeaderHref() {
    return cy.get('[href="https://demoqa.com"]').should('exist')
  }
  getBanner() {
    return cy.get('[class="banner-image"]').should('exist')
  }
  openChallengePage(page: string) {
    return cy.contains(page).click()
  }
  getHeaderName(header: string) {
    return cy.get('.main-header').invoke('text').should('eq', header)
  }
}
