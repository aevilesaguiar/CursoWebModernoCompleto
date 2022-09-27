//getters(ler o valor de uma variável)/setters(altera o valor de uma variável)
//métodos que alteram e leem atributos

//getters e setters são funções que dentro dessas funções os valores sãoa cessados
//qual a vantagem de acessar o valor dentro de uma função? você pode fazer algum tipo de validação
//algum tipo de processamento antes de retornar o  valor
//JS não permite sobrecarga de método

const sequencia={
    _valor:1, //por convenção ousando o underscor é uma variável privada, e que essa variavel será acessada internamente, não impede que altere  é apenas convenção
    get valor(){ return this._valor++},
    set valor(valor) { 
        if(valor>this._valor) {
       this._valor=valor
     }
}
}

//acessando através de get e set
console.log(sequencia.valor,sequencia.valor)

sequencia.valor=1000;
console.log(sequencia.valor,sequencia.valor)
