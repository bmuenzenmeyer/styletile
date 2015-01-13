module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scss: { //scss can be watched if you like
				options: {
					livereload: true
				},
				files: ['*.scss', 'index.html'],
				tasks: ['default']
			}
		},
		sass: {
			build: {
				options: {
					style: 'expanded',
					precision: 8,
      		sourcemap: 'none'
				},
				files: {
					'.tile.css': 'tile.scss'
				}
			}
		},
		connect: {
			app:{
				options: {
					port: 9002,
					base: './public',
					hostname: 'localhost',
					open: true,
					livereload: 35729
				}
			}
		}
	});

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	//if you choose to use scss, or any preprocessor, you can add it here
	grunt.registerTask('default', ['sass']);

	grunt.registerTask('serve', ['sass', 'connect', 'watch']);

};