const prompt = require('prompt-sync')(); // Importa biblioteca para entrada do usuário

// Criar um array ordenado de 0 a 19
let vetor = [];
for (let i = 0; i < 20; i++) {
    vetor.push(i);
}

// Função de Pesquisa Binária Recursiva
function pesquisaBinariaRecursiva(array, alvo, esquerda, direita) {
    if (esquerda > direita) {
        return -1; // Número não encontrado
    }

    let meio = Math.floor((esquerda + direita) / 2);

    if (array[meio] === alvo) {
        return meio; // Retorna a posição do número
    } else if (array[meio] < alvo) {
        return pesquisaBinariaRecursiva(array, alvo, meio + 1, direita);
    } else {
        return pesquisaBinariaRecursiva(array, alvo, esquerda, meio - 1);
    }
}

// Solicita um número ao usuário
let num = parseInt(prompt("Digite um número entre 0 e 19 para pesquisar: "));

// Chama a função de pesquisa binária recursiva
let resultado = pesquisaBinariaRecursiva(vetor, num, 0, vetor.length - 1);

// Exibe o resultado
if (resultado !== -1) {
    console.log(`Número ${num} encontrado na posição ${resultado} do array.`);
} else {
    console.log(`Número ${num} não encontrado no array.`);
}

            