// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// d) Retornar a posição do elemento na lista

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

    // d) Retornar a posição do elemento
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
}

// Teste
lista = new LinkedList()
lista.append(10)
lista.append(20)
lista.append(30)

console.log("Posição do elemento 20:", lista.posicaoElemento(20)) // 1
console.log("Posição do elemento 99:", lista.posicaoElemento(99)) // -1
