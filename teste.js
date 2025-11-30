// busca binária recursiva e não recursiva
let vetor = []
let resultado
let alvo = 20
 
for(let i=0; i<19; i++){
    vetor.push(i)
}
 
//não recursiva
/*let alvo = 20
let meio
for(let i=0; i<vetor.length/2; i++){
    meio = i
}
if(meio > alvo){
    vetor.meio-=1
}
else if(alvo < meio){
    vetor.meio+=1
}
else if(alvo == meio){
    console.log(`Número ${alvo} encontrado`)
}
else
console.log(`Número ${alvo} não encontrado`)*/
     
//função recursiva
function buscaBinaria(vetor, alvo, inicio = 0, fim = vetor.length - 1) {
    if (inicio > fim) {
      console.log(`Número ${alvo} não encontrado`)
      return
    }
 
    let meio = Math.floor((inicio + fim) / 2)
 
    if (vetor[meio] === alvo) {
      console.log(`Número ${alvo} encontrado`)
    } else if (vetor[meio] > alvo) {
      buscaBinaria(vetor, alvo, inicio, meio - 1)
    } else {
      buscaBinaria(vetor, alvo, meio + 1, fim)
    }
}
buscaBinaria(vetor, alvo)