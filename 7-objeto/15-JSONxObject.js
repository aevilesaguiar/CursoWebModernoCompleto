//JSON x Objeto
//JSON-> javaScript Object Notation é um formato textual
//A função não estará presente no JSON, JSON é um formato de dados, formato mais usado no mercado para interoperabilidade
//entre sistemas, ou seja ter um formato textual genérico que não carrega consigo nada especifico de um sistema de uma tecnologia
//JSON é usado para comunicar sistemas de tecnologias completamete diferentes , por que é um formato textual simples
//posso lê-lo em js, java, ... ele é bem mais simples e direto, tanto para ter migração, armazenar configuração de sistema
//objeto->coleção dinâmica de pares chave/valor

//converter esse objeto para um json (formato textual de uma string)
const obj={ a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj));
//note que no console a função foi excluida, por que json é um formato de dados e não é algo que pode ser excutado

//converter um JSON para objeto
//todos os atributos no formato JSON devem ser delimitado por aspas duplas
//objeto gerado a partir de um texto(JSON)
//quallquer texto no JSON deve ser delimitado por Aspas duplas
console.log(JSON.parse('{ "a":1,"b":2,"c":3}'));

//posso declarar, string, boolean, objeto e array  
console.log(JSON.parse('{ "a":1,"b":"STRING","c":true, "d":{},"e":[]}'));

//jsonValidator - verifica se o formato é JSON

