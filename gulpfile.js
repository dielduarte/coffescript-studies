var gulp = require('gulp')
	, coffe = require('gulp-coffee');



gulp.task('coffe', function(){
	gulp.src('./src/*.*')
    .pipe(coffe({bare: true}))
    .pipe(gulp.dest('./js'));
});

// Taks default gulp! 
gulp.task('default', function(){
	gulp.start('watch');
});


gulp.task('watch', ['coffe'], function(){
    gulp.watch('src/*.*', ['coffe']);
});