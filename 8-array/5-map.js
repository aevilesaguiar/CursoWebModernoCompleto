//Map: associado ao map existe dentro dele um laço que ele vai ser executado
//o map serve para fazer uma transformação no array
//a ideia é mapear um array dentro de outro array
//map serve para transformar um array para outro array com o mesmo tamanho

const nums=[1,2,3,4,5];

//Map é um for com proposito, pois ele faz uma transformação em cada elemento do array 

let resultado = nums.map(function(e){
    return e*2;
})

console.log(resultado);

//o map não transforma o array atual, ele gera um novo array
//ele não causa alteração atual

//3 funções que eu vou passar que eu vou passar como callback 
const soma10=e=>e+10;
const triplo= e=>e*3;
const paraDinheiro= e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado=nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);




let resultado2=nums.map(function(e){
    return e/2;
})

console.log(resultado2);
