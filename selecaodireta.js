/// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let vetor = [25,57,48,37,12,92,86,33]
let aux
let posicao
let menor

function selecaodireta (vetor){
console.log(vetor)
    for(let i=0; i<vetor.length; i++){  
        menor = vetor[i]
        posicao = i
        for(let j=i+1; j<vetor.length; j++){
            if(vetor[j] < menor){
                menor = vetor[j]
                posicao = j
            }
        }
    aux = vetor[i]
    vetor[i] = vetor[posicao]
    vetor[posicao] = aux        
    }

console.log(vetor)
}
selecaodireta (vetor)