// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

function limpar(fila){
    while(fila.length != 0)
        fila.shift()
}

let fila = []
let x

//x = parseInt(prompt("Informe um número: "))
x = 7
fila.push(x)
fila.push(1)
fila.push(2)

console.log("Fila: " + fila)

x = fila.shift()
console.log("elemento: " + x)
console.log("Fila: " + fila)

console.log("Inserindo número 10")
fila.push(10)
console.log("Fila: " + fila)

limpar(fila)
console.log("Fila: " + fila)