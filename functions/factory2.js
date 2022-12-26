// Funcao factory retorna um objeto
function criarProduto(nome, preco, desconto = 0.1){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2.800))
console.log(criarProduto('Smartphone', 1.700))
console.log(criarProduto('iPad', 3.200))