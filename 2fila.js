// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let fila = []
let x

//x = parseInt(prompt("Informe um número: "))
x = 7
fila.push(x)
fila.push(1)
fila.push(2)

console.log("Fila: " + fila)

//push remove o primeiro elemento que entrou
x = fila.shift()
console.log("elemento: " + x)
console.log("Fila: " + fila)

console.log("Inserindo número 10")
fila.push(10)
console.log("Fila: " + fila)

