module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('server', ['express:dev', 'watch']);
};