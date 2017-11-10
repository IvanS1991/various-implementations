var gulp = require('gulp');
var jsHint = require('gulp-jshint');

var locations = ['src/**/*.js', 'tests/**/*.js'];

gulp.task('jshint:check', () => {
  gulp.src(locations)
    .pipe(jsHint())
    .pipe(jsHint.reporter('default'));
});

gulp.task('jshint:watch', ['jshint:check'], () => {
  gulp.watch(locations, ['jshint:check']);
});

gulp.task('dev', ['jshint:watch']);
