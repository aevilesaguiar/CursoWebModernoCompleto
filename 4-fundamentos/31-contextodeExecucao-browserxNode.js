//Contexto de Execução: Browser vs Node

//é importante ter consciencia do runtime(onde está executando o código) que está executando(se estiver executando front end vc está executando no browser se estiver executando back end você
//está executando no Node) ;

//contantes declaradas com let e function não ira diretamente para o escopo global quando estamos no browser
//eles ficam em memória no browser
//uma forma de fugir do escopo global é criar um objeto

let a =3;
global.this=123;
this.c=456 

console.log(a);
console.log(this.a);
console.log(this.c);
console.log(module.exports.c);

//node cada arquivo equivale a um module
console.log(module.exports===this);
console.log(module.exports);

//fuja do escopo global
//trabalhe com constantes

