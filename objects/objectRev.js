const produto = new Object

produto.nome = 'Cadeira'
produto.marca = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Daniel',
        idade: 17,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        },
        condutores: [{
            nome: 'Daniel',
            Idade: '17'
        }, {
            nome: 'Ana',
            idade: 23,
        }],
        calcularValorSeguro: function(){
            //...
        }
    }
}

console.log(carro.proprietario.endereco)
delete carro.calcularValorSeguro
delete carro.condutores