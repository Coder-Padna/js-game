
$("#label1").click(function () {
    $(this).addClass("yellow");
    $("#label2").removeClass("yellow");
    $("#label3").removeClass("yellow");
  });
  $("#label2").click(function () {
    $(this).addClass("yellow");
    $("#label1").removeClass("yellow");
    $("#label3").removeClass("yellow");
  });
  $("#label3").click(function () {
    $(this).addClass("yellow");
    $("#label2").removeClass("yellow");
    $("#label1").removeClass("yellow");
  });
  var first_number = document.getElementById("first_number");
  first_number.innerHTML = Math.round(Math.random() * 100);
  
  var second_number = document.getElementById("second_number");
  second_number.innerHTML = Math.round(Math.random() * 100);
  
  $("#check").click(function() { 
      if(first_number.innerHTML > second_number.innerHTML){
          $("#label1").addClass('red');
      } else if(first_number.innerHTML < second_number.innerHTML){
          $("#label2").addClass('red');
      } else{
          $("#label3").addClass('red');
      }
      $(this).hide();
      $("#proceed").show();
   })
  $("#prceed").click(function() { 
      
   })
  
  function play() {
  }
  