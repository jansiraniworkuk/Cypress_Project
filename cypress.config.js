//note: plugin folder and configurations are added to cypress.config.js file in v13
//cypress.json file details are also added to cypress.config.js file

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com/',
    //To specify where the test files are located
    specPattern: "cypress/e2e/*.feature",
  },
   viewportWidth: 900,
   viewportHeight: 1400,
    "defaultCommandTimeout": 10000,
    watchForFileChanges: true
});
