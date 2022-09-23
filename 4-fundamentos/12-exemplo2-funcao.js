//armazennando uma função em uma variavel
const imprimirSoma=function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);

//armazenando uma função arrow wm uma variavel

const soma=(a,b)=>{return a+b}
console.log(soma(2,3));

//diminuindo ainda mais a sintaxe
//retorno implicito
const subtracao= (a,b)=> a-b;//parametro (a,b) arrow function => retorno da função a-b;
console.log(subtracao(2,3));

const imprimir= a=>console.log(a);
imprimir('Legal!!');