const prompt = require('prompt-sync')(); // Certifique-se de instalar com: npm install prompt-sync

let vetor = [25, 57, 48, 37, 12, 92, 86, 33];
let aux;
let posicao;
let menor;

function selecaodireta(vetor) {
    console.log("Vetor original:", vetor);

    for (let i = 0; i < vetor.length - 1; i++) {  
        menor = vetor[i];
        posicao = i;

        for (let j = i + 1; j < vetor.length; j++) { 
            if (vetor[j] < menor) {
                menor = vetor[j];
                posicao = j;
            }
        }

        if (posicao !== i) { 
            aux = vetor[i];
            vetor[i] = vetor[posicao];
            vetor[posicao] = aux;
        }
    }

    console.log("Vetor ordenado:", vetor);
}

selecaodireta(vetor);
