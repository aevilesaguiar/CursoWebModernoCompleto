const { reject } = require("lodash");

//gerar um numero entre 1 e 60
function gerarNumeroEntre(min, max,numerosProibidos){
    if(min>max){
        //desestruturar , inverter os valores maximo e minimo
       [max, min]= [min,max];
           }
return new Promise((resolve,reject)=>{
    const aleatorio=parseInt(Math.random()*(max-min +1))+min;
    //numerosProibidos é um array
    if(numerosProibidos.includes(aleatorio)){
        reject('Numeros repetido!')
    }else{
        resolve(aleatorio)
    }

    resolve(aleatorio)
})
}
//quando você está numa função asincrona o retorno significa o resolve


async function gerarMegaSena(qtdeNumeros){

    try {
        const numeros=[]
        
            //percorrer um for com o tamanho que eu preciso
            for(let _ of Array(qtdeNumeros).fill()){
                   numeros.push(await gerarNumeroEntre(1,60,numeros))//await fica junto da função que retorna uma promise
            }
            return numeros
        
    } catch (error) {
        if(tentativas>10){
            
            throw "Não deu certo"
        }else{
            return gerarMegaSena(qtdeNumeros,tentativas+1)
        }
    }
}

gerarMegaSena(6)
.then(console.log)
.catch(console.log)

