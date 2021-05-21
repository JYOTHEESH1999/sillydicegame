
function dothis()
{
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource =  randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Computer(jyo) is Winner🤷‍♂️🤷‍♂️";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "You are the Winner! 🤦‍♂️🤦‍♂️🚩";
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!";
  }


}

//If player 1 wins
