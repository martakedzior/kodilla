module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "sass/*.sass",
        tasks: ['sass']
      }
    },      
    // SASS task config      
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/main.css': 'sass/main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	}
    
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s)

  grunt.registerTask('default', ['sass', 'imagemin']);
};