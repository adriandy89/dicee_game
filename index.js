// Dice 1
let randomNumber1 = Math.floor(Math.random()*6)+1;  //1-6

let randomDiceImage1 = `images/dice${randomNumber1}.png`
let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomDiceImage1);

//Dice2
let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomDiceImage2 = `images/dice${randomNumber2}.png`
let image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomDiceImage2);

if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent = "Payer 2 Wins!"
} else if (randomNumber2<randomNumber1){
    document.querySelector("h1").textContent = "Payer 1 Wins!"
} else {
    document.querySelector("h1").textContent = "🎲 Draw!"
}
