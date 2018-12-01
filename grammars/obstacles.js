'use strict';

var intro_obstacle = [
    "<tag:river>[river_substance:#liquid_substance#]My way was blocked by a river of #river_substance#. #see_river_effect#. ",
    "<tag:river>[river_substance:#liquid_substance#]But I could go no further, as a river of #river_substance# blocked my path. #see_river_effect#. ",
    "<tag:river>[river_substance:#liquid_substance#]The way forward was barred by a river of #river_substance#. #see_river_effect#. "];

var overcome_obstacle = [
  "<tag:magic><tag:skien><tag:river>I dropped #solution_macguffin# and it rolled forward by itself. As it enters #river_desc#, the river parts and I pass unaharmed. ",
  "<tag:magic><tag:bridge><tag:river>I waved #solution_macguffin# and it grew large enough that when I laid it down I was able to safely walk across above #river_desc#. ",
  "<tag:magic><tag:><tag:river>I was grateful that I had #solution_macguffin#, because when I tossed it up in the air, it hovered there and I was able to cross safely above #river_desc#. ",
];

var types_of_obstacles = ["<tag:river>"];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Context = list of 
function create_obstacle_grammar() {
  var obs_type = choose(types_of_obstacles);
  console.log(obs_type);
  var select_problem  = intro_obstacle.filter(function(s) {return s.includes(obs_type)});
  var select_solution = overcome_obstacle.filter(function(s) {return s.includes(obs_type)});
  console.log(select_problem);
  var encounter_obstacle = {
    "liquid_substance":["rushing waters[river_effect:steep cliffs]","flames[river_effect:ash and charred flora]","frothing beer[river_effect:brakish foam]","sea-dark wine[river_effect:stagnant pools]","flowing water[river_effect:dangerous currents]","deep water[river_effect:the wreckage of carts that tried to ford]","rapid water[river_effect:no safe crossing]","murky water[river_effect:the bones of dead travellers]","leaping flames[river_effect:the bones of it victims]","magma[river_effect:sharp obsidian shards]", "gemstones, burning hot to the touch[river_effect:melted bones]", "liquid gold[river_effect:the cursed remains of beasts who had tried to cross]", "shadowy smoke[river_effect:a disturbing lack of life]", "misama[river_effect:creatures with the flesh stipped from their bones]"],
    "see_river_effect": ["Looking downstream, I saw #river_effect# along the banks", "Along its banks I saw #river_effect#", "In that region, the river was known as a place of #river_effect#"],
    "intro_obstacle": select_problem,
    "solve_obstacle": select_solution,
    "river_desc":["the #river_substance# of the river", "the #river_substance#", "the river of #river_substance#"]
  };
  return encounter_obstacle;
}
