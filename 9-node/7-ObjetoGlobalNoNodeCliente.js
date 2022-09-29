//importar o modulo
require('./7-ObjetoGlobalNoNode'); //quando eu importo uma vez ele já fica disponivel em tudo

console.log(MinhaApp.saudacao());

//quando eu disponibilizo global eu posso inclusive mudar o nome
//no caso incluimos o freeze
//evite ter objeto global, pois o padrão em node é trabalhar com o sitema de módule
MinhaApp.nome="Eita mudou global!";
console.log(MinhaApp.nome);
