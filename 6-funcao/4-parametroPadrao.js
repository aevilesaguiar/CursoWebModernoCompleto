//estrategia 1 para gerar valor padrão
//usar o operador OU para você ter o efeito de um valor padrão quando a variavel não está setada
//quando a variavel está nula ou undefined ela vai para o segundo valor
//mais usada
function soma1(a,b,c){

    a=a||1;
    b=b||1;
    c=c||1;
    return a+b+c;

}

console.log(`expressão 1:`+soma1()); //como não passei nenhum parametro ele assume que o valor padrão que é 1

console.log(`expressão 2:`+soma1(), soma1(3)); 

console.log(`expressão 3:`+soma1(), soma1(3), soma1(1,2,3)); 


console.log(`expressão 4:`+soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0));//nesta estratégia quando passamos o valor 0 ele define como falso , retornando o valor padrão que é 3


function soma2(a,b,c){

    //para gerar o valor padrão caso a não seja informado
    a = a!== undefined ? a : 1; //se 'a' for diferente de undefined ele pega o valor de 'a' se o 'a' for igual a undefined ele pega o valor de 1 
    b = 1 in arguments ? b : 1; // existe um segundo argumento que foi passado para a função soma2, dentro de argumentos existe o indice 1, 
                                // se existir pegue  o valor de 'b' senão pegue o valor padrão que é 1
    c=isNaN(c) ? 1: c //testando se uma variavel que foi passda é isNaN, ou seja se variavel 'c' NaN caso seja um numero retorne o de 'c'
                    //nesse caso se for um numero ele pega um valor padrão, se for um numero ele pega o valor que foi passado como parametro
return a+b+c;
}

console.log(soma2()); // se a for diferente de undefined ele pega o valor de a senão pega o valor de 1 == a foi indefined então usouo valor padrão a+b+c=1+1+1=3
console.log(soma2(), soma2(3),soma2(1,2,3),soma2(0,0,0)); //

// valor padrão do es2015
//forma preferida
function soma3( a=1, b=1,c=1){
    return(a+b+c);
}

console.log(soma3(2,3,2,9))
console.log(soma3(), soma3(3),soma3(1,2,3),soma3(0,0,0)); //