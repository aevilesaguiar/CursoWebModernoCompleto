//parametros variaveis 
//arguments é um array interno de uma função que tem todos os argumentos que foram passados
//toda função tem esse esse array interno chamado arguments , quando nenhum parametro é passado este array está vazio
//
function soma(){
    let soma = 0;
    for( i in arguments){
        soma+=arguments[i]
    }
    return soma;
}

console.log(soma(10,5,9))
console.log(soma(0))
console.log(soma(10))
console.log(soma(10,5,9, " teste", true))
console.log(soma(10,'c','b', " teste"))
