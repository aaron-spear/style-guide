// script.js


    var styleApp = angular.module('styleApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.grid']);

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
        
        .when('/typefaces', {
            templateUrl : 'pages/typefaces.html',
            controller  : 'typefacesController'
        })

        .when('/headings', {
            templateUrl : 'pages/headings.html',
            controller  : 'headingsController'
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
        
        .when('/modals', {
            templateUrl : 'pages/modals.html',
            controller  : 'modalsController'
        })        

        .when('/css', {
            templateUrl : 'pages/css.html',
            controller  : 'cssController'
        })
        
        .when('/icons', {
            templateUrl : 'pages/icons.html',
            controller  : 'iconsController'
        })
                                                          
    });

				



				
		
		
		
		
		
		
		
		
		
		
		
		
		
		 
    
     
