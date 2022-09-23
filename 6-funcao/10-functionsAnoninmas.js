//funções anônimas é apenas uma função sem nome

const soma = function (x,y){
    return x+y;
}


const imprimirResultado = function(a,b, operacao=soma){

    console.log(operacao(a,b))
}

imprimirResultado(1,3)
imprimirResultado(1,3, soma)

imprimirResultado(3,4, function(x,y){
    return x-y
})

//arrow sempre será uma função anônima
imprimirResultado(3,4,(x,y)=> x*y)


const pessoa= {
    falar:function(){
        console.log('Opa')
    }
}

pessoa.falar();