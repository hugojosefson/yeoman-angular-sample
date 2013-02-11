// Testacular configuration for scenario tests


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'app/**/*-scenario-test.js'
];


// list of files to exclude
exclude = [
];


junitReporter = {
  outputFile: 'test_out/unit-test.xml',
  suite: 'unit'
};
// test results reporters to use
// possible values: dots, progress, junit
reporters = ['progress', 'junit'];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
//browsers = ['PhantomJS', 'Chrome', 'ChromeCanary', 'Opera', 'Firefox', 'Safari'];
browsers = ['PhantomJS'];

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

proxies = {
  '/': 'http://localhost:3501/'
};

urlRoot = '/__testacular/';

