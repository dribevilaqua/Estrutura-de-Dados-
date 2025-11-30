const prompt = require('prompt-sync')(); 

function torreDeHanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover o disco 1 da torre ${origem} para a torre ${destino};`);
        return;
    }
    torreDeHanoi(n - 1, origem, auxiliar, destino);
    console.log(`Mover o disco ${n} da torre ${origem} para a torre ${destino};`);
    torreDeHanoi(n - 1, auxiliar, destino, origem);
}

// Defina o número de discos que deseja testar
let numeroDeDiscos = 3; // Pode alterar para outro número
torreDeHanoi(numeroDeDiscos, 'A', 'B', 'C');

