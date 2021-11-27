class IFrames {
  openIframePage = () => cy.visit('/frames')
  getIFrame = (iFrameValue: string) => {
    let iframe
    if (iFrameValue.includes('first')) {
      iframe = () => cy.get(`iframe#frame1`)
    } else if (iFrameValue.includes('second')) {
      iframe = () => cy.get(`iframe#frame2`)
    } else {
      throw new Error(`No iframe found with this value ${iFrameValue}`)
    }
    return iframe().then(($iframe) => {
      const body = $iframe.contents().find('body')
      return cy.wrap(body).find('#sampleHeading')
    })
  }
}

class NestedIFrames {
  openPage = () => cy.visit('/nestedframes')
  parentIFrame = () => cy.get('#frame1').then((parent) => parent.contents().find('body'))
  childIframe = () => this.parentIFrame().then((parent) => parent.find('iframe').contents().find('body'))
}

class BrowserWindows {
  openPage = () => cy.visit('/browser-windows')
  clickOnNewButton = () => {
    getNewWindow('/sample').as('newTab')
    cy.get('#tabButton').click()
    return cy.get('@newTab')
  }
  clickOnNewWindow = () => {
    getNewWindow('/sample').as('newWindow')
    cy.get('#windowButton').click()
    return cy.get('@newWindow')
  }
  verifyUrl = (text: string) => cy.url().should('contain', text)
  verifyContent = (text: string) => cy.get('#sampleHeading').should('contain', text)
}

class Alerts {
  openPage = () => cy.visit('/alerts')
  clickOnAlertBtn = () => cy.get('button#alertButton').click()
  clickOnTimerAlertBtn = () => cy.get('button#timerAlertButton').click()
  clickOnConfirmBtn = () => cy.get('button#confirmButton').click()
  verifyResult = () => cy.get('span#confirmResult')
  clickOnPromptBtn = () => cy.get('button#promtButton').click()
  verifyPropmtResult = () => cy.get('span#promptResult')
}

class ModalDialogs {
  openPage = () => cy.visit('/modal-dialogs')
  clickOnSmallBtn = () => cy.get('#showSmallModal').click()
  clickOnLargeBtn = () => cy.get('#showLargeModal').click()
  modal = () => cy.get('.modal-content')
  verifyModalHeader = (header: string) => this.modal().find('.modal-header').should('contain', header)
  verifyModalBody = (text: string) => this.modal().find('.modal-body').should('contain', text)
  clickOnSmallModalCloseBtn = () => this.modal().find('#closeSmallModal').click()
  clickOnLargeModalCloseBtn = () => this.modal().find('#closeLargeModal').click()
}
export const iframes = new IFrames()
export const nestedFrames = new NestedIFrames()
export const browserWindows = new BrowserWindows()
export const alert = new Alerts()
export const md = new ModalDialogs()

const getNewWindow = (url: string) => {
  return cy.window().then((win) => {
    return cy.stub(win, 'open').callsFake(() => (win.location.href = url))
  })
}
