console.log('1) Arredondando números:');
let num1 = 9.54678;
let num2 = Math.floor(num1); // arredonda para baixo.
console.log('1- ' + num2);
let num3 = Math.ceil(num1); // arredpmda para cima.
console.log('2- ' + num3);
let num4 = Math.round(num1); // arredonda para o mais próximo.
console.log('3- ' + num4);

// ----------------------------------------------
console.log();
console.log('2) Max e mim:');
console.log('1- ' + Math.max(1, 2, 3, -10, 50, 8));
console.log('1- ' + Math.min(1, 2, 3, -10, 50, 8));

// ----------------------------------------------
console.log();
console.log('2) Random:');
console.log('1- ' + Math.random());
// Pega um número aleatório entre 10 e 5 e depois soma com 5
// para não ficar 0.39423247. Depois arredondamos para ficar inteiro.
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log('2- ' + aleatorio);

// ----------------------------------------------
console.log();
console.log('3) Potencia, raiz e pi ');
console.log('1- ' + Math.pow(2, 3)); // 2 ** 10 também funciona.
console.log('2- ' + Math.PI);
// OBS: Se você dividir por 0 não dara erro e retornará infinity. 
// 100 / 0 - Isso é avaliado como true.