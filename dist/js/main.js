// OPEN Nav
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
$(function() {
  var loc = window.location.href;
  if(/overview/.test(loc)) {
    $('.nav .overview').addClass('active');
  } else if(/logo/.test(loc)) {
	  $('.nav .logos').addClass('active');
  } else if(/colors/.test(loc)) {
	  $('.nav .colors').addClass('active');
  } else if(/typography/.test(loc)) {
	  $('.nav .typography').addClass('active');
  } else if(/layout/.test(loc)) {
	  $('.nav .layout').addClass('active');	  
	} else if(/forms/.test(loc)) {
	  $('.nav .forms').addClass('active');
	} else if(/buttons/.test(loc)) {
	  $('.nav .buttons').addClass('active');
	} else if(/tables/.test(loc)) {
	  $('.nav .tables').addClass('active');
	} else if(/graphs/.test(loc)) {
	  $('.nav .graphs').addClass('active');
	} else if(/css/.test(loc)) {
	  $('.nav .css').addClass('active');
	} else if(/icons/.test(loc)) {
	  $('.nav .icons').addClass('active');
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






