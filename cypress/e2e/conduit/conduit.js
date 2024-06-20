Given(/^I visit the conduit web page$/, () => {
  cy.visit("/");
});

When(/^I navigate to sign in page$/, () => {
    cy.contains('Sign in').click();
});

Then(/^I will be able to see the signin page$/, () => {
    cy.get('h1.text-xs-center').should('have.text', 'Sign In');
});

And(/^I will be able to see all the elements of the signin page$/, () => {
    cy.get('h1.text-xs-center').should('have.text', 'Sign In');
    cy.get('.navbar-brand').should('have.text', 'conduit');
    cy.get('p.text-xs-center > a').should('have.text', 'Need an account');  
});

