/* E.5 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos.
Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
... */

const pessoas = 
[ 
  {id: 1, first_name: "Juca", last_name: "Da Silva", age: 42},
  {id: 2, first_name: "Daniel", last_name: "Gonçalves",  age: 21},
  {id: 3, first_name: "Matheus", last_name: "Garcia", age: 28},
  {id: 4, first_name: "Gabriel", last_name: "Dorneles",  age: 21}
]

function getPessoaNome(pessoa) {
  return pessoa["first_name"] + " " + pessoa["last_name"];
}

function saudacaoPessoa(name) {
  console.log("Olá " + name + "!");
}

function saudacaoTodos(pessoas) {
  var name;
  for (var pessoa of pessoas) {
    name = getPessoaNome(pessoa);
    saudacaoPessoa(name);
  }
}

window.exercise05 = function() {
  saudacaoTodos(pessoas);
}