Given(/^I launch the demoqa Site$/, () => {
  cy.visit("/");
});

When(/^I check the title of the demoqa page$/, () => {
  cy.title();
});

Then("I should see the title as {string}", (title) => {
  cy.title().should("include", title);
});

Given(/^I launch the Text box elements page$/, () => {
  cy.visit("/text-box");
  cy.get("#userForm").should("be.visible");
  //chain of assertions. Also and will work like should here.
  cy.get('#submit').should('contain', 'Submit').and('have.attr','type', 'button');

});

Then(/^I should see the Tools QA page$/, () => {
  cy.get("header > a > img").should("have.attr", "src", "/images/Toolsqa.jpg");
});

When(/^I click on elements link$/, () => {
  cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5", {
    timeout: 20000,
  }).click();
  cy.location('pathname').should('equal','/elements');
  
});

And(/^I should be able to fill the form$/, () => {
  cy.get("#userName").should("be.visible");
  cy.get("#userName").type("user");
  cy.fixture('example.json').then((data) => {
    cy.get("#userEmail").type(data.email);
  })
  cy.get("#currentAddress").type("12, redbridge lane, IG45DG");
  cy.get("#permanentAddress").type("same as current address");
});

Then(/^I Submit the form$/, () => {
  cy.get("#submit").should("be.visible");
  cy.get("#submit").click();
});

And(/^I should see the entered message below$/, () => {
  const addedUserName = `Name:user`;
  const addedEmail = `Email:hello@cypress.io`;
  const addedCurrAdd = `Current Address :12, redbridge lane, IG45DG `;
  const addedPerAdd = `Permananet Address :same as current address`;
  
  //Get the message from a text box and validate it
  cy.get("#name").should('have.text', addedUserName);
  //cy.get("#email").should('have.text', addedEmail);
  cy.get("#email").invoke('text').then((email)=>
    {
      expect(email).to.equal(addedEmail);
    })
  cy.get(".border > #currentAddress").should('have.text', addedCurrAdd);
  cy.get(".border > #permanentAddress").should('have.text',addedPerAdd);
  cy.screenshot();
  cy.writeFile("./cypress/Data/enteredData.txt",addedUserName +"\n"+addedEmail +"\n"+addedCurrAdd +"\n"+addedPerAdd)
});
