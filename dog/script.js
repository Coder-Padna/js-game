const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
console.log(ctx);
var opt = document.getElementById("ani")
const player_Image = new Image();
player_Image.src = "shadow_dog.png"
const spriteWidth = 575;
const spriteHeight = 525;
var MAX_MOVES = 7
var x = 0;
var y = 0;
console.log(opt.value)
function Animate(){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
	ctx.drawImage(player_Image, x * spriteWidth, y * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
	x++;
	if(x==MAX_MOVES){
		x=0
	}
	MAX_MOVES=7
	setTimeout(() => {
		requestAnimationFrame(Animate)
	  }, 70)
	
}
Animate()

