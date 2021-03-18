/* E.4 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep 
 como entrada imprima o seu endereço no formato ‘ENDERECO, NUMERO, CIDADE/ESTADO’.
 Utilize a fetch API para realizar a requisição.
 */

function formatacao(u) {
  return (
    u["logradouro"] +
    ", " +
    u["cep"] +
    ", " +
    u["localidade"] +
    "/" +
    u["uf"]
  );
}

function endrecoCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((response) => {
     response.json().then((url) => {
       console.log(formatacao(url));
     });
   }).catch ();
}
window.exercise04 = function() {
  const cep = 13054241;

 endrecoCep(cep);
}