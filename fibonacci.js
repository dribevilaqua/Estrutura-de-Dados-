/// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//fibonacci com 10 números
let a 
let b
let c
let fibo = []

a = 0
b = 1

fibo = [a, b]

for(let i=0; i<8; i++){
    c = a + b
    fibo.push(c)
    a = b
    b = c
}
console.log(fibo)
