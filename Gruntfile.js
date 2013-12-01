module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        esteWatch: {
            options: {
                dirs: ["items/**"],
                livereload: {
                    enabled: true,
                    extensions: ['js'],
                    port: 35729
                }
            },
            'js': function (filepath) {
                execPowerDocTest(filepath);
            }
        }
    });
    grunt.loadNpmTasks("grunt-este-watch");
    grunt.registerTask('default', ['esteWatch']);
    grunt.registerTask('test', ['shell:power_doctest']);
};

function execPowerDocTest(path) {
    console.log("path", path);
    var sys = require('sys');
    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }

    exec('`npm bin`/power-doctest "' + path + '"', puts);
}