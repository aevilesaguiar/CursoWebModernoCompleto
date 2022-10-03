//recursos relacionados a objetos

//ES8: Object.values(pega os valores de um objeto)/Objetos.entries(ele dá chave valor, um array 
// de outros arrays) -> duas funções do objeto
//já tinhamos Object.keys que pegava todas as chaves de um objeto

const obj={a:1, b:2,c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))//matriz chave valor


//melhorias na notação literal
const nome='Carla';
const pessoa={
    nome:nome
}
console.log(pessoa.nome)
//melhoria
const pessoa1={
    nome
}
console.log(pessoa1.nome);


//podemos criar funções de forma mais simples

const rua= 'rua tres';
const numero=23


const endereco={
    rua,
    numero,
    ola: function(){
           return 'Seja bem vindo!';
    } 
}

console.log(endereco.rua , endereco.numero ,endereco.ola())

//nova forma
const endereco1={
    rua,
    numero,
    ola(){
           return 'Seja bem vindo!';
    } 
}

console.log(endereco1.rua , endereco1.numero ,endereco1.ola())

//class (internamente é convertida como função no final pela linguagem)
class Animal{
}
class Cachorro extends Animal{
    falar(){
        return 'au au!'
    }
}

console.log(new Cachorro().falar())


