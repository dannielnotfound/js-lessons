class Pessoa {
    constructor() {
        const self = this;
        this.idade = 0;
        setInterval(function(){
            self.idade++
            console.log(self.idade)
        }/*.bind(self)*/,1000)
    }
}
new Pessoa

/* 
this refere-se ao objeto Pessoa, entretando, quem dispara o método é a propria função setInterval,
fazendo neste momento this referenciar a propria função,
para contornar isto, defininos uma constante this referenciando o objeto Pessoa,
e a utilizamos no contexto da função setInterval
*/