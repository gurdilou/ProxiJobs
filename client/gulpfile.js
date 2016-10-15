var gulp = require('gulp');

//variables
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var ts = require('gulp-typescript');
var cache = require('gulp-cached');
var typedoc = require("gulp-typedoc");




//*** MAIN TASKS
// I - Default task
gulp.task('default', ['serve']);

// II - Local html server during desktop developement
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.',
      online: false,
      index: "index.html",
      routes: {
        "/map": ".",
        "/search": ".",
        "/offers": ".",
      },
      entryFile:  "index.html"
    }
  });
  gulp.watch(['*.html', 'app/**/*.component.html', 'js/**/*.js'], reload);
  gulp.watch(['lib/semantic/dist/*.css', 'lib/semantic/dist/*.js'],['semantic-ui']);
  gulp.watch('styles/**/*.scss',['sass']);
  // gulp.watch(['app/**/*.ts'], ['compile-ts']);
});




//Scss to css
gulp.task('sass', function() {
  gulp.src('./styles/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css'))
    .pipe(cache('sass'))
    .pipe(browserSync.stream());
});


// Transpile typescript to javascript
var tsProject = ts.createProject('tsconfig.json');
gulp.task('compile-ts', function() {

  var tsResult = gulp.src( ['typings/modules/**/*.d.ts', 'app/**/*.ts'])
    // .pipe(cache('tscompile'))
    .pipe(tsProject());

    return tsResult.js
      .pipe(gulp.dest('js'));
});

// semantic ui
gulp.task('semantic-ui', function() {
  return gulp.src(['lib/semantic/dist/*.css', 'lib/semantic/dist/*.js'])
    .pipe(cache('semanticui'))
    .pipe(browserSync.stream());
});

// Compile les sources
gulp.task('build', ['sass', 'compile-ts', 'semantic-ui'], function() {
  return;
});

// Documentation
gulp.task('doc', function() {

  return gulp
      .src(["app/**/*.ts", "typings/modules/**/*.ts"])
      .pipe(typedoc({
          module: "commonjs",
          target: "es6",
          moduleResolution: "node",
          out: "docs/",
          name: "ProxiJobs",
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          includeDeclarations: true,
          exclude: "node_modules/**/*.ts",
          readme: "README.md"
      }));
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
