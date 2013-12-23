var gulp = require('gulp');
var powerDoctest = require("gulp-power-doctest");
gulp.task('tests', function () {
    gulp.src("items/**/*.js")
        .pipe(powerDoctest());
});

gulp.task('default', function () {
    gulp.watch('items/**/*.js', function (event) {
        gulp.run('tests');
    });
});