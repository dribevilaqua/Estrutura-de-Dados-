/// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let vetor1 = []
let vetor2 = []
let vetorintercalado = []

let i = 0

while(i<5){
    vetor1.push(parseInt(Math.random()*10))
    vetor2.push(parseInt(Math.random()*10))
    i++
}
console.log(vetor1)
console.log(vetor2)


for(i=0; i<vetor1.length; i++){
    vetorintercalado.push(vetor1[i])
    vetorintercalado.push(vetor2[i]) 
}
console.log(vetorintercalado)
