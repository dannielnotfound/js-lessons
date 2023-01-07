// Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcções construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}


const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 8999.99, 0.05)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Daniel', 9010, 0)
const f2 = criarFuncionario('Junior', 3270, 5)
console.log(f1.getSalario(), f2.getSalario())

//Object .create

// const filho = Object.create(null),
// filho.nome = 'Ana'
// console.log(filha)


// Transformando JSON (texto) em Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)