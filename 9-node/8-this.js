//this: aponta para module.export
//inclusive podemos exportar usando this


//false: por que o this não aponta para global e sim para module.export
console.log(this===global);//this é estritamente igual a global dentro de um module node? false

console.log(this===module);//this é estritamente igual a module: false por que this é um objeto que é uma referencia de this.module 

console.log(typeof this);//this é um objeto

console.log(this===module.exports);//this é estritamente igual a module.exports: true

console.log(typeof module);//module é um objeto

console.log(this===exports);//this é estritamente igual a exports:true pois this e exports são um objeto, ou seja eles apontam para o mesmo objeto

console.log(typeof exports);//module é um objeto

//é importante prestar atenção quando você está acessando this dentro de uma função que está 
//dentro do modulo
function logThis(){
    console.log("dentro de uma função ...");
    console.log(this===exports);
    console.log(this===module.exports);
    console.log(this===global);

    //quando eu incluo esse objeto quer dizer que eu estou incluindo dentro do escoppo global
    //ou seja estou tornando algo publico para fora do module
    this.perigo='....';
}
//dentro de uma função this não aponta para exports
//this só aponta para exports fora de uma função
//this só aponta para module.exports fora de uma função
//this dentro de uma função aponta para global
//this fora de uma função aponta para module.exports
logThis();

console.log(perigo)

//o this em uma “função tradicional” vai apontar para o objeto global:
function funcaoTradicional(){

}

//dentro de uma arrow function, o this não vai apontar mais para o objeto 
//global, e sim para o module.export / exports.

const arrowFunction=()=>{
    
}