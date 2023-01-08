var box = document.querySelectorAll(".box")
var resetButton = document.querySelector("#reset")
var timesClicked = 0;
const WINNER_MOVES = [
  [0, 1, 2],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7]
]
function checkWinner(){
	// console.log(box[WINNER_MOVES[0]].innerHTML==WINNER_MOVES[0])
}
function reset(){
	for (i = 0; i < box.length; i++){
		box[i].textContent = "";
	}
	timesClicked = 0;
	mainGameLoop();
}
function mainGameLoop(){
	for (i = 0; i < box.length; i++){
	box[i].addEventListener("click", use)
}
function use(){
		checkWinner();
		if(timesClicked%2==0){
			this.innerHTML = "X"
		}else{
			this.innerHTML = "O"
		}
		timesClicked++;
		if (timesClicked==8) {
			timesClicked=0
		}
		this.classList.add("clicked")
		if(this.classList.contains("clicked")){
			this.removeEventListener("click",use);
		}
		return;
}
}
mainGameLoop();
