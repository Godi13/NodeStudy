const gulp = require('gulp');
const babel = require('gulp-babel');

convert = (src, dest) => {
  return gulp.src(src)
  .pipe(babel({
    presets: ['es2015', 'stage-3']
  }))
  .pipe(gulp.dest(dest));
}

gulp.task('build', () => {
  convert('./src/app.es', './src');
  convert('./src/conf/*.es', './src/conf');
  convert('./src/controllers/*.es', './src/controllers');
  convert('./src/models/*.es', './src/models');
  convert('./src/public/scripts/index.es', './src/public/scripts/');
  convert('./src/public/scripts/component.es', './src/public/scripts/');
})

// gulp.task('watch', () => {
//   gulp.watch('./src/app.es', ['build']);
// });

gulp.task('default', ['build']);
