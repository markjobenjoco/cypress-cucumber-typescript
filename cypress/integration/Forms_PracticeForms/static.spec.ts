import * as dayjs from 'dayjs'
import { When, And } from 'cypress-cucumber-preprocessor/steps'
import { forms } from '../../support/page-objects/forms_po'

let _firstName: string,
  _lastName: string,
  _email: string,
  _gender: string,
  _phoneNumber: string,
  _birthDay: string,
  _subjects: string,
  _hobbies: string,
  _img: string,
  _address: string,
  _state: string,
  _city: string

When('I enter the students {string} on the First Name field', (fName: string) => {
  _firstName = fName
  forms.enterFirstName(_firstName)
})
And('I enter the students {string} on the Last Name field', (lName: string) => {
  _lastName = lName
  forms.enterLastName(_lastName)
})
And('I enter the students {string} on the Email field', (email: string) => {
  _email = email
  forms.enterEmail(email)
})
And('I select the students {string} from the Gender selection', (gender: string) => {
  _gender = gender
  forms.selectGender(_gender)
})
And('I enter the students {string} on the Mobile Number field', (contactNumber: string) => {
  _phoneNumber = contactNumber
  forms.enterPhoneNumber(contactNumber)
})
And('I enter the students {string} on the Date of Birth field', (bDay: string) => {
  _birthDay = bDay
  forms.enterDateOfBirth(_birthDay)
})
And('I search for this {string} and select this {string} from the result bar', (searchSubj: string, selectSubj: string) => {
  _subjects = selectSubj

  const enteredText = searchSubj
  const selectedValue = selectSubj
  forms.enterSubject({ enteredText, selectedValue })
})
And('I select the students {string} from the Hobbies selection', (hobby: string) => {
  _hobbies = hobby
  forms.enterHobby(hobby)
})
And('I upload the students {string}', (imgName: string) => {
  _img = imgName
  cy.fixture(`Forms/${_img}`).then((img) => {
    forms.uploadFile(_img, img)
  })
})
And('I enter the students {string} on the Current Address field', (address: string) => {
  _address = address
  forms.enterAddress(_address)
})
And('I choose and select the students {string} and {string}', (state: string, city: string) => {
  _state = state
  _city = city
  forms.selectState(_state)
  forms.selectCity(_city)
})
And('Verify the Student Name value', () => {
  const studentName = `${_firstName} ${_lastName}`
  forms.modalTableBody('Student Name').should('contain', studentName)
})
And('Verify the Student Email value', () => {
  forms.modalTableBody('Student Email').should('contain', _email)
})
And('Verify the Student Gender value', () => {
  forms.modalTableBody('Gender').should('contain', _gender)
})
And('Verify the Student Mobile number value', () => {
  forms.modalTableBody('Mobile').should('contain', _phoneNumber)
})
And('Verify the Student Date of Birth value', () => {
  const date = dayjs(_birthDay).format('DD MMMM,YYYY')
  forms.modalTableBody('Date of Birth').should('contain', date)
})
And('Verify the Student Subjects value', () => {
  forms.modalTableBody('Subjects').should('contain', _subjects)
})
And('Verify the Student Hobbies value', () => {
  forms.modalTableBody('Hobbies').should('contain', _hobbies)
})
And('Verify the Student Picture value', () => {
  forms.modalTableBody('Picture').should('contain', _img)
})
And('Verify the Student Address value', () => {
  forms.modalTableBody('Address').should('contain', _address)
})
And('Verify the Student State and City value', () => {
  const stateAndCity = `${_state} ${_city}`
  forms.modalTableBody('State and City').should('contain', stateAndCity)
})
