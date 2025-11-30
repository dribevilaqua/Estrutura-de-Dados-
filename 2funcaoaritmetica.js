// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//Criar uma função que verifique se uma expressão matemática tem parênteses ( ), colchetes [ ] e chaves { } corretos:

function verificarExpressao(expressao) {
    let pilha = [];

    for (let i = 0; i < expressao.length; i++) {
        let simbolo = expressao[i];

        if (simbolo === '(' || simbolo === '[' || simbolo === '{') {
            // Se o símbolo for uma abertura, coloca na pilha
            pilha.push(simbolo);
        } else if (simbolo === ')' || simbolo === ']' || simbolo === '}') {
            // Se for fechamento, tem que verificar se combina
            if (pilha.length === 0) {
                // Se a pilha já está vazia, deu erro
                return false;
            }

            let topo = pilha.pop(); // pega o último que entrou

            if (
                (simbolo === ')' && topo !== '(') ||
                (simbolo === ']' && topo !== '[') ||
                (simbolo === '}' && topo !== '{')
            ) {
                // Se não combinar, está errado
                return false;
            }
        }
    }

    // No final, se a pilha estiver vazia, deu tudo certo
    return pilha.length === 0;
}

// Entrada da expressão pelo usuário
let expressao = prompt("Digite a expressão aritmética: ");

// Chama a função e mostra o resultado
if (verificarExpressao(expressao)) {
    console.log("Expressão correta!");
} else {
    console.log("Expressão incorreta!");
}