// app.js

define([
	"angularjs",
	"ngRoute",
	"ngAnimate",
	"ui.bootstrap",
	"ui.grid",
	"smart-table",
	"perfect_scrollbar",
	"highcharts-ng"
], function(angular) {
    var styleApp = angular.module('styleApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.grid', 'smart-table', 'perfect_scrollbar', 'highcharts-ng', 'ngClipboard']);

    // configure our routes
    styleApp.config(function($routeProvider) {
      $routeProvider

        .when('/', {
            templateUrl : 'pages/overview.html',
            controller  : 'overviewController'
        })
        
        .when('/overview', {
            templateUrl : 'pages/overview.html',
            controller  : 'overviewController'
        })            

        .when('/logo', {
            templateUrl : 'pages/logo.html',
            controller  : 'logoController'
        })

        .when('/colors', {
            templateUrl : 'pages/colors.html',
            controller  : 'colorsController'
        })
        
        .when('/typography', {
            templateUrl : 'pages/typography.html',
            controller  : 'typographyController'
        })
        
        .when('/layout', {
            templateUrl : 'pages/layout.html',
            controller  : 'layoutController'
        })        
        
        .when('/forms', {
            templateUrl : 'pages/forms.html',
            controller  : 'formsController'
        })

        .when('/buttons', {
            templateUrl : 'pages/buttons.html',
            controller  : 'buttonsController'
        })

        .when('/tables', {
            templateUrl : 'pages/tables.html',
            controller  : 'tablesController'
        })

        .when('/css', {
            templateUrl : 'pages/css.html',
            controller  : 'cssController'
        })
        
        .when('/icons', {
            templateUrl : 'pages/icons.html',
            controller  : 'iconsController'
        })
        
        .when('/graphs', {
            templateUrl : 'pages/graphs.html',
            controller  : 'graphsController'
        })        
                                                          
    });
    return styleApp;
});
				



				
		
		
		
		
		
		
		
		
		
		
		
		
		
		 
    
     
