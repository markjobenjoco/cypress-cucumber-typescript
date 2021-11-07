import { Given } from 'cypress-cucumber-preprocessor/steps'
import { buttons } from '../../../support/page-objects/elements_po'

Given('I am at the elements buttons page', () => {
  buttons.openPage()
})
