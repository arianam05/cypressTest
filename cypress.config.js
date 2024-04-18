const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) { },
  },

  "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "reportDir": "mocha-report",
      "overwrite": false,
      "html": true,
      "json": true
    }


});
