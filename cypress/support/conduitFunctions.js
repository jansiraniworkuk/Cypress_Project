import testIdMap from "../fixtures/elements.json"
export class CommonElements {
  //verify navigation links on the home page
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
    cy.get(testIdMap["email input box"]).type("Jansi@gmail.com");
    cy.get(testIdMap["password input box"]).type("password1");
    cy.get(testIdMap["sign in button"]).click();
  }
}
