//Formas de declaraçao de funçoes
// function verificar(){
// }

//let verificar = function(){
// }

verificar = () => {
  //querySelector = São formas de capturar o elemento,
  // seja via classe(.), id(#) ou tag.

  //Capturando o valor do input e convertendo para tipo numérico
  let numero = Number(window.document.getElementById("id_numero").value);

  //Capturando todo a tag p com id="id_resultado"
  let resultado = document.querySelector("#id_resultado");
  console.log(resultado);

  if (numero % 2 == 1) {
    resultado.innerHTML = "O número digitado é ímpar";
  } else {
    resultado.innerHTML = "O número digitado é par";
  }
};
