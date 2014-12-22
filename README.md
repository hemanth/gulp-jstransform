## Gulp [jstransform](https://github.com/facebook/jstransform/)

## Usage

```javascript
var jstransform = require('gulp-jstransform');

gulp.task('jstransform', function() {
  gulp.src('./src/*.js')
    .pipe(jstransform().on('error', gutil.log))
    .pipe(gulp.dest('./public/'))
});
```
