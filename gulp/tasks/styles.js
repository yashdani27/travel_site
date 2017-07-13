var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var simplevars = require('postcss-simple-vars');
var postcss_import = require('postcss-import');

gulp.task('css', function () {
	gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([postcss_import, nested, simplevars, autoprefixer]))
	.on('error', function (errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});
