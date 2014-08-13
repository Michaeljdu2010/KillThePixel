'use strict';

module.exports = function(grunt){
  // CONFIGURATION FOR PLGUINS
  grunt.initConfig({
       
       less: {
          main: {
           files: {
             "dev/style/main.css": "dev/less/*.less" 
           }
         }
     },
     watch: {
       less:{
          files: ['dev/less/*.less'],
          tasks: ['less']
       }
     }
      
  });

  // LOAD PLUGINS:
  grunt.loadNpmTasks("grunt-contrib-uglify"); 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTER TASKS:
  grunt.registerTask("default", ["less", "watch"]);
}