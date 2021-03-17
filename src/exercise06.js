/*E.6 Imprima a soma das idades (sugestão: utilizar o método reduce) */

const pessoa = 
[ 
  {id: 1, first_name: "Juca", last_name: "Da Silva", age: 42},
  {id: 2, first_name: "Daniel", last_name: "Gonçalves",  age: 21},
  {id: 3, first_name: "Matheus", last_name: "Garcia", age: 28},
  {id: 4, first_name: "Gabriel", last_name: "Dorneles",  age: 21}
]


function getSumOfPeoplesAge(pessoa) {
  return pessoa.reduce(function (acc, current) {
    return acc + current.age;
  }, 0);
}

window.exercise06 = function() {
  console.log(getSumOfPeoplesAge(pessoa));
}