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

export const iframes = new IFrames()
export const nestedFrames = new NestedIFrames()
