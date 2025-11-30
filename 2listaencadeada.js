// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

//classe - tudo fica dentro da classe, só as chamadas fora
 
function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }
 
    var length = 0
    var head = null
 
    this.append = function(element){ //criou função para inserir elementos
 
        var node = new Node(element), current
        if(head == null){
            head = node
        }
        else{
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }
    //função para mostrar a quantidade de elementos da lista
    this.count = function contarElementos() {
        var cont = 0
        var lista = head //inicializa com o primeiro elemento
       
        while (lista != null) { //enquanto lista não vazia
            cont++              //conta um
            lista = lista.next  //passa para o próximo elemento
        }
        return cont //retorna a quantidade de elementos
    }
}
lista = new LinkedList()
lista.append(10) //insere elemento com a função append criada
lista.append(2)
console.log("A lista tem " + lista.count()+ " elementos") //chama a função e imprime o resultado