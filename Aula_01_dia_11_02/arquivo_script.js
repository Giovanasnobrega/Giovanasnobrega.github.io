// let $nome = "Paulo";
// console.log($nome);

// let _idade = 30;
// console.log(
//   "Eu tenho " + _idade + " anos. Nao sou velho, mas tambem nao sou novo."
// );

// let estudar = true;
// let outroTipoBoleano = false;
// console.log("Rodrigo gosta de 'estudar'?" + estudar + "ou" + outroTipoBoleano);

// const meuTime = "Fortaleza";
// //meuTime = "Ceará";

// console.log('"Seja bem-vindo"! Sou ' + meuTime + "ate morrer!");

// console.log(`Ola, meu nome é ${$nome}.
//     Tenho ${_idade} anos.
//     `);

//Observações:
//undefined é algo que não está definido
//null é nulo - é um objeto que tem nada dentro dele

const pessoa1 = {
  nome: "Germana", //String
  idade: 15, //Number
  casada: false, //Boolean
  conjuge: null, //Nulo
};

const infor2 = ["Germana", "Talita", "Yasmin"];
// console.log(infor2[2]);

const pessoa2 = {
  nome: "Cristiane",
  idade: 44,
  casada: true,
  conjuge: "Gilton",
};

//Palavra reservada do Javascript para informar o tipo de dado
console.log(typeof pessoa1.nome);
console.log(typeof pessoa1.idade);
console.log(typeof pessoa1.casada);
console.log(typeof pessoa1.conjuge);

console.log(`
    Meu nome é ${pessoa1.nome},
    Minha idade é ${pessoa1.idade},
    Casada? ${pessoa1.casada},
    Nome do conjuge ${pessoa1.conjuge}
    `);

console.log(`
        Meu nome é ${pessoa2.nome},
        Minha idade é ${pessoa2.idade},
        Casada? ${pessoa2.casada},
        Nome do conjuge ${pessoa2.conjuge}
        `);
