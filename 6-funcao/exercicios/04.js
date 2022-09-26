//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function modulo(dividendo,divisor){
    let resultado=dividendo/divisor;
    let modulo=dividendo%divisor
    return ` resultado: ${resultado.toFixed(2)} \n Resto Divisão:${modulo}`
}

console.log(modulo(4,3))

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(4,3)