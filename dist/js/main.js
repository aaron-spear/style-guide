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

var subnav = function() {
  $('.nav-sub').addClass('active');
  $('.nav-sub > a').next('.nav').slideToggle('normal');	
}

$(function() {
  var loc = window.location.href;
  if(/overview/.test(loc)) {
    $('.nav .overview').addClass('active');
  } else if(/logo/.test(loc)) {
	  $('.nav .logos').addClass('active');
  } else if(/colors/.test(loc)) {
	  $('.nav .colors').addClass('active');
  } else if(/typefaces/.test(loc)) {
	  $('.nav .typefaces').addClass('active');
	} else if(/elements/.test(loc)) {
	  $('.nav .elements').addClass('active');
	} else if(/headings/.test(loc)) {
	  $('.nav .headings').addClass('active');
	} else if(/forms/.test(loc)) {
	  $('.nav .forms').addClass('active');
	  subnav();
	} else if(/buttons/.test(loc)) {
	  $('.nav .buttons').addClass('active');
	} else if(/links/.test(loc)) {
	  $('.nav .links').addClass('active');
	} else if(/list/.test(loc)) {
	  $('.nav .list').addClass('active');
	} else if(/tables/.test(loc)) {
	  $('.nav .tables').addClass('active');
	} else if(/css/.test(loc)) {
	  $('.nav .css').addClass('active');
	} else if(/icons/.test(loc)) {
	  $('.nav .icons').addClass('active');
	} else if(/usage/.test(loc)) {
	  $('.nav .usage').addClass('active');
	}
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


// COPY TO CLIPBOARD
// ========================
function copyToClipboard (text) {
  window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
}

$('.prettyprint').click(function(text) {
  window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
});






