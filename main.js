/*  libdarkness copyright Joe Koop 2021
    released under GPL3 license
    https://github.com/jkoop/libdarkness */

function dark(){
	$('body').addClass('libdarkness');
	//$('meta[name="theme-color"]').attr('content', '#000');
  lightIcon.remove();
  $('head').append(darkIcon);
}

function light(){
	$('body').removeClass('libdarkness');
	//$('meta[name="theme-color"]').attr('content', '#FFF');
  darkIcon.remove();
  $('head').append(lightIcon);
}

function init(){
  //if($('meta[name="theme-color"]').length == 0){
  //  $('head').append('<meta name="theme-color">');
  //}

  if(localStorage.getItem('libdarkness') != 'dark' && localStorage.getItem('libdarkness') != 'light' && localStorage.getItem('libdarkness') !== null){
 	  localStorage.removeItem('libdarkness');
  }else if(localStorage.getItem('libdarkness') == 'dark'){
	  dark();
	  $('#libdarkness-status').text('Forced dark mode');
  }else if(localStorage.getItem('libdarkness') == 'light'){
	  light();
	  $('#libdarkness-status').text('Forced light mode');
  }else{
    auto();
		$('#libdarkness-status').text('Auto dark mode');
  }
}

function auto() {
  if(localStorage.getItem('libdarkness') === null){
    if(listener.matches){
	  	dark();
    }else{
  		light();
    }
  }
}

$(document).ready(function(){
	init();

	$('#libdarkness-control').click(function(){
		if(localStorage.getItem('libdarkness') == 'dark'){
			$('#libdarkness-status').text('Forced light mode');
			localStorage.setItem('libdarkness', 'light');
			light();
		}else if(localStorage.getItem('libdarkness') == 'light'){
			$('#libdarkness-status').text('Auto dark mode');
		  localStorage.removeItem('libdarkness');
			auto();
		}else if(localStorage.getItem('libdarkness') === null){
			$('#libdarkness-status').text('Forced dark mode');
			localStorage.setItem('libdarkness', 'dark');
			dark();
		}
	});
});

var lightIcon = $('link.libdarkness-light');
var darkIcon  = $('link.libdarkness-dark');
var listener  = window.matchMedia('(prefers-color-scheme: dark)');
listener.addListener(auto);
init();
