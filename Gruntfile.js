module.exports = function Grunt(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/tiny-slider.js',
          'js/modal.js',
          'js/smooth-scroll.polyfills.js',
          'js/lazysizes.min.js',
          'js/myown.js',
        ],
        dest: 'dist/js/myown.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/myown.js': ['dist/js/myown.js'],
        },
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'dist/index.html': 'index.html',
        },
      },
    },
    htmllint: {
      all: ['index.html'],
    },
    csslint: {
      src: ['css/myown.css'],
    },
    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true,
        },
        src: ['images'],
      },
    },
    cssmin: {
      target: {
        files: [
          {
            src: 'dist/css/myown.css',
            dest: 'dist/css/myown.css',
          },
        ],
      },
    },
    concat_css: {
      options: {},
      all: {
        src: [
          'css/bootstrap-reboot.min.css',
          'css/bootstrap-grid.min.css',
          'css/modal.css',
          'css/tiny-slider.css',
          'css/myown.css',
        ],
        dest: 'dist/css/myown.css',
      },
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 versions', 'ie 8', 'ie 9'],
      },
      dist: {
        src: 'css/myown.css',
      },
    },
    watch: {
      files: ['index.html', 'css/*.css', 'js/*.js'],
      tasks: [],
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['css/*.css', 'index.html'],
        },
        options: {
          watchTask: true,
          server: './',
        },
      },
    },
    critical: {
      test: {
        options: {
          base: './',
          css: ['css/bootstrap-grid.min.css', 'css/myown.css'],
        },
        src: 'index.html',
        dest: 'dist/index-critical.html',
      },
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist',
      },
    },
    usemin: { html: ['dist/index.html'] },
    copy: {
      task0: {
        src: 'index.html',
        dest: 'dist/index.html',
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('ondev', ['browserSync', 'watch']);
  grunt.registerTask('onprod', [
    'autoprefixer',
    'concat_css',
    'copy:task0',
    'useminPrepare',
    'concat',
    'usemin',
    'cssmin',
    'uglify',
  ]);
};
