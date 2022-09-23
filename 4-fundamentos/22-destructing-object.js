//operador destructing (operador de desestruturação);
//ele tira da estrutura alguma coisa
// o que seria uma estrutura? 
//-um objeto: é uma forma de extrair dentro do objeto seus atributos
//-um array: uma forma de tirar elementos de um array apartir dessa forma de extrair

// o operador destructuring tem duas formas de escrita:
// quando ele trabalha no ambito de um objeto voc~e na sua sintaxe a chave
// quando ele trabalha no ambito de array você na sua sintaxe o colchete

//recurso criado no ES 2015

//como usar destructing em um objeto
const pessoa={
    nome: 'Ana',
    idade: 16,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 100
    }
}

//operador destructing para tirar nome e idade
const { nome, idade }= pessoa //extrai de dentro do objeto pessoa nome e idade
console.log(nome, idade);
//usando de outra forma

const{ nome: n, idade:i}=pessoa;
console.log(n,i);

const{ sobrenome, bemHumorada=true }=pessoa;
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero, cep} }=pessoa;
console.log(logradouro, numero, cep)





