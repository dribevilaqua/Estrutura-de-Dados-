// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//e) Remover um elemento de uma posição específica

function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

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

    this.mostrar = function(){
        var atual = head
        var resultado = ""
        while(atual != null){
            resultado += atual.element + " -> "
            atual = atual.next
        }
        console.log(resultado + "null")
    }

    // e) Remover um elemento de uma posição específica
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

// Teste 
lista = new LinkedList()
lista.append(10)
lista.append(20)
lista.append(30)
lista.append(40)

console.log("Antes de remover posição 2:")
lista.mostrar()

var removido = lista.removerNaPosicao(2)
console.log("Elemento removido:", removido)

console.log("Depois de remover posição 2:")
lista.mostrar()
