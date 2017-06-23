module.exports=function(grunt){
  grunt.initConfig({
   pkg:grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator:';'
      },
      dist: {
        src:['js/jquery-1.11.3.min.js','js/bootstrap.min.js','js/jquery.scrollTo.min.js','js/lazysizes.min.js','js/slick.js','js/myown.js'],
        dest:'dist/myown.js'
      }
    },
    uglify: {
      my_target: {
        files:{
          'dist/myown.js':['dist/myown.js']
        }
      }
    },
    jshint: {
      files:['js/myown.js'],
      options: {
        globals: {
          jQuery:true,
          console:true,
          module:true,
          document:true
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments:true,
          collapseWhitespace:true
        },
        files: {
          'dist/index.html':'index.html'
        }
      }
    },
    htmllint: {
      all:['index.html']
    },
    csslint: {
      src: ['css/myown.css']
    },
    imageoptim: {
      myTask: {
        options: {
          jpegMini:false,
          imageAlpha:true,
          quitAfter:true
        },
        src: ['images']
      }
    },
    cssmin: {
      target: {
        files: [
          {
            src:'dist/myown.css',
            dest:'dist/myown.css'
          }
        ]
      }
    },
    concat_css: {
      options: {
      },
      all: {
        src: ["css/bootstrap.min.css","css/font-awesome.min.css","css/slick.css","css/myown.css"],
        dest:"dist/myown.css"
      }
    },
    autoprefixer: {
      options: {
      browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    dist: {
      src: 'css/myown.css'
    }
  },
    watch: {
      files: ['index.html','css/*.css','js/*.js'],
      tasks: []
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            'index.html']
        },
        options: {
          watchTask: true,
          server: './../artoko.org'
        }
      }
    },
    stylelint: {
      simple: {
        options: {
          configFile: './.stylelintrc.json',
          format: 'css'
        },
        src:'css/myown.css'
      }
    }
  });   
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.registerTask('ondev', ['htmlmin','autoprefixer','concat_css','cssmin','concat','uglify']);
};
