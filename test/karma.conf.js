// Karma configuration
// Generated on Sun Aug 03 2014 20:25:43 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
