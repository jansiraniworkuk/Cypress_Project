import testIdMap from '../../fixtures/elements.json'

Given(/^I visit the conduit web page$/, () => {
  cy.visit("/");
});

When(/^I navigate to sign in page$/, () => {
    cy.contains('Sign in').click();
});

Then(/^I will be able to see the signin page$/, () => {
    cy.get(testIdMap['sign in page heading'])
    .should('have.text', 'Sign In')
    .should('have.css', 'color', 'rgb(55, 58, 60)');
});

And(/^I will be able to see all the elements of the signin page$/, () => {
    //verify brand icon
    cy.get(testIdMap['brand icon'])
    .should('have.text', 'conduit')
    .should('have.css', 'color', 'rgb(92, 184, 92)');

    //verify registration link
    cy.get(testIdMap['register link from sign in page'])
    .should('have.text', 'Need an account?')
    .should('have.attr', 'href', '#register')
    .should('have.css', 'color', 'rgb(92, 184, 92)');  
    
    //verify the navigation links
    cy.get(testIdMap['navigation link home'])
    .should('have.text', 'Home')
    .should('have.attr', 'href', '#/')
    .should('have.css', 'color', 'rgba(0, 0, 0, 0.3)');

    cy.get(testIdMap['navigation link sign-in'])
    .should('have.text', 'Sign in')
    .should('have.attr', 'href', '#login');

    cy.get(testIdMap['navigation link sign up'])
    .should('have.text', 'Sign up')
    .should('have.attr', 'href', '#register');
   
    //verify input boxes
    cy.get(testIdMap['email input box from sign in page'])
    .should('have.attr', 'placeholder', 'Email');

    cy.get(testIdMap['password input box from sign in page'])
    .should('have.attr', 'placeholder', 'Password');

    //validate sign in button
    cy.get(testIdMap['sign in button'])
    .should('have.text', 'Sign in')
    .should('have.css', 'color','rgb(255, 255, 255)')
    .should('have.css', 'background-color','rgb(92, 184, 92)');
});
