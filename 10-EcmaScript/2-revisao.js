//novos recursos relacionados a funções
//arrow function: é uma função anonima não tem como colocar nome nessa função
const soma=(a,b)=>a+b;
console.log(soma(2,3));

//Arrow function (this)
const lexico1=()=>console.log(this===exports)
const lexico2=lexico1.bind({})
lexico1()
lexico2()

//this aponta para global
//quando você tem uma função tradicional em js o this  pode variar



//parametros default: ter a capacidade de em cima de uma atributo de uma função
//você definir o valor padrão, caso você coloque o valor undefined ele assume o valor padrçao
function log(texto='Node'){
    console.log(texto)
}

log();
log('Maria');



//Operador rest( esse operador possui dois nomes de spread espalhar[] e rest[agrupar])
//no contexto da função o nome correto é rest, esse operador possui parametros variaveis
//você vai colocar varios parametros na chamada da função e esses parametros serão agrupados
//em um array internamente dentro da função
//mas se fosse estiver trabalhando com array/objeto é spread(espalhar)
function total(...numeros){
    let total=0;
    numeros.forEach(n=>total+=n);
    return total;
}

console.log(total(2,3,4,5))//soma dos 4 numeros

