// ---------------------------------------
// Escrever um comentário
console.log('1)');
console.log("Olá, mundo!");

/* Comentario longo de mais de uma linha
   iasjidjoajsd mundo   */

// ---------------------------------------
console.log()
console.log('2) Atalhos importantes: ');
// alt + shift + seta ( duplica a linha).
// crtl + alt + seta (move a linha).
// ctrl + shift + l ( seleção de vários).
// ctrl + ; (comenta várias linhas).

// ----------------------------------------
console.log();
console.log('3) Concatenando strings:');
let nome1 = 'Normando';
let nome2 = 'Jefferson';
let nome3 = 'Tigre da Silva';

console.log('1- '+ nome1 + ' ' + nome2 + ' ' + nome3);
console.log(`2- ${nome1} ${nome2} é bonito.`);

// -----------------------------------------
// Não é possivel modificar o valor de uma constante.
// A constante precisa ser criada e inicializada ao mesmo tempo.
console.log();
console.log('4) Declarando uma constante:')
const nome_1 = 'João';
console.log('1- ' + nome_1 + ' nasceu em 1985');
// ECMAScript é uma padronização do JS criada pela empresa ECMA International.
// Temos várias ES, como por ex a ECMAScript 2015 (ES6).
// Não se usa mais 'var' para declarar variáveis.

// ----------------------------------------
console.log();
console.log('5) Tipos primitívos:');
let nome_2= 'José'; // String
let n = 10; // number
let n2= 10.40; //number
let nomeAluno; // undefined, não ponta par lugar nenhum.
let sobreNome = null; // Não aponta par lugar nenhum (parece com undefined).
/*A diferença entre null e undefined é que o null é utilizado para que o sistema 
  não aponte para nenhum local, você configura o null e não pode configurar o undefined.
  O sistema que configura o undefined.*/
let aprovado = true; // Booleano.