// ----------------------------------------------
console.log('1) Criando e acessando arrays:');
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log('1- ' +  alunos[1]);

console.log('2- ' + alunos.length); //o 3 é depois do último elemento.

console.log('3- ' + alunos[50]); // elemento que não existe é undefined.

// ------------------------------------------------
console.log();
console.log('2) Mudando e adicionando elementos:')

alunos[0] = 'Eduardo';
console.log('1- ' + alunos[0]); // muda a posição 0;

// Adiciona um elemento no fim:
alunos.push('Otávio'); // mesmo que-> aluno[alunos.length] = 'Otávio'.
console.log('2- ' + alunos); // Adicionamos Otávio.

alunos.unshift('Atadoufo'); // Adiciona um elemento no início.
console.log('3- ' + alunos);

alunos.pop('Otávio'); // Remove o elemento. 
console.log('4- ' + alunos);

// Elementos removidos com pop podem ser retornados.
const removido = alunos.pop();
console.log('5- ' + removido);

// Remove o primeiro elemento.
// Elementos removidos com shift podem ser retornados.
alunos.shift();
console.log('6- ' + alunos);

// Deleta sem mudar o indice dos arrays:
delete alunos[0];
console.log('7:');
console.log(alunos);
console.log(alunos[0]);

// ------------------------------------------------
console.log();
console.log('3) Fatiamento:')

const primos = ['Líva', 'Vanessa', 'Carminha', 'Junior'];
console.log('1- ' + primos.slice(0, 2)); // exclusive o último.
console.log('2- ' + primos.slice(0, -1));

