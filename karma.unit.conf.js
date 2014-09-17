// Karma configuration

module.exports = function (config) {

  var AVAILABLE_TEST_SCOPES = {
    'default': {
      'messageformat/messageformat.js': 'bower_components/messageformat/messageformat.js',
      'angular/angular.js': 'bower_components/angular/angular.js',
      'angular-cookies/angular-cookies.js': 'bower_components/angular-cookies/angular-cookies.js',
      'angular-mocks/angular-mocks.js': 'bower_components/angular-mocks/angular-mocks.js'
    },
    'angular_1.3': {
      'messageformat/messageformat.js': 'test_scopes/angular_1.3/bower_components/messageformat/messageformat.js',
      'angular/angular.js': 'test_scopes/angular_1.3/bower_components/angular/angular.js',
      'angular-cookies/angular-cookies.js': 'test_scopes/angular_1.3/bower_components/angular-cookies/angular-cookies.js',
      'angular-mocks/angular-mocks.js': 'test_scopes/angular_1.3/bower_components/angular-mocks/angular-mocks.js'
    }
  };

  var selectedScope = 'default';
  if (process.env.TEST_SCOPE && AVAILABLE_TEST_SCOPES[process.env.TEST_SCOPE]) {
    selectedScope = process.env.TEST_SCOPE;
  }
  console.log('Using TEST_SCOPE=' + selectedScope);

  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      AVAILABLE_TEST_SCOPES[selectedScope]['messageformat/messageformat.js'],
      AVAILABLE_TEST_SCOPES[selectedScope]['angular/angular.js'],
      AVAILABLE_TEST_SCOPES[selectedScope]['angular-cookies/angular-cookies.js'],
      AVAILABLE_TEST_SCOPES[selectedScope]['angular-mocks/angular-mocks.js'],
      'src/translate.js',
      'src/**/*.js',
      'test/unit/**/*.spec.js'
    ],

    exclude: [],

    reports: ['progress'],

    port: 9876,

    colors: true,

    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

    captureTimeout: 60000,

    singleRun: false,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ]
  });
};
