const prompt = require('prompt-sync')()
console.clear()
 
function quicksort(array, left, right)
{
    let i = left
    let j = right
    let aux
    let pivotidx = (left + right) / 2
    let pivot = parseInt(array[pivotidx.toFixed()])
 
    //Partição
    while(i <= j)
    {
        while(parseInt(array[i]) < pivot)
            i++
   
        while(parseInt(array[j]) > pivot)
            j--
       
        if (i <= j)
        {
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i++
            j--
        }
    }
 
    //Recursão
    if(left < j)
        quicksort(array,left,j)
 
    if(i < right)
        quicksort(array,i,right)
    return array
}
 
function principal()
{
    let vetor = []
 
    for(let i=0; i < 1000; i++)
    {
        vetor.push(parseInt(Math.random() * 5000 ))
    }
    quicksort(vetor, 0, vetor.length)
 
    console.log(vetor)
}
 
principal()