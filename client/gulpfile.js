var gulp = require('gulp');

//variables
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var ts = require('gulp-typescript');
var cache = require('gulp-cached');


var tsProject = ts.createProject({
  "target": "es6",
  "module": "commonjs",
  "allowJs" : true,
  "experimentalDecorators": true,
});

//*** MAIN TASKS
// I - Default task
gulp.task('default', ['serve']);

// II - Local html server during desktop developement
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });
  gulp.watch(['*.html'], reload);
  gulp.watch('scss/**/*.scss',['sass']);
  gulp.watch('app/**/*.ts', ['compile-ts']);
});




//Scss to css
gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss', {cwd: workDir})
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css', {cwd: workDir}))
    .pipe(browserSync.stream());
});

// Transpile typescript to javascript
gulp.task('compile-ts', function() {
  
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(cache('tscompile'))
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

//pour créer la prod TODO
//~ gulp.task('build-js', function () {
   //~ return gulp.src(['js/**/*.js', '!js/index.js', '!js/templates.js', '!js/lib/*'], {cwd: workDir})
      //~ .pipe(jshint())
      //~ .pipe(jshint.reporter('default'))
      //~ .pipe(concat('app.js'))
      //~ .pipe(uglify())
      //~ .pipe(gulp.dest(prodDir+'/js/'));
//~ });

