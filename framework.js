'use strict';

let N = 25 // N = characters
let M = N // M = things & stuff 
let char = []
let count = () => char.length
let maker = (rules, edges) => function(i, kind, expansion) {
  let k = count()
      // k = Math.ceil(Math.random()*count())

  if (!edges[i]) edges[i] = []
  edges[i][k] = kind // link to any non-person
  // if (char.length < k)
  char.push(namer(rules)(expansion))
}
let namer = (rules) => function(origin) {
  let grammar = tracery.createGrammar(rules);
  grammar.clearState();
  return grammar.flatten(origin);
}
let nameHook = {
  'friend': '#title#',
  'antagonist': '#title#',
  'thing': '#thingTitle#',
  'place': '#placeTitle#',
  'notion': '#notionTitle#',
} // FIXME: don't duplicate with initialization

function makeRelations(N, rules) {  
  let edges = [],
      i = 0
  function link(i,j,u) {
    if (!edges[i]) edges[i] = []
    edges[i][j] = u
  }
  let makeThing = maker(rules, edges),
      nameThing = namer(rules)

  char = Array(N)
  let bake = {
    'friend': () => {
      link(i, i+1, 'friend') // link to next person
      link(i+1, i, 'friend') // relationships are mutual
      char[i] = nameThing('#title#')
      ++i // advance pointer
    },
    'antagonist': () => {
      link(i, i+1, 'antagonist')
      link(i+1, i, 'antagonist')
      char[i] = nameThing('#title#')
      ++i
    },
    'thing': () => {
      makeThing(i, 'thing', '#thingTitle#')
    },
    'place': () => {
      makeThing(i, 'place', '#placeTitle#')
    },
    'notion': () => {
      makeThing(i, 'notion', '#notionTitle#')
    },
  }

  let j = 0
  while (i < N) {
    let roll = Math.random()

    roll < .2 ? bake.notion() :
    roll < .3 ? bake.place() :
    roll < .7 ? bake.thing() :
    roll < .8 ? bake.antagonist() :
                bake.friend()
  }

  // FIXME: avoid global state
  M = char.length
  char.push(...'abcdefghijklmnopqrstuvwxyz'.toUpperCase())
    // tracery doesn't like being passed 'undefined'
  console.log(char.join('\n'))

  return edges
}

let choose = (...args) => {
  if (args.length == 0) throw 'cannot choose from empty list'
  return args[Math.floor(Math.random() * args.length)]
}
// adapted for indexing from https://stackoverflow.com/a/4974690
let format = function (s, ...args) {
  var i = 0
  let get = (j) => typeof args[j] != 'undefined' ? args[j] : ''
  
  return s.replace(/{[0-9]*}/g, function (u) {
    let j = u.slice(1,-1),
        ret = get(j)
    if (!ret) {ret = get(i); ++i}
    return ret
  })
}

function weave(edges, constraints, eventer, rules) {
  let edgeList = () => 
    edges.reduce((U, u, i) => {
      u.forEach((v,j) => {if (v) U.push({'name': `${i},${j}`, 'tags': [v]})}); return U
    }, [])
  let select = (kind) => {
    // FIXME: repeats mapping work
    return new Rel(edgeList()).select(kind)
  }
  
  function link(i,j,u) {
    if (!edges[i]) edges[i] = []
    edges[i][j] = u
    return select('#'+i+','+j)
  }
  let ret = [],
      focus = constraints.protagonist,
      // reserved = new Set([focus]),
      nameThing = namer(rules)

  constraints.goals.forEach((c) => {
    console.debug(c)
    if (!c.event) return // swallow nesting 'events'

    let e = c.event    
    console.log(e[0])

    let bindings = e.map((u,i) => {
      if (i==0) return [focus]
      console.log('\t' + e[i])
      
      let path = e[i].split('.'),
          head = focus

      // resolve a path (in the social graph)
      let res = path.reduce((tail, verb) => {
        let board = select(verb).select('#'+head)
        
        console.log('\t\t' + verb + ' #' + head)
        console.log('\t\t' + board.body.map(u => u.name.split(',')[1]).join(','))

        // emergency fallback
        let pick = board.isEmpty() ? link(head, M, verb) :
                                    board.pickOne() // .drop(reserved)
        let new_name = nameHook[verb]
        //if char.includes(new_name) {
        //  new_name = nameHook[verb];  
        //}
        char[M] = nameThing(new_name);
        let res = board.isEmpty() ? M++ :
                                    pick.body[0].name.split(',')[1]

        head = parseInt(res)
        console.log('\t\t' + char[head])

        tail.push(head)
        return tail
      }, []) // defines res, the sequence of nodes matching path
      return res
    }) // defines bindings
    let bound = bindings.reduce((U,u) => U.concat(u))

    // TODO: discourage cast recycling.
    //        should suffice to do this locally during path resolution.
    /* if (bound.length > 1) {
      console.debug('banning ' + bound.slice(1).map(i => char[i]))
      bound.slice(1).forEach(i => reserved.add(i))
    }
    console.debug(reserved) */

    // TRIGGER expansion
    // let exp = eventer[e[0]],
    //     str = exp.length != 0 ? choose(...exp) : e[0] + ' {} {}'.repeat(e.length-1),
    //     expansion = format(str, ...bound.map(i => char[i]))

    let cast = bound.map((i,j) => char[i]),
                // {let ret = {}; ret[char[j]] = char[i]; return ret}
        grammar = tracery.createGrammar({...eventer[e[0]],
                                         ...cast,
                                         title: cast[0]}); // HACK for intro-character
    grammar.clearState();
    let expansion = grammar.flatten("#origin#");
    
    ret.push(expansion)
  })
  
  return ret
}

function displayResults(element_id, rules) {
      var container = document.getElementById(element_id);

      
      let relations = makeRelations(N, rules)

      let responses = [];
      let event_stubs = bake_stubs(rules)
      let events = Object.keys(event_stubs)
      for(let i = 0; i < 300; i++) {
          let eventer = events.reduce((res, k) => {
              let U = event_stubs[k].origin ?
                      event_stubs[k] : {...rules, "origin": event_stubs[k]}
                      // turn stubs into grammars. leave grammars alone.

              res[k] = U
              return res
              }, {})

      // console.log(constraints.goals)
      // console.log(relations)
      let constraints = generatePlot(N)
      responses.push(weave(relations, constraints, eventer, rules)
                      .map((u) => '<p>' + u + '</p>')
                      .reverse().join('\n'))
      // TODO: expect relations to be mutated (stepped back in time).

      /* var responses = "<ul>";
      for(var i = 0; i < 15; i++) {
                         responses += "<li>";
                         responses += testGrammar(input_grammar)["message"];
                         responses += "</li>"
                         }
      responses += "</ul>"; */
          }
    let book_title = "Silk"
    let book_text = '<h2>CHAPTER ZZZ</h2>' + responses.join('<h2>CHAPTER ZZZ</h2>');
    let chapter_count = 0;
    book_text = book_text.replace(/ZZZ/g, function() {return ++chapter_count;});
    container.innerHTML = "<h1>" + book_title + "</h1>\n" + book_text + "\n";
    // console.log(relations)
}

/* function testGrammar(grammar_rules, context) {
    console.debug(grammar_rules);
    let grammar = tracery.createGrammar(grammar_rules);
    //grammar.addModifiers(baseEngModifiers);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    return {"message": message, "context": grammar};
} */

function testGrammar_displayResults(input_grammar, element_id) {
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