//com promises vc consegue compor várias chamadas atrás da outra
let a=1;
console.log(a)

//promise:promessa algo que vai ser executado/chamado no futuro
console.log( typeof Promise)//uma promise é uma function

//uma promise recebe uma função como parametro
let p=new Promise( function(cumprirPromessa){
    cumprirPromessa(3);
})

console.log(typeof p);//é um objeto, por que se vc tem uma função e usa o operador new wlw cria um objeto

//para acessar a promessa eu uso o método then()
//estou usando o conceito de callback
//uma promessa gera apenas o valor
p.then(function(valor){//valor é exatamente o que foi passado na chamada da função cumprirPromessa(3);

    console.log(valor)
})


const primeiroElemento=elemento=>elemento[0];

const primeiraLetra= letra=>letra[0];

const letraMinuscula=letra=>letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos','Daniel'])
}).then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
//.then(v=>console.log(v))
.then(console.log)


//isso é uma das vantagens de usar callback, chamar uma promise dentro de outra promise

