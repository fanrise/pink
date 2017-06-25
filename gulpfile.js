var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


// gulp.task('start', function() {
//     browserSync.init({
//         server: {
//             baseDir: "."
//         }
//     });
// });
gulp.task('less', function () {
  return gulp.src('less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "."
    });

    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload);
});
// gulp.task('default', ['serve']);
