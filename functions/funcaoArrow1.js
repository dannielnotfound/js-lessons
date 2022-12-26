/* As caracteristicas de uma função arrow é portar sintaxe reduzida e possuir um this de contexto léxico */ 

// Função anônima
let dobro = function (a){
    return 2 * a;
}

// Arrow function (toda função arrow é anônima)
dobro = (a) => {
    return 2* a
}

// Para funções de 1 parametro, não é necessario parenteses, e para funções com uma única sentença, não é necessário chaves
dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())

