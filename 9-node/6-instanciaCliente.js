const contadorA= require('./6-instanciaUnica');
const contadorB= require('./6-instanciaUnica');

const contadorC=require('./6-instanciaNova')(); //Aqui eu também chamo a função('./6-instanciaNova') isso aqui retorna um objeto()
                                                //pois eu estou invocando a função factory
const contadorD=require('./6-instanciaNova')();

//Como se trata de uma unica instancia
//O que eu fizer no contadorA o contadorB também vai saber
contadorA.inc();
contadorA.inc();

console.log("Contador A:"+contadorA.valor)
console.log("Contador B:"+contadorB.valor)


contadorC.inc();
contadorC.inc();
//NOVAS INSTANCIAS CRIADAS APARTIR DE UMA FACTORY
console.log("Contador C:"+contadorC.valor)
//O VALOR NÃO FOI ALTERADO POR QUE EU MEXI NO CONTADOR C
console.log("Contador D:"+contadorD.valor)