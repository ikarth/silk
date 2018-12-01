let appearance ={
  "origin":["#line#"],
  "line":["#appearance.a# #person# #wearing# #color.a# #outerwear#"],
  "appearance":[ "angered", "ill", "angry", "intelligent", "mean", "cruel", "moody", "displaced", "sad", "dumb", "excited", "sick", "grumpy", "stupefied", "happy", "tired", "large", "muscular", "attractive", "painted", "petite", "blond", "blue-eyed", "polished", "brown-eyed", "rosy", "brunette", "scarred", "short", "cute", "small", "tall", "tattooed", "thick", "heavy", "tiny", "wiry"],
  "person":["man", "woman", "child", "figure", "person", "traveler", "adventurer", "character", "individual"],
  "wearing":["clothed in", "enveloped by", "swathed in", "wearing", "donning", "dressed in", "sporting"],
  "color": [ "white", "silver", "grey", "black", "navy", "blue", "cerulean", "sky blue", "turquoise", "blue-green", "azure", "teal", "cyan", "green", "chartreuse", "olive", "yellow", "gold", "amber", "orange", "brown", "orange-red", "red", "maroon", "rose", "red-violet", "pink", "magenta", "purple", "blue-violet", "indigo", "violet", "peach", "apricot", "ochre", "plum"],
  "outerwear" : [ "abaya", "anorak", "apron", "blazer", "cagoule", "cloak", "coat", "duffle coat", "duster", "frock coat", "gilet", "greatcoat", "hoodie", "jacket", "leather jacket", "matchcoat", "mess jacket", "mino", "opera coat", "overcoat", "pea coat", "poncho", "parka", "raincoat", "rain pants", "redingote", "robe", "shawl", "shrug", "ski suit", "sport coat", "top coat", "trench coat", "vest", "waistcoat", "windbreaker"]
  }
  
// @lee3206 (forked from intro_character.js)
let intro_character = {
  "myStory":[
  //First person narration, each intro starts with:
  //This is my story. I first...
  //I approached the caravan looking like #line#. I then revealed myself by #verbSay# #intro# #physicaldesc#
  "[setTitle:#title#][setPronouns:#pronoun#] This is my story. I started to travel because #fullReason#. I first approached the caravan looking like #line#. I then revealed myself by #verbSaying#, \"#intro#\" #physicaldesc#.",
  "[setTitle:#title#][setPronouns:#pronoun#] This is my story. I began to travel because #fullReason#. I first hid, only revealing myself to the caravan from afar. When I approached, I said \"#intro#\" #physicaldesc#.",
  "[setTitle:#title#][setPronouns:#pronoun#] This is my story. I initiated my journey because #fullReason#. I first saw the caravan in the distance, and ran to approach. I looked like #line#, and #verbSay.ed#, \"#intro#\" #physicaldesc#."
  ],

  "verbSaying": [
  "saying",
  "shouting",
  "whispering",
  "crying",
  "declaring",
  "announcing",
  "revealing",
  "stating",
  "voicing"
  ],
  "verbSay":[
  "say",
  "shout",
  "whisper",
  "cry",
  "declare",
  "announce",
  "reveal",
  "state",
  "voice"

  ]
}
let reason_travel = {
  "origin":[
  "[setReason:#fullReason#] #fullReason#"
  ],

  "fullReason":[
  "I am #reasonIng#",
  "#reasonIWas#"
  ],
  "reasonIng": [
  "<motive:fortune>searching for my fortune",
  "<motive:exile>exiled by an enemy",
  "<motive: lost>shipwrecked and finding my way home",
  "<motive: quest>on a routine trading journey",
  "<motive: quest>on a religious quest",
  "<motive: revenge>seeking revenge against the bandit king",
  "<motive: improvement>trying to overthrow the despot",
  "<motive: improvement>trying to prove my bravery",
  "<motive: revenge>getting revenge against my nemesis",
  "<motive: rescue>rescueing my #lovedOne#",
  "<motive: fortune>going home to claim my inheritance",
  "<motive: lost>finding my lost homeland",
  "<motive: knowledge>looking for historical records",
  "<motive: hide>in disguise to hide from my parents",
  "<motive: achievement>going to capture every animal",
  "<motive: achievement>planning to steal the greatest treasure",
  "<motive: reunite>trying to be reunited with my lover",
  "<motive: improvement>freeing my people",
  "<motive: achievement>making maps of the silk road",
  "<motive: novelty>trying to see new things",
  "<motive: novelty>traveling to have an adventure",
  "<motive: improvement>becoming a great artist",
  "<motive: improvement>learning from a skilled master",
  "<motive: quest>on a ritual journey",
  "<motive: quest>traveling as part of my religious devotion",
  "<motive: knowledge>seeking forbidden knowledge",
  "<motive: improvement>traveling to become the best #trade#",
  "<motive: improvement>mastering the sword",
  "<motive: improvement>writing a novel",
  "<motive: fortune>traveling to become wealthy by selling my cargo",
  "<motive: quest>escorting a #promisedOne# to their new family",
  "<motive: improvement>seeking to win the tournaments of my martial art",
  "<motive: fortune>collecting debts",
  "<motive: quest>travelling to fulfill my destiny",
  "<motive: rescue>searching a cure for my #lovedOne# illness",
  "<motive: achievement>trying to become famous",
  "<motive: improvement>planning to claim the throne that is rightfully mine",
  "<motive: rescue>searching for my lost twin",
  ],

  "reasonIWas":[
  "I accidentally killed a vile man and now I am a wanted fugitive from #town#",
  "I was disgraced as a monk and kicked out of the temple near #town#",
  "I was too harsh to the wrong person during training, and a highborn noble took offence",
  "an opposing noble stole my attractive partner and maneuvered me out of my house in #town#",
  "I was robbed when transporting sensitive materials and unfairly blamed for the loss",
  "I was branded and exiled from my home in #town#",
  "I've gambled away everything and I had to leave #town#",
  "my partner was extorting me, and during an argument I accidentally killed them. I fled #town# to avoid punishment",
  "I was having an affair and fled #town# to escape their partner's wrath",
  "I was so blackout drunk that I think I killed someone. I fled #town# in a haze in the night",
  "I was tricked into leaving my #town#. I later found my partner was having an affair with #char#, and I decided to leave"
  ],

  "promisedOne":[
  "bride",
  "groom",
  "promised partner",
  "loved one",
  "destined spouse",
  "engaged partner"

  ],

  "lovedOne":[
  "son",
  "daughter",
  "child",
  "father",
  "mother",
  "parent",
  "relative",
  "cousin",
  "spouse"
  ],

  "trade":[
  "chef",
  "merchant",
  "smith",
  "silver smith",
  "musician",
  "botanist"
  ]
   
}

