// Include gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename'),
    livereload = require('gulp-livereload');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(gulp.dest('js'))
        .pipe(livereload());
});


// Watch Files For Changes
gulp.task('watch', function() {
      browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    livereload.listen();
    gulp.watch('index.html').on("change", reload);;
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/modules/*.scss', ['sass']);
    gulp.watch('scss/pages/*.scss', ['sass']);
    gulp.watch('scss/mobile/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);