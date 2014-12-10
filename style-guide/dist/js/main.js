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

$('.btn-search').click(function(){
	$(this).parent().toggleClass('open');
});

$('.nav-sidebar > li.level-1').click(function(){
	$('.nav-sidebar > li.level-1').removeClass('active');
	$('.nav-sub .nav li').removeClass('active');
	$(this).addClass('active');
});

$('.nav-sub > a').click(function(){
	$('.nav-sidebar > li.level-1').removeClass('active');
	$(this).parent().addClass('active');
	$(this).next('.nav').slideToggle('normal');
});

$('.nav-sub .nav li').click(function(){
	$('.nav-sub .nav li').removeClass('active');
	$(this).addClass('active');
});

$('.nav-sidebar > li.level-1 a').click(function(){
	$('.nav-sub').children('.nav').slideUp('slow');
	$('.nav-sub').removeClass('active');
});





