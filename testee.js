// ANDRIELE BEVILAQUA GABRIEL 3ADS MANHA
// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Função para testar tempo de execução
function testarOrdenacao(nome, func, vetorOriginal) {
    let vetorTeste = vetorOriginal.slice(); // Faz uma cópia do vetor para não alterar o original
    func(vetorTeste);
}

// Testando os três métodos em diferentes tamanhos de vetores

// Testando com 100 números
let tamanho = 100;
console.log(`\n===== Testando com ${tamanho} números =====`);

let vetorCrescente = [];
for (let i = 0; i < tamanho; i++) {
    vetorCrescente.push(i);
}

let vetorInvertido = [];
for (let i = 0; i < tamanho; i++) {
    vetorInvertido.push(tamanho - 1 - i);
}

let vetorAleatorio = [];
for (let i = 0; i < tamanho; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 2000) - 1000);
}

console.log("\n===== Vetor Crescente =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorCrescente);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Invertido =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorInvertido);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Aleatório =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorAleatorio);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

// Testando com 1000 números
tamanho = 1000;
console.log(`\n===== Testando com ${tamanho} números =====`);

vetorCrescente = [];
for (let i = 0; i < tamanho; i++) {
    vetorCrescente.push(i);
}

vetorInvertido = [];
for (let i = 0; i < tamanho; i++) {
    vetorInvertido.push(tamanho - 1 - i);
}

vetorAleatorio = [];
for (let i = 0; i < tamanho; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 2000) - 1000);
}

console.log("\n===== Vetor Crescente =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorCrescente);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Invertido =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorInvertido);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Aleatório =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorAleatorio);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

// Testando com 10000 números
tamanho = 10000;
console.log(`\n===== Testando com ${tamanho} números =====`);

vetorCrescente = [];
for (let i = 0; i < tamanho; i++) {
    vetorCrescente.push(i);
}

vetorInvertido = [];
for (let i = 0; i < tamanho; i++) {
    vetorInvertido.push(tamanho - 1 - i);
}

vetorAleatorio = [];
for (let i = 0; i < tamanho; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 2000) - 1000);
}

console.log("\n===== Vetor Crescente =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorCrescente);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Invertido =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorInvertido);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Aleatório =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorAleatorio);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

// Testando com 100000 números
tamanho = 100000;
console.log(`\n===== Testando com ${tamanho} números =====`);

vetorCrescente = [];
for (let i = 0; i < tamanho; i++) {
    vetorCrescente.push(i);
}

vetorInvertido = [];
for (let i = 0; i < tamanho; i++) {
    vetorInvertido.push(tamanho - 1 - i);
}

vetorAleatorio = [];
for (let i = 0; i < tamanho; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 2000) - 1000);
}

console.log("\n===== Vetor Crescente =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorCrescente);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Invertido =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorInvertido);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

console.log("\n===== Vetor Aleatório =====");
for (let i = 0; i < 4; i++) {
    let algoritmos = ['Bubble Sort', 'Inserção Direta', 'Seleção Direta', 'Quicksort'];
    let funcoes = [bubble, insercaoDireta, selecaoDireta, (vetor) => quicksort(vetor, 0, vetor.length - 1)];
    let nomeAlgoritmo = algoritmos[i];
    let func = funcoes[i];

    let inicio = performance.now();
    testarOrdenacao(nomeAlgoritmo, func, vetorAleatorio);
    let fim = performance.now();
    console.log(`${nomeAlgoritmo} - Tempo: ${fim - inicio} ms`);
}

// Funções de ordenação

////////////// Bubble Sort //////////////////////////////////
function bubble(vetor) {
    for (let j = 0; j < vetor.length - 1; j++) {
        for (let i = 0; i < vetor.length - j - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }
}

///////////////////// Inserção Direta //////////////////////////
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

//////////////////////// Seleção Direta //////////////////////////
function selecaoDireta(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        let temp = vetor[minIndex];
        vetor[minIndex] = vetor[i];
        vetor[i] = temp;
    }
}

///////////////////////// Quicksort /////////////////////////////
function quicksort(vetor, esquerda, direita) {
    let i = esquerda;
    let j = direita;
    let pivot = vetor[Math.floor((esquerda + direita) / 2)];

    while (i <= j) {
        while (vetor[i] < pivot) i++;
        while (vetor[j] > pivot) j--;

        if (i <= j) {
            let temp = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = temp;
            i++;
            j--;
        }
    }

    if (esquerda < j) quicksort(vetor, esquerda, j);
    if (i < direita) quicksort(vetor, i, direita);
}
