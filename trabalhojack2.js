///ANDRIELE BEVILAQUA GABRIEL 3ADS MANHA
// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// Criando os vetores para diferentes tamanhos
function criarVetores(tamanho) {
    return {
        vetorCrescente: Array.from({ length: tamanho }, (_, i) => i),
        vetorInvertido: Array.from({ length: tamanho }, (_, i) => (tamanho - 1 - i)),
        vetorAleatorio: Array.from({ length: tamanho }, () => Math.floor(Math.random() * 2000) - 1000)
    };
}

// Função para testar tempo de execução
function testarOrdenacao(nome, func, vetorOriginal) {
    let vetorTeste = vetorOriginal.slice(); // Faz uma cópia do vetor para não alterar o original
    let inicio = performance.now();
    func(vetorTeste);
    let fim = performance.now();
    console.log(`${nome} - Tempo: ${fim - inicio} ms`);
}

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

///////////////////// Seleção Direta /////////////////////////////
function selecaoDireta(vetor) {
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
}

///////////////////// Quicksort /////////////////////////////
function quicksort(array, left, right) {
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
    quicksort(array, left, j);
    quicksort(array, i, right);
}

// Testando os três métodos em diferentes tamanhos de vetores
[100, 1000, 10000, 100000].forEach(tamanho => {
    console.log(`\n===== Testando com ${tamanho} números =====`);
    let { vetorCrescente, vetorInvertido, vetorAleatorio } = criarVetores(tamanho);
    
    console.log("\n===== Vetor Crescente =====");
    testarOrdenacao("Bubble Sort", bubble, vetorCrescente);
    testarOrdenacao("Inserção Direta", insercaoDireta, vetorCrescente);
    testarOrdenacao("Seleção Direta", selecaoDireta, vetorCrescente);
    testarOrdenacao("Quicksort", (vetor) => quicksort(vetor, 0, vetor.length - 1), vetorCrescente);
    
    console.log("\n===== Vetor Invertido =====");
    testarOrdenacao("Bubble Sort", bubble, vetorInvertido);
    testarOrdenacao("Inserção Direta", insercaoDireta, vetorInvertido);
    testarOrdenacao("Seleção Direta", selecaoDireta, vetorInvertido);
    testarOrdenacao("Quicksort", (vetor) => quicksort(vetor, 0, vetor.length - 1), vetorInvertido);
    
    console.log("\n===== Vetor Aleatório =====");
    testarOrdenacao("Bubble Sort", bubble, vetorAleatorio);
    testarOrdenacao("Inserção Direta", insercaoDireta, vetorAleatorio);
    testarOrdenacao("Seleção Direta", selecaoDireta, vetorAleatorio);
    testarOrdenacao("Quicksort", (vetor) => quicksort(vetor, 0, vetor.length - 1), vetorAleatorio);
});