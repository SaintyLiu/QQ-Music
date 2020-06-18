const gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var newer = require("gulp-newer");
var htmlClean = require("gulp-htmlclean");

var folder = {
  src: "./src/",
  build: "./build/"
};

//流读取文件      task running grunt 
gulp.task("images", function () {
  gulp.src(folder.src + "images/*")
    .pipe(newer(folder.build + "images"))
    .pipe(imagemin())
    .pipe(gulp.dest(folder.build + "images"));
});

gulp.task("html", ["images"], function () {
  gulp.src(folder.src + "html/*")
    .pipe(htmlClean())
    .pipe(gulp.dest(folder.build + "html"));
});
gulp.task('default', ["html", "images"]);