const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO = this não esta referenciando o objeto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // a função bind referencia o objeto a ser tratato pelo this atual
falarDePessoa()

