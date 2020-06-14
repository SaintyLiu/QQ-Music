var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var newer = require("gulp-imagemin");

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