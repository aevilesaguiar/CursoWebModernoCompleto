//Uma  função é um verbo, é uma ação, ela executa um processo baseado na sentença de código 
// a função define um bloco, em JavaScript um bloco é delimitado por Chaves então você
// depois você tem um corpo da função que é o bloco no qual tem todas as sentenças de código que serão
//executadas. Quando você invocar aquela função,uma função nada mais é do que um trecho de código que você deu um nome.
//E você pode usar esse trecho do código onde você quer chamar dentro do seu programa 
//Uma função é um bloco de código que pode agrupar sentenças, ou até nenhuma, esse bloco de código você
//dá um nome a ele (existem funções anonima que são arrowFunctions as mesmas não possuem nome .),
// e podemos receber parametros de entrada nessas funções e você executa o algorítmo que é o passo a passo
//de todas as sentenças de código, e depois retorna um valor.
//ou seja uma função pode nãoo ter nenhum parametro, pode não retornar dado, uma função pode retornar dado de entrada 
// como também não receber nada.


//uma função sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);
//posso passar apenas um valor, passando apenas 1 valor ela considera NaN
imprimirSoma(1);
//posso passar mais valores
imprimirSoma(1,3,2,445455); //ele somará apenas os dois valores e desconsiderará os outros
imprimirSoma();//NaN 


//função sem retorno
function soam(a,b=0){
    return a+b;
}

console.log(soam(2,3))
console.log(soam(2))
