// Só funciona na página e não no VsCode.
const numero = Number(prompt('Digite um número:'));

// Método para selecionar o id do HTML e salvar na variável.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

// Inserimos nosso número digitado pelo usuário no id do HTML.
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é: ${numero - 2} </p>`;
texto.innerHTML += `<p>Seu número + 2 é: ${numero + 2} </p>`;