const prompt = require('prompt-sync')()
 
function limpar(pilha){
    while(pilha.length!=0){
        pilha.pop()
    }
}
    
function top(pilha){ 
    if(pilha.length !=0){
      x = pilha.pop() // pop Remove o último elemento de um array (o que está no topo da pilha)E retorna esse elemento   
      pilha.push(x)
      return x
    }
    return -1 //pilha vazia
}

var pilha = []
var x
 
x = parseInt(prompt("Insira um número: "))
pilha.push(x)
pilha.push(1)
pilha.push(2)
 
console.log("Pilha: " + pilha)
x = pilha.pop()
console.log("elemento removido: " + x)
console.log("Pilha: " + pilha)
pilha.push(10)
pilha.push(45)
console.log("Pilha: " + pilha)
console.log("Topo: " + top(pilha))
limpar(pilha)
console.log("Pilha: " + pilha)