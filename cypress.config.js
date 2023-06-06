const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:720,
  viewportWidth:1280,
  reporter: 'cypress-mochawesome-reporter', // For html Reports
  e2e: {
    env: {
      commandDelay: 4000,

    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
