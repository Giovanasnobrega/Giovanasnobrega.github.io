//Operadores Aritméticos
// +, -, *, /, %, **
let a = 5 + 5; // Adição
let s = 4 - 4; // Subtração
let m = 5 * 5; // Multiplicação
let d = 5 / 2; // Divisão
let e = 2 ** 3; // Exponenciação é uma operação que consiste em multiplicar
let r = 4 % 2; // Calcule o resto de uma divisão, também conhecido como

//Operadores de atribuição
let x = 0;
x += 1; // x = x + 1;
x -= 1; // x = x - 1;
x *= 1; // x = x * 1;
x /= 1; // x = x / 1;
x **= 2; // x = x ** 2;
x %= 1; // \\ x = x % 1;

// Precendências: (), **, * / %, + -
let Precendência = (3 + 3) * 2 - (4 / 2 + 5);
// console.log(precedência);

//OPERADORES BOOLEANOS

//TENÁRIO é um tipo de operador condicional ternário
// condição ? verdadeiro : falso
//console.log(0 ? "verdadeiro" : "falso")

/*FALSE
Quando um valor é considerado false em contextos onde um booleano é
 obrigatório (condicionais e loops)
 false, 0, -0, """, null, undefined, e NaN 
 todos retornaram falso
*/

// console.log(false == 0 ? "IGUAL" : "NÃO IGUAL")

// if (false == 0){
//     console.log("Igual");
// }else{
//     console.log("Não")
// }

/*TRUE
Quando um valor é considerado true em contextos onde um booleano é obrigatório
condicionais e loops
true, {}, [], 1, 3.23, "false"
*/

// console.log(true == "false" ? "IGUAL" : "NÃO IGUAL");

//Operadores logicos
//valores booleanos, que quando verificado resulta em true ou false
let pao = true;
let bolo = false;

//AND &&
//console.log(pao && bolo) // se um dos dois forem falsos, assim o valor será falso
//OR ||
//console.log(pao || bolo) //quando os dois for falso
//NOT !
//console.log(!pao) //nega e troca o valor
//console.log(!bolo) //nega e troca o valor

//OBS para a próxima atividade
