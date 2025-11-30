//ANDRIELE BEVILAQUA GABRIEL - ADM MANHÃ
//1. Faça uma função para intercalar filas: 
//a função recebe as duas filas e retorna a fila com os elementos das duas filas intercalados.

// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

function IntercalarFilas(){
  let resultado = []
  let fila1 = []
  let fila2 = []

  //cria as duas fila de forma aleatória
  for(let i=0; i<5; i++){
    fila1.push(parseInt(Math.random()*100))
  }

  for(let i=0; i<5; i++){
    fila2.push(parseInt(Math.random()*100))
  }

  console.log("Fila1: ",fila1)
  console.log("Fila2: ",fila2)

  while(fila1.length>0 || fila2.length>0){
    if(fila1.length>0){
      let elemento = fila1.shift(); // tira o primeiro da fila1
      resultado.push(elemento);     // coloca esse elemento no fim do resultado
    }
    if(fila2.length>0){
      let elemento = fila2.shift(); // tira o primeiro da fila2
      resultado.push(elemento);     // coloca esse elemento no fim do resultado
    }
  }
  console.log("Resultado Intercalado: ",resultado)
}

IntercalarFilas()

