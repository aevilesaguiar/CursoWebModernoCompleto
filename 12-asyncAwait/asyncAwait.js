//async await
//setTimeout gera um assincronismo
function esperPor( tempo=2000){
    //resolve função que resolve a promise
    return new Promise(function(resolve){
        setTimeout(()=>resolve(),tempo)
    })
}
//await só funciona dentro de uma async
/*
esperPor(2000)
.then(()=>console.log('Executando promise1...'))
.then(esperPor)
.then(()=>console.log('Executando promise2...'))
.then(esperPor)
.then(()=>console.log('Executando promise3...'))
*/

//a ideia do async await  é ter um código que parece sincrono, embora ele seja um código asssincrono
//inves dele chamaar a função then ele vai ficar parado, e só vai para a próxima linha quando ele terminar a execução

function retornarValor(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(10),5000)
    })
}


//só introduzindo async que posso usar await
async function executar(){
    let valor = await retornarValor()//ele espera a promise ser resolvida
    await esperPor(1500);
    console.log(`Async/await 1... ${valor}...`)

    await esperPor(1500);
    console.log(`Async/await 2... ${valor+1}...`)

    await esperPor(1500);
    console.log(`Async/await 3... ${valor+2}...`)

    return valor+3;


}

//executar()
executar().then(console.log)//ele vai somar o return valor+3

//quando você marca uma funcão como assincrona(async) você tem a capacidade de esperar dentro dela que um determinado
//promise seja resolvido sem usar o método then, quando incluo await é como se eu estivesse pegando o valor de resposta dessa função
//por trás de uma async Await tem uma promisse, você faz um await em cima de uma função que retorna uma promise

async function executarDeVerdade(){
   const valor=await executar()
   console.log(valor)
}

executarDeVerdade()