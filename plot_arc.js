'use strict';

// Plot generator
// @ikarth

//var plot_planner = {};
//plot_planner["#PLOT_journey"] = [["#PLOT_arrive_at_destination#"],["#PLOT_journey_event#", "#PLOT_journey#"]];
//plot_planner["#PLOT_arrive_at_destination#"] = ["LAUNDRY_arrive_at_destination"];
//plot_planner[""] = ["#PLOT_get_macguffin#"];
//plot_planner["#PLOT_get_macguffin#"] = [["LAUNDRY_gained_macguffin"]];
//goal_stack = ["PLOT_arrive_at_destination"];

var plot_arcs = {
    "origin": ["#TALE#"],

    "TALE": ["LAUNDRY_intro_character #PLOT_ARC# #PLOT_ARC#"],
    "PLOT_ARC":["#PLOT_visit_wonder# #PLOT_solve_ruins# LAUNDRY_defend_town",
                "#PLOT_deliver_vengeance# #PLOT_commit_murder# LAUNDRY_flee_town",
                "LAUNDRY_agitated_town #PLOT_discover_value# LAUNDRY_defend_town",
                "#PLOT_protect_relative# LAUNDRY_flee_town",
                "#PLOT_recruit_expert# LAUNDRY_appreciate_wonder LAUNDRY_defend_town",
                "#PLOT_sell_junk# LAUNDRY_flee_town",
                ],
    "PLOT_solve_ruins": ['#PLOT_establish_tragedy# #PLOT_pass_obstacle# LAUNDRY_unseal_can',
                    'LAUNDRY_peaceful_town #PLOT_visit_wonder# LAUNDRY_unseal_can',
                    '#PLOT_meet_contact #PLOT_pass_obstacle# #PLOT_acquire_wonder#'],
    "PLOT_deliver_vengeance": ['#PLOT_establish_tragedy# #PLOT_recognize_stranger#',
                          '#PLOT_recognize_stranger# #PLOT_establish_tragedy# #PLOT_ask_around#',
                          '#PLOT_prevent_murder# #PLOT_journey# #PLOT_prevent_murder#'],
    "PLOT_discover_value": ['#PLOT_recognize_stranger# #PLOT_accompany_friend# LAUNDRY_agitated_town',
                       '#PLOT_pass_obstacle# LAUNDRY_appreciate_wonder #PLOT_work_crowd#'],
    "PLOT_protect_relative": ['#PLOT_wandering# #PLOT_recognize_stranger# #PLOT_accompany_friend#',
                         '#PLOT_recognize_stranger# LAUNDRY_ask_around #PLOT_prevent_murder#'],
    "PLOT_recruit_expert": ['LAUNDRY_want_to_bribe #PLOT_acquire_wonder# #PLOT_give_present#',
                       '#PLOT_acquire_wonder_fail# #PLOT_accompany_friend# LAUNDRY_meet_contact'],
    "PLOT_sell_junk": ['#PLOT_acquire_wonder_fail# #PLOT_work_crowd#',
                       'LAUNDRY_meet_contact #PLOT_give_present#'],

    "PLOT_visit_wonder": ['#PLOT_journey# LAUNDRY_appreciate_wonder'],
    "PLOT_commit_murder": ['LAUNDRY_kill_villain'],
    "PLOT_establish_tragedy": ['LAUNDRY_recall_scam'],
    "PLOT_acquire_wonder": ['#PLOT_acquire_macguffin#'],
    "PLOT_recognize_stranger": ['LAUNDRY_around_town LAUNDRY_familiar_face'],
    "PLOT_prevent_murder": ['LAUNDRY_figure_declares_vengeance'],
    "PLOT_accompany_friend": ['LAUNDRY_accompany_friend'],
    "PLOT_work_crowd": ['LAUNDRY_work_crowd LAUNDRY_agitated_town',
                        'LAUNDRY_work_crowd LAUNDRY_peaceful_town'],

    "PLOT_new_quest": ["#PLOT_establish_quest# #PLOT_need_macguffin# #PLOT_resolve_quest#", "#PLOT_protecting_someone#", "#PLOT_new_quest# #PLOT_wandering# #PLOT_new_quest#"],
    "PLOT_protecting_someone": ["#PLOT_need_macguffin#"],
    "PLOT_establish_quest": ["LAUNDRY_establish_quest"],
    "PLOT_resolve_quest": ["LAUNDRY_resolve_quest"],
    "PLOT_reason_to_flee_town":["LAUNDRY_reason_to_flee_town"],
    "PLOT_flee_town":["LAUNDRY_flee_town #PLOT_journey_event#", "LAUNDRY_flee_town"],
    "PLOT_need_macguffin": ["NESTING_increase_macguffin_nesting #PLOT_hear_about_macguffin# #PLOT_start_journey# #PLOT_journey# #PLOT_know_macguffin_location# #PLOT_journey# #PLOT_acquire_macguffin# #PLOT_end_journey#"],
    "PLOT_need_macguffin_fail": ["NESTING_increase_macguffin_nesting #PLOT_hear_about_macguffin# #PLOT_start_journey# #PLOT_journey# #PLOT_know_macguffin_location# #PLOT_journey# #PLOT_acquire_macguffin_fail# #PLOT_end_journey#"],
    "PLOT_wandering":["#PLOT_journey_event#","#PLOT_wandering# #PLOT_journey_event#"],
    "PLOT_journey":["","#PLOT_journey_event#","#PLOT_journey_event#","#PLOT_journey_event#","#PLOT_journey# #PLOT_journey#"],
    "PLOT_acquire_macguffin": ["#PLOT_arrive_at_macguffin_location# #PLOT_pass_obstacle# #PLOT_get_macguffin#", "#PLOT_arrive_at_macguffin_location# #PLOT_get_macguffin#"],
    "PLOT_acquire_macguffin_fail": ["#PLOT_arrive_at_macguffin_location# #PLOT_pass_obstacle_fail# #PLOT_get_macguffin_fail#"],

    "PLOT_want_to_give_present": ["LAUNDRY_want_to_give_present"],
    "PLOT_journey_event":["LAUNDRY_travel_quest_to_destination", "LAUNDRY_journey_event"],
    "PLOT_know_macguffin_location":["LAUNDRY_learn_macguffin_location"],
    "PLOT_hear_about_macguffin":["LAUNDRY_identify_macguffin"],
    "PLOT_get_macguffin":["LAUNDRY_gained_macguffin NESTING_decrease_macguffin_nesting"],
    "PLOT_arrive_at_macguffin_location":["LAUNDRY_arrive_at_destination"],
    "PLOT_give_present":["LAUNDRY_give_present_to_friend"],
    "PLOT_failure_to_give_present":["LAUNDRY_fail_to_give_present_to_friend"],
    "PLOT_pass_obstacle":["#PLOT_overcome_obstacle# #PLOT_complete_obstacle#","#PLOT_need_macguffin# #PLOT_return_to_obstacle# #PLOT_complete_obstacle#"],
    "PLOT_pass_obstacle_fail":["#PLOT_overcome_obstacle_fail#"],
    "PLOT_start_journey":["LAUNDRY_start_journey NESTING_increase_journey_nesting"],
    "PLOT_end_journey":["LAUNDRY_end_journey NESTING_decrease_journey_nesting"],
    "PLOT_return_home":["#PLOT_start_journey# #PLOT_journey_event# #PLOT_end_journey# #PLOT_arrive_at_home#"],
    "PLOT_never_returned_home":["LAUNDRY_never_return_home","LAUNDRY_never_return_home #PLOT_new_quest# LAUNDRY_walk_into_the_sunset"],
    "PLOT_return_to_obstacle":["#PLOT_start_journey# #PLOT_journey_event# #PLOT_end_journey# #PLOT_arrive_at_destination#"],
    "PLOT_overcome_obstacle": ["LAUNDRY_overcome_obstacle"],
    "PLOT_overcome_obstacle_fail": ["LAUNDRY_overcome_obstacle_fail"],
    "PLOT_complete_obstacle": ["LAUNDRY_complete_obstacle"],
    "PLOT_arrive_at_home":["LAUNDRY_arrive_at_destination"],
    "PLOT_arrive_at_destination":["LAUNDRY_arrive_at_destination"],
};

