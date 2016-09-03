
var ready = document.getElementById('ready'),
    level1 = document.getElementById('level1'),
    level2 = document.getElementById('level2'),
    level3 = document.getElementById('level3'),
    end = document.getElementById('result'),
    input1 = document.getElementById('value1'),
    alert = document.getElementById('alert'),
    alert1 = document.getElementById('alert1'),
    ok = document.getElementById('OK'),
    ok1 = document.getElementById('OK1'),
    question2 = document.getElementById('question2');

alert.innerHTML = ""

BURGER_PLACES = ["Burger Heroes", "BB & Burgers", "The Burger Brothers", "Герои", "#FARШ"];

document.getElementById("btn-ready").addEventListener("click", function() {
  ready.style.display = "none";
  level1.style.display = "block"
});

question2.addEventListener("click", function() {
  level2.style.display = "none";
  level3.style.display = "block"
});

function check_b() {
  for (i = 0; i < BURGER_PLACES.length; i++) {
    if ( input1.value == BURGER_PLACES[i]) {
      return true;
    }
    return false;
  }
}

document.getElementById("btn-send1").addEventListener("click", function() {
    level1.style.display = "none";
    level2.style.display = "block";
});

ok.addEventListener("click", function() {
  window.location.replace("https://vk.com/im?sel=14465100");
});

ok1.addEventListener("click", function() {
  window.location.replace("http://lmgtfy.com/?q=%D0%BA%D0%BE%D1%82+%D0%B8%D0%B7+%D1%88%D1%80%D0%B5%D0%BA%D0%B0+%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0");
});

var tries = 0;

document.getElementById("btn-send3").addEventListener("click", function() {

  if (tries > 20) {

    tries = 0;

    level3.style.display = "none";
    result.style.display = "block";
  }

  alert1.innerHTML = "Нет"
  alert1.style.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

  tries++;

});
