const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cleancss = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('default', function () {
   gulp.watch('sass/**/*.scss', gulp.series('sass'));
})

// Css preprocessor
gulp.task('sass', function () {
   return gulp.src('./sass/main.scss')
      // Convert sass into css
      .pipe(sass.sync().on('error', sass.logError))
      // Concat css with other csses
      .pipe(concat('./css/icon-font.css'))
      // Auto prefixer for multi-browser support
      .pipe(postcss([ autoprefixer() ]))
      // Rename the output file
      .pipe(rename('style.css'))
      // Compress css
      .pipe(cleancss())
      // Output file
      .pipe(gulp.dest('./css'));
});