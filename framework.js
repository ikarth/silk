'use strict';

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

function loadJSON(callback, filepath) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', filepath, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}


function testGrammar(grammar_rules, context) {
    console.log(grammar_rules);
    let grammar = tracery.createGrammar(grammar_rules);
    //grammar.addModifiers(baseEngModifiers);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    return {"message": message, "context": grammar};
}

function displayResults(input_grammar, element_id) {
      var container = document.getElementById(element_id);
      var responses = "<ul>";
      for(var i = 0; i < 15; i++) {
                         responses += "<li>";
                         responses += testGrammar(input_grammar)["message"];
                         responses += "</li>"
                         }
      responses += "</ul>";
    container.innerHTML = responses;
    console.log(responses);
}
    
