var gulp = require('gulp');
var dirstream = require('mkdirp-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// Crea la estructura de directorios del proyecto.
gulp.task('esqueleto',	function(){
	dirstream(['./src/js/actions',
				'./src/js/components',
				'./src/js/dispatchers',
				'./src/js/stores',
				'./src/assets/css',
				'./src/assets/images']);
});

// Genera el bundle para la ejecución en servidor
gulp.task('browserify', 
	function(){
	browserify('./src/js/main.js')
	.transform('reactify')
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('dist/js'));
	}
);

// Copia los ficheros fuentes al directorio de distribucion. 
// Para ejecutarlo (A MANO): npm run copy
gulp.task('copy', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
	gulp.src('src/assets/**')
	.pipe(gulp.dest('dist/assets'));	
});

gulp.task('esqueleto',['esqueleto']);

gulp.task('default',['browserify'], function(){
	return gulp.watch('src/**/*.*',['browserify'])
});
