'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src(["./sass/base.scss", './sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

module.exports.buildStyles = buildStyles;
module.exports.watch = function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./**/*.scss", buildStyles);
    gulp.watch(["./**/*.html", "./css/*.css"]).on('change', browserSync.reload);
};