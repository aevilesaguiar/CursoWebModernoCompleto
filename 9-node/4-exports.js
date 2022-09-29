//dentro de um modulo no node nós temos o this, e o this é uma referencia para o module.exports
console.log(module.exports ===this);
//outra referencia, outra forma de exportar
console.log(module.exports===exports);

this.a=1; //isso quer dizer que o a será visivel fora do arquivo
exports.b=2; //o b tambpem será visisvel fora do arquivo
module.exports.c=3//tambem será visivel fora do arquivo

exports=null;
console.log(module.exports)//mesmo apontando null o module.export continua apontado para tudo que setei no a,b,c
                         //por que export é uma variavel que aponta para o mesmo objeto
                         //no final das contas quem será importado é o  module.exports
                 
                         
 exports={
    nome: 'Teste'
 }                        

 console.log(module.exports)//mesmo alterando o module.exports ele continua o mesmo
 //forma correta de atribuir um novo valor
 //criando um novo objeto
 module.exports={prublico:true}