$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    const input = $("#thing").val();
    array.push(input);
    $("ul").append(`<li>${input}</li>`);
    
    $("#thing").val("");
  });
});

let array = [];