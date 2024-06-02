Given(/^I launch the demoqa Site$/,() =>{
    cy.visit('/')
});

When(/^I check the title of the demoqa page$/,() =>{
    cy.title()
});

//And(/^I insert the password$/,() =>{
    
  //  return true;
//});

//When(/^I click the login button$/,() =>{
    
    //return true;
//});

Then("I should see the title as {string}",(title) =>{
    cy.title().should ('include', title);
});