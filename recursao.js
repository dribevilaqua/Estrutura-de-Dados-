
// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n === 0 || n === 1) { // Caso base
        return 1;
    }
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // Saída: 120


///Execução detalhada para fatorial_iterativo(5)
///resultado = 1
///*Laço for começa:
///i = 1 → resultado = 1 * 1 = 1
///i = 2 → resultado = 1 * 2 = 2
///i = 3 → resultado = 2 * 3 = 6
///i = 4 → resultado = 6 * 4 = 24
///i = 5 → resultado = 24 * 5 = 120
///Retorna 120.
///Resumo: O código percorre os números de 1 a n, acumulando o resultado da multiplicação.*