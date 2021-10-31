import { Person } from '../interfaces/elements'

const quiet = { log: false }
const field = (x: string) => cy.get('@registrationForm').find(`input#${x}`)
class ElementsPage {
  visitElementsPage() {
    return cy.visit('/elements')
  }
  getHeaderValue() {
    return cy.get('.main-header').invoke('text').should('contain', 'Elements')
  }
  clickTextboxFromMenuList(value: string) {
    if (!value) throw new Error('Arguments pass should not be empty!')
    cy.get('.element-list').as('elementsGroup').invoke('attr', 'class').should('contain', 'show')
    return cy.get('@elementsGroup').find('.btn-light').contains(value.toString()).click()
  }
}

class Textbox {
  enterFullName(name: string) {
    if (!name) throw new Error('Arguments pass should not be empty!')
    return cy.get('#userName').type(name)
  }
  enterEmail(email: string) {
    if (!email) throw new Error('Arguments pass should not be empty!')
    return cy.get('#userEmail').type(email)
  }
  enterCurrentAddress(address: string) {
    if (!address) throw new Error('Arguments pass should not be empty!')
    return cy.get('#currentAddress').type(address)
  }
  enterPermanentAddress(address: string) {
    if (!address) throw new Error('Arguments pass should not be empty!')
    return cy.get('#permanentAddress').type(address)
  }
  clickSubmitButton() {
    return cy.get('#submit').click()
  }
  verifyOutput(object: Person) {
    return cy
      .get('#output')
      .should('exist')
      .within(() => {
        cy.get('#name').should('contain', object.name)
        cy.get('#email').should('contain', object.email)
        cy.get('#currentAddress').should('contain', object.address1)
        cy.get('#permanentAddress').should('contain', object.address2)
      })
  }
}

class Checkbox {
  clickOnExpandButton() {
    return cy.get('.rct-option-expand-all').click()
  }
  verifyListLength(x: number) {
    return cy.get('.rct-text').its('length').should('eq', x)
  }
  clickRdoOption(value: string) {
    return cy.get('.rct-text').contains(value).as('checkField').click()
  }
  isChecked() {
    return cy.get('@checkField').find('.rct-checkbox > .rct-icon').invoke('attr', 'class').should('contain', 'rct-icon-check')
  }
}

class RadioButtons {
  verifyHeaderValue() {
    return cy.get('.main-header').should('contain', 'Radio Button')
  }
  clickOnEnabledRadioButton(value: string) {
    return cy.get('.custom-radio').not('.disabled').contains(value).as('enabledRdoBtn').click()
  }
  verifyRadioButtonIsChecked() {
    return cy.get('@enabledRdoBtn').prev().should('be.checked')
  }
  verifyOutput() {
    return cy
      .get('@enabledRdoBtn')
      .invoke('text')
      .then((txt) => {
        cy.get('.mt-3').should('contain', txt)
      })
  }
  clickOnDisabledRadioButton(value: string) {
    return cy.get('.custom-radio').filter('.disabled').contains(value).as('disabledRdoBtn').click()
  }
  verifyRadioButtonIsUnchecked() {
    return cy.get('@disabledRdoBtn').prev().should('not.be.checked')
  }
  verifyOutputNotExist() {
    return cy.get('.mt-3').should('not.exist')
  }
}

class WebTables {
  verifyHeaderValue(header: string) {
    return cy.get('.main-header').invoke('text').should('contain', header)
  }
  verifyRegistrationForm() {
    return cy.get('.modal-content').should('be.visible').as('registrationForm')
  }
  clickOnSubmit() {
    return cy.get('@registrationForm').within(() => {
      cy.get('#submit').click()
    })
  }

