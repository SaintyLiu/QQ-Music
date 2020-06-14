var gulp = require("gulp");

var folder = {
  src: "./src/",
  build: "./build/"
};

//流读取文件      task running grunt 
gulp.task("images", function () {
  gulp.src(folder.src + "images/*")
    .pipe(gulp.dest(folder.build + "images"));
});