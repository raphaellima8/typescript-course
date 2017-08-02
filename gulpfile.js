var gulp = require("gulp");
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("build", ['clean', 'compile'], function() {
  return gulp.src('tests/unit/config/mocha.opts')
             .pipe(gulp.dest('dist/tests/unit/config'))
             .pipe(gulp.dest('dist/tests/integration/config'))
});

gulp.task("clean", function() {
  return gulp.src('dist')
             .pipe(clean());
});

gulp.task('default', ['build']);
