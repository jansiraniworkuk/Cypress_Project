// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import "./commands";
//import './CustomLogin/standard.actions'

  Cypress.on("uncaught:exception", (err, runnable) => {
    // If the error message matches the known error, return false to ignore it
    if (err.message.includes("c(...).setup is not a function")) {
      return false;
    }
    // Otherwise, throw the error and Cypress will fail the test
    throw err;
  });
