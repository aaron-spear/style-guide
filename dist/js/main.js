// OPEN STUFF
// ========================
$('.leftmenu-trigger').click(function(){
	$('body').removeClass('right-nav-open').toggleClass('left-nav-open');
	$(this).toggleClass('active');
	$('.rightmenu-trigger').removeClass('active');
});

$('.rightmenu-trigger').click(function(){
	$('body').removeClass('left-nav-open').toggleClass('right-nav-open');
	$(this).toggleClass('active');
	$('.leftmenu-trigger').removeClass('active');
});

// NAV
// ========================
$('.nav-sub > a').click(function(){
	$('.nav-sidebar > li.level-1').removeClass('active');
	$(this).parent().addClass('active');
	$(this).next('.nav').slideToggle('normal');
});

$('.nav-sub .nav li a').click(function(){
	$('.nav-sub .nav li').removeClass('active');
	$(this).parent().addClass('active');
});

$('.nav-sidebar > li.level-1 a').click(function(){
	$('.nav-sub').children('.nav').slideUp('slow');
	$('.nav-sub').removeClass('active');
	$('.nav-sidebar > li.level-1').removeClass('active');
	$('.nav-sub .nav li').removeClass('active');
	$(this).parent().addClass('active');
});

// PAGE SCROLL
// ========================
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	  
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').stop().animate({
        scrollTop: (($(target).offset().top) - 50)
      }, 1000);
      return false;
    }
  }
});



