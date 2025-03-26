let limpar = () => {
  // Capturar via ID
  // let jogador = document.getElementById("id_Germana_Livia")
  // console.log(jogador);

  //CAPTURAR via QUERY INDIVIDUAL
  //   let jogador = document.querySelector("id_Germana_Livia");
  //   console.log(jogador);
  //   jogador.innerHTML = "<strong>Liam Martinez</strong>";

  //Capturar todos por QUERY / CLASSE
  //   let jogador = document.querySelectorAll("id_Germana_Livia");
  //   console.log(jogadores.length);
  //   console.log(jogadores);

  //   for (let i = 0; i < jogador.length; i++) {
  //     jogadores[i].innerHTML = "<strong>Liam Martinez</strong>";
  //   }

  //Capturar todos por QUERY / TAG
  // let jogador = document.querySelectorAll("id_Germana_Livia");
  //   console.log(jogadores.length);
  //   console.log(jogadores);

  //   for (let i = 0; i < jogador.length; i++) {
  //     jogadores[i].innerHTML = "";
  //   }
  //Capturar todos os NAMES via QUERY
  let jogadores = document.getElementsByName("Germana");
  console.log(jogadores.length);
  console.log(jogadores);

  for (let i = 0; i < jogador.length; i++) {
    jogadores[i].innerHTML = "";
  }
};
