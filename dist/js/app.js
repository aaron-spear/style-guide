// script.js


    var styleApp = angular.module('styleApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
			var client = new ZeroClipboard($(".btn-clipboard-forms"));	
			$('.timepicker').timepicker();
			$('select.select2-search').select2();
			$('select.select2').select2({minimumResultsForSearch: -1});
			$('button.create').click(function() {
				$('.form-group.required').addClass('has-error');
			});			
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
    
    
		// Tabs                 
    
    styleApp.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });   
    
    
		// Date Picker    
    
		styleApp.controller('DatepickerCtrl', function ($scope) {
		  $scope.today = function() {
		    $scope.dt = new Date();
		  };
		  $scope.today();
		
		  $scope.clear = function () {
		    $scope.dt = null;
		  };
		
		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };
		
		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();
		
		  $scope.open = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();
		
		    $scope.opened = true;
		  };
		
		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1,
		    showWeeks:'false'
		  };
		
		  $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
		  $scope.format = $scope.formats[1];
		}); 
		
		
		// Time Picker		 
		
		styleApp.controller('TimepickerDemoCtrl', function ($scope, $log) {
		  $scope.mytime = new Date();
		
		  $scope.hstep = 1;
		  $scope.mstep = 15;
		
		  $scope.options = {
		    hstep: [1, 2, 3],
		    mstep: [1, 5, 10, 15, 25, 30]
		  };
		
		  $scope.ismeridian = true;
		  $scope.toggleMode = function() {
		    $scope.ismeridian = ! $scope.ismeridian;
		  };
		
		  $scope.update = function() {
		    var d = new Date();
		    d.setHours( 14 );
		    d.setMinutes( 0 );
		    $scope.mytime = d;
		  };
		
		  $scope.changed = function () {
		    $log.log('Time changed to: ' + $scope.mytime);
		  };
		
		  $scope.clear = function() {
		    $scope.mytime = null;
		  };
		});
		
				
	
		// Smooth Scroll
		
		styleApp.service('anchorSmoothScroll', function(){
		    
	    this.scrollTo = function(eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - 60;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
	
	    };
		    
		});

		styleApp.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {	    
	    $scope.gotoElement = function (eID){
	      anchorSmoothScroll.scrollTo(eID);	      
	    };
	  });
	  
	  styleApp.controller('CollapseCtrl', function ($scope) {
		  $scope.isCollapsed = false;
		});      		
		

		
    
     
