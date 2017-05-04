const fs = require('fs');
const gulp = require('gulp');
const browserify = require('browserify');
const babel = require('gulp-babel');

const src = './src/';
const dest = './public/javascripts/';

const bundlePresets = {
  'presets': [ 'es2015', 'react', 'stage-0' ],
  'babelrc': false
}
console.log('bundlePresets', bundlePresets);

const makeConfig = Object.assign(
  {},
  bundlePresets,
  { 'plugins': [ 'transform-es2015-modules-systemjs' ] }
);
console.log('makeConfig:', makeConfig);

gulp.task('make-bundle', () => {
  var b = browserify({
    entries: `${src}base.js`,
    debug: true
  });

  return b.transform('babelify', bundlePresets)
          .bundle()
          .on('error', (err) => console.log(err))
          .pipe(fs.createWriteStream(`${dest}app.js`));
});

gulp.task('transform-system', () => {
  return gulp.src(`${src}components/*.js`)
             .pipe(babel(makeConfig))
             .pipe(gulp.dest(`${dest}`));
  // require('babel-core').transform('code', makeConfig);
});

gulp.task(
  'default',
  [ 'make-bundle', 'transform-system' ],
  () => gulp.watch([ `${src}*.js`, `${src}components/*.js` ], [ 'make-bundle', 'transform-system' ])
);
