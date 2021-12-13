// ----------------------------------
// Sintax com barra \ 
console.log('1) Caracter de escape:');
let string2 = "isso é um \"texto\" ";
console.log('1- ' + string2);

// ----------------------------------
console.log();
console.log('2) Iterando em strings:');
let string3 = 'Um texto maroto';
console.log('1- ' + string3[1]);
console.log('2- ' + string3[0]);
// OBS: Posições fora do range resultam em undefined.
console.log('3- ' + string3[50]);
console.log('4- ' + string3[-1]); // Valor negativo da undefined.
console.log('5- ' + string3.charAt(6)); // Se sair do range da um valor vazio

//------------------------------------
console.log();
console.log('3) Funções:');
console.log('1- '+ string3.indexOf('Um')); // Se não achar nada resulta -1.
console.log('2- ' + string3.indexOf('m', 3)); // Procura a partir do 3.

console.log('3- ' + string3.lastIndexOf('m'));
console.log('4- ' + string3.lastIndexOf('m', 10 )); // Procura voltando do 10.

console.log('5- ' + string3.replace('Um', 'Algum')); // Não muda a string original.

console.log('6- ' + string3.length);

console.log('7- ' + string3.slice(9, 15)); // Exclusive o último.
console.log('7- ' + string3.slice(-1)); // Ultima posição.
console.log('8- ' + string3.slice(-6));
console.log('9- ' + string3.slice(-12, -7)); // Faz o mesmo que o substring.

console.log('10- ' + string3.substring(3, 8)); // Exclusive o último.

console.log('11- ' + string3.split(' ')); // Dividimos por espaço.