// laços de repetição
//tente usar a estrutura de controle que mais se adequa ao seu cenário

//while usado quando temos uma quantidade indeterminada de repetição

function geraInteiroAleatorioEntre(min, max){

    const valor = Math.random()*(max-min)+min;

    return Math.floor(valor);
}

//console.log(geraInteiroAleatorioEntre(2,50))

let opcao=0;

while(opcao != -1){

    opcao=geraInteiroAleatorioEntre(-1,10);
    console.log(`Opção escolhida foi: ${opcao}.`)

}
console.log(`Até a próxima!`)


