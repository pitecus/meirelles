// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    check: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    },
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    colors: true,
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/resume'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    port: 9876,
    reporters: ['progress', 'kjhtml'],
    restartOnFileChange: true,
    singleRun: false
  });
};
