$(document).ready(function (){
  $("#list>li>a").mouseover(function(){
    $("#list>li>a").removeClass("active");
    
    // 나를 제외한 나머지의 클래스를 지운다
    // $(this).sibilings().removeClass("active");
    
    $(this).addClass("active");
    let imgDate = $(this).attr("data-img");
    $(".img_box>img").attr({
      "src" : imgDate
    })
  })

  $('#thum>li>img').click(function(){
    let img = $(this).attr('src');
    $(".img_box>img").attr({
      "src" : img
    })
  })













})