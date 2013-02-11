basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/vendor/angular.js',
  'test/vendor/angular-mocks.js',

  'app/**/*-module-declaration.js',
  'app/**/*.js'

];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
