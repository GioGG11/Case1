const apiKey = '&apiKey=a09675119b4846298ec84a1fedd5f4a6';
fetch('https://api.spoonacular.com/recipes/random?number=1')
  .then(res => res.json())
  .then(data => {
    let recipeImg = document.querySelector('.luckyPhoto');
    recipeImg.src = data.recipes[0].image;
    document.querySelector("[data-name]").innerHTML = data.recipes[0].title;

  })
 
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function randomChoice(max) {
  var rand = Math.floor(Math.random() * max);
  return rand;
}
var result;
var counterWon = 0;
var counterLost = 0;
var allTimeWon = 0;
var allTimeLost = 0;
//0 will be scissors, 1 will be rock, 2 will be paper
function test() {
  alert("Test");
}

function randomChoice0() {
  var comp = randomChoice(3);
  if (comp == 0) {
    result = "tie";
    console.log(result);
    alert(result);
  }
  else if (comp == 1) {
    result = "lost";
    console.log(result);
    alert(result);
    counterLost++;
  }
  else {
    result = "win"
    console.log(result);
    alert(result);
    counterWon++;
  }
  if (counterLost > 1 || counterWon > 1) {
    allTimeLost = counterLost;
    allTimeWon = counterWon;
    if (counterLost > 1) {
      alert("Seems like you lost, but feel free to try again!");
    }
    if (counterWon > 1) {
      alert("Congrats! Wanna go again?")
    }

    counterLost = 0;
    counterWon = 0;

  }
}

function randomChoice1() {
  var comp = randomChoice(3);
  if (comp == 0) {
    result = "win";
    alert(result);
    counterWon++;
  }
  else if (comp == 1) {
    result = "tie";
    alert(result);
  }
  else {
    result = "lost"
    alert(result); counterLost++;
  }
  if (counterLost > 1 || counterWon > 1) {
    allTimeLost = counterLost;
    allTimeWon = counterWon;
    if (counterLost > 1) {
      alert("Seems like you lost, but feel free to try again!");
    }
    if (counterWon > 1) {
      alert("Congrats! Wanna go again?")
    }

    counterLost = 0;
    counterWon = 0;

  }

}

function randomChoice2() {
  var comp = randomChoice(3);
  if (comp == 0) {
    result = "lost";
    alert(result);
    counterLost++;
  }
  else if (comp == 1) {
    result = "win";
    alert(result);
    counterWon++;
  }
  else {
    result = "tie";
    alert(result);
  }
  if (counterLost > 1 || counterWon > 1) {
    allTimeLost = counterLost;
    allTimeWon = counterWon;
    if (counterLost > 1) {
      alert("Seems like you lost, but feel free to try again!");
    }
    if (counterWon > 1) {
      alert("Congrats! Wanna go again?")
    }

    counterLost = 0;
    counterWon = 0;

  }
}