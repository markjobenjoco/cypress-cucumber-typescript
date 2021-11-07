import { Subject } from '../interfaces/forms'

const field = (x: string) => `input#${x}`

class Forms {
  openFormsPage = () => cy.visit('/automation-practice-form')
  enterFirstName = (fName: string) => cy.get(field('firstName')).type(fName)
  enterLastName = (lName: string) => cy.get(field('lastName')).type(lName)
  enterEmail = (email: string) => cy.get(field('userEmail')).type(email)
  selectGender = (gender: string) => cy.get('input[type="radio"]').check(gender, { force: true })
  enterPhoneNumber = (num: string) => cy.get(field('userNumber')).type(num)
  enterDateOfBirth = (fullDate: string) => {
    const date = new Date(fullDate)
    const birthMonth: string = date.toLocaleString('en-us', { month: 'short' })
    const birthDay: string = date.getDate().toString()
    const birthYear: string = date.getFullYear().toString()
    const check: string = `${birthDay} ${birthMonth} ${birthYear}`
    const longBirthMonth: string = date.toLocaleString('en-us', { month: 'long' })

    cy.get(field('dateOfBirthInput')).as('field').click()
    cy.get('.react-datepicker__year-select').select(birthYear)
    cy.get('.react-datepicker__month-select').select(longBirthMonth)
    cy.get('.react-datepicker__header > div.react-datepicker__current-month').should('contain', `${longBirthMonth} ${birthYear}`)
    cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(birthDay).click()
    cy.get('@field').invoke('val').should('contain', check)
  }
  enterSubject = (obj: Subject) => {
    cy.get('.subjects-auto-complete__value-container').as('subject').type(obj.enteredText)
    cy.get('div.subjects-auto-complete__menu-list.subjects-auto-complete__menu-list--is-multi.css-11unzgr').contains(obj.selectedValue).click()
    return cy.get('@subject')
  }
  enterHobby = (value: string) => cy.get('#hobbiesWrapper .custom-control-label').contains(value).prev().check({ force: true })
  uploadFile = (fileName: string, file: Blob) => {
    return cy.get('input#uploadPicture').attachFile({
      fileContent: file,
      fileName,
      mimeType: 'image/jpg'
    })
  }
  enterAddress = (address: string) => cy.get('textarea#currentAddress').type(address, { delay: 50 })
  selectState = (selectedValue: string) => {
    cy.get('div#state').as('state').click()
    cy.get('#react-select-3-option-0').should('exist').parent().contains(selectedValue).click()
    return cy.get('@state')
  }
  selectCity = (selectedValue: string) => {
    cy.get('div#city').as('city').click()
    cy.get('#react-select-4-option-0').should('exist').parent().contains(selectedValue).click()
    return cy.get('@city')
  }
  submit = () => cy.get('#submit').click()
  modal = () => cy.get('.modal-content')
  modalTitle = () => this.modal().find('#example-modal-sizes-title-lg')
  modalTableBody = (label: string) => cy.get('.table-responsive tbody').contains(label).next()
  closeButton = () => cy.get('button#closeLargeModal').click()
}
export const forms = new Forms()
