module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                src: ['app/**/*.js'],
                dest: 'dist/vendor.js',
                options: {
                    watch: true,
                    keepAlive: true
                }
            }
        },

        copy: {
            dist: {
                src: 'app/index.html',
                dest: 'dist/index.html'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-browserify')

    grunt.registerTask('default', ['copy', 'browserify'])
}