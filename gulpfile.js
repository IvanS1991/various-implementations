var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var locations = ['src/**/*.js', 'tests/**/*.js'];

gulp.task('tests:unit', function() {
  gulp.src(locations[1])
    .pipe(mocha({
      reporter: 'dot'
    }));
});

gulp.task('jshint:check', ['tests:unit'], function() {
  gulp.src(locations)
    .pipe(jsHint())
    .pipe(jsHint.reporter(require('jshint-stylish-ex')));
});

gulp.task('jshint:watch', ['jshint:check'], function() {
  gulp.watch(locations, ['jshint:check']);
});

gulp.task('dev', ['jshint:watch']);
