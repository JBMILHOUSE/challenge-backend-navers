/* E.9 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id(em ordem crescente).  

const pessoa = [
  { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
  { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
  { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
  { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
];*/

function printPeople(people) {
  for (var person of people) {
    console.log(person);
  }
}

function sortPeopleByAge(people) {
  //criando uma cópia para manter o array 'people' original
  var peopleSortedByAge = people;
  peopleSortedByAge.sort(function (a, b) {
    if (a.age > b.age) {
      return -1;
    } else {
      if (a.age < b.age) {
        return +1;
      } else {
        return a.id - b.id;
      }
    }
  });
  return peopleSortedByAge;
}

window.exercise09 = function() {
 sortPeopleByAge(people)
}