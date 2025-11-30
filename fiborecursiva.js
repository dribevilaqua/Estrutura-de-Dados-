// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

function fibonacci(n) {
    if (n === 0) return 0; // Caso base 1
    if (n === 1) return 1; // Caso base 2
    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

// Gerar os primeiros 8 elementos da sequência de Fibonacci
for (let i = 0; i < 8; i++) {
    console.log(fibonacci(i));
}
