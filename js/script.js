$(document).ready(init);

function init() {
  addBtnListener();
}

function addBtnListener() {
  var target = $("#btn");
  target.click(creaQuadratino);
}

function creaQuadratino() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, state) {
      console.log(data);
      console.log(state);
    },
    error: function (request, state, errors) {
      console.log(request);
      console.log(state);
      console.log(errors);
    }
  });
}
