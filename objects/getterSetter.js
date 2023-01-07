const sequencia = {
    _valor: 1, //convesao: essa variavel é pretendida para ser acessada apenas internamenteem decorrencia do uso do sufixo '_'
    get valor() {return this._valor++}

   }