  getTableRowLen() {
    return cy.get('.rt-tr-group').its('length').as('tableRows')
  }
  clickEditButton() {
    return cy
      .get('@currentRow')
      .closest('.rt-tr-group')
      .within(() => {
        cy.get('[title="Edit"]').click()
      })
  }
  enterNewValue(value: string, field: string | number) {
    return cy.get('@registrationForm').within(() => {
      cy.contains(field).closest('.mt-2').find('input[type="text"]').clear().type(value)
    })
  }
  verifyNewValue(expected: string) {
    return cy.get('@currentRow').invoke('text').should('contain', expected)
  }
  clickAddButton() {
    return cy.get('#addNewRecordButton').click()
  }
  enterFirstName(value: string) {
    return field('firstName').type(value)
  }
  enterLastName(value: string) {
    return field('lastName').type(value)
  }
  enterEmail(value: string) {
    return field('userEmail').type(value)
  }
  enterAge(value: string) {
    return field('age').type(value)
  }
  enterSalary(value: string) {
    return field('salary').type(value)
  }
  enterDepartment(value: string) {
    return field('department').type(value)
  }
  /**
   *
   * @param value is the value to find in the table
   * @param columnName is the name of the column
   *
   */
  findUserDetails(email: string, columnName: string) {
    let found: boolean = false
    const headers: string[] = []
    cy.get('.rt-resizable-header-content', quiet).each(($el: JQuery<HTMLElement>) => {
      headers.push($el.text())
    })
    cy.get('.rt-tr-group').its('length').as('tableRows')
    const it = (index: number) => {
      cy.wrap(headers).then((header) => {
        cy.get(`.rt-tr-group:nth-of-type(${index}) .rt-td`)
          .eq(header.indexOf(columnName))
          .as('currentRow')
          .invoke('text')
          .then((value) => {
            if (value === email) {
              found = true
            }
          })
          .then(() => {
            cy.get('@tableRows').then((rowCount) => {
              if (index < parseInt(rowCount.toString())) if (!found) it(++index)
            })
          })
      })
    }
    it(1)
  }
  findInTable(fieldName: string, valueToFind: string) {
    let found = false
    const headers: string[] = []
    cy.get('.rt-resizable-header-content', quiet).each(($el: JQuery<HTMLElement>) => {
      headers.push($el.text())
    })
    cy.get('.rt-tr-group').its('length').as('tableRows')
    const findInCurrentTable = (index: number) => {
      cy.wrap(headers, quiet).then((header) => {
        cy.get(`.rt-tr-group:nth-of-type(${index})`, quiet).find('.rt-td', quiet).eq(header.indexOf(fieldName), quiet).invoke('text').as('textValue')
      })
      cy.get('@textValue')
        .then((value) => {
          if (valueToFind.includes(value.toString())) {
            found = true
            expect(value).eq(valueToFind)
          }
        })
        .then(() => {
          cy.get('@tableRows').then((rowCount) => {
            if (index < parseInt(rowCount.toString())) if (!found) findInCurrentTable(++index)
          })
        })
    }
    findInCurrentTable(1)
  }
  clickOnDeleteButton() {
    cy.get('@currentRow').closest('.rt-tr-group').find('span[title="Delete"]').click()
  }
  verifyItemIsDeleted(value: string) {
    // Comment out, will used different approach
    // let found = false
    // cy.contains('div[class="rt-th rt-resizable-header -cursor-pointer"]', columnName).invoke('index').as('columnIndex')
    // const iterater = (index: number) => {
    //   cy.get('@columnIndex').then((colIndex) => {
    //     cy.get(`.rt-tr-group:nth-of-type(${index}) .rt-td`).eq(parseInt(colIndex.toString()))
    //   })
    // }
    // iterater(1)
    cy.get('[role="gridcell"]').contains(value).should('not.exist')
  }
}

class Buttons {
  openPage() {
    return cy.visit('/buttons')
  }
  clickOnDoubleClickBtn() {
    return cy.get('#doubleClickBtn').dblclick()
  }
  verifyDoubleClickBtnOuput(message: string) {
    return cy.get('#doubleClickMessage').should('contain', message)
  }
  clickOnRightClickBtn() {
    return cy.get('#rightClickBtn').rightclick()
  }
  verifyRightClickBtnOutput(message: string) {
    return cy.get('#rightClickMessage').should('contain', message)
  }
  clickOnDynamicBtn() {
    return cy
      .get('[type="button"]')
      .contains(/^Click Me$/)
      .click()
  }
  verifyDynamicBtnOutput(message: string) {
    return cy.get('#dynamicClickMessage').should('contain', message)
  }
}

class Links {
  openPage() {
    cy.visit('https://demoqa.com/links')
  }
  getHeaderValue() {
    return cy.get('.main-header').invoke('text')
  }
  getUrl() {
    return cy.url()
  }
  clickOnStaticLink() {
    return cy.get('#simpleLink').invoke('removeAttr', 'target').click()
  }
  clickOnDynamicLink() {
    return cy.get('#dynamicLink').invoke('removeAttr', 'target').click()
  }
  getAPILink(name: string) {
    return cy.contains('#linkWrapper a', name)
  }
  returnOutput() {
    return cy.get('#linkResponse').invoke('text')
  }
}

export const elementsPage = new ElementsPage()
export const txtBox = new Textbox()
export const chkBox = new Checkbox()
export const rdoButtons = new RadioButtons()
export const webTable = new WebTables()
export const buttons = new Buttons()
export const links = new Links()

const getHeaders = () => {
  const headers: string[] = []
  cy.get('.rt-resizable-header-content', quiet).each(($el: JQuery<HTMLElement>) => {
    headers.push($el.text())
  })
  return cy.wrap(headers)
}
const tableRows = () => {
  return cy.get('.rt-tr-group').its('length')
}
