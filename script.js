const redutor = (acumulado, valorAtual) => acumulado + valorAtual;

const pessoas = [ 
    {id: 1, first_name: "Juca", last_name: "Da Silva", age: 42},
    {id: 2, first_name: "Daniel", last_name: "Gonçalves",  age: 21},
    {id: 3, first_name: "Matheus", last_name: "Garcia", age: 28},
    {id: 4, first_name: "Gabriel", last_name: "Dorneles",  age: 21} 
  ];

 function somaIdades() {
  let idades = [];
  
  pessoas.forEach(pessoa => {
    idades.push(pessoa.idade);
  })

  console.log(idades.reduce(redutor));
}

somaIdades();
