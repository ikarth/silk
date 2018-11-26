let intro_character = {
    "origin":[
    //First person narration, each intro starts with:
    //This is my story. I first...
    //I approached the caravan looking like #line#. I then revealed myself by #verbSay# #intro# #physicaldesc#
		"[setTitle:#title#][setPronouns:#pronoun#] This is my story. I started to travel because #fullReason#. I first approached the caravan looking like #line#. I then revealed myself by #verbSaying#, \"#intro#\" #physicaldesc#",
		"[setTitle:#title#][setPronouns:#pronoun#] This is my story. I began to travel because #fullReason#. I first hid, only revealing myself to the caravan from afar. When I approached, I said \"#intro#\" #physicaldesc#",
		"[setTitle:#title#][setPronouns:#pronoun#] This is my story. I initiated my journey because #fullReason#. I first saw the caravan in the distance, and ran to approach. I looked like #line#, and #verbSay.ed#, \"#intro#\" #physicaldesc# "
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

intro_character = {...desc_clothing, ...intro_character};
intro_character = {...appearance, ...intro_character};
intro_character = {...reason_travel, ...intro_character};
console.log(intro_character)