const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        logMessage(message) {
          console.log(message);
          return null;
        }
      });
    },
    baseUrl: "https://www.bankofcanada.ca/",
    specPattern: "cypress/e2e/APITests/*.cy.js",
    video: false, 
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true
    }
  },
});
