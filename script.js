$("#start_game").click(function () {
  $("#start_game").addClass("bn");
  $(".con").hide(1000);
  timedLink();
  play();
});

$("#start_game").mouseleave(function () {
  $("#start_game").removeClass("bn");
  $(".con").show(1000);
});

function timedLink() {
  document.getElementById("start_game").onclick = setInterval("location.href='game.html'",1000);
}
