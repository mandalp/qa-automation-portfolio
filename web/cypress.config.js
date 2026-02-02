const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, // Used to Record and Play tests
    video: false, // Used to generate video of test runs
    baseUrl: 'http://localhost:3000', 
    },
});
