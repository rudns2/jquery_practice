$(document).ready(function () {
  
  // 보이기 숨기기
  $("#hide").click(function () {
    $("#box").hide(1000, function (){
      alert("hide");
    });
  });
  $("#show").click(function () {
    $("#box").show(1000);
  });

//  슬라이드
  $("#Sup").click(function (){
    $("#box").slideUp(2000);
  });
  $("#Sdown").click(function() {
    $("#box").slideDown(500);
  })
  $("#Stoggle").click(function(){
    $("#box").slideToggle();
  })

// 페이드
  $("#fin").click(function(){
    $("#box").fadeIn();
  });
  $("#fout").click(function(){
    $("#box").fadeOut();
  });
  $("#ftoggle").click(function(){
    $("#box").fadeToggle();
  });

  $("#fto").click(function(){
    $("#box").fadeTo(300, 1);
  });

// 애니메이트 ','뒤에 duration을 넣어 줄 수있다.
  $("#any").click(function () {
    $("#box")
    .animate({ left : "+=50px" },500)
    .animate({ top : "+=30px" },500)
  });
  $("#eny").click(function () {
    $("#box")
    .animate({ left : "-=50px" },500)
    .animate({ top : "-=30px" },500)
  });




















//START 용도  
})