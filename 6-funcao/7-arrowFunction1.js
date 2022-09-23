//umas das características mais importantes da arrow function é que além delas serem uma forma reduzida de escrever funções
//é o fato de você ter o this associado  com o contexto léxico, e esse this não vai mudar de forma alguma
//função arrow é sempre uma função anonima , se você quer chamar a funçãoa rrow você tem que armazenar ela em alguma variável ou constante

let dobro= function (a){
    return 2*a;
}

console.log(dobro(2));

dobro = (a)=> {
return    a*2
}

console.log(dobro(3));

dobro= a => 2 * a; //return está implicito

console.log(dobro(4));
console.log(dobro(Math.PI));


let ola = function(){
    return 'olá';
}

console.log(ola())

ola=()=>'olá';//return implicito
console.log(ola())

ola=_=>'Olá';// esse underscor é como se fosse um parametro 
console.log(ola())

// arrow function ajuda a criar funções pequenas/ paradigmas funcionais


