const notas = [7.7, 8.9, 6.5, 3.6, 2.9, 9.0]

//Sem callback
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com callback

let notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)


// Testes com callback functions (Arrow callback funcion e literal callback)

const callbackFunction = function(nota){
    return nota < 7
}

const notasMaioresQue7 = nota => nota > 7;
let notasAltas = notas.filter(notasMaioresQue7);
console.log(notasAltas)
let notasBaixas3 = notas.filter((nota) => nota <7)
console.log('3: ' + notasBaixas3)