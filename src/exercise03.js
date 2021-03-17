//E.3 Dado o objeto {4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’} substitua os números na frase ‘T35t3 d3 35t4g1o’ conforme a sua respectiva letra.

function substituaLetra(palavra) {
  const sub = {4: "a", 3: "e", 1: "i", 5: "s"};
  return sub[palavra];
}

function substituaFrase(frase){
  var regexNumber = /[1345]/gi;

  return frase.replace(regexNumber, substituaLetra);
}

window.exercise03 = function() {
  const frase = "T35t3 d3 35t4g1o";

  console.log(substituaFrase(frase));
}