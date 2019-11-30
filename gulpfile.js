let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano');
// 处理js文件，压缩合并
gulp.task('js',()=>{
    gulp.src('./src/js/ES5/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})
//处理图片的任务
gulp.task('img',()=>{
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})
// ES6-->ES5
gulp.task('es6',()=>{
    gulp.src('./src/js/ES6/*.js').pipe(babel({
        presets: ['@babel/env']
    })).pipe(gulp.dest('./src/js/ES5'));
})
//处理sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})
//监听任务
gulp.task('default',()=>{
    gulp.watch(['./src/js/ES5/*.js'],['js']);
    gulp.watch('./src/img/*.*',['img']);
    gulp.watch('./src/js/ES6/*.js',['es6']);
    gulp.watch('./src/sass/*.scss',['sass']);
})
