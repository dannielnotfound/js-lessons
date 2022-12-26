// Closure é o escopo criado quando uma função é declarada
// Eses escopo permite a função acessar e manipular variáveis externas à função

// Conxteto léxico em ação!

const x =  "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())