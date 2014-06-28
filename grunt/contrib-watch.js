module.exports = function (grunt) {
  grunt.config('watch', {
    express: {
      files:  [ 'js/**/*.js' ],
      tasks:  [ 'express:dev' ],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};