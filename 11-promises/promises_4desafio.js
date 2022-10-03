//gerar um numero entre 1 e 60
function gerarNumeroEntre(min, max){
    if(min>max){
        //desestruturar , inverter os valores maximo e minimo
       [max, min]= [min,max];
           }
return new Promise(resolve=>{
    const aleatorio=parseInt(Math.random()*(max-min +1))+min
    resolve(aleatorio)
})

        }

        //composição de funçoes
        gerarNumeroEntre(1,60)
        .then(num=>num*2)
        .then(numX10=>`O numero gerado foi ${numX10}`)
        .then(console.log)
