// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//exercicios anteriores todos juntos
/*Fazer um programa com as seguintes funções de lista encadeada:
a) Mostrar todos os elementos da lista.
b) Remover o primeiro elemento da lista.
c) Inserir um elemento no início da lista.
d) Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e) Remover um elemento de uma posição específica da lista.*/

// Nó da lista
// pacote para a função prompt funcionar

function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    // Adiciona elemento ao final
    this.append = function(element){
        var node = new Node(element), current
        if(head == null){
            head = node
        } else {
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }

    // Mostra todos os elementos
    this.mostrar = function(){
        var atual = head
        var resultado = ""
        while(atual != null){
            resultado += atual.element + " -> "
            atual = atual.next
        }
        console.log(resultado + "null")
    }

    // Conta quantos elementos existem
    this.count = function(){
        var cont = 0
        var atual = head
        while(atual != null){
            cont++
            atual = atual.next
        }
        return cont
    }

    // Remove o primeiro elemento e retorna ele
    this.removerPrimeiro = function(){
        if (head != null) {
            var removido = head.element
            head = head.next
            length--
            return removido
        } else {
            return null
        }
    }

    // Insere um elemento no início
    this.inserirInicio = function(element){
        var node = new Node(element)
        node.next = head
        head = node
        length++
    }

    // Retorna a posição de um valor (ou -1)
    this.posicaoElemento = function(valor){
        var atual = head
        var pos = 0
        while(atual != null){
            if(atual.element === valor){
                return pos
            }
            atual = atual.next
            pos++
        }
        return -1
    }

    // Remove um elemento de uma posição específica
    this.removerNaPosicao = function(posicao){
        if(posicao < 0 || posicao >= length){
            console.log("Posição inválida")
            return null
        }

        var atual = head
        var removido = null

        if(posicao === 0){
            removido = head.element
            head = head.next
        } else {
            var anterior = null
            var index = 0
            while(index < posicao){
                anterior = atual
                atual = atual.next
                index++
            }
            removido = atual.element
            anterior.next = atual.next
        }
        length--
        return removido
    }
}

// Testes 

var lista = new LinkedList()

console.log("\n--- Teste: append + count ---")
lista.append(10)
lista.append(20)
lista.append(30)
console.log("A lista tem", lista.count(), "elementos")
lista.mostrar()

console.log("\n--- Teste: removerPrimeiro ---")
var removido = lista.removerPrimeiro()
console.log("Elemento removido:", removido)
lista.mostrar()

console.log("\n--- Teste: inserirInicio ---")
lista.inserirInicio(5)
lista.mostrar()

console.log("\n--- Teste: posicaoElemento ---")
console.log("Posição do 20:", lista.posicaoElemento(20))
console.log("Posição do 99:", lista.posicaoElemento(99))

console.log("\n--- Teste: removerNaPosicao (posição 1) ---")
removido = lista.removerNaPosicao(1)
console.log("Elemento removido:", removido)
lista.mostrar()
