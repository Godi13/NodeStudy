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
});

gulp.task('config', () => {
  convert('./src/conf/*.es', './src/conf');
})

gulp.task('controllers', () => {
  convert('./src/controllers/*.es', './src/controllers');
})

gulp.task('models', () => {
  convert('./src/models/*.es', './src/models');
})

// gulp.task('watch', () => {
//   gulp.watch('./src/app.es', ['build']);
// });

gulp.task('default', ['build', 'config', 'controllers', 'models']);
