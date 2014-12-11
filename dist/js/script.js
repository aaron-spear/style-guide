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
                controller  : 'mainController'
            })

            .when('/colors', {
                templateUrl : 'pages/colors.html',
                controller  : 'mainController'
            })
            
            .when('/typefaces', {
                templateUrl : 'pages/typefaces.html',
                controller  : 'mainController'
            })

            .when('/elements', {
                templateUrl : 'pages/elements.html',
                controller  : 'mainController'
            })

            .when('/headings', {
                templateUrl : 'pages/headings.html',
                controller  : 'mainController'
            })
            
            .when('/forms', {
                templateUrl : 'pages/forms.html',
                controller  : 'mainController'
            })

            .when('/buttons', {
                templateUrl : 'pages/buttons.html',
                controller  : 'mainController'
            })

            .when('/links', {
                templateUrl : 'pages/links.html',
                controller  : 'mainController'
            })
            
            .when('/list', {
                templateUrl : 'pages/list.html',
                controller  : 'mainController'
            })

            .when('/tables', {
                templateUrl : 'pages/tables.html',
                controller  : 'mainController'
            })

            .when('/spacing', {
                templateUrl : 'pages/spacing.html',
                controller  : 'mainController'
            })
            
            .when('/icons', {
                templateUrl : 'pages/icons.html',
                controller  : 'mainController'
            })

            .when('/usage', {
                templateUrl : 'pages/usage.html',
                controller  : 'mainController'
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
