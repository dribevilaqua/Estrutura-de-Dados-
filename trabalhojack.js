///ANDRIELE BEVILAQUA GABRIEL 3ADS MANHA
// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Criando os três vetores
let vetorCrescente = Array.from({ length: 1000 }, (_, i) => i); // 0 a 999
let vetorNegativo = Array.from({ length: 1000 }, (_, i) => -(i + 1)); // -1 a -1000
let vetorAleatorio = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2000) - 1000); // Aleatório entre -1000 e 999

// Função para testar tempo de execução
function testarOrdenacao(nome, func, vetorOriginal) {
    let vetorTeste = vetorOriginal.slice(); // Faz uma cópia do vetor para não alterar o original
    let tempo = func(vetorTeste); // Executa o algoritmo e mede o tempo
    console.log(`${nome} - Tempo: ${tempo.toFixed(6)} ms`);
}

////////////// Bubble Sort //////////////////////////////////
function bubble(vetor) {
    let inicio = performance.now();
    for (let j = 0; j < vetor.length - 1; j++) {
        for (let i = 0; i < vetor.length - j - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }
    let fim = performance.now();
    return fim - inicio;
}

///////////////////// Inserção Direta //////////////////////////
function insercaoDireta(vetor) {
    let inicio = performance.now();
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i];
        let j = i - 1;

        while (j >= 0 && vetor[j] > chave) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
    let fim = performance.now();
    return fim - inicio;
}

///////////////////// Seleção Direta /////////////////////////////
function selecaoDireta(vetor) {
    let inicio = performance.now();
    for (let i = 0; i < vetor.length; i++) {
        let menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        let aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = aux;
    }
    let fim = performance.now();
    return fim - inicio;
}

// Testando os três métodos em cada um dos três vetores
console.log("\n===== Vetor Crescente (0 a 999) =====");
testarOrdenacao("Bubble Sort", bubble, vetorCrescente);
testarOrdenacao("Inserção Direta", insercaoDireta, vetorCrescente);
testarOrdenacao("Seleção Direta", selecaoDireta, vetorCrescente);

console.log("\n===== Vetor Negativo (-1 a -1000) =====");
testarOrdenacao("Bubble Sort", bubble, vetorNegativo);
testarOrdenacao("Inserção Direta", insercaoDireta, vetorNegativo);
testarOrdenacao("Seleção Direta", selecaoDireta, vetorNegativo);

console.log("\n===== Vetor Aleatório (1000 números misturados) =====");
testarOrdenacao("Bubble Sort", bubble, vetorAleatorio);
testarOrdenacao("Inserção Direta", insercaoDireta, vetorAleatorio);
testarOrdenacao("Seleção Direta", selecaoDireta, vetorAleatorio);
