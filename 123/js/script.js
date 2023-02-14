$(document).ready(function(){
  $("#btn1").click(function () {
    $("#box")
    .delay(1000)
    .animate({height : '500px', opacity : '0.5'}, 1500)
    .delay(1000)
    .animate({width : '750px',opacity : '1' }, 1500)
    .delay(1000)
    .animate({height : '100px',opacity : '0.5' }, 1500)
    .delay(1000)
    .animate({width : '100px',opacity : '1' }, 1500);
  });
$('.boxblue').each(function(i){
  $(this).delay(i*500).animate({left : '1000px'},2000);
})



























































































//START
})