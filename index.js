    
//code for player one image changer
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6 numbers

var randomImageName = "dice" + randomNumber1 + ".png"; //image name
var randomImageSource1 = "./images/" + randomImageName; //get the image source

var player1Image = document.querySelectorAll("img")[0];
player1Image.setAttribute("src" , randomImageSource1);


//code for player two image changer

var randomNumber2 = Math.floor(Math.random() * 6 + 1) ; //random number

var randomImageName2 = "./images/dice" + randomNumber2 + ".png"; 

document.querySelectorAll("img")[1].setAttribute("src" , randomImageName2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎌Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎌";
} else {
    document.querySelector("h1").innerHTML = "DRAW";
}
    

