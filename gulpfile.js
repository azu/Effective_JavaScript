var gulp = require('gulp');
var watch = require('gulp-watch');
var powerDoctest = require("gulp-power-doctest");
gulp.task('tests', function () {
    gulp.src("items/**/*.js")
        .pipe(powerDoctest());
});

gulp.task('default', function () {
    gulp.src('items/**/*.js')
        .pipe(watch(function (files) {
            return files.pipe(powerDoctest());
        }));
});