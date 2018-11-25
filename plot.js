'use strict';

// Plot generator
// @ikarth

var plot_rules = {
    "origin": ["#PLOT_character_arc#"],
    "PLOT_character_arc" : ["#PLOT_motivation#"],
    "PLOT_motivation" : ["[STORY_motivation:MOTIVE_birthday_present] #PLOT_need_macguffin#", "[STORY_motivation:MOTIVE_cure_for_illness] #PLOT_need_macguffin#"],
    "PLOT_need_macguffin": ["#PLOT_inciting_incident# #PLOT_start_journey# #PLOT_journey# #PLOT_find_macguffin# #PLOT_acquire_macguffin# #PLOT_return_home# #PLOT_give_present#"],
    "PLOT_inciting_incident":["LAUNDRY_"],
};


var laundry_descriptions = {
    "LAUNDRY_inciting_incident":[""],
};


var context_rules = {
    "MOTIVE_birthday_present":{"PLOT_inciting_incident": "LAUNDRY_alex_birthday"} 
}

function parseReplies(reply_text, grammar, reply_map) {
    let valid_matches = Object.keys(reply_map).map(function(x) {
        let re = new RegExp(grammar.flatten(x), "i");
        console.log(re);
        if(true == re.test(reply_text)) {
           return x; 
        }
    });
    valid_matches = valid_matches.filter(e => e != undefined);
    if(valid_matches.length < 1) {
        return "";
    }
    //console.log(valid_matches);
    // Choose
    let rndnum = Math.floor(Math.random() * ((valid_matches.length - 1)));
    let pick = valid_matches[rndnum];
    let select_text = reply_map[pick];
    return select_text;
}

function XexpandContext(message, grammar_context, reply_map) {
    //console.log(message);
    //console.log(grammar_context["symbols"]);
    let valid_matches = Object.keys(reply_map).map(function(x) {
        let re = new RegExp(grammar_context.flatten(x), "i");
        console.log(re);
        console.log(re.test(message));
        if(true == re.test(message)) { return x; }
    });
    valid_matches = valid_matches.filter(e => e != undefined);
    if(valid_matches.length < 1) {
        return "";
    }
    let new_context = valid_matches;
    console.log(valid_matches);

}

function expandContext(message, grammar_context, reply_map) {
    console.log(message);
    console.log(grammar_context);
    return message;
}

function generatePlot() {
    
    console.debug(plot_rules);
    let grammar = tracery.createGrammar(plot_rules);
    //grammar.addModifiers(baseEngModifiers);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    
    let story_filter = new RegExp("STORY_.*");
    let symbol_array = Object.keys(grammar["symbols"]).map(function(x){
        return x;
    });
    let symbols = symbol_array.filter(s => story_filter.test(s));
    console.log(symbols)
    for (var symb in symbols) {
        console.log(grammar["symbols"][symbols[symb]]["rawRules"]);
    }

    //console.log(grammar);
    let contextualized = expandContext(message, grammar, context_rules); 
    let output = contextualized;

    let element_id = "output";
    let container = document.getElementById(element_id);
    container.innerHTML = "<p>" + output + "</p>";
    
    return message//{"message": message, "context": grammar};
}