var plot_replacement_map = {
  "LAUNDRY_intro_character": { event: ['intro-character'], gloss: "introduce the character"},
  "LAUNDRY_want_to_give_present": { event: ['intend-gift', 'friend'], gloss: "need thing for friend"},
  "LAUNDRY_need_gift_to_pass_guard": { event: ['intend-gift', 'antagonist'], gloss: "need thing to give to guard to pass obstacle"},
  "LAUNDRY_journey_event" : {event: ['journey-event'], gloss: "something happens along the way while travelling"},
  "LAUNDRY_identify_macguffin": {event: ['learn', 'notion'], gloss: "got macguffin identity"},
  "LAUNDRY_learn_macguffin_location":   {event: ['learn-at', 'notion.place'], gloss: "got macguffin location"},
  "LAUNDRY_travel_quest_to_destination":   {event: ['travel-quest', 'notion.place'], gloss: "going to get macguffin"},
  "LAUNDRY_gained_macguffin":   {event: ['find', 'notion.place', 'thing'], closure: ['thing', 'lost'], gloss: "got macguffin"},
  "LAUNDRY_think_about_macguffin":   {event: ['reflect', 'thing'], gloss: "reflection: on macguffin"},
  "LAUNDRY_give_present_to_friend":   {event: ['gift', 'friend', 'thing'], closure: ['lost', 'thing'], gloss: "give macguffin to friend"},
  "LAUNDRY_fail_to_give_present_to_friend":   {event: ['gift', 'friend', 'thing'], gloss: "tragedy: did not acquire macguffin, so can't give it to friend"},
  "LAUNDRY_start_journey": {event:['journey-start'], gloss: "character starts their journey (great for introducing expositon)"},
  "LAUNDRY_end_journey": {event:['journey-end'], gloss: "character ends their journey"},
  
  "LAUNDRY_arrive_at_destination": {event:['travel-quest','notion.place'], gloss: "arrive at the place we've been trying to get to"},
  "LAUNDRY_complete_obstacle": {event: ['journey-event'], gloss: "character gets past obstacle"},
  "LAUNDRY_overcome_obstacle": {event: ['journey-event'], gloss: "character deals with obstacle through wit/cleverness/skill"},
  "LAUNDRY_overcome_obstacle_fail": {event: ['journey-event'], gloss: "character fails to overcome an obstacle"},
  // "LAUNDRY_": {event: []}, 

  "LAUNDRY_appreciate_wonder": {event: ['reflect', 'place.notion', 'thing']},
  "LAUNDRY_unseal_can": {event: ['unleash', 'place.antagonist', 'friend']},
  "LAUNDRY_kill_villain": {event: ['murder', 'antagonist', 'place']},
  "LAUNDRY_recall_scam": {event: ['seethe', 'antagonist.place', 'thing']},

  "LAUNDRY_accompany_friend": {event: ['relax', 'friend.notion']},
  "LAUNDRY_meet_contact": {event: ['contact', 'friend.friend']},
  "LAUNDRY_work_crowd": {event: ['speechify', 'place', 'friend']},
  "LAUNDRY_agitated_town": {event: ['unhappiness', 'place', 'friend']},
  "LAUNDRY_peaceful_town": {event: ['happiness', 'place', 'friend']},
  "LAUNDRY_around_town": {event: ['mill-around', 'place.thing']},

  "LAUNDRY_familiar_face": {event: ['find-friend', 'friend.place']},
  "LAUNDRY_figure_declares_vengeance": {event: ['save-friend', 'friend.antagonist']},
  "LAUNDRY_defend_town": {event: ['save-town', 'place.antagonist']},
  "LAUNDRY_flee_town": {event: ['travel-forced', 'place', 'notion.place']},

  "NESTING_increase_macguffin_nesting": {event: ['macguffin-new', 'notion.thing'], gloss: "add a new macguffin to the narrative, on top of the macguffin stack"},
  "NESTING_decrease_macguffin_nesting": {event: ['macguffin-resolve', 'notion.thing', 'place'], gloss: "resolve current macguffin, removing it from the stack"},
  "NESTING_increase_journey_nesting": {event: ['journey-new'], gloss: "starting a new sub-journey, placing it on top of the journey stack"},
  "NESTING_decrease_journey_nesting": {event: ['journey-resolve'], gloss: "ending this sub-journey"},
};

function generatePlot(N) {
    
    console.log(plot_arcs);
    let grammar = tracery.createGrammar(plot_arcs);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    let tokens = message.split(" ");
    console.log(tokens);

    let laundry = tokens.map(function(x) {
      let y = plot_replacement_map[x]
      return undefined != y ? y : x
    });
  let display_laundry = true;
    if(display_laundry) {
      let output = JSON.stringify(laundry);

      let element_id = "output";
      let container = document.getElementById(element_id);
      container.innerHTML = "<p>" + output + "</p>";
    }
    
    return {goals: laundry.reverse(),
            protagonist: Math.floor(Math.random()*N)};
}
