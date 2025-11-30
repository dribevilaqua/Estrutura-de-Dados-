//Revisão exercício 1 
//Andréa Lima - ADS III matutino
const prompt = require('prompt-sync')()

let vet = []

//remover dado o valor
function remover_elemento(){ 

    let valor = Number(prompt(`Escolha um número para excluir: `))
   
    for(let i=0; i<50; i++){ //percorre o vetor
        if(vet[i] == valor){ // compara elemento com o valor digitado 
            while(i<=5){     //enquanto o índice for menor ou = tamanho do vetor
                vet[i] = vet[i+1] //se for igual, o elemento pula para o próximo índice
                i++ // faz uma vez e recomeça do início
            }      
        }
    }
    console.log(vet)
}

//remover dada a posição
function remover_posicao(){  
    let posicao
    posicao = Number(prompt(`Escolha uma posição para excluir: `))

    for(let i=0; i<50; i++){ //percorre vetor
        if(i == posicao){ //compara posicao dada com posicao do vetor   
            while(i <= 5){ //enquanto índice for menor ou igual ao tamanho do vetor
                vet[i] = vet[i+1] //elemento ocupa o próximo índice
                //vet.pop() 
                i++       //repete até que o contador seja <=5                        
            }
        }                  
    } 
    console.log(vet)  
}

function somar_pares(){
    let somaPar = 0
    let cont = 0
    for(let i=0; i<vet.length; i++){
        if(vet[i] % 2 == 0){  //se resto da divisão por 2 for 0 entra na condição
            somaPar += vet[i] // soma os valor que cumprem a condição
        }
        cont++ //contador depois da condição para somar a cada lop até o tamanho do vetor
    }
    console.log(`A soma dos números pares é ${somaPar}`)
}

function somaEntreIndices(){
    soma = 0
    for(let j=0; j<vet.length; j++){
        soma = vet[0] + vet[1]
    }
    console.log(`A soma dos elementos dos índices 0 e 1 é: ${soma}`)
}

//os dados de enttrada ficam dentro da função principal
function principal(){ 
    
    for(let i=0; i<50; i++){
        //vet.push(Number(prompt(`Insira até 50 números inteiros: `)))
        vet[i] = (Number(parseInt(Math.random()*10)))//preenchimento automático
    }
    console.log(vet) //imprime vetor incial

    //indica cada função 
    remover_elemento() 
    remover_posicao()
    somar_pares()
    somaEntreIndices()
}

//por último chama só a principal, que contem as outras.
principal()