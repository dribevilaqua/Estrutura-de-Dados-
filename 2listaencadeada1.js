// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//a) Mostrar todos os elementos da lista. 

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

    // a) Mostrar todos os elementos da lista
    this.mostrar = function(){
        var atual = head
        var resultado = ""
        while(atual != null){
            resultado += atual.element + " -> "
            atual = atual.next
        }
        console.log(resultado + "null")
    }
}

lista = new LinkedList()
lista.append(10)
lista.append(20)
lista.append(30)
lista.mostrar()