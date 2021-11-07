import { When } from 'cypress-cucumber-preprocessor/steps'
import { links } from '../../../support/page-objects/elements_po'

When('I click the static link', () => links.clickOnStaticLink())
When('I click the dynamic link', () => links.clickOnDynamicLink())
