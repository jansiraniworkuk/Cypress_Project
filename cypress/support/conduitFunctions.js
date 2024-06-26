import testIdMap from "../fixtures/elements.json"
export class CommonElements {
  //verify navigation links on the home page
  launchConduit(){
    cy.visit("/");
  }
  validateNavLinks() {
    cy.get(testIdMap["nav link home on home page"])
      .should("have.text", "Home")
      .should("have.attr", "href", "#/")
      .should("have.css", "color", "rgba(0, 0, 0, 0.3)");

    cy.get(testIdMap["navigation link sign-in"])
      .should("have.text", "Sign in")
      .should("have.attr", "href", "#login");

    cy.get(testIdMap["navigation link sign up"])
      .should("have.text", "Sign up")
      .should("have.attr", "href", "#register");
  }
  validateBrandIcon(){
    cy.get(testIdMap["brand icon"])
    .should("have.text", "conduit")
    .should("have.css", "color", "rgb(92, 184, 92)");
  }
  validateCommonInputBoxes(){
    cy.get(testIdMap["email input box"]).should(
        "have.attr",
        "placeholder",
        "Email"
      );
    
      cy.get(testIdMap["password input box"]).should(
        "have.attr",
        "placeholder",
        "Password"
      );
  }
  validateSignInButton(){ 
    cy.get(testIdMap["sign in button"])
    .should("have.text", "Sign in")
    .should("have.css", "color", "rgb(255, 255, 255)")
    .should("have.css", "background-color", "rgb(92, 184, 92)");
  }
  signIn(){
    cy.get(testIdMap["nav link sign in"]).click();
    cy.get(testIdMap["email input box"]).type("Jansi@gmail.com");
    cy.get(testIdMap["password input box"]).type("password1");
    cy.get(testIdMap["sign in button"]).click();
  }
  validateElementsAfterSignIn(){
    cy.get(testIdMap["nav link home on home page"]).should("be.visible");
  cy.get(testIdMap["new post link"]).contains("New Post");
  cy.get(testIdMap["settings link"]).contains("Settings");
  cy.get(testIdMap["profile link"]).contains("Jansi");
  cy.get(testIdMap["conduit tags container"]).should("be.visible");

  cy.get(testIdMap["toggle feed buttons"])
    .first()
    .children()
    .eq(0)
    .click();

    cy.get(testIdMap["toggle feed buttons"])
    .first()
    .children()
    .eq(1)
    .click();
  }
  validateFeedTabsCount(count){
    cy.get(testIdMap["toggle feed buttons"]) // Select parent with multiple classes
    .find(".nav-link") // Find all child elements with the class 'nav-link'
    .should("have.length", count);

  }
  validateGlobalFeedTab(){
    cy.get(testIdMap.author).first().invoke("text").should("not.be.empty");

  cy.get(testIdMap["article preview"])
    .first()
    .invoke("text")
    .should("not.be.empty");

  cy.get(testIdMap["like button"]).should(
    "have.css",
    "color",
    "rgb(92, 184, 92)"
  );

  cy.get(testIdMap["like button"])
    .first() // Pick the first element
    .should("be.visible") // Ensure the element is visible
    .invoke("text")
    .then((text) => {
      expect(text).not.to.be.empty; // Assert that the text is not empty
    });

  cy.get(testIdMap["read more link"]).should("have.text", "Read more...");

  cy.get(testIdMap["preview tag list"]).first().should("be.visible");
  }
}
