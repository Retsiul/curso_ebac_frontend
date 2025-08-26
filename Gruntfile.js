module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {

            development: {
                files: { 'dev/styles/main.css': 'src/styles/main.less' }
            },


            production: {
                options: { compress: true, },
                files: { 'dist/styles/main.min.css': 'src/styles/main.less' }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [{

                        match: 'ENDERECO_DO_CSS',
                        replacement: 'styles/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: '../src/scripts/main.js'
                    }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]

            },
              dist: {
                options: {
                    patterns: [{

                        match: 'ENDERECO_DO_CSS',
                        replacement: 'styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: 'scripts/main.min.js'
                    }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]

            },
            
        },

        uglify:{
            target:{
                files:{'dev/scripts/main.min.js':['src/scripts/main.js'],'dist/scripts/main.min.js':['src/scripts/main.js']
                }
            }
        },
         htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean:['prebuild']
    });




    grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-uglify');
          grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['less','uglify']);
    grunt.registerTask('build', ['less:production','replace:dist','uglify','htmlmin:dist','clean']);
}