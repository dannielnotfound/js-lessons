// Função anonima é simplesmente uma função que  não possue nome.

const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b) )   
}

imprimirResultado(1,2)
imprimirResultado(3,4, soma)
imprimirResultado(5,6, function (x,y){
    return x-y
})

imprimirResultado(2,2, (x, y) => x * y)

const pessoa = {
    falar(){
        console.log('Olá')
    }
}

pessoa.falar()