//array forma de agrupar multiplos valores, e essa estrutura é indexada , ela inicia por 0, o array é heterogêneo , diferente de java
//e ele crese e diminui de maneira flexível

const valores=[7.7, 8.9, 6.3,9.2];
console.log(valores[0], valores[3])
console.log(valores[1], valores[7])

valores[3]=6;
console.log(valores[3]);
console.log(valores.length);
valores[4]=16;
console.log(valores.length);
//se eu tentar acessar um elemento de um array que não existe ele informa undefined

//insere itens no array
valores.push({id:3},false, null,'teste' )

console.log(valores);

//não é interessante misturar tipos de dados o interessante é ter um array homogêneo

//retira o ultimo item do array
console.log(valores.pop());
console.log(valores);

//remove o primeiro item do array
delete valores[0];
console.log(valores);

//array é de tipo object
console.log(typeof valores);
