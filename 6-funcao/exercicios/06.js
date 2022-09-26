//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.


function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){

    let jurosSimples=capitalInicial*taxaJuros*tempoAplicacao;

    return `R$ ${jurosSimples.toFixed(2)}`
}

console.log(jurosSimples(1500,0.5,20));



function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    let montante= capitalInicial*((1+(taxaJuros/100))**tempoAplicacao)
    return console.log("R$ "+ montante.toFixed(2));
}

jurosComposto(300,1,12)
