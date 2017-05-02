$(function(){
setTimeout(function(){
$('.preloader').addClass('active-preolader');
var maca = new Audio();
maca.src = "maca.mp3";
maca.play();
}, 2500)

function randMaca() {
	macis.style.background =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
	setTimeout(randMaca,300);
}

var maca2 = new Audio();	

var macis = document.getElementById('luda-maca');
$('#glavna-macaa').click(function(){
randMaca();
$('#luda-maca').removeClass('stop-back');
$('.placeholder').fadeOut();
$('.placeholder2').fadeIn();
$(this).addClass('crazy-active');
maca2.src = "ludemace.mp3";
maca2.loop = true;
maca2.play();
});

$('.logo').click(function(){

maca2.src = "maca.mp3";
maca2.loop = false;
$('#glavna-maca').removeClass('crazy-active');
$('#luda-maca').addClass('stop-back');
$('.placeholder').fadeIn();
$('.placeholder h1').text('Ali sam ja idalje tuzna maca MNJAU , molimo vasa da skrolujete dole da vidite ostatak price');
$('.placeholder2').fadeOut();
$('#ostatak-price').fadeIn();
});

$(document).on('scroll', function(){
var docBot = $( document ).height();	
var y =  $(this).scrollTop();
if(y > docBot/2) {
$('header').css('padding-top','70vh');
$('header').css('height','100vh');
$('.logo').on('click',function(){

	$('html,body').animate({
            scrollTop: 0
        }, 700);
$('#glavna-maca').addClass('zaljubiska-miska');	
$('.placeholder h1').text('MACISE SE SAD MNOGO VOLE I PRIPREMAJU SE ZA KIFLICU MNJAUUUUUUUUUUUUUUUUUUUUUUU');
maca2.src = "mnjuamnjau.mp3";
maca2.play();
$('section').eq(1).remove();
$('header button').fadeIn();
});

}
else {
$('header').css('padding-top','0vh');	

}
})

$('header button').click(function(){
$('#macise-video').fadeIn();
});

});


const app  = angular.module('myApp',[]);
app.controller('mainCtrl',['$scope', function($scope){
var ctrl  = this;
ctrl.name = "nemke";
}]);

app.directive('nemke', function(){
function nec(scope,elem,attrs) {
elem.bind('click', function(){
elem.html('asfsa');
elem.html() === "asfsa" ? elem.html('neca') : elem.html('Nemke je car');
});
}	
return {
template:"Nemke je car",
restrict: "EA",
link: nec,	
}
});