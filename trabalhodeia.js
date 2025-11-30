//programa que executa bubblesort, seleção direta e inserção direta;
//cada método usa vetor aleatório, ordenado e invertido;
//função para contar tempo de execução

let ale1 = []
let ale2 = []
let ale3 = []
let orde1 = []
let orde2 = []
let orde3 = []
let inv1 = []
let inv2 = []
let inv3 = []

//inserir dados 
function inserir(){ 
    //aleatórios (um para cada método)
    for(let i=0; i<2000; i++){
        ale1.push(parseInt(Math.random()*2000)) 
    }
    ale2 = ale1.slice() 
    ale3 = ale1.slice()

    //ordenados (um para cada método)
    for(let i=0; i<2000; i++){
        orde1.push(i+1)
    }
    orde2 = orde1.slice()
    orde3 = orde1.slice()

    //invertidos (um para cada método)
    for(let i=2000; i>0; i--){
        inv1.push(i)
    }
    inv2 = inv1.slice()
    inv3 = inv1.slice()
}

function BubbleSort([...vet]){
    let aux
    for(let j=0; j<vet.length-1; j++){         //vetor -1 para não comparar outra vez o último
        
        for(let i=0; i<vet.length-j-1; i++){  //vetor - j - 1 para comparar até o penúltimo da sequência
            if(vet[i]>vet[i+1]){         //se o primeiro for maior que o próximo
                aux = vet[i]             //aux armazena o valor do primeiro
                vet[i] = vet[i+1]        //o espaço do maior recebe o valor da próxima posição
                vet[i+1] = aux           //a próxima posição recebe o valor armazenado
            }
        }
    } 
}

let posicao, menor, auxiliar
function SelecaoDireta([...vet]){

    for(let i=0; i<vet-1; i++){       //percorre inteiro uma vez e depois -1
        menor = vet[i]                 //inicializa o menor com o primeiro elemento 
        posicao = i                    //armazena a posição da variável menor
        
        for(let j=i+1; j<vet.length; j++){   //percorre outra vez e não compara o menor com ele mesmo (j=i+1)
            if(vet[j] < menor){              //compara o menor armazenado com os elementos
                menor = vet[j]               //se achar, o menor passa a ser ele
                posicao = j                  //armazena a posição do menor
            } 
        }
        //troca as posições até ordenar crescente
        auxiliar = vet[i]                    //auxiliar armazena a menor inicializado
        vet[i] = vet[posicao]               //espaço do menor recebe o valor do novo menor encontrado  
        vet[posicao] = auxiliar             //espaço do novo menor encontrado recebe o menor armazenado
    }
} 
                                      
let aux
function InsercaoDireta([...vet]){
   
    for(let i=1; i<vet.length; i++){   //percorre vetor 
        aux = vet[i] 
        let j=i-1                      //elemento de comparação será o anterior ao armazenado
        while(aux>vet[j]){             //enquanto o armazenado for maior que o anterior                         
            vet[j+1] = vet[j]          //o próximo recebe o valor do atual e vai pulando     
            j--                        //decrementa 1
        }
        vet[j+1] = aux                //o espaço vazio recebe o valor que ficou armazenado
    }       
}   
    
function main(){
    console.time("Tempo de execução BubbleSort (aleatório)") 
    BubbleSort(ale1) 
    console.timeEnd("Tempo de execução BubbleSort (aleatório)")
   
    console.time("Tempo de execução BubbleSort (ordenado)") 
    BubbleSort(orde1) 
    console.timeEnd("Tempo de execução BubbleSort (ordenado)")

    console.time("Tempo de execução BubbleSort (invertido)") 
    BubbleSort(inv1) 
    console.timeEnd("Tempo de execução BubbleSort (invertido)")
    
    console.time("\nTempo de execução Seleção Direta (aleatório)") 
    SelecaoDireta(ale2) 
    console.timeEnd("\nTempo de execução Seleção Direta (aleatório)")

    console.time("Tempo de execução Seleção Direta (ordenado)") 
    SelecaoDireta(orde2) 
    console.timeEnd("Tempo de execução Seleção Direta (ordenado)")

    console.time("Tempo de execução Seleção Direta (invertido)") 
    SelecaoDireta(inv2) 
    console.timeEnd("Tempo de execução Seleção Direta (invertido)")

    console.time("\nTempo de execução Inserção Direta (aleatório)") 
    InsercaoDireta(ale3) 
    console.timeEnd("\nTempo de execução Inserção Direta (aleatório)")

    console.time("Tempo de execução Inserção Direta (ordenado)") 
    InsercaoDireta(orde3) 
    console.timeEnd("Tempo de execução Inserção Direta (ordenado)")

    console.time("Tempo de execução Inserção Direta (invertido)") 
    InsercaoDireta(inv3) 
    console.timeEnd("Tempo de execução Inserção Direta (invertido)")
    
}
main()
