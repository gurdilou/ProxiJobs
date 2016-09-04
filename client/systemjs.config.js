/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'js', // 'dist',

    '@angular'                    : 'node_modules/@angular',
    'angular2-in-memory-web-api'  : 'node_modules/angular2-in-memory-web-api',
    'rxjs'                        : 'node_modules/rxjs',
    'angular2-toaster'            : 'node_modules/angular2-toaster',
    'moment'                      : 'node_modules/moment'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'angular2-toaster'          : { defaultExtension: 'js' },
    'moment'                    : { main: 'moment.js', defaultExtension: 'js' }
  };

  var paths = {
    'typescript-collections': 'node_modules/typescript-collections/dist/lib/umd.min.js'
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  }

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages,
    paths : paths,
  };

  System.config(config);

})(this);
