//a função setTimeout() você passa uma função como parâmetro e depois de algum tempo ele executa o conteúdo da função
/*setTimeout(function(){
    console.log('Executando callback...');
    setTimeout(function(){
        console.log('Executando callback2...');
        setTimeout(function(){
            console.log('Executando callback3...');
        },2000)
    },2000)
},2000)
*/

//setTimeout gera um assincronismo
function esperPor( tempo=2000){
    //resolve função que resolve a promise
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...');
            resolve()
    
        },tempo)
    })
}

esperPor()
.then(()=>esperPor().then(esperPor().then(texto=>console.log("finalizou"))))


console.log("---------------------------------")
//esperPor(3000).then(texto=>console.log(texto))