var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceRandom="dice"+ randomNumber1 + ".png";

var imageSource="images/" + diceRandom;

var image1 =document.getElementsByClassName("img")[0];

image1.setAttribute("src",imageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var imageSource2="images/dice" + randomNumber2 + ".png";

var image2=document.getElementsByClassName("img")[1].setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
   onclick(document.querySelector("h1").innerHTML="🚩Player 2 Wins");

}
else{
    document.querySelector("h1").innerHTML="Draw";
}