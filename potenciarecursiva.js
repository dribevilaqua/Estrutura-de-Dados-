const prompt = require('prompt-sync')() 

function potencia(base, expoente) {
    if (expoente === 0) return 1; // Qualquer número elevado a 0 é 1
    if (expoente < 0) return 1 / potencia(base, -expoente); // Lida com expoentes negativos
    return base * potencia(base, expoente - 1); // Chamada recursiva
}

// Testando a função com diferentes valores
console.log(potencia(2, 3));  // 2³ = 8
console.log(potencia(5, 0));  // 5⁰ = 1
console.log(potencia(3, 4));  // 3⁴ = 81
console.log(potencia(2, -2)); // 2⁻² = 1/4 = 0.25

