const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('default', function () {
   gulp.watch('sass/**/*.scss', ['sass']);
})

gulp.task('sass', function () {
   return gulp.src('./sass/main.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./css'));
});