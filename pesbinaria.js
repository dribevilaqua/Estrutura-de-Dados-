const prompt = require('prompt-sync')(); // Importa a biblioteca para entrada do usuário

// Criar um array ordenado de 0 a 19
let vetor = [];
for (let i = 0; i < 20; i++) {
    vetor.push(i);
}

// Função de Pesquisa Binária
function pesquisaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (array[meio] === alvo) {
            return meio; // Retorna o índice onde o número foi encontrado
        } else if (array[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    return -1; // Retorna -1 se o número não for encontrado
}

// Solicita um número ao usuário
let num = parseInt(prompt("Digite um número entre 0 e 19 para pesquisar: "));

// Chama a função de pesquisa binária
let resultado = pesquisaBinaria(vetor, num);

// Exibe o resultado
if (resultado !== -1) {
    console.log(`Número ${num} encontrado na posição ${resultado} do array.`);
} else {
    console.log(`Número ${num} não encontrado no array.`);
}
