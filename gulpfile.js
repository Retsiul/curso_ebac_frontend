const pacoteGulp = require('gulp');
const pacoteSass = require('gulp-sass')(require('sass'))
const pacoteMin = require('gulp-imagemin')
const pacoteJs = require("gulp-uglify")

function tarefaSass() {
    return pacoteGulp.src("./source/style/*.scss")
        .pipe(pacoteSass())
        .pipe(pacoteGulp.dest("./build/style"))
}

function tarefaImagem() {
    return pacoteGulp.src("./source/img/**/*")
        .pipe(pacoteMin([], { verbose: true }))
        .pipe(pacoteGulp.dest("./build/img"))
}

function tarefaJs() {
    return pacoteGulp.src("./source/scripts/**/*")
        .pipe(pacoteJs())
        .pipe(pacoteGulp.dest("./build/scripts"))
}



exports.funcoes = function () {
    pacoteGulp.watch("./source/style/**/*.scss", { ignoreInitial: false }, pacoteGulp.series(tarefaSass));
    pacoteGulp.watch("./source/img/**/*", { ignoreInitial: false }, pacoteGulp.series(tarefaImagem));
    pacoteGulp.watch("./source/scripts/**/*.js", { ignoreInitial: false }, pacoteGulp.series(tarefaJs));
}