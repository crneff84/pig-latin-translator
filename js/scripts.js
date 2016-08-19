// Back-End
var vowels = ["a", "e", "i", "o", "u"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var beginsWithVowel = function(userInput) {
  var beginsWithVowelArray = userInput.split("");
  if (beginsWithVowelArray[0] === "a" || beginsWithVowelArray[0] === "e" || beginsWithVowelArray[0] === "i" || beginsWithVowelArray[0] === "o" || beginsWithVowelArray[0] === "u") {
    beginsWithVowelArray.push("ay");
    var updatedWordString = beginsWithVowelArray.join('');
  }
  return updatedWordString
}

// Front-End
$(document).ready(function(){
  $("#blanks form").submit(function(event){
  event.preventDefault();
  var userInput = $("#user-input").val().toLowerCase();
  var userOutput = beginsWithVowel(userInput);
  $("#output").append(userOutput);
  $("#results").show();
  });
});
