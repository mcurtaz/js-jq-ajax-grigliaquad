$(document).ready(init);

function init() {
  creaGriglia();
  addSquareClickListener();
}

function creaGriglia(){ // funzione per evitare di scrivere a mano 36 div con classe square
  for (var i = 0; i < 36; i++) {

    var template = $("#template .square").clone();
    var target = $("#griglia");

    template.attr("data-id", i);
    target.append(template);
  }
}

function addSquareClickListener() {
  var target = $(".square");
  target.click(compileSquare);
}

function compileSquare() {
  var target = $(this);
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, state) {
      var newNum = data["response"];
      printSquare(newNum, target);
    },
    error: function (request, state, errors) {
      console.log(request);
      console.log(state);
      console.log(errors);
    }
  });
}

function printSquare(num, target){
  if (num <=5) {
    target.addClass("bg-y");
  } else{
    target.addClass("bg-g");
  }
  target.text(num);
}
