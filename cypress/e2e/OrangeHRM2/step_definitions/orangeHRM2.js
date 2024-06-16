import { LoginPage } from "../../../support/orangeHRMlogin";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage();

Given(/^I visit the orange HRM demo site$/, () => {
  cy.visit("/");
});

And(/^I will be landed on the orangeJRM's homepage$/, () => {
  cy.get(".orangehrm-login-branding > img").should("be.visible");
});

Given(/^I login with the user name and password$/, () => {
  loginPage.enterUserName("Admin");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
});

When(/^I click on PIM from LHN$/, () => {
  cy.contains("PIM").should("be.visible");
  cy.contains('span','PIM').click();
});

Then(/^I can see the employees list$/, () => {
  cy.log(location.pathname)
  cy.location('pathname').should('equal', "/web/index.php/pim/viewEmployeeList")
  cy.wait(5000)
});

And(/^I validate the employee from the row number (\d+)$/, (rowNumber) => {
  loginPage.getEmpSelector(rowNumber).then((empSelector) =>{
    cy.get(empSelector).should('be.visible')
    //cy.get('.oxd-table').should('be.visible')
    let empHeader = [];
    cy.get('.oxd-table-header > .oxd-table-row').each(($el,index,$list) => {
      empHeader.push($el.text());
    }).then(() => {
      cy.log(empHeader);
    });

  });
});

