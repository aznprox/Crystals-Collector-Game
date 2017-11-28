
var win = 0;
var loss = 0;
var randomNumber;
var currentNumber;
var ruby;
var diamond;
var topaz;
var emerald;
var message;

function init() {
  randomNumber = getRandomIntInclusive(19, 120);
  ruby = getRandomIntInclusive(1, 12);
  diamond = getRandomIntInclusive(1, 12);
  topaz = getRandomIntInclusive(1, 12);
  emerald = getRandomIntInclusive(1, 12);
  updateScreen();
  currentNumber = 0;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function updateScreen() {
  $(".random_numbers").text(randomNumber);
  $(".message").text(message);
  $(".win").text(win);
  $(".loss").text(loss);
  $(".score_box").text("Your score total: " + currentNumber);
}

function attachGemClicking() {
  $(".ruby").on("click", function() {
    currentNumber += ruby;
    checkScore();
    updateScreen();
  });

  $(".diamond").on("click", function() {
    currentNumber += diamond;
    checkScore();
    updateScreen();
  });

  $(".topaz").on("click", function() {
    currentNumber += topaz;
    checkScore();
    updateScreen();
  });

  $(".emerald").on("click", function() {
    currentNumber += emerald;
    checkScore();
    updateScreen(); 
  });
}

function checkScore() {
  if (currentNumber === randomNumber) {
    win++;
    message = "You won!!";
    init();
  } else if (currentNumber > randomNumber) {
    loss++;
    message = "You suck!!";
    init();
  }
}

init();
attachGemClicking();

