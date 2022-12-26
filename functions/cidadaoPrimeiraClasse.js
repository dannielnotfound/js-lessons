// Função em JS é First-Class Object (Citizens)
// High-order function

// criar de forma literal

// Toda função js retorna algum valor: undefined quando não tem return
function fun1(){
 
}

// Armazenar em uma variável
const fun2 = function() {}

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto (método)
const obj = {}
obj.falar = function() {return 'Opa'} 
obj.falar = () => 'Opa'; //Com arrow function
console.log(obj.falar())

// Passar função como parametro de outra função
function run(fun) {
    fun()
}

run(function (){console.log('Executando')})

// Uma funçao pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)