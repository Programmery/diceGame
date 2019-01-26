function diceRoll() {
  // DICE  RANDOM VALUE
  var dicePlayerOne = (Math.floor((Math.random() * 6)) + 1);
  var dicePlayerTwo = (Math.floor((Math.random() * 6)) + 1);

  // DICE  RANDOM IMAGE
  document.getElementById("DiceImg1").setAttribute("src", "images/dice" + dicePlayerOne + ".png");
  document.getElementById("DiceImg2").setAttribute("src", "images/dice" + dicePlayerTwo + ".png");

  //Function - Adding Display none class
  var titleArray = document.getElementsByTagName("h1");

  function classAdd(arrayname) {
    for (n = 0; n < titleArray.length; n++) {
      arrayname[n].classList.add("hidden");
    }
  }

  // DICE TITLE CHANGE
  if (dicePlayerOne > dicePlayerTwo) {
    classAdd(titleArray);
    document.getElementsByTagName("h1")[1].classList.remove("hidden");

  } else if (dicePlayerTwo > dicePlayerOne) {
    classAdd(titleArray);
    document.getElementsByTagName("h1")[2].classList.remove("hidden");

  } else {
    classAdd(titleArray);
    document.getElementsByTagName("h1")[3].classList.remove("hidden");
  }
}

document.getElementById("button").addEventListener("click", diceRoll);
