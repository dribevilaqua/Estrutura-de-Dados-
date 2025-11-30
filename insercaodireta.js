// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let vetor = [25,57,48,37,12,92,86,33];

function insercaodireta(vetor){

console.log(vetor);
for (let i = 1; i < vetor.length; i++) {
    let num = vetor[i]; 
    let j = i - 1;

    for (j = i -1; j >= 0 && vetor[j] > num; j--) {
        vetor[j + 1] = vetor[j];
    }

    vetor[j + 1] = num;
}
console.log( vetor);
}

insercaodireta(vetor)