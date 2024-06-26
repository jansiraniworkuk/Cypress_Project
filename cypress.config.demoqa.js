//note: plugin folder and configurations are added to cypress.config.js file in v13
//cypress.json file details are also added to cypress.config.js file

const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
    env: {
      TAGS: '@demoqa' // Run only scenarios with the @connectivity tag
    },
    baseUrl: "https://demoqa.com/",
    //To specify where the test files are located
    specPattern: "cypress/e2e/*.feature",
  },
  viewportWidth: 900,
  viewportHeight: 1400,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  watchForFileChanges: true,
  //Enable videos if it is required - default value is true
  video: false,
});
