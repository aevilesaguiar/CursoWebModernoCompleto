//filter serve para filtar um array, para ter um sub array, ou seja ter uma quantidade de elementos menores
//sempre que precisar transformar um array em outro eu uso map
//sempre que eu precisar filtrar um array eu uso filter
//o resultado do filter é sempre o elemento transformado

const produtos=[
   {nome:'Notebook', preco:2499, fragil:true},
   {nome:'iPad', preco:4199, fragil:true},
   {nome:'copo vidro', preco:12.99, fragil:true},
   {nome:'copo Plastivo', preco:5.99, fragil:false},
]

//no filter o elemento é menor ou do mesmo tamanho
console.log(produtos.filter( function(p){//p representa cada um dos produtos que eu estou passando
    return true; //retorna todos os elementos
}))

//no filter o elemento é menor ou do mesmo tamanho
console.log(produtos.filter( function(p){//p representa cada um dos produtos que eu estou passando
    return p.preco>2000 ; 
}))
console.log("-------------------------")

const verificaFragil= produto=>produto.fragil;
const caro =produto=>produto.preco>2000;

const resultado = produtos.filter(verificaFragil).filter(caro);
console.log(resultado)

