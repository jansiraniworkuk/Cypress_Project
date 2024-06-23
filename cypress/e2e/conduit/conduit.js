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
    cy.get(testIdMap['nav link home on sign in page'])
    .should('have.text', 'Home')
    .should('have.attr', 'href', '#/')
    .should('have.css', 'color', 'rgba(0, 0, 0, 0.3)');

    cy.get(testIdMap['nav link sign in'])
    .should('have.text', 'Sign in')
    .should('have.attr', 'href', '#login');

    cy.get(testIdMap['nav link sign up'])
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

When(/^I am on the home page$/, () => {
    cy.get(testIdMap['conduit banner']).exists;
});

Then(/^I will be able to see all the elements of the home page$/, () => {
    //verify brand icon on the home page
    cy.get(testIdMap['brand icon'])
    .should('have.text', 'conduit')
    .should('have.css', 'color', 'rgb(92, 184, 92)');

    //verify navigation links on the home page
    cy.get(testIdMap['nav link home on home page'])
    .should('have.text', 'Home')
    .should('have.attr', 'href', '#/')
    .should('have.css', 'color', 'rgba(0, 0, 0, 0.3)');

    cy.get(testIdMap['navigation link sign-in'])
    .should('have.text', 'Sign in')
    .should('have.attr', 'href', '#login');

    cy.get(testIdMap['navigation link sign up'])
    .should('have.text', 'Sign up')
    .should('have.attr', 'href', '#register');

    //verify conduit banner
    cy.get(testIdMap['conduit banner'])
    .should('have.css', 'background-color', 'rgb(92, 184, 92)');

    cy.get(testIdMap['conduit logo header'])
    .should('have.text', 'conduit');

    cy.get(testIdMap['conduit tag line'])
    .should('have.text', 'A place to share your knowledge.');

    //verify the tag list is shown
    
    cy.get(testIdMap['conduit tags container'])
    .find('p')
    .should('have.text', 'Popular Tags');

    cy.get(testIdMap['popular tags list'])
    .should('be.visible');

    cy.get(testIdMap['popular tags list'])
    .invoke('text')
    .should('not.be.empty');

    //verify the global feed list elements are shown
    cy.get(testIdMap['global feed list'])
    .should('be.visible');

    cy.get(testIdMap['global feed tab'])
    .should('have.text', 'Global Feed');

    //verify the metadata of the posts
    cy.get(testIdMap.author)
    .first()
    .invoke('text')
    .should('not.be.empty');
    
    cy.get(testIdMap['article preview'])
    .first()
    .invoke('text').should('not.be.empty');
    
    cy.get(testIdMap['like button'])
    .should('have.css', 'color', 'rgb(92, 184, 92)');

    cy.get(testIdMap['like button'])
    .first() // Pick the first element
    .should('be.visible') // Ensure the element is visible
    .invoke('text')
    .then(text => {
        expect(text).not.to.be.empty; // Assert that the text is not empty
      });

      cy.get(testIdMap['read more link'])
      .should('have.text', 'Read more...');

      cy.get(testIdMap['preview tag list'])
      .first()
      .should('be.visible') 
});

And(/^I can scroll down the page$/, () => {
    cy.scrollTo('bottom');
    cy.get(testIdMap['pagination container']).should('be.visible');

    cy.get(testIdMap['page link'])
    .first()
    .should('have.css', 'background-color', 'rgb(92, 184, 92)');
    
    //cy.get(testIdMap['page link'])
    //.first()
    //.trigger('mouseover')
    //.should('have.css', 'text-decoration', 'underline');

    cy.get('.page-link').first().trigger('mouseover').then($el => {
        const computedStyle = window.getComputedStyle($el[0]);
        const cssProperties = {
          textDecorationLine: computedStyle.textDecorationLine,
          textDecorationStyle: computedStyle.textDecorationStyle,
          textDecorationColor: computedStyle.textDecorationColor,
          // Add any other properties you want to log
        };
        console.log(cssProperties);
      });
});

