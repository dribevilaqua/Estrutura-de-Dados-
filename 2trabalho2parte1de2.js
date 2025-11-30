///ANDRIELE BEVILAQUA GABRIEL
/*Fazer um programa resolva o problema de Josephus, usando: ◦ Lista encadeada. ◦ Vetor. ◦ Discuta vantagens e desvantagens.
O problema: é feito um círculo de N pessoas numeradas de 1 a N. Em seguida, percorre a roda a partir de 1 eliminando cada M-ésima
pessoa até que a roda seja reduzida a uma só pessoa. Devolver o número da pessoa que sobrou.*/

// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//Solução com VETOR
function josephusVetor(p, elimina) {
    let pessoas = []
    for (let i = 1; i <= p; i++) {
        pessoas.push(i)
    }

    let index = 0
    while (pessoas.length > 1) {
        index = (index + elimina - 1) % pessoas.length
        console.log("Elimina:", pessoas[index])
        pessoas.splice(index, 1)
    }

    return pessoas[0]
}

// Teste
let p = parseInt(prompt("Digite o número de pessoas: "))
let elimina = parseInt(prompt("Digite o intervalo de eliminação: "))

let sobra = josephusVetor(p, elimina)
console.log("sobra:", sobra)


