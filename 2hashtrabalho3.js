///ANDRIELE BEVILAQUA GABRIEL
/*Fazer um programa que utilize Hashing para manipular chaves (representadas como um caracter),
e tenha as seguintes funções: Inserir chaves na tabela hashing; Buscar chaves na tabela hashing.*/

const prompt = require('prompt-sync')()

// Escolher tamanho da tabela
let tamanho = parseInt(prompt("Informe o tamanho da tabela hash: "))
let tabela = new Array(tamanho).fill(null)

// Função hash
function hash(chave) {
    return chave.charCodeAt(0) % tamanho
}

// Função para verificar se a tabela está cheia
function tabelaCheia() {
    return tabela.every(item => item !== null)
}

// Inserir chave
function inserir(chave) {
    if (tabelaCheia()) {
        console.log("Tabela cheia! Não é possível inserir novas chaves.")
        return
    }

    let posicao = hash(chave)
    let tentativas = 0

    // Evitar chave duplicada
    for (let i = 0; i < tamanho; i++) {
        if (tabela[i] === chave) {
            console.log(`A chave "${chave}" já está na tabela.`)
            return
        }
    }

    while (tabela[posicao] !== null) {
        console.log(`Colisão na posição ${posicao}, tentando a próxima...`)
        posicao = (posicao + 1) % tamanho
        tentativas++

        if (tentativas >= tamanho) {
            console.log("Tabela cheia durante sondagem. Não foi possível inserir.")
            return
        }
    }

    tabela[posicao] = chave
    console.log(`Chave "${chave}" inserida na posição ${posicao}`)
}

// Buscar chave
function buscar(chave) {
    let posicao = hash(chave)
    let tentativas = 0

    while (tabela[posicao] !== chave && tentativas < tamanho) {
        posicao = (posicao + 1) % tamanho
        tentativas++
    }

    if (tabela[posicao] === chave) {
        console.log(`Chave "${chave}" encontrada na posição ${posicao}`)
    } else {
        console.log(`Chave "${chave}" não encontrada na tabela`)
    }
}

// Menu
let opcao
do {
    console.log("\nMENU")
    console.log("1 - Inserir chave")
    console.log("2 - Buscar chave")
    console.log("3 - Ver tabela")
    console.log("0 - Sair")
    opcao = prompt("Escolha uma opção: ")

    if (opcao === "1") {
        let chave = prompt("Digite a chave (1 caractere): ").toUpperCase()
        if (chave.length === 1) {
            inserir(chave)
        } else {
            console.log("Digite apenas um caractere.")
        }
    } else if (opcao === "2") {
        let chave = prompt("Digite a chave para buscar: ").toUpperCase()
        buscar(chave)
    } else if (opcao === "3") {
        console.log("Tabela atual:")
        tabela.forEach((valor, i) => {
            console.log(`[${i}] -> ${valor === null ? "vazio" : valor}`)
        })
        if (tabelaCheia()) {
            console.log("A tabela está cheia!")
        }
    } else if (opcao !== "0") {
        console.log("Opção inválida. Tente novamente.")
    }

} while (opcao !== "0")

console.log("Programa encerrado.")
