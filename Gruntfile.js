/* jshint node:true */
'use strict';

/**
 * Manage project tasks. 
 */
module.exports = function(grunt) {
	
	// auto load grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: {
			blog: {
				src: 'extra/blog-theme',
				server: 'public/blog',
				theme: '<%= config.blog.server %>/wp-content/themes/citae'
			}
		},

		// watch for changes for files and execute an execute a task
		watch: {
			site: {
				files: ['**/*'],
				options: {
					livereload: true
				}
			}
		}
	});
	
	// default task: execute dev environment tasks
	grunt.task.registerTask('default', ['lint', 'sync:blog', 'sass:dev']);
	
	// execute dist environment tasks
	grunt.task.registerTask('dist', ['lint', 'sync:blog', 'sass:dist', 'uglify:dist']);
	
	// lint all project
	grunt.task.registerTask('lint', ['jshint', 'scsslint']);
};
