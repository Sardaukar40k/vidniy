var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    browsersync = require('browser-sync'),
    serve = require('serve-static'),
    vinylSourceStream = require('vinyl-source-stream'),
    wiredep = require('wiredep').stream;

/* --- Подключение библиотек через wiredep ---*/
gulp.task('bower', function() {
  gulp.src('index.html')
  .pipe(wiredep({
      directory: 'libs/'
    }))
  .pipe(gulp.dest('./'))
  .pipe(notify('Wiredep Done!'));
});

/* --- Конкатенация и компеляция SCSS в CSS ---*/
gulp.task('sass', function () {
  return gulp.src(['scss/utilities/_*.scss', 'scss/states/_*.scss', 'scss/base/_*.scss', 'scss/layouts/_*.scss', 'scss/modules/_*.scss'])
    .pipe(concat('style.scss'))
    .pipe(autoprefixer({
      "browsers": ["firefox >= 15", "ios >= 8", "android >= 4.0", "and_uc >= 9.9", "ie >= 9"]
    }))
    .pipe(sass({ outputStyle : 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(notify('Sass Done!'));
});

/* --- Конкатенация и минификация скриптов ---*/
gulp.task('scripts', function () {
  return gulp.src('js/_*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
    .pipe(notify('Scripts Done!'));
});

/* ---  --- */

/* --- Запуск сервера ---*/
gulp.task('server', function() {
  return connect().use(serve(_dirname))
    .listen(8080)
    .on('listening', function() {
      console.log('Server running: viev at http://localhost:8080');
    });
});

gulp.task('browsersync', function(cb) {
  return browsersync({
    server: {
      baseDir: './'
    }
  }, cb);
});


/* --- Вотчеры --- */
gulp.task('watch', function() {
  gulp.watch('scss/*/_*.scss', ['sass', browsersync.reload]); //wiredep
  gulp.watch('./index.html', browsersync.reload); //стили
  gulp.watch('js/_*.js', ['scripts', browsersync.reload]); //стили
  gulp.watch('./bower.json', ['wiredep']); //скрипты
});

/* --- Задание по-умолчанию --- */
gulp.task('default', ['sass', 'scripts','bower', 'browsersync', 'watch']);