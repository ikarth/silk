'use strict';

let relations = makeRelations()
function makeRelations() {  
  let edges = [], i = 0
  function link(i,j,u) {
    if (!edges[i]) edges[i] = []
    edges[i][j] = u
  }

  let N = 3, j = 0
  while (i < N) {
    let rel = Math.random() < .8 - .1*i ? 'notion' : 'friend'
    
    if (rel == 'friend') {
      link(i, i+1, rel) // link to next person
      link(i+1, i, rel) // relationships are mutual
      ++i // advance pointer
    }
    else {
      let k = N + Math.floor(Math.random()*j)
      link(i, k, rel) // link to any non-person
      ++j
    }
  }
  return edges
}

let edgeList = (edges) =>
  edges.reduce((U, u, i) => {
    u.forEach((v,j) => {if (v) U.push({'name': `${i},${j}`, 'tags': [v]})}); return U
  }, [])

function select(kind) { // IMPLICIT STATE
  return new Rel(edgeList(relations)).select(kind)
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

function weave(edges, constraints) {
  
  function link(i,j,u) {
    if (!edges[i]) edges[i] = []
    edges[i][j] = u
    return select('#'+i+','+j)
  }
  let ret = [],
      focus = constraints.protagonist,
      cast = {},
      edge = edges.length
  
  constraints.goals.forEach((c) => {
    console.log(c)
    if (!c.event) return // swallow nesting 'events'

    let e = c.event, exp = eventer[e[0]]
    let str = exp.length != 0 ? choose(...exp)
                              : e[0] + ' {} {}'.repeat(e.length-1)
    
    console.log(e[0])
    let bindings = e.map((u,i) => {
      if (i==0) return [focus]
      console.log('\t' + e[i])
      
      let path = e[i].split('.'),
          head = focus
      let res = path.reduce((tail, verb) => {
        let board = select(verb).select('#'+head)
        // let fallback = cast[head] ? cast[head] : edges.length
        
        console.log('\t\t' + board.body[0])
        let pick = board.isEmpty() ? link(head, edge, verb) : board.pickOne()
        
        let res = board.isEmpty() ? edge++ : pick.body[0].name.split(',')[1]
        head = res
        tail.push(parseInt(res))
        return tail
      }, []) // defines res, the sequence of nodes matching path
      
      return res
    }) // defines bindings
    let munged = bindings.reduce((U,u) => U.concat(u))
    
    ret.push(format(str, ...munged.map(i => char[i])))
  })
  
  return ret
}

function displayResults(element_id) {
      var container = document.getElementById(element_id);
      let constraints = {goals: generatePlot().reverse(),
                         protagonist: 0}

      // console.log(constraints.goals)
      console.log(relations)
      let responses = weave(relations, constraints)
                      .map((u) => '<li>' + u + '</li>')
                      .reverse().join('\n')
      // TODO: expect relations to be mutated (stepped back in time).

      /* var responses = "<ul>";
      for(var i = 0; i < 15; i++) {
                         responses += "<li>";
                         responses += testGrammar(input_grammar)["message"];
                         responses += "</li>"
                         }
      responses += "</ul>"; */
    container.innerHTML = '<ul>' + responses + '</ul>';
    console.log(relations)
    // console.log(responses);
}
    


/* function partial(func, ...argsBound) {
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
    console.debug(grammar_rules);
    let grammar = tracery.createGrammar(grammar_rules);
    //grammar.addModifiers(baseEngModifiers);
    grammar.clearState();
    let message = grammar.flatten("#origin#");
    return {"message": message, "context": grammar};
} */