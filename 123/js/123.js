$(document).ready(function () {

  $("#btn").delay(1000).animate({
    top: '50%'
  }, 1000);

  let load = 0;

  $("#btn").click(function () {
    
    if (load == 0) {
      $("#left").animate({
        left: "-50%"
      }, 3000);
      $("#right").animate({
        left: "101%"
      }, 3000);
      $("#btn").animate({
        top: "25px"
      }, 2000).text("CLOSE");
      load = 1;
    } else {
      $("#left").animate({
        left: "0.5%"
      }, 2000)
      $("#right").animate({
        left: "50%"
      }, 2000)
      $("#btn").animate({
        top: "50%"
      },2500).text("OPEN");
      load = 0;
    }
  })

$("#box2").hover(function(){
  $("#tooltip").animate({opacity : "1", top : "30px"},300);
}, function(){
  $("#tooltip").animate({opacity : 0, top : "0px"},200);
})
































































  //START
})