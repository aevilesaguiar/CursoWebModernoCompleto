//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
//por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve 
//ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

function salarioMes(horasTrabalhadas, valorHora){
    return ` Valor imposto: ${(horasTrabalhadas*valorHora)*(0.3)}
    \n Salário liquido: R$ ${(horasTrabalhadas*valorHora)*(1-0.3)}
    \n Salário bruto : R$ ${(horasTrabalhadas*valorHora)}`
}

console.log(salarioMes(180,60));

function salarioLiquido(horasTrabalhadas, valorHora){
    const salarioBruto=horasTrabalhadas*valorHora;
    const salarioLiquido=salarioBruto-(salarioBruto*30/100);

    return `Salário igual a R${salarioLiquido}`
}

console.log(salarioLiquido(180,60));