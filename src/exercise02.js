// E.2 Dado a seguinte string ‘teste 1 de 2 string 3’, substitua todas as ocorrências de números por $.

function stringOcorrencia(teste){
  var regNumbers = /\d/gi;

  return teste.replace(regNumbers,"$");
}

window.exercise02 = function() {
  var texto = "teste 1 de 2 string 3";
  console.log(stringOcorrencia(texto))
}