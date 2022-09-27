//implementar o filter
Array.prototype.filter2=function(callback){
    const newArray=[];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
        
    }
    return newArray;
}



const produtos=[
    {nome:'Notebook', preco:2499, fragil:true},
    {nome:'iPad', preco:4199, fragil:true},
    {nome:'copo vidro', preco:12.99, fragil:true},
    {nome:'copo Plastivo', preco:5.99, fragil:false},
 ]

 const verificaFragil= produto=>produto.fragil;
const caro =produto=>produto.preco>2000;

const resultado = produtos.filter2(verificaFragil).filter2(caro);
console.log(resultado)

