var
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    concatcss = require('gulp-concat-css'),

    folder = {
        src: '_src/',
        dist: '_dist/'
    };

gulp
    .task('html', function () {
        return gulp.src(folder.src + '*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(folder.dist));
    })
    .task('img', function () {
        var out = folder.dist + 'img/';
        return gulp.src(folder.src + 'img/**/*')
            .pipe(newer(out))
            .pipe(imagemin({optimizationLevel: 5}))
            .pipe(gulp.dest(out));
    })
    .task('js', function () {
        return gulp.src(folder.src + 'js/**/*')
            .pipe(deporder())
            .pipe(concat('main.js'))
            .pipe(stripdebug())
            .pipe(uglify())
            .pipe(gulp.dest(folder.dist + 'js/'));
    })
    .task('css', function () {
        var postCssOpts = [
            assets({loadPaths: ['img/', 'icon/']}),
            autoprefixer({browsers: ['last 2 versions', '> 2%']}),
            mqpacker,
            cssnano
        ];
        return gulp.src(folder.src + 'css/**/*')
            .pipe(concatcss('main.css'))
            .pipe(postcss(postCssOpts))
            .pipe(gulp.dest(folder.dist + 'css/'));

    })
    .task('icon', function() {
        gulp.src(folder.src+'icon/**/*')
            .pipe(gulp.dest(folder.dist+'icon/'));
    })

    .task('build', ['html', 'img', 'css', 'js', 'icon'])

    .task('watch', function() {
        gulp.watch(folder.src + '*.html', ['html']);
        gulp.watch(folder.src + 'img/**/*', ['img']);
        gulp.watch(folder.src + 'js/**/*', ['js']);
        gulp.watch(folder.src + 'css/**/*', ['css']);
        gulp.watch(folder.src + 'icon/**/*', ['icon']);

    })

    .task('default', ['build','watch']);
