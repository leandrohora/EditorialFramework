const gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      stripCssComments = require('gulp-strip-css-comments');

const src = {
  sass   : ['build/**/*.scss'],
};

gulp.task('default',function(){
  gulp.start(['build-compressed-css','build-css']);
});

gulp.task('build-css', function() {
  gulp.src(src.sass)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(stripCssComments())
  .pipe(gulp.dest('../css'));
});

gulp.task('build-compressed-css', function() {
  gulp.src(src.sass)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename(function (path) {
    path.basename += ".min";
  }))
  .pipe(stripCssComments())
  .pipe(gulp.dest('../css'));
});