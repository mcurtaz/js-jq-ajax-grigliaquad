$(document).ready(init);

function init() {
  creaGriglia();
  addSquareClickListener();
  addBtnAzzeraListener();
}

function creaGriglia(){ // funzione per evitare di scrivere a mano 36 div con classe square
  for (var i = 0; i < 36; i++) {

    var template = $("#template .square").clone();
    var target = $("#griglia");

    target.append(template);
  }
}

function addSquareClickListener() { // listener su tutti gli elementi con classe .square (tutti i quadratini)
  $(".square").click(function(){

    var target = $(this);

    if (target.hasClass("clickable")) {

      compileSquare(target);

      target.removeClass("clickable");  // rimuovo la classe clickable così ogni singolo quadratino è cliccabile soltanto una volta
    }
  });
}

function compileSquare(target) {

   // il target è il quadratino cliccato. passerò il target alla funzione che cambia il background e il testo all'interno del quadratino

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, state) { // se l'ajax va a buon fine

      var newNum = data["response"]; // nella variabile salvo il numero restituito dal server di boolean

      printSquare(newNum, target); // avvio la funzione printSquare passandgli il numero restituito dall'ajax e l'"indirizzo" del quadratino cliccato
    },
    error: function (request, state, errors) {
      console.log(request);
      console.log(state);
      console.log(errors);
    }
  });
}

function printSquare(num, target){ // la funzione stampa il numero nel quadratino e assegna la classe con sfondo corrispondente a seconda se il numero è minore o superiore a 5



  if (num <=5) {
    target.addClass("bg-y");
  } else{
    target.addClass("bg-g");
  }
  target.text(num);
}


function addBtnAzzeraListener() { // al click su bottone
  var button = $("#btn");

  button.click(azzera);
}

function azzera() { // tutti gli elementi con classe square avranno testo stringa vuota e verranno rimosse le classi che danno colore allo sfondo
  var target = $(".square");

  target.removeClass("bg-y bg-g").addClass("clickable");
  target.text("");
}
