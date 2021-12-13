console.log('1) Converter de number para String:')
let num1 = 1500;
console.log('1- ' + num1.toString());  // apresenta como string( mas não muda o valor de mum1).

//num1 = num1.toString(); Altera realmente o valo de num1.
console.log('2- ' + num1.toString(2)); // Representação binária do num1.

// --------------------------------------------------
console.log();
console.log('2) Arredondando e vendo o tipo.')
let num2 = 10.478432797;

console.log('1- ' + num2.toFixed(2)); // arredonda. (Não alterar a num2 original)

console.log('2- ' + Number.isInteger(num2));

//OBS:
let temp = num2 * 'olá';
console.log('3- ' + temp); // Nan- Not a number.

console.log('4- ' + Number.isNaN(temp));

// -------------------------------------------------
console.log();
console.log('3) Imprecisão do JavaScript:');

let num3 = 0.7;
let num4 = 0.1;
num5 = num3 + num4;

console.log('1- ' + num5); // Impreciso.
num6 = parseFloat(num5.toFixed(2)); // Agora sim conseguimos um valor correto.
// num6 = Number(num5.toFixed(2)); também funciona.
console.log('2- ' + num6);

