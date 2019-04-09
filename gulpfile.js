var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serverSimulate', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: 'index.html'
    });
});