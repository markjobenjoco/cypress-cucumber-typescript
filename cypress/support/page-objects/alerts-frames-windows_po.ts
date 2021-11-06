class IFrames {
  openIframePage = () => cy.visit('https://demoqa.com/frames')
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

export const iframes = new IFrames()
