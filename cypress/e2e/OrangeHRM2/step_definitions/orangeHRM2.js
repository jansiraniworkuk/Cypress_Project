import {LoginPage} from "../../../support/orangeHRMlogin"

const loginPage = new LoginPage();

Given(/^I visit the orange HRM demo site$/, () => {
  cy.visit("/");
});

Then(/^I will be landed on the orangeJRM's homepage$/, () => {
    cy.get('.orangehrm-login-branding > img').should('be.visible');
});

When(/^I login with the user name and password$/, () => {
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
});

Then(/^I will be logged in successfully$/, () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
});

When(/^I login with invalid user name and password$/, () => {
    loginPage.enterUserName('Admin123')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
});

Then(/^I will not be logged in$/, () => {
    cy.get('.oxd-alert-content').should('be.visible')
    cy.location('pathname').should('equal','/web/index.php/auth/login')
});
