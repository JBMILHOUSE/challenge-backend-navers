/* E.1 Crie uma função que recebe duas strings e retorna a de maior comprimento.*/

function ComprimentoString(argumentoUm, argumentoDois){
  if(argumentoUm.length > argumentoDois.length){
    return argumentoUm;
  }
  return argumentoDois;
}

window.exercise01 = function() {
  const argumentoUm = "E aí,Brow";
  const argumentoDois = "Oi, tudo bem? sim tudo";

  console.log(ComprimentoString(argumentoUm, argumentoDois));
}

 
