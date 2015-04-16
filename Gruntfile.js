module.exports = function(grunt) {

    grunt.initConfig({

        /* Sass configuration */
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto',
                    require: 'sass-globbing'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss', '**/*.scss', '!vendor/**/*'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        /* JSHint - Check JS syntax */
        jshint: {
            options: {
                loopfunc: true,
                expr: true
            },
            scripts: ['js/base/**/*.js']
        },

        /* Uglify - Concatenate and minify JavaScript */
        uglify: {
            options: {
                sourceMap: true
            },
            scripts: {
                files: {
                    'js/base.min.js' : [
                        'js/vendor/**/*.js',
                        '!js/vendor/modernizr.min.js',
                        'js/base/**/*.js',
                        'js/base.js'
                    ]
                }
            }
        },

        /* Automatically add vendor-prefixes to CSS using the "Can I Use" database. */
        // Use '$ npm update caniuse-db' to update the prefixes database.
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 8'],
                map: true
            },
            css: {
                src: ['css/base.css']
            }
        },

        /* Watch scss and js and process when they're updated */
        watch: {
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            scripts: {
                files: ['js/**/*.js', '!js/base.min.js'],
                tasks: ['jshint', 'uglify']
            }
        }

    });

    // Load task plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Register the default task.
    grunt.registerTask('default', 'watch');
};
