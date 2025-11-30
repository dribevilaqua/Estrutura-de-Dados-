/*Fazer um programa resolva o problema de Josephus, usando: ◦ Lista encadeada. ◦ Vetor. ◦ Discuta vantagens e desvantagens.
O problema: é feito um círculo de N pessoas numeradas de 1 a N. Em seguida, percorre a roda a partir de 1 eliminando cada M-ésima
pessoa até que a roda seja reduzida a uma só pessoa. Devolver o número da pessoa que sobrou.*/

// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//Solução com LISTA ENCADEADA
function JosephusListaEncadeada(n, m) {
    function Node(value) {
        this.value = value
        this.next = null
    }

    let head = new Node(1)
    let current = head

    for (let i = 2; i <= n; i++) {
        current.next = new Node(i)
        current = current.next
    }
    current.next = head // fecha o círculo

    let anterior = current // começa no último
    current = head

    while (current !== current.next) {
        for (let i = 1; i < m; i++) {
            anterior = current
            current = current.next
        }
        console.log("Eliminado:", current.value)
        anterior.next = current.next
        current = current.next
    }

    return current.value
}

// Teste
let n = parseInt(prompt("Digite o número de pessoas (N): "))
let m = parseInt(prompt("Digite o intervalo de eliminação (M): "))

let sobrevivente = JosephusListaEncadeada(n, m)
console.log("Sobrevivente (lista encadeada):", sobrevivente)
