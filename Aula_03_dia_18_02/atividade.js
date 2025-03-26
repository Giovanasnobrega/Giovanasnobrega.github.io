let verificar = () => {
  let idade = window.document.querySelector("#id_idade").value;
  let resultado = document.getElementById("id_resultado");

  if (idade <= 17) {
    resultado.innerHTML = " inapto para iniciar";
  } else if (idade <= 49) {
    resultado.innerHTML =
      "apto para o inicio <br> você precisara fazer renovação em 10 anos";
  } else if (idade <= 69) {
    resultado.innerHTML =
      "apto par ao inicio <br> você precisa fazer renovação em 5 anos";
  } else if ((idade) => 70) {
    resultado.innerHTML =
      "apto par ao inicio <br> você precisa fazer renovação em 3 anos";
  }
};
