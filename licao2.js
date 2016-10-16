//short circuite
var a = [1,2,3,4,5];

function desempilhar() {
  a.pop();
  return false;
};

if (desempilharA() && desempilharA()) {
  console.log('desempilhou');
};

console.log(a);
-> [1,2,3]

var b = [1,2,3,4,5];

function desempilhar() {
  a.pop();
  return true;
};

if (desempilhar() && desempilhar()) {
  console.log('desempilhou');
  -> desempilhou
};

console.log(a);
-> [1,2,3]


//knockout
explicação macarrônica do knockout
var obj = {
  name: ko.observable("giovani")
};

___name = "leonardo";

// Activates knockout.js
ko.applyBindings(obj);
obj.name("leonardo")

obj.name = function(val) {]
  ___name = val;

  for(el in obj.name.observers) {
    //atualizar o dom
  }
}

obj.name.observers = ["div"];

//real code
var obj = {
  name: ko.observable("giovani")
};

// Activates knockout.js
ko.applyBindings(obj);
console.log(obj.name());

obj.name.subscribe(function(a) { alert('obj.name foi atualizado: ' + a) })