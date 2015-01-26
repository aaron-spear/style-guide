// directives.js



		styleApp.directive('activenav', function() {
			return {
				link: function(scope, element, attrs) {
					element.bind('click', function() {
						element.parent().children().removeClass('active');
						$('.nav-sub li').removeClass('active');
						element.addClass('active');
					})
				},
			}
		});	
		
		styleApp.directive('active', function() {
			return {
				link: function(scope, element, attrs) {
					element.bind('click', function() {
						element.parent().children().removeClass('active');
						element.addClass('active');
					})
				},
			}
		});			
		
		styleApp.directive('sub', function() {
			return {
				link: function(scope, element, attrs) {
					element.bind('click', function() {
						element.parent().children().removeClass('active');
						element.addClass('active');
					})
				},
			}
		});		