var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var numOfSquares = 6;
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numOfSquares = 3;
		} else {
			numOfSquares = 6;
		}
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"

	messageDisplay.textContent = "";
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
	});
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}