$(document).ready(init);

function init() {
  addBtnListener();
}

function addBtnListener() {
  var target = $("#btn");
  target.click(createSquare);
}

function createSquare() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, state) {
      var newNum = data["response"];
      printSquare(newNum);
    },
    error: function (request, state, errors) {
      console.log(request);
      console.log(state);
      console.log(errors);
    }
  });
}

function printSquare(num) {
  
  var template = $("#template .square").clone();
  var target = $("#griglia");
  if (num <=5) {
    template.addClass("bg-y");
  } else {
    template.addClass("bg-g");
  }

  template.text(num);
  target.append(template);

}
