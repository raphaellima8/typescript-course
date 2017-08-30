var gulp = require("gulp");
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("clean", function() {
  return gulp.src('dist')
             .pipe(clean());
});

gulp.task("copy-opts", ['clean', 'compile'], function() {
  return gulp.src('tests/unit/config/mocha.opts')
             .pipe(gulp.dest('dist/tests/unit/config'))
             .pipe(gulp.dest('dist/tests/integration/config'))
});

gulp.task("copy-migration-config", ['clean', 'compile', 'copy-opts'], function() {
  return gulp.src('server/config/config.json')
             .pipe(gulp.dest('dist/server/config'))
});

gulp.task("build", ['copy-migration-config'], function() {
  return gulp.src('server/migrations/*')
             .pipe(gulp.dest('dist/server/migrations'))
});

gulp.task('default', ['build']);
