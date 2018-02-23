var noun = ["conflict", "film", "war", "battle", "body", "october", "student", "water", "scientist", "poop", "executive", "advertisement", "life", "human", "alien", "world", "album", "situation", "documentary", "information", "series", "family", "night", "land", "ship", "sea", "Earth", "rogue", "greed", "town", "unknown", "thunder", "ink", "rabbit", "target", "captain", "food", "log", "time", "steel", "submarine", "potato", "trash", "treasure", "abyss"];

var verb = ["raids the", "lies to a", "plans with a", "costs a", "returns the", "helps the", "navigates to a", "shares a", "fails the", "flops in the", "learns about the", "copes with", "comes to  the", "escaped from a", "sails to a", "disappears from the", "payed for a", "reported a", "experiences a", "fires a", "searches for the", "works for a", "watches a", "squeezed out a", "hunts for the", "stares into the"];

var adjective = ["troubled", "remote", "predictable", "unpredictable", "dope", "famous", "friendly", "drastic", "deep", "popular", "dreamy", "supernatural", "full", "new", "major", "black", "silent", "junky", "horror", "powerful", "dumb", "red", "short", "jellified", "cool", "fat", "green", "dirty", "silly"];


$('#button').click(function () {
  makeSentence()
});


function makeSentence() {
  var firstNoun = findWord(noun);
  firstNoun = firstNoun.charAt(0).toUpperCase() + firstNoun.substring(1);
  var sentence = firstNoun + " " + findWord(verb) + " " + findWord(adjective) + " " + findWord(noun) + ".";

  $('#text').prepend($('<div>' + sentence + '</div>'));
  return sentence;
}

function findWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}


function theHuntForRedOctober() {
  var count = 0;
  while (true) {
    var sentence = findWord(noun) + " " + findWord(verb) + " " + findWord(adjective) + " " + findWord(noun) + ".";
    
    if (sentence === "captain hunts for the red october.") {
      
      sentence = sentence.charAt(0).toUpperCase() + sentence.substring(1);
      $('#text').prepend($('<div>' + sentence + '</div>'));
      break;
    }
    
    count++;
  }
  console.log("Sean Connery evaded the search " + count + " times.");
}


function gen1000() {
  for (var i = 0; i <= 999; i++) {
    makeSentence();
  }
}