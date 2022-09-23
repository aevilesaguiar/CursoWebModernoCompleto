// laços de repetição
//do while garante que pelo menos uma vez o código repeti


function geraInteiroAleatorioEntre(min, max){

    const valor = Math.random()*(max-min)+min;

    return Math.floor(valor);
}


let opcao=-1;

do {
    opcao=geraInteiroAleatorioEntre(-1,5);

    console.log(`Opção escolhida foi ${opcao}.`)
    
} while (opcao!=-1);

console.log('Até a proxima');