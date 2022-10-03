//ecma script é o nome da linaguagem javaScript

//novas palavras reservadas
//let e const
//let tem escopo de bloco

{
    var a =2;
    let b = 3;
}

console.log(a)
//console.log(b) 


//Template String delimita `${}`

const produto = 'iPad';
console.log(`${produto} é caro`)

//Operador Destructuring: que é você tirar de dentro de uma estrutura algo 
//seja tirar de um objeto, de um array , de uma string
//operador rest: ...tras

const [l,e, ...tras]="Cod3er";
console.log(l,e,tras);

//desestruturar um array
const [x,y]= [1,2,5,6];
console.log(x,y);

//desestruturar um objeto, ou seja desestruturar um objeto
const {idade,nome}={nome:'Ana', idade:35}

console.log(idade,nome)







