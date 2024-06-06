
Given(/^I launch the demoqa Site$/, () => {
  cy.visit("/");
  cy.wait(1000);
});

When(/^I check the title of the demoqa page$/, () => {
  cy.title();
});


Then("I should see the title as {string}", (title) => {
  cy.title().should("include", title);
});

Given(/^I launch the Text box elements page$/, () => {
  //cy.intercept("GET", "https://pagead2.googlesyndication.com/*").as("adLoad");
  cy.visit("/text-box");
  //for (let i = 0; i < 6; i++) {
  //  cy.wait("@adLoad");
  //}
  cy.get("#userForm").should("be.visible");
});

Then(/^I should see the Tools QA page$/, () => {
  cy.get("header > a > img").should("have.attr", "src", "/images/Toolsqa.jpg");
});

When(/^I click on elements link$/, () => {
  cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5", { timeout: 20000 }).click();
});

And(/^I should be able to fill the form$/, () => {
  cy.get("#userName").should("be.visible");
  cy.get("#userName").type("user");
});

Then(/^I Submit the form$/, () => {
cy.get("#submit").should("be.visible");
cy.get("#submit").click();
});

And(/^I should see the entered message below$/, () => {
cy.get("#name").should("be.visible");
});
