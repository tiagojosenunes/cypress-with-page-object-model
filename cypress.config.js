const { defineConfig } = require("cypress");
const MochaJUnitReporter = require("mocha-junit-reporter");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de teste',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    }
  },

  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});
