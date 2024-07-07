/************************************left bar*******************************************************/ 

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})
/****************************************Accordion****************************************************/ 

$('#sliderDown .toggle').click(function(){
    $(this).next().slideToggle(500);
    $('div.inner').not($(this).next()).slideUp(500); 
});
/*******************************************text area**************************************************/ 

$('textarea').keyup(function() {
   let mylength = $(this).val().length;
   console.log(mylength);
   $('#chars').text(
    100 - mylength <= 0 ? 'your available characters finished' : 100 - mylength
   )
});
/*********************************************count down******************************************************* */

var countDownDate = new Date("Jan 1, 2030 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

 
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
 
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
 
  
 
  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;
  
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE CAMPAIGN BEGINS";
  }
}, 1000);
