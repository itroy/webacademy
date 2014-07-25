/*
 * Gruntfile
 * Author: Troy Ginbey
 * Project: Web Academy
 *
 */

// Wrapper function
module.exports = function(grunt) {

// Project and task config
 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

// Loading Grunt plugins and tasks
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task
grunt.registerTask('default', ['uglify']);
// Section: 4: Custom tasks
};
