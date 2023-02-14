$(document).ready(function () {
  $("#btn1").click(function () {
    let text = $("#text_box").text();
    // alert(text);
    $("#insert").append(text);
  })
  let html = $("#text_box").html();
  $("#btn2").click(function () {
    $("#insert").prepend(html);
    //insert 안쪽 맨 앞에 추가
  })
  $("#btn3").click(function(){
    $('#insert').before(html);
    //insert 앞에 추가    
  })
  $("#btn4").click(function(){
    $('#insert').after(html);    
    //insert 뒤에 추가    
  })
  $('#btn5').click(function () {
    let vals = $("#val").val();
    alert(vals);
    $("#insert").append(vals);
  })
  $("#btn6").click(function (){
    $("#setting")
    .attr({
      "id":"js",
      "class" : "js"
    })
    .html("<p>자바스크립트</p>");
  })













































  // START
})