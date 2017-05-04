const fs = require('fs');
const gulp = require('gulp');
const browserify = require('browserify');
const babel = require('gulp-babel');

const src = './src';
const dest = './public/javascripts';

const srcFiles = [ `${src}/*.js`, `${src}/components/*.js` ];
const watchRoutines = [ 'normalBundleTranspilation', 'componentSystemTranspilation' ];

// This configuration object applies specified presets, with explicit option of ignoring `.babelrc`.
const normalBundleBabelConfig = {
  'presets': [ 'es2015', 'react', 'stage-0' ],
  'babelrc': false
}
// console.log('normalBundleBabelConfig', normalBundleBabelConfig);

// This task is a simplified version of our normal transpile and bundle (sans minification).
gulp.task('normalBundleTranspilation', () => {
  return browserify({
    entries: `${src}/base.js`,
    debug: true
  }).transform('babelify', normalBundleBabelConfig)
    .bundle()
    .on('error', (err) => console.log(err))
    .pipe(fs.createWriteStream(`${dest}/app.js`));
});

// This configuration object combines the normal settings with additional plugin for SystemJS.
const systemJSBabelConfig = Object.assign(
  {},
  normalBundleBabelConfig,
  { 'plugins': [ 'transform-es2015-modules-systemjs' ] }
);
// console.log('systemJSBabelConfig:', systemJSBabelConfig);

// This task transpiles files separately, with the additional transformation of SystemJS module
// formatting.
gulp.task('componentSystemTranspilation', () => {
  return gulp.src(`${src}/components/*.js`)
             .pipe(babel(systemJSBabelConfig))
             .pipe(gulp.dest(`${dest}/`));
});

gulp.task('default', watchRoutines, () => {
  gulp.watch([ srcFiles[0] ], [ watchRoutines[0] ]);
  gulp.watch([ srcFiles[1] ], [ watchRoutines[1] ]);
});
