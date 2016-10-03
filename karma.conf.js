let webpack = require('karma-webpack'),
    config = {
      scripts : {
        src: './src/assets/scripts/main',
        dest: 'dist/assets/scripts'  
      },
      dev: true
    },
    webpackConfig = require('./webpack.config.js')(config);

// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine-ajax', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.spec.js',
      'node_modules/jquery/dist/jquery.js',
      {
        pattern: 'tests/fixtures/**/*.html',
        watched: true,
        included: false,
        served: true
      }
    ],

    // list of files to exclude
    exclude: [
    ],

    plugins: [
      webpack,
      'karma-jasmine-jquery',
      'karma-jasmine-ajax',
      'karma-threshold-reporter',
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*spec.js': ['webpack'],
      'src/**/*.js': ['webpack', 'coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'spec', 'coverage', 'threshold'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        { 
          type: 'html',
          subdir: 'report-html' 
        },
      ],
      check: {
        each: {
          statements: 90,
          lines: 90,
          functions: 90,
          branches: 95
        }
      }
    },

    webpack: webpackConfig,

    webpackMiddleware: { noInfo: true }
  })
}
