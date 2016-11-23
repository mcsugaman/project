/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var webroot = "./";

var gulp = require('gulp');
var rimraf = require('rimraf');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {           //source poti do datotek 
    js: webroot + "wwwroot/js/**/*.js",
    css: webroot + "wwwroot/css/**/*.css",
    minJs: webroot + "wwwroot/js/**/*.min.js",
    minCss: webroot + "wwwroot/css/**/*.min.js"
};
gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs])
    //.pipe(concat(paths.concatJsDest))         //to uporabljas za bundlanje
    .pipe(uglify())                             //minimizacija
    .pipe(rename({suffix: '.min'}))             //spremenis koncnico
    .pipe(gulp.dest("./wwwrootdist/js"));                      //destination folder
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
    //pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./wwwrootdist/css"));
});
