// script.js


    var styleApp = angular.module('styleApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    styleApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/overview.html',
                controller  : 'mainController'
            })
            
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

            .when('/css', {
                templateUrl : 'pages/css.html',
                controller  : 'spacingController'
            })
            
            .when('/icons', {
                templateUrl : 'pages/icons.html',
                controller  : 'iconsController'
            })

            .when('/usage', {
                templateUrl : 'pages/usage.html',
                controller  : 'usageController'
            });

                                                          
    });

    // create the controller and inject Angular's $scope
    styleApp.controller('mainController', function($scope) {
        $scope.pageClass = 'page-overview';
    });

    styleApp.controller('logoController', function($scope) {
        $scope.pageClass = 'page-logo';
    });

    styleApp.controller('colorsController', function($scope) {
        $scope.pageClass = 'page-colors';
    });
    
    styleApp.controller('typefacesController', function($scope) {
        $scope.pageClass = 'page-type';
    });

    styleApp.controller('elementsController', function($scope) {
        $scope.pageClass = 'page-elements';
    });

    styleApp.controller('headingsController', function($scope) {
        $scope.pageClass = 'page-headings';
    });
    
    styleApp.controller('formsController', function($scope) {
        $scope.pageClass = 'page-forms';
    });

    styleApp.controller('buttonsController', function($scope) {
        $scope.pageClass = 'page-buttons';
    });

    styleApp.controller('linksController', function($scope) {
        $scope.pageClass = 'page-links';
    });

    styleApp.controller('listController', function($scope) {
        $scope.pageClass = 'page-list';
    });    
    
    styleApp.controller('tablesController', function($scope) {
        $scope.pageClass = 'page-tables';
    });

    styleApp.controller('spacingController', function($scope) {
        $scope.pageClass = 'page-css';
    });

    styleApp.controller('iconsController', function($scope) {
        $scope.pageClass = 'page-icons';
    }); 
    
    styleApp.controller('usageController', function($scope) {
        $scope.pageClass = 'page-usage';
    });                
    
    styleApp.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });   
    
     
