module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'run the server and watch for changes', [
    'express'
  ]);
};