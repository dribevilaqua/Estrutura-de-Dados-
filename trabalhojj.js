// Pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let original = []
let vetor_bs = []
let vetor_sd = []
let vetor_id = []

function bubbleSort(vetor_bs){
//ordenado
    let aux
    vetor_bs = original.slice() //copia vetor aleatório  
    for(let j=0; j<vetor_bs.length-1; j++){ //vetor -1 para não comparar outra vez o último
        
        for(let i=0; i<vetor_bs.length-j-1; i++){ //vetor - j - 1 para comparar até o penúltimo da sequência
            if(vetor_bs[i]>vetor_bs[i+1]){ //se o primeiro for maior que o próximo
                aux = vetor_bs[i] //aux recebe e armazena o valor do primeiro
                vetor_bs[i] = vetor_bs[i+1] //a posição do maior recebe o valor da próxima posição
                vetor_bs[i+1] = aux //a próxima posição recebe o valor da auxiliar
            }
        }
    }
    //console.log('Ordenado por Bubblesort: ', vetor_bs)
    
//invertido
    let aux1
    vetor_bs = original.slice() //copia vetor aleatório
    for(let j=0; j<vetor_bs.length-1; j++){ //vetor -1 para não comparar outra vez o último
    
        for(let i=0; i<vetor_bs.length-j-1; i++){ //vetor - j - 1 para comparar até o penúltimo da sequência
            if(vetor_bs[i]<vetor_bs[i+1]){ //se o primeiro for menor que o próximo
                aux1 = vetor_bs[i] //aux recebe e armazena o valor do primeiro
                vetor_bs[i] = vetor_bs[i+1] //a posição do maior recebe o valor da próxima posição
                vetor_bs[i+1] = aux1 //a próxima posição recebe o valor da auxiliar
            }
        }
    }
    //console.log('Invertido por Bubblesort: ', vetor_bs)
}
function TempoDeExecucao(){
    console.time("Tempo de execução")
   
    console.timeEnd("Tempo de execução")
}

let posicao, menor, auxiliar
function selecaoDireta(){
    vetor_sd = original.slice() //copia os elementos do vetor aleatório

    for(let i=0; i<vetor_sd.length-1; i++){//percorre procurando menor e armazenando posição
        menor = vetor_sd[i] //inicializa o menor a partir do primeiro elemento 
        posicao = i // armazena a posição da variável menor
        
        for(let j=i+1; j<vetor_sd.length; j++){ //percorre outra vez e não compara o menor com ele mesmo (j=i+1)
            if(vetor_sd[j] < menor){//encontra o menor
                menor = vetor_sd[j]
                posicao = j //armazena a posição do menor
            } 
        }
        //troca as posições até ordenar crescente
        auxiliar = vetor_sd[i] //auxiliar armazena a menor 
        vetor_sd[i] = vetor_sd[posicao]
        vetor_sd[posicao] = auxiliar    
    }
    //console.log('Ordenado por Seleção Direta:',vetor_sd)  
//invertido
    let pos, me, auxi
    vetor_sd = original.slice() //copia os elementos do vetor aleatório

    for(let i=0; i<vetor_sd.length-1; i++){//percorre procurando menor e armazenando posição
        me = vetor_sd[i] //inicializa o menor a partir do primeiro elemento 
        pos = i // armazena a posição da variável menor
        
        for(let j=i+1; j<vetor_sd.length; j++){ //percorre outra vez e não compara o menor com ele mesmo (j=i+1)
            if(vetor_sd[j] > me){//encontra o menor
                me = vetor_sd[j]
                pos = j //armazena a posição do menor
            } 
        }
        //troca as posições até ordenar crescente
        auxi = vetor_sd[i] //auxiliar armazena a menor 
        vetor_sd[i] = vetor_sd[pos]
        vetor_sd[pos] = auxi   
    }
    //console.log('Invertido por Seleção Direta:',vetor_sd) 
}

let aux
function insercaoDireta(){
    vetor_id = original.slice()
    for(let i=1; i<vetor_id.length; i++){ //percorre vetor 
        aux = vetor_id[i] 
        let j=i-1      //elemento de comparação será o anterior ao armazenado
        while(aux>vetor_id[j]){  //enquanto o armazenado for maior que o anterior                         
            vetor_id[j+1] = vetor_id[j]  //o próximo recebe o valor do atual e vai pulando     
            j--                    //decrementa 1
        }
        vetor_id[j+1] = aux  //o espaço vazio recebe o valor que ficou armazenado
    } 
    //console.log('Ordenado por Inserção Direta:', vetor_id)     
//invertido    
    let aux1
    vetor_id = original.slice()
    for(let i=1; i<vetor_id.length; i++){ //percorre vetor e armazena segundo elemento
        aux1 = vetor_id[i] //armazena segundo elemento
        let j=i-1      //elemento de comparação será o anterior ao armazenado
        while(aux1<vetor_id[j]){  //enquanto o armazenado for menor que o anterior                         
            vetor_id[j+1] = vetor_id[j]  //o próximo recebe o valor do atual e vai pulando     
            j--                    //decrementa 1
        }
        vetor_id[j+1] = aux1  //o espaço vazio recebe o valor que ficou armazenado
    } 
    //console.log('Invertido por Inserção Direta:', vetor_id)    
} 

function main(){ //inserir dados aleatórios
    for(let i=0; i<1000; i++){
        original[i] = (Number(parseInt(Math.random()*2000))) 
    }
    //console.log(original)

    for(let i=0; i<1000; i++){
        bs_aleatorio = original.slice()
    }
    //console.log(bs_aleatorio)

    for(let i=0; i<1000; i++){
        sd_aleatorio = original.slice()
    }
    //console.log(sd_aleatorio)

    for(let i=0; i<1000; i++){
        id_aleatorio = original.slice()
    }
    //console.log(id_aleatorio)

    //bubbleSort()
    //selecaoDireta()
    //insercaoDireta()
}
main()
console.log("BubbleSort:")
TempoDeExecucao((bubbleSort([...vetor_bs])))
console.log("Seleção Direta:")
TempoDeExecucao((selecaoDireta([...vetor_sd])))
console.log("Inserção Direta: ")
TempoDeExecucao((insercaoDireta([...vetor_id])))