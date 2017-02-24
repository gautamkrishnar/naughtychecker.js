import gulp from 'gulp'
import mocha from 'gulp-mocha'
import runSequence from 'run-sequence'
import standard from 'gulp-standard'

const jsFiles = [
  '*.js',
  'src/**/*.js',
  'test/**/*.js'
]

gulp.on('stop', () => process.nextTick(() => process.exit(0)))

gulp.task('standard', () => gulp.src(jsFiles)
  .pipe(standard())
  .pipe(standard.reporter('default', { breakOnError: true, quiet: false }))
)

gulp.task('mocha', () => gulp.src('./test/test.js', { read: false })
  .pipe(mocha({
    reporter: 'spec',
    timeout: 60000,
    compilers: 'js:babel-core/register'
  }))
  .on('error', (e) => {
    console.log(e.message)
    process.exit(0)
  }))

gulp.task('default', callback => runSequence(
  'standard',
  'mocha',
  callback))
