// @jazztap
let bake_stubs = (rules) => ({
    'need': [],
    'find': { ...rules,
              'origin': 'I found #3# at #2#. #findThing#'},
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

    'travel-quest': ['#origin_road_travel# I arrived at #1# after.'],
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
    'journey-new': ['#journeyTest# I strove after my object.'],
    'journey-resolve': ['I passed through.'],
    'macguffin-new': ['I started to look for #1#.'],
    'macguffin-resolve': ['I finished my sub-quest for #1#.'],
    'intro-character': {...rules,
                        'origin': '#0#, in their #physicaldesc#, began to tell their tale: #intro#'}
  })
