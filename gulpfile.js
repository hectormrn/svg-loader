/**
 * @author hector.mrn55@gmail.com
 * @description Autoloader svg files...
 */
var gulp = require('gulp'),
    fs = require('fs'),
    jsonModify = require('gulp-json-modify');

const svgFolderPath = './src/images/svg/',
        jsonSvgMap = './src/svgmap.json',
        svgData = {};

/**
* Read all svg files
*/
gulp.task('read-files', function(done){
    fs.readdirSync(svgFolderPath).map(function (file, i, content) {
        fs.readFile(svgFolderPath + file, "utf8", function(err, data){
            if (err) throw err;
            let keyName = file.split(".")[0];
            svgData[keyName] = data;
            if (i === content.length-1) done()
        })
    })
})

gulp.task('create-map', ['read-files'], function () {
    return gulp.src([jsonSvgMap])
        .pipe(jsonModify({ key: 'svg', value: svgData }))
        .pipe(gulp.dest('./src/'))
});

/*
* Task default from gulp
*/
gulp.task('default',['create-map'], function (done) {});