// script.js

    var styleApp = angular.module('styleApp', ['ngRoute']);

    // configure our routes
    styleApp.config(function($routeProvider) {
        $routeProvider

            .when('/overview', {
                templateUrl : 'pages/overview.html',
                controller  : 'mainController'
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

            .when('/elements', {
                templateUrl : 'pages/elements.html',
                controller  : 'elementsController'
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

            .when('/links', {
                templateUrl : 'pages/links.html',
                controller  : 'linksController'
            })
            
            .when('/list', {
                templateUrl : 'pages/list.html',
                controller  : 'listController'
            })

            .when('/tables', {
                templateUrl : 'pages/tables.html',
                controller  : 'tablesController'
            })

            .when('/spacing', {
                templateUrl : 'pages/spacing.html',
                controller  : 'spacingController'
            })
            
            .when('/icons', {
                templateUrl : 'pages/icons.html',
                controller  : 'iconsController'
            })

            .when('/usage', {
                templateUrl : 'pages/usage.html',
                controller  : 'usageontroller'
            });
                                                          
    });

    // create the controller and inject Angular's $scope
    styleApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    styleApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    styleApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
