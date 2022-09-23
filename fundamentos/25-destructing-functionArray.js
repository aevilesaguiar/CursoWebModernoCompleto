//podemos usar o operador destructing no parametro de uma funçao
 function rand({min=0, max =1000}){
    const valor=Math.random()*(max-min)+min; //A função Math.floor() retorna o valor entre min e maximo
    return Math.floor(valor);
 }

const obj={max: 50, min:40}

 console.log(rand(obj))

 console.log(rand({ min: 955}))//entre 955 e mil
 
 console.log(rand({}))//entre 0 e 1000

 
