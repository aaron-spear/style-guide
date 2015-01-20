// controllers.js


		// Pages
		
		styleApp.controller('overviewController', function($scope) {
	    $scope.pageClass = 'page-overview';		  
		});
		
		styleApp.controller('logoController', function($scope) {
	    $scope.pageClass = 'page-logo';
		});
		
		styleApp.controller('colorsController', function($scope) {
	    $scope.pageClass = 'page-colors';
		});
		
		styleApp.controller('typographyController', function($scope) {
	    $scope.pageClass = 'page-typography';
		});
		
		styleApp.controller('layoutController', function($scope) {
	    $scope.pageClass = 'page-layout';
		});		
		
		styleApp.controller('formsController', function($scope) {
		  $scope.pageClass = 'page-forms';
			var client = new ZeroClipboard($(".btn-clipboard-forms"));	
			
			$('.timepicker').timepicker();
			
			$('select.select2-search').select2();
			$('select.select2').select2({minimumResultsForSearch: -1});
			
			$('button.create').click(function() {
				$('.form-group.required').addClass('has-error');
				$('.alert-danger').addClass('show');
			});	
			$('button.cancel').click(function() {
				$('.form-group.required').removeClass('has-error');
				$('.alert-danger').removeClass('show');
			});				
			$('button.close').click(function() {
				$('.alert-danger').removeClass('show');
			});						
		});
		
		styleApp.controller('buttonsController', function($scope) {
	    $scope.pageClass = 'page-buttons';
		}); 
		
		styleApp.controller('tablesController', function($scope) {
	    $scope.pageClass = 'page-tables';
			
			var client = new ZeroClipboard($(".btn-clipboard-tables"));	
			
			$('.sortable').sortable({
			  containerSelector: 'table',
			  itemPath: '> tbody',
			  itemSelector: 'tr',
			  placeholder: '<tr class="placeholder"/>',
			  handle: 'td.drag',
			  group: 'sortable',
			  pullPlaceholder: true,
			  // animation on drop
			  onDrop: function  (item, targetContainer, _super) {
			    var clonedItem = $('<tr/>').css({height: 0})
			    item.before(clonedItem)
			    clonedItem.animate({'height': item.height()})
			    
			    item.animate(clonedItem.position(), function  () {
			      clonedItem.detach()
			      _super(item)
			    })
			  },
			
			  // set item relative to cursor position
			  onDragStart: function ($item, container, _super) {
				  console.log('test');
			    var offset = $item.offset(),
			    pointer = container.rootGroup.pointer
			
			    adjustment = {
			      left: pointer.left - offset.left,
			      top: pointer.top - offset.top
			    }
			
			    _super($item, container)
			  },
			  onDrag: function ($item, position) {
			    $item.css({
			      left: position.left - adjustment.left,
			      top: position.top - adjustment.top
			    })
			  }
			}).on('$destroy', function(){
				$(this).sortable( "destroy" );
			});						        
		});

		styleApp.controller('modalsController', function($scope) {
	    $scope.pageClass = 'page-modals';
		});		

		styleApp.controller('cssController', function($scope) {
	    $scope.pageClass = 'page-css';
		});
		
		styleApp.controller('iconsController', function($scope) {
	    $scope.pageClass = 'page-icons';
		}); 
		
		styleApp.controller('graphsController', function($scope) {
	    $scope.pageClass = 'page-graphs';
		}); 		
		
		
		// Main                
		
		styleApp.controller('mainCtrl', function () {
			$('.switch label').hover(function() {
			  $('.switch .tooltip').toggleClass('show');
			});			
			
			$('.switch label').click(function (){
				$('.zero-clipboard').fadeToggle()
				$('.switch .tooltip .tooltip-inner').html($('.switch .tooltip .tooltip-inner').text() == 'code snippets off' ? 'code snippets on' : 'code snippets off');	
			});						
		});   
		
		
		
		
		// Tabs                 
		
		styleApp.controller('tabCtrl', function () {
		    this.tab = 1;
		
		    this.setTab = function (tabId) {
		        this.tab = tabId;
		    };
		
		    this.isSet = function (tabId) {
		        return this.tab === tabId;
		    };
		});   		
		
		
		
		
		// Date Picker    
		
		styleApp.controller('datepickerCtrl', function ($scope) {
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
		
		styleApp.controller('timepickerCtrl', function ($scope, $log) {
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
		
		
				
		// Scroll				
		
		styleApp.controller('scrollCtrl', function($scope, $location, anchorSmoothScroll) {	    
		  $scope.gotoElement = function (eID){
		    anchorSmoothScroll.scrollTo(eID);	      
		  };
		});
		
		
		// Collapse		
		
		styleApp.controller('collapseCtrl', function ($scope) {
		  $scope.isCollapsed = false;
		}); 
		
		
		// Tooltip	
		
		styleApp.controller('tooltipCtrl', function ($scope) {
		  $scope.dynamicTooltip = 'Hello, World!';
		  $scope.dynamicTooltipText = 'dynamic';
		  $scope.immediateTooltip = 'Check to specify that this<br> campaign should start immediately';
		  $scope.indefiniteTooltip = 'Check to specify that this<br> campaign should run indefinitely';
		});		
		
		
		// UI Grid     		
				
		styleApp.controller('gridCtrl', ['$scope', '$http', function ($scope, $http) {
		  $scope.gridOptions = {
		    enableSorting: true,
		    enableColumnMenus: false,
		    enableHorizontalScrollbar: 0,
		    columnDefs: [
		      { field: 'name', minWidth: 200, width: '50%' },
		      { field: 'gender', width: '30%' },
		      { field: 'company', width: '20%' },
		    ]
		  };
		 
		  $http.get('data/100.json').success(function(data) {
		    $scope.gridOptions.data = data;
		  });
		  
		}]);
			
		
				
		// Nav		
		
		styleApp.controller('navCtrl', function($scope, $location) {
		  $scope.go = function (path) {
			  $location.path(path);
			};
		});			
		
		styleApp.controller('navAccordianCtrl', function ($scope) {
		  $scope.oneAtATime = true;
		
		  $scope.groups = [
		    {
		      title: 'Dynamic Group Header - 1',
		      content: 'Dynamic Group Body - 1'
		    },
		    {
		      title: 'Dynamic Group Header - 2',
		      content: 'Dynamic Group Body - 2'
		    }
		  ];
		
		  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
		
		  $scope.addItem = function() {
		    var newItemNo = $scope.items.length + 1;
		    $scope.items.push('Item ' + newItemNo);
		  };
		
		  $scope.status = {
		    isFirstOpen: true,
		    isFirstDisabled: false
		  };
		});
		
		
				
		// Modal			
		
		styleApp.controller('modalCtrl', function ($scope, $modal, $log) {
		
		  $scope.items = ['item1', 'item2', 'item3'];
		
		  $scope.open = function (size) {
		
		    var modalInstance = $modal.open({
		      templateUrl: 'myModalContent.html',
		      controller: 'modalInstanceCtrl',
		      size: size,
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });
		
		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };
		});		

		styleApp.controller('modalInstanceCtrl', function ($scope, $modalInstance, items) {
		
		  $scope.items = items;
		  $scope.selected = {
		    item: $scope.items[0]
		  };
		
		  $scope.ok = function () {
		    $modalInstance.close($scope.selected.item);
		  };
		
		  $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		  };
		});
		
		
		
		// Perfect Scroll			
		
		styleApp.controller('perfectScrollCtrl', function ($scope) {
			
      $scope.someArray = [1, 2, 3];

      $scope.addItem = function() {
          var arrayLength = $scope.someArray.length;
          var nextValue = arrayLength > 0 ? $scope.someArray[arrayLength - 1] + 1 : 1;
          $scope.someArray.push(nextValue);
      };

      $scope.removeItem = function() {
          if ($scope.someArray.length) { $scope.someArray.pop(); }
      }

      $scope.scrollTop = 0
      $scope.scrollHeight = 0
      $scope.onScroll = function (scrollTop, scrollHeight) {
          $scope.scrollTop = scrollTop
          $scope.scrollHeight = scrollHeight
      }		
		
		});			










