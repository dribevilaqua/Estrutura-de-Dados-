const prompt = require('prompt-sync')() 
console.clear()

let i = 0
let vetor = []
let resp 
let parestotal = 0
let contpar = 0
let impartotal = 0
let contimpar = 0

function RetirarDadoSeuValor(vetor)
{
    //retirar elementos dado o seu valor
    resp = Number(prompt(`Qual valor deseja retirar?  R:`))

    for (i = 0; i <= vetor.length; i++)
    {
        if (vetor[i] == resp)
        {
            while(i < vetor.length)
            {
                vetor[i] = vetor[i+1]
                i++
            }
        }
    }
    console.log(vetor)
}

function RetirarDadoSuaPosicao(vetor)
{
    //retirar elementos dada a sua posição
    console.log(vetor)
    resp = Number(prompt(`Qual posição deseja retirar?  R:`))

    for (i = 0; i <= vetor.length; i++)
    {
        if ( i == resp)
        {
            while(i < vetor.length)
            {
                vetor[i] = vetor[i+1]
                i++
            }
        }
    }
    console.log(vetor)
}

function SomarPares(vetor)
{
    //somar elementos pares
    for (i = 0; i < vetor.length; i++)
    {
        if (vetor[i] % 2 == 0)
        {
            parestotal = vetor[i] + parestotal
            contpar = contpar + 1
        }
    }

    console.log(`Quantidade de números pares é igual:  ${contpar}`)
    console.log(`Soma números pares: ${parestotal}`)
}

function SomarImpares(vetor)
{
    //somar elementos impares
    for (i = 0; i < vetor.length; i++)
    {
        if (vetor[i] % 2 != 0)
        {
            impartotal = vetor[i] + impartotal
            contimpar = contimpar + 1
        }
    }

    console.log(`Quantidade de números ímpares é igual: ${contimpar}`)
    console.log(`Soma números ímpares: ${impartotal}`)
}

function Principal()
{
    //inserir elementos no vetor
    while ( i < 50)
    {
        vetor.push(parseInt(Math.random() * 100 ))
        i++
    }

    // demonstrar vetor preenchido
    console.log(vetor)

    console.log(`1 - Retirar 1 número dado o seu valor`)
    console.log(`2 - Retirar 1 número dado a sua posição`)
    console.log(`3 - Somar os números PARES do vetor`)
    console.log(`4 - Somar os números ÍMPARES do vetor`)
    condicao = Number(prompt(`Qual das opções acima você deseja?          R:`))
    
    switch (condicao)
    {
        case 1:
            console.log(`Opção escolhida foi Opção 1 - Retirar 1 número dado o seu valor `)
            RetirarDadoSeuValor(vetor)
        break

        case 2:
            console.log(`Opção escolhida foi Opção 2 - Retirar 1 número dado a sua posição `)
            RetirarDadoSuaPosicao(vetor)
        break

        case 3:
            console.log(`Opção escolhida foi Opção 3 - Somar os números PARES do vetor `)
            SomarPares(vetor)
            break

        case 4:
            console.log(`Opção escolhida foi Opção 4 - Somar os números ÍMPARES do vetor `)
            SomarImpares(vetor)
        break

        default:
                console.log(`\nOpção digitada é inválida \nTente Novamente!! :()`)  
    }
}

Principal()