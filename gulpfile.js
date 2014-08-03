// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');

var assets = require('./assets.json'),
  distFileName = 'ng-fast-levenshtein';

var srcFiles = assets.srcFiles,
  testFiles = assets.testFiles,
  supportFiles = assets.supportFiles,
  karmaFiles = supportFiles.concat(srcFiles, testFiles);

// Lint Task
gulp.task('jshint', function () {
  return gulp.src(srcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
  return gulp.src(srcFiles)
    .pipe(concat(distFileName + '.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename(distFileName + '.min.js'))
    .pipe(gulp.dest('dist'));
});

// Test
gulp.task('test', function () {
  return gulp.src(karmaFiles)
    .pipe(karma({
    configFile: 'test/karma.conf.js',
    action: 'run'
  })).on('error', function (err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  });
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch(srcFiles, ['jshint', 'scripts']);
});

// Default Task
gulp.task('default', ['jshint', 'scripts', 'watch']);