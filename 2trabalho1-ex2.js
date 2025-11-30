
//ANDRIELE BEVILAQUA GABRIEL - ADM MANHÃ
//Faça uma função que use uma pilha para inverter a ordem das letras de cada palavra de uma string, 
// preservando a ordem das palavras. Por exemplo, dado o texto:
//“EXERCICIO MUITO COMPLICADO”
//Saída: “OICICREXE OTIUM ODACILPMOC”

// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Função para inverter as letras de cada palavra usando uma pilha
function inverterPalavrasComPilha(frase) {
  let palavras = frase.split(" "); // Separa as palavras da frase
  let resultadoFinal = []; // Onde vamos armazenar a frase final

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];  // Pega cada palavra
    let pilha = [];  // Cria uma pilha vazia

    // Coloca a letra na pilha
    for (let j = 0; j < palavra.length; j++) {
      pilha.push(palavra[j]); 
    }

    let palavraInvertida = "";  // Variável para armazenar a palavra invertida

    // Em vez de usar pilha.pop(), vamos pegar e remover a última letra manualmente
    while (pilha.length > 0) {
      let letra = pilha[pilha.length - 1]; // Pega a última letra
      palavraInvertida += letra;  // Adiciona a letra na palavra invertida
      pilha.length--;  // Remove a última letra da pilha
    }

    // Adiciona a palavra invertida ao resultado final, com espaço no final se não for a última palavra
    resultadoFinal += palavraInvertida;
    if (i < palavras.length - 1) {
      resultadoFinal += " "; // Adiciona o espaço entre as palavras
    }
  }

  return resultadoFinal; // Retorna a frase com as palavras invertidas
}

// Programa principal
let frase = prompt("Digite uma frase: ");
let invertida = inverterPalavrasComPilha(frase);

console.log("Frase com palavras invertidas:"); 2
console.log(invertida);
