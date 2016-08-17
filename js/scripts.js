// Back-End






// Front-End
$(document).ready(function(){
  $("#blanks form").submit(function(event){
  event.preventDefault();

  var userInput = $("#user-input").val();
  
  $("#results").show();
  });
});
