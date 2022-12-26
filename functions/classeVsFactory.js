class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Daniel')
p1.falar()

///

const pessoa = (nome) => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa1 = pessoa('Daniel')
pessoa1.falar()

///

function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa('Rosangela')
p3.falar()












///
const criarPessoa =  nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()