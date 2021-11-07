import * as faker from 'faker'
import * as dayjs from 'dayjs'
import { When, And } from 'cypress-cucumber-preprocessor/steps'
import { forms } from '../../../support/page-objects/forms_po'

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
When('I enter a random first name', () => {
  _firstName = faker.name.firstName()
  forms.enterFirstName(_firstName)
})
And('I enter the students {string} on the Last Name field', (lName: string) => {
  _lastName = lName
  forms.enterLastName(_lastName)
})
And('I enter a random last name', () => {
  _lastName = faker.name.lastName()
  forms.enterLastName(_lastName)
})
And('I enter the students {string} on the Email field', (email: string) => {
  _email = email
  forms.enterEmail(email)
})
And('I enter a random email', () => {
  _email = faker.internet.email()
  forms.enterEmail(_email)
})
And('I select the students gender {string} from the Gender selection', (gender: string) => {
  _gender = gender
  forms.selectGender(_gender)
})
And('I enter the students {string} on the Mobile Number field', (contactNumber: string) => {
  _phoneNumber = contactNumber
  forms.enterPhoneNumber(contactNumber)
})
And('I enter a random phone number', () => {
  _phoneNumber = faker.phone.phoneNumber('0912345678')
  forms.enterPhoneNumber(_phoneNumber)
})
And('I enter the students {string} on the Date of Birth field', (bDay: string) => {
  _birthDay = bDay
  forms.enterDateOfBirth(_birthDay)
})
And('I enter a random date of birth', () => {
  _birthDay = faker.date.past().toString()
  forms.enterDateOfBirth(_birthDay)
})
And('I search for {string} and select {string} from the result bar', (searchSubj: string, selectSubj: string) => {
  _subjects = selectSubj

  const enteredText = searchSubj
  const selectedValue = selectSubj
  forms.enterSubject({ enteredText, selectedValue })
})
And('I select the students hobby {string}', (hobby: string) => {
  _hobbies = hobby
  forms.enterHobby(_hobbies)
})
And('I upload the students Photo {string}', (imgName) => {
  _img = imgName
  cy.fixture(`Forms/${_img}`).then((img) => {
    forms.uploadFile(_img, img)
  })
})
And('I enter the students {string} on the Current Address field', (address: string) => {
  _address = address
  forms.enterAddress(_address)
})
And('I enter a random address', () => {
  _address = `${faker.address.streetName()} ${faker.address.city()} ${faker.address.country()} ${faker.address.zipCode()}`
  forms.enterAddress(_address)
})
And('I choose the students state {string} and city {string}', (state: string, city: string) => {
  _state = state
  _city = city
  forms.selectState(_state)
  forms.selectCity(_city)
})
And('Verify the Student Name', () => {
  const studentName = `${_firstName} ${_lastName}`
  forms.modalTableBody('Student Name').should('contain', studentName)
})
And('Verify the Student Email', () => {
  forms.modalTableBody('Student Email').should('contain', _email)
})
And('Verify the Student Gender', () => {
  forms.modalTableBody('Gender').should('contain', _gender)
})
And('Verify the Student Mobile number', () => {
  forms.modalTableBody('Mobile').should('contain', _phoneNumber)
})
And('Verify the Student Date of Birth', () => {
  const date = dayjs(_birthDay).format('DD MMMM,YYYY')
  forms.modalTableBody('Date of Birth').should('contain', date)
})
And('Verify the Student Subjects', () => {
  forms.modalTableBody('Subjects').should('contain', _subjects)
})
And('Verify the Student Hobbies', () => {
  forms.modalTableBody('Hobbies').should('contain', _hobbies)
})
And('Verify the Student Picture', () => {
  forms.modalTableBody('Picture').should('contain', _img)
})
And('Verify the Student Address', () => {
  forms.modalTableBody('Address').should('contain', _address)
})
And('Verify the Student State and City', () => {
  const stateAndCity = `${_state} ${_city}`
  forms.modalTableBody('State and City').should('contain', stateAndCity)
})
