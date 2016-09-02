module.exports = function (grunt) {
    grunt.initConfig({

        stylus: {
            compile: {
                options: {
                    paths: ['stylus'],
                },
                files: {
                    'css/style.css': 'stylus/style.styl',
                },
            },

        },

        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    encoding: 'UTF8',
                },
                files: {
                    'index.html': 'pug/index.pug',
                }
            }
        },

        watch: {
            stylus: {
                files: ['stylus/*.styl'],
                tasks: ['stylus:compile'],   // This needs to be "tasks" (not "task")
                options: {livereload: true},
            },
            pug: {
                files: ['pug/*.pug'],
                tasks: ['pug:compile'],   // This needs to be "tasks" (not "task")
                options: {livereload: true},
            },
        },


    });


    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.registerTask('compile', ['newer:stylus:all']);
};
