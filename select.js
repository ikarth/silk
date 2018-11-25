let char = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()

class Rel {
    constructor(body) {
      this.body = [...body] // list of bonds
    }
      
    select(kind, verbose = false) {
      // e.g. select(kin.daughter)
      if (verbose) console.log(this.body.map(u => u.tags[0]))
      if (!kind) return undefined
      
      if (kind[0] == '#') {
        let [a,b] = kind.slice(1).split(',')
        let matches = (a,b) => (u) => {
          let [au,bu] = u.name.split(',')
          
          let p = a ? a == au : true,
              q = b ? b == bu : true
          return p && q
        }
        
        if (this.body.some(u => !u.name)) throw 'some bond is nameless. was the charmap exhausted?'
        return new Rel(
          this.body.filter(matches(a,b))
        )
      }
      else {
        // find tags matching 'kind' in each position specified
        let test = (t) => kind.split('.').every((k,i) => (k == '*') || t.split('.')[i] == k)
        return new Rel(
          this.body.filter(u => u.tags.find(test))
        )
      }
    }
    pickOne(prioritize = (u) => 1) {
      let weights = this.body.map(prioritize),
          board = weights.reduce((acc, u) => acc + u, 0)
      if (this.body.length == 0) {
        // throw 'tried to pick from empty selection'
        return undefined
      }
      
      // weighted choice within the selection
      let roll = Math.floor(Math.random() * board),
          i, counter
      for (i = 0, counter = 0; i < weights.length; ++i) {
        counter += weights[i]
        if (counter > roll) break
      }
      return new Rel( [this.body[i]] )
    }
    
    push(kind) {
      // select('').push('kin.sire')
      // TODO: warn on mutate
    }
    pop(kind) {
      // select('kith.strain.boiling').pop('kith')
      // TODO: warn on absent
    }
      
    /* reverse() { // FIXME: mutates selection
      return new Rel( this.body.map((u) => {
        // HACK: lookup by reversing name
        return bonds.find(v => v.name == [...u.name].reverse().join(''))
      }))
    } */
    toString() {
      return this.body.map(u => u.name.split(',').map(c=>char[c]).join(''))
    }
    isEmpty() {
      return this.body.length == 0
    }
  }