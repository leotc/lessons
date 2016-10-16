var superman = superheroLike({},'voar');
obj..voar();

var ironman = superheroLike({},'voar');
ironman.voar();

// Portland => decorator (erich gemma, martin fowler)
function superheroLike(obj, strPoder) {
  obj.poder = strPoder;
  obj.voo = 0;
  obj.voar = function() {
    obj.voo += 1;
  };

  return obj;
};

// function builder pattern
function Superhero(strPoder) {
  var obj = Object.create(createSuperhero.prototype);
  obj.poder = strPoder;
  obj.voo = 0;

  return obj;
};

createSuperhero.prototype = {
  voar: function() {
    this.voo += 1;
  },
  andar: andarF = function() {
    //performAndar
  }
};

// pseudoclassical pattern
function Superhero(strPoder) {
  this.poder = strPoder;
  this.voo = 0;
};

createSuperhero.prototype = {
  voar: function() {
    this.voo += 1;
  },
  andar: andarF = function() {
    //performAndar
  }
};

var superman = new Superhero('voar');