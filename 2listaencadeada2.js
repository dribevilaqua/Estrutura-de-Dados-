// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// b) Remover o primeiro elemento da lista

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

    // b) Remover o primeiro elemento da lista
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
}

// Teste 
lista = new LinkedList()
lista.append(10)
lista.append(20)
lista.append(30)

console.log("Antes de remover o primeiro:")
lista.mostrar()

var removido = lista.removerPrimeiro()
console.log("Elemento removido:", removido)

console.log("Depois de remover o primeiro:")
lista.mostrar()
