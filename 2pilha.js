const prompt = require('prompt-sync')()
 
function Clear(pilha){
    while(pilha.length!=0){
        pilha.pop()
    }
}
 
var pilha = []
var x
 
//insere elementos na fila
x = parseInt(prompt("Insira um número: "))
pilha.push(x)
pilha.push(1)
pilha.push(2)
 
console.log("Pilha: " + pilha)
 
//deleta o elemento na fila
x = pilha.pop()
console.log("elemento: " + x)
console.log("Pilha: " + pilha)
 
//insere outro elemento
pilha.push(10)
console.log("Pilha: " + pilha)
 
//chama a função clear
Clear(pilha)
console.log("Pilha: " +pilha)