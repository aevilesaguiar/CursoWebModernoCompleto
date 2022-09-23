//Prototype no básico é um objeto implícito que está disponível para todas as funções construtoras do Javascript. Na real,
// é um atributo da função Object, de onde as funções herdam.

//this(que é Number) está entre o inicio e fim
Number.prototype.entre=function(inicio, fim){
    return this>=inicio&& this<=fim;
}

const imprimirResultado=function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra');
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado');
    }else if(nota.entre(5,6.99)){
        console.log('Recuperação');
    }else{
        console.log('Reprovado');
    }
}

imprimirResultado(3)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(-1)