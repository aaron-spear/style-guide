require.config({
	baseUrl: "dist/js",
  map: {
    '*': {
      'less': 'requirejs/require-less/less', // path to less
      'css': 'requirejs/require-css/css' // path to css
    }
  },	
	paths: {
		"angularjs": "lib/angular.min",
		"ngRoute": "lib/angular-route.min",
		"ngAnimate": "lib/angular-animate.min",
		"jquery": "lib/jquery-1.11.2.min",
		"ui.bootstrap": "lib/ui-bootstrap.min",
		"bootstrap-input": "lib/bootstrap-input",
		"sortable": "lib/jquery-sortable",
		"perfect_scrollbar": "lib/angular-perfect-scrollbar",
		"smart-table": "lib/smart-table.min",
		"select2": "lib/select2",
		"ui.grid": "lib/ui-grid",
		"timepicker": "lib/timepicker",
		"highstock": "lib/highstock.src",
		"highcharts-ng": "lib/highcharts-ng",
		"viewport-fix": "lib/ie10-viewport",
		"prettify": "lib/prettify",
		"zeroclipboard": "lib/ng-clip",
		"modernizr": "lib/modernizr",
		
		"styleApp": "styleApp"
	},
	
  shim: {
		'angularjs': {
			deps: [
				"jquery"
			]
		},    
    "ngAnimate": {
      exports: "ngAnimate",

      deps: [
        "angularjs",
        "jquery"
      ]
    },
    "ngRoute": {
      exports: "ngRoute",

      deps: [
        "angularjs"
      ]
    },
    "angularjs": {
      exports: "angular",
      
      deps: [
	      "jquery"
      ]
    },
    "sortable": {
      deps: [
        "jquery"
      ]
    },
    "bootstrap-input": {
      deps: [
        "jquery"
      ]
    },    
    "bootstrap": {
      deps: [
        "jquery"
      ],
      exports: "jQuery.fn.modal"
    },
    "ui.bootstrap": {
      deps: [
        "angularjs"
      ]
    },  
    "ui.grid": {
      deps: [
        "angularjs"
      ]
    },  
    "perfect_scrollbar": {
      deps: [
        "angularjs",
        "lib/perfect-scrollbar.min"
      ]
    },  
    "lib/perfect_scrollbar.min": {
      deps: [
				"jquery"
      ]
    },              
    "timepicker": {
      deps: [
        "jquery"
      ]
    },
    "prettify": {
      deps: [
        "jquery"
      ]
    }, 
    "zeroclipboard": {
      deps: [
        "angularjs",
        "zeroclipboardfix"
      ]
    },        
    "lib/zeroclipboard": {
      deps: [
        "jquery"
      ]
    },
    "select2": {
      deps: [
        "jquery"
      ]
    },
    "util": {
      deps: [
        "jquery"
      ]
    },      
    "smart-table": {
      deps: [
        "angularjs"
      ]
    },
    "highcharts-ng": {
      deps: [
        "angularjs",
        "lib/highcharts.src"
      ]
    },
    "lib/highcharts.src": {
      deps: [
        "jquery"
      ]
    }          
  }
	
});

// ZeroClipboard is modularized but ng-clip is not. Ng-clip can't find ZeroClipboard. Below is a fix.
define("zeroclipboardfix",[
  "lib/zeroclipboard"  
],
function(zeroclipboard){
	window.ZeroClipboard = zeroclipboard;
});

define([
  "angularjs",
  "styleApp",
  "controllers",
  "directives",
  "filters",
  "services",
  "bootstrap-input",
  "sortable",
  "timepicker",
  "select2",
  "prettify",
  "zeroclipboard",
  "util",
  'css!../../../css/main'   
],
function(angular, uxModule){
    "use strict";
    return uxModule;
});




