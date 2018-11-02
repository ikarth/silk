'use strict';

let test_rules = {
    "origin":
    ["[protagonist:#fruit#][description:#adjective#]The three #description# #protagonist.s# say hello."],
    "fruit":
		["apple", "orange", "grape", "pea"],
    "adjective":
		["sleeping","laughing","watching"]};


function testGrammar(grammar_rules=test_rules, context) {
    let grammar = tracery.createGrammar(grammar_rules);
    //grammar.addModifiers(baseEngModifiers);
    grammar.clearState();
    var message = grammar.flatten("#origin#");
    return {"message": message, "context": grammar};
}

