let divRight = document.querySelector('.js-div');
let divLeft = document.querySelector('.left_s2.div');


function playGame() {
  jsHeart.style.color = "#B9DD8C";
  let jsHeart = document.querySelector(`${score}`)
 };


//icons 
const rezerva = document.querySelector('.rezerva');
const zabezpeceni = document.querySelector('.zabezpeceni');
const duchod = document.querySelector('.duchod');
const plany = document.querySelector('.plany');
const baby = document.querySelector('.baby');
const investice = document.querySelector('.investice');
const ochrana = document.querySelector('.ochrana');


rezerva.addEventListener("mouseover", function () {
  let score = '';
  divRight.innerText = "si správně tvořit finanční rezervu"
  score = '.js-heart1';
});

zabezpeceni.addEventListener("mouseover", function () {
  divRight.innerText = "poctivě zabezpečit své zdraví a svoji rodinu"
  score = '.js-heart2';
});

duchod.addEventListener("mouseover", function () {
  divRight.innerText = "se připravit na své stáří"
  score = '.js-heart3';
  hrom();
});

plany.addEventListener("mouseover", function () {
  divRight.innerText = "snadno ušetřit na krátkodobé plány (dovolená, nové auto,..)"
  score = '.js-heart4';
});

baby.addEventListener("mouseover", function () {
  divRight.innerText = "se připravit na očekávanou i neočekávanou mateřskou dovolenou"
  score = '.js-heart5';
});

investice.addEventListener("mouseover", function () {
  divRight.innerText = "pomocí investic realizovat své vysněné dlouhodobé plány (koupě nemovitosti, děti)"
  score = '.js-heart6';
});

ochrana.addEventListener("mouseover", function () {
  divRight.innerText = "poctivě zabezpečit své zdraví a svoji rodinu"
  score = '.js-heart8';
});


  

/*
rezerva.addEventListener("mouseover", showText)
rezerva.addEventListener("mouseout", undoText)

function showText(){
  divRight.innerText = "si správně tvořit finanční rezervu";
}

function undoText() {
  divRight.innerText = "";
}*/