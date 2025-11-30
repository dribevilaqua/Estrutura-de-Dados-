// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Geração de vetor com diferentes ordens
function gerarVetor(tamanho, tipo) {
    let vet = [];
    if (tipo === 'crescente') {
        for (let i = 0; i < tamanho; i++) vet.push(i);
    } else if (tipo === 'decrescente') {
        for (let i = tamanho - 1; i >= 0; i--) vet.push(i);
    } else {
        for (let i = 0; i < tamanho; i++) {
            vet.push(Math.floor(Math.random() * 2000) - 1000); 
        }
    }
    return vet;
}

// Algoritmo Bubble Sort
function bubbleSort(vetor) {
    for (let j = 0; j < vetor.length - 1; j++) {
        for (let i = 0; i < vetor.length - 1 - j; i++) {
            if (vetor[i] > vetor[i + 1]) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
            }
        }
    }
}

// Algoritmo Seleção Direta
function selecaoDireta(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
    }
}

// Algoritmo Inserção Direta
function insercaoDireta(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i];
        let j = i - 1;
        while (j >= 0 && vetor[j] > chave) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
}

// Quicksort 
function quicksort(array, left = 0, right = array.length - 1) {
    if (left >= right) return;
    let i = left;
    let j = right;
    let pivot = array[Math.floor((left + right) / 2)];

    while (i <= j) {
        while (array[i] < pivot) i++;
        while (array[j] > pivot) j--;
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    if (left < j) quicksort(array, left, j);
    if (i < right) quicksort(array, i, right);
}

// Função para medir o tempo de execução
function medirTempo(algoritmo, vetorOriginal) {
    let copia = vetorOriginal.slice(); // faz a cópia 
    let inicio = performance.now();
    algoritmo(copia);
    let fim = performance.now();
    return (fim - inicio).toFixed(2); // tempo em milissegundos
}

// Função principal de testes
function testarAlgoritmos() {
    const tamanhos = [100, 1000, 10000, 100000];
    const tipos = ['crescente', 'decrescente', 'aleatorio'];
    const algoritmos = [
        { nome: "Bubble Sort", funcao: bubbleSort },
        { nome: "Seleção Direta", funcao: selecaoDireta },
        { nome: "Inserção Direta", funcao: insercaoDireta },
        { nome: "Quicksort", funcao: (arr) => quicksort(arr, 0, arr.length - 1) }
    ];

    for (let tipo of tipos) {
        console.log(`\n=== Tipo de vetor: ${tipo.toUpperCase()} ===`);
        for (let tamanho of tamanhos) {
            let vetor = gerarVetor(tamanho, tipo);
            console.log(`\nTamanho: ${tamanho}`);
            for (let alg of algoritmos) {
                let tempo = medirTempo(alg.funcao, vetor);
                console.log(`${alg.nome}: ${tempo} ms`);
            }
        }
    }
}

testarAlgoritmos();
