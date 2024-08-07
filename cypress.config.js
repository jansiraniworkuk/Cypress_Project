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
      // Run only scenarios with the @connectivity tag
      TAGS: '@orangeHRM', 
      step_definitions: "cypress/e2e/orangeHRM/"
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    //To specify where the test files are located
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false,
  },
  viewportWidth: 1500,
  viewportHeight: 1500,
  defaultCommandTimeout: 10000,
  watchForFileChanges: true,
  //Enable videos if it is required - default value is true
  video: true,
  reporter: "mochawesome",
  reporterOptions: {
      charts: true,
      overwrite: true,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-report"
    }
});
