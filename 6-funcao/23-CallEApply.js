//Existem muitas formas de se chmar uma função 
//você pode chamar diretamente no escopo global
//você pode chamar aprtir de um objeto

//Uma função em JavaScript é um tipo
//e como um tipo ele tem outras funções dentro dele
//é o exemplo de bind()
//Vamos ver call() e apply() 

//A DIFERENÇA ENTRE O CALL E O APLLY É A FORMA COMO VOCÊ PASSA OS PARÂMETROS

function getPreco(imposto=0 , moeda='R$ '){
   return `é aqui : ${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`

}

const produto={
   nome: 'Notebook',
   preco:4589,
   desc:0.15,
   getPreco
}

globalThis.preco=20;
globalThis.desc=0.1;
console.log(getPreco());

console.log(produto.getPreco())

//eu posso executar essa função apartir do call e do aplly

const carro={
   preco:49990, desc:0.20
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//no call eu sempre passo o contexto(carro) e depois todos os parâmetros que ele vai passar para a função getPreco
console.log(getPreco.call(carro, 0.17, '$'))

//ao invez de passar os parâmetros dentro de um apply eu passo direto num array
//o primeiro parametro é o objeto que está sendo chamado como contexto da execução
//e depois teremos um array com todos os parametros dentro desse array
console.log(getPreco.apply(carro, [0.17, '$']));
console.log(getPreco.apply(globalThis, [0.17, '$']))

//apply/call são duas formas diferentes de se executar funções