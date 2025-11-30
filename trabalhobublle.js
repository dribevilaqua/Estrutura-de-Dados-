// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let vetord = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(vetord)
let vetord1 = vetord.splice()
let vetord2 = vetord.splice()

let vetneg = Array.from({ length: 100 }, (_, i) => -(i + 1));
console.log(vetneg)
let vetneg1 = vetneg.splice()
let vetneg2 = vetneg.splice()

let vetmisturado = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));
console.log(vetmisturado)
let vetmisturado1 = vetmisturado.splice()
let vetmisturado2 = vetmisturado.splice()

 