// @notkrd (forked from landscape_desc.json)
let landscape_desc = {
  "origin":["[theCrop:#crop#]#fields#","#terrain#"],
  
  "fields":["#fields_morning#","#fields_night#", "Fields of #crop# #expanse#, towards the horizon."],
  "fields_morning":["[theTime:morning]#weather_time#. #inhabited_desc#"],
  "fields_night":["[theTime:night]#weather_time#. #uninhabited_desc#"],
  "crop":["barley","rice","wheat","cotton","peas","lentils","onions"],
  "inhabited_desc":["#farmers.capitalize# #moved_through# fields of #theCrop#."],
  "uninhabited_desc":["Fields of #theCrop# #expanse#, #uninhabited_prep#.", "#animal.capitalize# flitted through the #uninhabited# fields."],
  "uninhabited_prep":["now #uninhabited#", "with no soul in them"],
  "farmers":["#farmer_desc# #farmer_bodies#","#lines_of# #farmer_bodies# carrying #tool#"],
  "farmer_desc":["hunched", "#lines_of#"],
  "farmer_bodies":["bodies","souls","farmers"],
  "tool":["sacks","hoes"],
  
  "terrain":["#steppes#"],
  
  "steppes":["The steppes #expanse# around us travelers."],
  
  "uninhabited":["vacant","empty"],
  "lines_of":["lines of", "rows of", "many"],
  "animal":["crows", "hamsters"],
  "moved_through":["moved through", "walked across", "labored in"],
  "weather_time":["It was a #weather# #theTime#"],
  "weather":["crisp", "sodden", "warm", "dry"],
  "expanse":["stretched out", "expanded", "covered the earth"]
}

// @jazztap
let bake_stubs = (rules) => ({
    'need': [],
    'find': { ...rules,
              'origin': 'I found #3# at #2#. #findThing#.'},
    'reflect': ['I thought about #2# in the safety of #1#. I held #3# in my hands.'],
    'unleash': ['#3# once warned me of courting #2#, whose haunt was #1#. But it was too late.'],
    'murder': ['In the streets of #2#, I shot #1# with an arrow through the breastbone.'],
    'seethe': { ...rules,
                'origin': 'I had met #1# in #2#, where they sold me a useless #3#, #artifact.a# #detail#.'},

    'relax': ['I went on a walk with #1#, while we considered the matter of #2#.'],
    'contact': ['#1# introduced me to #2#.'],
    'speechify': ['I regaled the people of #1#. Afterward, #2# sought me out.'],
    'unhappiness': ['The streets of #1# seemed vacant. #2# spoke to me lowly.'],
    'happiness': ['The streets of #1# were brimming with celebrants, #2# sometimes joining them.'],
    'mill-around': {...rules,
                    'origin': 'I explored #1#, finding #2# for sale from local vendors: #artifact.a# #madeWith# [mat2:#mat#]#mat2# #detail#.'},

    'find-friend': ['While in #2#, I met #1# by chance.'],
    'save-friend': ['I discovered #1# was menaced by #2#.'],
    'save-town': ['I resolved to stay in #1#. #2# soon moved against it, but we were ready.'],
    'travel-forced': ['I could no longer stay in #1#. Remembering #2#, I left for #3# to seek it out.'],

    'travel-quest': ['I journeyed to #2# following #1#.'],
    'learn': ['I found out about #1#.'],
    'learn-at': ['I found out #1# is at #2#.'],
    'make': [],
    'master': [],
    'intend-gift': ['I wanted to give #1# a birthday gift.'],
    'intend-hurt': [],
    'intend-impress': [],
    'intend-help': [],

    'gift': ['I gave #2# to #1#.'], // 'I gave the {} to {}.']
    'journey-end': ['I concluded my journey.'],
    'journey-event': {...rules,
                      'origin': ['I encountered a bizarre creature.',
                                 'I trekked an incredible vista. #terrain#',
                                 'I approached a town. [theCrop:#crop#]#fields#']},
    'journey-start': ['I set out again.'],
    'journey-new': ['I strove after my object.'],
    'journey-resolve': ['I passed through.'],
    'macguffin-new': ['I started to look for #1#.'],
    'macguffin-resolve': ['I finished my sub-quest for #1#.'],
    'intro-character': {...rules,
                        'origin': '#0#, #line#, began to tell their tale.'}, // : #myStory#
  })