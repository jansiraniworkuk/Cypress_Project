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

  cy.get(testIdMap["conduit tag line"]).should(
    "have.text",
    "A place to share your knowledge."
  );

  //verify the tag list is shown

  cy.get(testIdMap["conduit tags container"])
    .find("p")
    .should("have.text", "Popular Tags");

  cy.get(testIdMap["popular tags list"]).should("be.visible");

  cy.get(testIdMap["popular tags list"]).invoke("text").should("not.be.empty");

  //verify the global feed list elements are shown
  cy.get(testIdMap["global feed list"]).should("be.visible");

  cy.contains(testIdMap["global feed tab"]).should("have.text", "Global Feed");

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

And(
  /^I will be able to see all the elements on the home page after the login$/,
  () => {
    commonElements.validateBrandIcon();

    //verify navigation links
    commonElements.validateElementsAfterSignIn();
    commonElements.validateGlobalFeedTab();
  }
);

Given(/^I login to the conduit web page$/, () => {
  commonElements.launchConduit();
  commonElements.signIn();
});

When(/^I create few posts in conduit web page with the below details:$/, (dataTable) => {
  // Get the data table from the scenario
  const postTable = dataTable.hashes();

  commonElements.launchConduit();
  commonElements.signIn();

  // Function to create a post
  const createPost = (post) => {
    cy.log('Post data:', JSON.stringify(post, null, 2));
    return cy.fixture("stubResponses").then((stubResponses) => {
      const stubPostResponse = { ...stubResponses.createPost };
      
      // Ensure stubPostResponse and its article are defined
      if (!stubPostResponse || !stubPostResponse.article) {
        throw new Error("The fixture 'stubResponses' does not contain 'createPost.article'");
      }

      stubPostResponse.article.title = post.title;
      stubPostResponse.article.description = post.description;
      stubPostResponse.article.body = post.body;
      stubPostResponse.article.tagList = post.tags.split(",");
      
      cy.log('Stub response:', JSON.stringify(stubPostResponse, null, 2));
      
      // Intercept the request and provide a stub response
      cy.intercept("POST", "/api/articles", {
        statusCode: 201,
        body: stubPostResponse,
      }).as(`createPost-${post.title}`);

      // Create the post
      cy.get(testIdMap["new post link"]).click();
      commonElements.validateElementsInPostCommentPage();

      cy.get(testIdMap["article title"])
        .should('not.be.disabled')
        .clear()
        .type(post.title);

      cy.get(testIdMap["article about"])
        .should('not.be.disabled')
        .clear()
        .type(post.description);

      cy.get(testIdMap["article content"])
        .should('not.be.disabled')
        .clear()
        .type(post.body);

      cy.get(testIdMap["addition of tags"])
        .should('not.be.disabled')
        .clear()
        .type(post.tags);

      cy.get(testIdMap["publish article button"])
        .should('not.be.disabled')
        .click();

      cy.wait(`@createPost-${post.title}`).then((interception) => {
        cy.log('Intercepted response:', JSON.stringify(interception.response.body, null, 2));
      });

      // Ensure form is reset after post creation
      cy.get(testIdMap["new post link"]).click();
    });
  };

  // Use a Cypress chain to ensure sequential execution
  cy.wrap(postTable).each((post, index) => {
    createPost(post);
  });

  // Ensure the form is ready for the next post
  commonElements.validateElementsInPostCommentPage();
});




Then(/^I will be able to see them under Global Feed$/, () => {
  cy.get(testIdMap["nav link home on sign in page"]).click();
});

And(/^I will be able to see them under Your Feed as well$/, () => {
  cy.contains(testIdMap["global feed tab"]).click();
});
