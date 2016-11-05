/**
* Gulp task to run the web server and live reload the changes in browser
*
* @usage
*   $ gulp webserver
*/

var gulp   = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

gulp.task('webserver', function () {
 gulp.src('')
   .pipe(server({
     livereload:       true,
     open:             true,
     log:              'debug',
     clientConsole:    true,
     defaultFile:      'index.html',
     fallback:  'app/index.html'
   }));
});

gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});
