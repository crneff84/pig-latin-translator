// Back-End


var vowel = function(userInput) {
  if ((userInput.charAt(0) === "a") || (userInput.charAt(0) === "A") || (userInput.charAt(0) === "e") || (userInput.charAt(0) === "E") || (userInput.charAt(0) === "i")) {
    return userInput + "ay";
  } else if ((userInput.charAt(0) === "I") || (userInput.charAt(0) === "o") || (userInput.charAt(0) === "O") || (userInput.charAt(0) === "u") || (userInput.charAt(0) === "U")) {
    return userInput + "ay";
  }  else {
    return false;
  };
};



// Front-End
$(document).ready(function(){
  $("#blanks form").submit(function(event){
  event.preventDefault();

  var userInput = $("input#user-input").val();
  var result = vowel(userInput)

  $("#output").text(result);
  $("#results").show();

  });
});
