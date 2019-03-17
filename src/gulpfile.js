var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
/* var fonts = require('gulp-fonts'); */

gulp.task('default', defaultTask);
function defaultTask(done) {
  
  done();
};

gulp.task('minify-css', function(done) {
  return gulp.src('./css/*.css')
  .pipe(cleanCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))
  
  done();
});

gulp.task('minify-js', function(done) {
  return gulp.src('./js/*.js')
  .pipe(gulp.dest('dist/js/'))
  
  done();
});

gulp.task('htmlmin', function(done) {
  return gulp.src('*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'))
  
  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  
  done();
});

