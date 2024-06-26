import testIdMap from "../../fixtures/elements.json";
import { CommonElements } from "../../support/conduitFunctions";

const commonElements = new CommonElements();

Given(/^I visit the conduit web page$/, () => {
  commonElements.launchConduit();
});

When(/^I navigate to sign in page$/, () => {
  cy.get(testIdMap["nav link sign in"]).click();
});

Then(/^I will be able to see the signin page$/, () => {
  cy.get(testIdMap["sign in page heading"])
    .should("have.text", "Sign In")
    .should("have.css", "color", "rgb(55, 58, 60)");
});

And(/^I will be able to see all the elements of the signin page$/, () => {
  //verify brand icon
  commonElements.validateBrandIcon();

  //verify registration link
  cy.get(testIdMap["register link from sign in page"])
    .should("have.text", "Need an account?")
    .should("have.attr", "href", "#register")
    .should("have.css", "color", "rgb(92, 184, 92)");

  //verify the navigation links
  commonElements.validateNavLinks();

  //verify input boxes
  commonElements.validateCommonInputBoxes();

  //validate sign in button
  commonElements.validateSignInButton();
});

When(/^I am on the home page$/, () => {
  cy.get(testIdMap["conduit banner"]).exists;
});

Then(/^I will be able to see all the elements of the home page$/, () => {
  //verify brand icon on the home page
  commonElements.validateBrandIcon();

  //verify navigation links on the home page
  commonElements.validateNavLinks();

  //verify conduit banner
  cy.get(testIdMap["conduit banner"]).should(
    "have.css",
    "background-color",
    "rgb(92, 184, 92)"
  );

  cy.get(testIdMap["conduit logo header"]).should("have.text", "conduit");

  cy.get(testIdMap["conduit tag line"])
  .should("have.text","A place to share your knowledge.");

  //verify the tag list is shown

  cy.get(testIdMap["conduit tags container"])
    .find("p")
    .should("have.text", "Popular Tags");

  cy.get(testIdMap["popular tags list"]).should("be.visible");

  cy.get(testIdMap["popular tags list"]).invoke("text").should("not.be.empty");

  //verify the global feed list elements are shown
  cy.get(testIdMap["global feed list"]).should("be.visible");

  cy.get(testIdMap["global feed tab"]).should("have.text", "Global Feed");

  commonElements.validateFeedTabsCount(1);

  //verify the metadata of the posts
  commonElements.validateGlobalFeedTab();
});

And(/^I can scroll down the page$/, () => {
  cy.scrollTo("bottom");
  cy.get(testIdMap["pagination container"]).should("be.visible");

  cy.get(testIdMap["page link"])
    .first()
    .should("have.css", "background-color", "rgb(92, 184, 92)");

  //cy.get(testIdMap['page link'])
  //.first()
  //.trigger('mouseover')
  //.should('have.css', 'text-decoration', 'underline');

  cy.get(".page-link")
    .first()
    .trigger("mouseover")
    .then(($el) => {
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

When(/^I navigate to signup page$/, () => {
  cy.get(testIdMap["nav link sign up"]).click();
});

Then(/^I will be able to see all the elements of the signup page$/, () => {
  commonElements.validateBrandIcon();

  commonElements.validateNavLinks();

  cy.get(testIdMap["username text box"]).should(
    "have.attr",
    "placeholder",
    "Username"
  );

  commonElements.validateSignInButton();
});

Then(/^I will be able to login to the conduit application$/, () => {
  commonElements.signIn();
  
  //Verify feed tabs
  commonElements.validateFeedTabsCount(2);

  cy.get(testIdMap["toggle feed buttons"])
    .first()
    .children()
    .first()
    .as("yourFeedElement");

  cy.get("@yourFeedElement").should("have.text", "Your Feed");

  cy.get(testIdMap["toggle feed buttons"])
    .first()
    .children()
    .eq(1)
    .should("have.text", "Global Feed");
});

And(/^I will be able to see all the elements on the home page after the login$/, () => {
  commonElements.validateBrandIcon();

  //verify navigation links
  commonElements.validateElementsAfterSignIn();
  commonElements.validateGlobalFeedTab();
    
});

Given(/^I login to the conduit web page$/, () => {
  commonElements.launchConduit();
  commonElements.signIn();
});

When(/^I create few posts in conduit web page$/, () => {
  commonElements.launchConduit();
  commonElements.signIn();
  cy.get(testIdMap["new post link"]).click();
  cy.get(testIdMap["article title"]).should('be.visible');
  cy.get(testIdMap["article about"]).should('be.visible');
  cy.get(testIdMap["article content"]).should('be.visible');
  cy.get(testIdMap["addition of tags"]).should('be.visible');
  cy.get(testIdMap["publish article button"]).should('be.visible');
});

Then(/^I will be able to see them under Global Feed$/, () => {
  cy.get(testIdMap["new post link"]).click();
});

And(/^I will be able to see them under Your Feed as well$/, () => {
  cy.get(testIdMap["new post link"]).click();
});

