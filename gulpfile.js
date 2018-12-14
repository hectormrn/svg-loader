/**
 * @author hector.mrn55@gmail.com
 * @description Autoloader svg files...
 */
const   gulp    = require('gulp'),
        fs      = require('fs'),
        path    = require('path'),
        through = require('through2'),
        sanitize = require("sanitize-filename"),
        REL_PATH_SVG_FILES = './images/svg/',
        ROOT_PATH_SVG_FILES = './src/images/svg',
        FILE_EXTENSION = '.svg',
        TARGET_JS_FILE = './src/tree.js';
let     exportPaths  = ""; 

gulp.task('scannDir', function () {
    const streamFilesPath = path.join(ROOT_PATH_SVG_FILES + '/**/*.svg') 
    return gulp.src(streamFilesPath)
        .pipe(through.obj(function (file, enc, cb) {
            let iconName = file.relative.substr(file.relative.lastIndexOf('/') + 1);
            iconName = sanitize(iconName.replace(FILE_EXTENSION, ''))
            exportPaths += `export const ${iconName} = require('${REL_PATH_SVG_FILES}${file.relative}'); \n`
            cb(null);
        }))
});

gulp.task('export-map', ['scannDir'], function () {
    fs.writeFile(TARGET_JS_FILE, exportPaths, function(err){
        if (err) throw err;
    })
});

/*
* Task default from gulp
*/
gulp.task('default',['export-map'], function (done) {});