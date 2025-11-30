/// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let aux
let vetor = [25,57,48,37,12,92,86,33]

function bublle (vetor){
console.log(vetor)
    for(let j=0; j<vetor.length-1; j++){
        for(let i=0; i<vetor.length-j-1; i++){
            if(vetor[i] > vetor[i+1]){
                aux = vetor[i] 
                vetor[i] = vetor[i+1]
                vetor[i+1] = aux
            }
        }
    }
console.log(vetor)
}
bublle (vetor)