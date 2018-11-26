'use strict';

// Plot generator
// @ikarth


var plot_arcs = {
    "origin": ["#PLOT_ARC#"],
    "PLOT_ARC":["[motive:birthday_present]#PLOT_want_to_give_present# #PLOT_need_macguffin# #PLOT_return_home# #PLOT_give_present#"],
    "PLOT_need_macguffin": ["#PLOT_hear_about_macguffin# NESTING_increase_macguffin_nesting #PLOT_start_journey# #PLOT_journey# #PLOT_know_macguffin_location# #PLOT_journey# #PLOT_acquire_macguffin# #PLOT_end_journey#"],
    "PLOT_journey":["","#PLOT_journey_event#","#PLOT_journey_event#","#PLOT_journey_event#","#PLOT_journey# #PLOT_journey#"],
    "PLOT_acquire_macguffin": ["#PLOT_arrive_at_macguffin_location# #PLOT_pass_obstacle# #PLOT_get_macguffin#", "#PLOT_arrive_at_macguffin_location# #PLOT_get_macguffin#"],
    "PLOT_want_to_give_present": ["LAUNDRY_want_to_give_present"],
    "PLOT_journey_event":["LAUNDRY_travel_quest_to_destination", "LAUNDRY_journey_event"],
    "PLOT_know_macguffin_location":["LAUNDRY_learn_macguffin_location"],
    "PLOT_hear_about_macguffin":["LAUNDRY_identify_macguffin"],
    "PLOT_get_macguffin":["LAUNDRY_gained_macguffin NESTING_decrease_macguffin_nesting"],
    "PLOT_arrive_at_macguffin_location":["LAUNDRY_arrive_at_destination"],
    "PLOT_give_present":["LAUNDRY_give_present_to_friend"],
    "PLOT_pass_obstacle":["#PLOT_need_macguffin# #PLOT_return_to_obstacle# #PLOT_complete_obstacle#"],
    "PLOT_start_journey":["LAUNDRY_start_journey NESTING_increase_journey_nesting"],
    "PLOT_end_journey":["LAUNDRY_end_journey NESTING_decrease_journey_nesting"],
    "PLOT_return_home":["#PLOT_start_journey# #PLOT_journey_event# #PLOT_end_journey# #PLOT_arrive_at_home#"],
    "PLOT_return_to_obstacle":["#PLOT_start_journey# #PLOT_journey_event# #PLOT_end_journey# #PLOT_arrive_at_destination#"],
    "PLOT_complete_obstacle": ["LAUNDRY_pass_obstacle"],
    "PLOT_arrive_at_home":["LAUNDRY_arrive_at_destination"],
    "PLOT_arrive_at_destination":["LAUNDRY_arrive_at_destination"],
};

var plot_replacement_map = {
  "LAUNDRY_want_to_give_present": { event: ['intend-gift', 'friend'], gloss: "need thing for friend"},
  "LAUNDRY_need_gift_to_pass_guard": { event: ['intend-gift', 'antagonist'], gloss: "need thing to give to guard to pass obstacle"},
  "LAUNDRY_journey_event" : {event: ['journey-event'], gloss: "something happens along the way while travelling"},
  "LAUNDRY_identify_macguffin": {event: ['learn', 'notion'], gloss: "got macguffin identity"},
  "LAUNDRY_learn_macguffin_location":   {event: ['learn-at', 'notion.place'], gloss: "got macguffin location"},
  "LAUNDRY_travel_quest_to_destination":   {event: ['travel-quest', 'notion.place'], gloss: "going to get macguffin"},
  "LAUNDRY_gained_macguffin":   {event: ['find', 'notion.place', 'thing'], closure: 'lost', gloss: "got macguffin"},
  "LAUNDRY_think_about_macguffin":   {event: ['reflect', 'thing'], gloss: "reflection: on macguffin"},
  "LAUNDRY_give_present_to_friend":   {event: ['gift', 'friend', 'thing'], closure: 'thing', gloss: "give macguffin to friend"},
  "LAUNDRY_start_journey": {event:['journey-start'], gloss: "character starts their journey (great for introducing expositon)"},
  "LAUNDRY_end_journey": {event:['journey-end'], gloss: "character ends their journey"},
  "LAUNDRY_arrive_at_destination": {event:['travel-quest','notion.place'], gloss: "arrive at the place we've been trying to get to"},
  "LAUNDRY_pass_obstacle": {event: ['journey-event'], gloss: "character gets past obstacle"},
  //"LAUNDRY_": {},
  "LAUNDRY_": {},  
};

function generatePlot() {
    
    console.debug(plot_arcs);
    let grammar = tracery.createGrammar(plot_arcs);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    let tokens = message.split(" ");
    // console.log(tokens);

    let laundry = tokens.map(function(x) {
      let y = plot_replacement_map[x]
      return undefined != y ? y : x
    });

    /* let output = JSON.stringify(laundry);

    let element_id = "output";
    let container = document.getElementById(element_id);
    container.innerHTML = "<p>" + output + "</p>"; */
    
    return laundry;
}