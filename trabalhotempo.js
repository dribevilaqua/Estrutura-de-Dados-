// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Criando um vetor com 1000 números negativos
let vetor = Array.from({ length: 1000 }, (_, i) => i + 1);

////testando tempo de cada função em um vetor de 1000 números negativos
// Cópia separada do vetor vetorord original
let vetor1 = vetor.slice()
let vetor2 = vetor.slice()

////////////// Bubble Sort//////////////////////////////////
function bubble(vetor) {
    let inicio = performance.now(); ///mede tempo antes da execução
    for (let j = 0; j < vetor.length - 1; j++) {
        for (let i = 0; i < vetor.length - j - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }
    let fim = performance.now(); //mede tempo depois da execução
    return fim - inicio; // Retorna o tempo total de execução
}

///////////////////// Inserção Direta//////////////////////////
function insercaoDireta(vetor1) {
    let inicio = performance.now(); //mede tempo antes da execução
    for (let i = 1; i < vetor1.length; i++) {
        let num = vetor1[i]; 
        let j = i - 1;
        for (j = i -1; j >= 0 && vetor1[j] > num; j--) {
            vetor1[j + 1] = vetor1[j];
        }
        vetor1[j + 1] = num;
    }
    let fim = performance.now(); //mede tempo depois da execução
    return fim - inicio; // Retorna o tempo total de execução
}

///////////////////// Seleção Direta/////////////////////////////
function selecaoDireta(vetor2) {
    let inicio = performance.now(); //mede tempo antes da execução
    for (let i = 0; i < vetor2.length - 1; i++) {  
        let menor = vetor2[i];
        let posicao = i;
        for (let j = i + 1; j < vetor2.length; j++) { 
            if (vetor2[j] < menor) {
                menor = vetor2[j];
                posicao = j;
            }
        }
        if (posicao !== i) { 
            let aux = vetor2[i];
            vetor2[i] = vetor2[posicao];
            vetor2[posicao] = aux;
        }
    }
    let fim = performance.now(); //mede tempo depois da execução
    return fim - inicio; // Retorna o tempo total de execução
}

/// Funções e os tempos
let tempoBubble = bubble(vetor.slice()); 
let tempoInsercao = insercaoDireta(vetor.slice());
let tempoSelecao = selecaoDireta(vetor.slice());

/// Tempos finais com 6 casas decimais
console.log(`Bubble Sort: ${tempoBubble.toFixed(6)} ms`);
console.log(`Inserção Direta: ${tempoInsercao.toFixed(6)} ms`);
console.log(`Seleção Direta: ${tempoSelecao.toFixed(6)} ms`);

 