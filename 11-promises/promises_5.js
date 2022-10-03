//gerar um numero entre 1 e 60 depois que  o tempo passar
function gerarNumeroEntre(min, max, tempo){
    if(min>max){
        //desestruturar , inverter os valores maximo e minimo
       [max, min]= [min,max];
           }
return new Promise(resolve=>{
    setTimeout(function(){
        const aleatorio=parseInt(Math.random()*(max-min +1))+min
        resolve(aleatorio)

    },tempo)
})
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroEntre(1,60,1000),
        gerarNumeroEntre(1,60,4000),
        gerarNumeroEntre(1,60,500),
        gerarNumeroEntre(1,60,3000),
        gerarNumeroEntre(1,60,100),
        gerarNumeroEntre(1,60,40),
        gerarNumeroEntre(1,60,500),

    ])
}
console.time('promise');

//ele só trás quando todas as promises foram cumpridas

gerarVariosNumeros()
.then(console.log)
.then(()=>{
//console.timeLog('promise')
console.timeEnd('promise')
});
