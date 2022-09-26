//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function operacao(numero1, numero2 ){

    return console.log(` soma: ${numero1+numero2} 
    \n subtração: ${numero1-numero2} 
    \n divisão: ${numero1/numero2}
    \n multiplicação: ${numero1*numero2} `)


}

operacao(5,2);

function calcularOperacoes( operador1, operador2){
    console.log(operador1+operador2, operador1-operador2,operador1*operador2,operador1/operador2);
}

calcularOperacoes(5,2)