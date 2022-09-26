
//função construtora: 
//Você usa a função em JS como usaria classe em java

//no ecma Escript2015 foi criado uma classe
//em js classe nada mais é do que uma forma diferente de escrever uma função

//quando eu uso this dentro de uma classe eu digo que é public
//quando eu let const ou var eu digo que é privado

function Carro(velocidadeMaxima = 200, delta=5){ //delta padrão ele vai acelerar o carro de 5 em 5
    //atributo privado ou seja um atributo que pertence apenas ao escopo da função Carro
    let velocidadeAtual=0;



//criar um método publico apartir da palavra reservada this
this.acelerar=function(){
    if(velocidadeAtual+delta <= velocidadeMaxima){
        velocidadeAtual+=delta;
    }else{
        velocidadeAtual=velocidadeMaxima;
    }

}

//método publico
this.getVelocidadeAtual= function(){
    return velocidadeAtual
}

}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

