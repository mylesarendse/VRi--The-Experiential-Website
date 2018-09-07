
//-------------------------       Character Scrolling -------------------------------------------

//-------- Side Nav ---------
var domObj = $('html, body');


$('.side-nav a').click(function(){


	//Toggle Class
    $(".active").removeClass("active"); 
    $(this).addClass ("active");     
 //   $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
   // $('.'+theClass).parent('li').addClass('active');
    console.log($(this).attr('href'));
    //Animate
    domObj.animate({
        scrollTop: $( $(this).attr('href').replace("#",".") ).offset().top
    }, 400);
});

//--------------------  Music --------------

var x = document.getElementById("myAudio"); 

var playButton = $(".play");
function playAudio() { 
console.log("Play!!!!!");
    x.play(); 
    playButton.addClass("active");
    pauseButton.removeClass("active")
} 
var pauseButton = $(".pause");
function pauseAudio() { 
    x.pause(); 
    playButton.removeClass("active");
    pauseButton.addClass("active");
} 
//--------------------  Pre Order Alert --------------
$.js = function(el){
  return $('[data-js=' + el + ']')
};

var $clickAlert = $.js('click-alert');

$clickAlert.on('click', function() {
  alert('You have magically ordered VRii - No details needed, We already know where you live!');
});


//-------------------------       Page Transitions -------------------------------------------


$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-left',
    outClass: 'overlay-slide-out-left',
    inDuration: 800,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'html',
    transition: function(url){ window.location.href = url; }
  });
});


