// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

// c) Inserir um elemento no início da lista

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

    // c) Inserir um elemento no início da lista
    this.inserirInicio = function(element){
        var node = new Node(element)
        node.next = head
        head = node
        length++
    }
}

// Teste
lista = new LinkedList()
lista.append(20)
lista.append(30)

console.log("Antes de inserir no início:")
lista.mostrar()

lista.inserirInicio(10)

console.log("Depois de inserir 10 no início:")
lista.mostrar()
