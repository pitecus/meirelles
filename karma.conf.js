const karmaJasmine = require('karma-jasmine');
const karmaChromeLauncher = require('karma-chrome-launcher');
const karmaJasmineHtmlReporter = require('karma-jasmine-html-reporter');
const karmaCoverageIstanbulReporter = require('karma-coverage-istanbul-reporter');
const karmaAngularCli = require('@angular/cli/plugins/karma');

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    angularCli: {
      environment: 'dev'
    },

    // Enable or disable watching files and executing the tests whenever one of these files changes.
    autoWatch: true,

    // The root path location that will be used to resolve all relative paths defined in files and exclude.
    basePath: '',

    // A list of browsers to launch and capture.
    browsers: [
      'Chrome'
    ],

    client: {
      // Karma clears the context window upon the completion of running the tests.
      clearContext: false
    },

    // Enable or disable colors in the output (reporters and logs).
    colors: true,
    coverageIstanbulReporter: {
      fixWebpackSourcePaths: true,
      reports: [
        'html',
        'lcovonly'
      ]
    },

    // List of test frameworks you want to use.
    frameworks: [
      'jasmine',
      '@angular/cli'
    ],

    // Level of logging.
    logLevel: config.LOG_INFO,

    // List of plugins to load.
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverageIstanbulReporter,
      karmaAngularCli
    ],

    // The port where the web server will be listening.
    port: 9876,

    // A list of reporters to use.
    reporters: [
      'progress',
      'kjhtml'
    ],

    // Continuous Integration mode.
    singleRun: false
  });
};
