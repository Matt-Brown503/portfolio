//Required packages
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	del = require('del'),
	sass = require('gulp-ruby-sass'),
	notify = require('gulp-notify'),
	bower = require('gulp-bower'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require ('gulp-imagemin');

//config files
var config = {
	sassPath: './app/scss',
	bowerDir: './bower_components'
};
var autoprefixerOptions = {
	browsers: ['last 2 versions','>5%','Firefox ESR']
};
//Gulp Tasks

gulp.task('bower',function(){
	return bower()
		.pipe(gulp.dest(config.bowerDir));
});


//js
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js'])
	.pipe(gulp.dest('app/js'))
	.pipe(reload({stream:true}));
});

gulp.task('images'), function(){
	gulp.src('app/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('app/img'));
};

//css
gulp.task('css', function(){
	return sass(config.sassPath + '/styles.scss', {
			style: 'expanded',
			loadPath: [
				'./app/scss',
				config.bowerDir + '/bootstrap-sass/assets/stylesheets'
			]
		})
		.on('error', notify.onError(function(error){
			return 'error: ' + error.message;
		}))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest('./app/css'))
		.pipe(reload({stream:true}));
});
//html
gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
});
//build files
gulp.task('build:clear', function(cb){
	del([
		'build/**'
	], cb);
});

gulp.task('build:copy', function(){
	return gulp.src('app/**/*/')
	.pipe(gulp.dest('build'));
});

gulp.task('build:remove', ['build:copy'], function(cb){
	del([
		'build/scss'
	], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);


gulp.task('build:serve', function(){
	browserSync({
		server:{
			baseDir: './build/'
		}
	});
});

//watch task for sass conversion and browser-sync
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts'])
	gulp.watch('app/**/*.html', ['html'])
	gulp.watch('app/**/*.scss', ['css'])
});

//Browser Sync for page reloading
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: './app/'
		}
	});
});

//runs when 'gulp' is called in the console
gulp.task('default', ['scripts','html','css','browser-sync','watch']);