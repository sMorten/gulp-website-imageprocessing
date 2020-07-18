const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageResize = require('gulp-image-resize');
const fs = require('fs');
const gulp = require('gulp');
const { join } = require('path')

const srcUP = './unprocessed/';
const srcP = "./processed/";

/*//Get size directories
const isDirectory = source => fs.lstatSync(source).isDirectory();
const getDirectories = source =>
  fs.readdirSync(source).map(name => join(source, name)).filter(isDirectory);

//let sizes = [];
let gTasks = [];
getDirectories(srcUP).forEach( direct => {

	//direct.indexOf("/w") > -1 ? sizes[direct.slice(direct.indexOf("/w") + 2)] = direct : sizes['compress'] = direct;
	let taskName = direct.indexOf("/w") > -1? direct.slice(direct.indexOf("/w") + 1): "compress";
	let outputDir = "./processed" + (direct.indexOf("/w") > -1 ? direct.slice(direct.indexOf("/w")) : "/compress");
	console.log(taskName + " : " + outputDir);
	gulp.task(direct.slice(direct.indexOf("/w") + 2),function(){
		return gulp.src("./" + direct)
		.pipe(gulp.dest(outputDir));
	});
	gTasks.push('taskName');

});

gulp.task('default',['w1000']);

//console.log(sizes);*/

function w150(){
	let fold = "w150/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 150,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function w250(){
	let fold = "w250/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 250,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function w500(){
	let fold = "w500/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 500,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function w1000(){
	let fold = "w1000/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 1000,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function w1500(){
	let fold = "w1500/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 1500,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function w2000(){
	let fold = "w2000/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 2000,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}

function w2500(){
	let fold = "w2500/";
	return gulp.src("./unprocessed/" + fold + "**/*")
		.pipe(imageResize({
	      width : 2500,
	      crop : false,
	      upscale : false
	    }))
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}
function compress(){
	let fold = "compress/";
	return gulp.src("./unprocessed/" + fold + "**/*")
	    .pipe(imagemin([imageminPngquant()]))
		.pipe(gulp.dest("./processed/" + fold));

}

exports.reduce = gulp.parallel(w150,w250,w500,w1000,w1500,w2000,w2500,compress);

exports.default = function(){
	gulp.watch("./unprocessed/**/*",gulp.parallel(w150,w250,w500,w1000,w1500,w2000,w2500,compress)); 
}
