//Array em JS não existe nativo, em JS ele é um Objeto tem caracteríticas próprias
//não existe um tipo de dado sTring em JS
//E ao invés do array organizar seus atributos a partir de chaves de identificadores, ele organiza 
//seus dados a partir de um índice, uma estrutura indexada começando do 0
//o primeiro elemento é de indice 0, o segundo elemento é o indice 1
//o array em js é uma estrutura dinamica diferente de java(estrutura estatica) , ele cresce e diminui dinamicamente
//um array não tem restrição de ter uma estrutura heterogenea, mas as boas práticas dizem que os dados devem ser homogêneos


console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);//typeof de um array literal que é usado com colchetes[], assim como um objeto literal é usado com chaves{}

let aprovados = new Array('Bia', 'Joao', 'Pedro'); //não é recomendado criar essa forma de array e sim da forma literal
console.log(aprovados)


aprovados=['Bianca', 'Joao', 'Pedro']; //forma literal
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);//em outras linguagens daria erro, em js é descrito como undefined

//adicionando elementos na úlltima posição do array
aprovados[3]='Mary';//esse é mais comum para substituir um elemento que já existe a partir do indice
//outra forma de adicionar elementos
aprovados.push('Bia'); //push é mais apropriado para adicionar um novo elemento dentro do array
console.log(aprovados.length)
console.log(aprovados)


//se eu quiser adicionar um elemento em um indice que ainda não tenha sido definido
aprovados[9]='Rafael';
console.log(aprovados.length);
//então ele deixa os espaços vazios e adiciona o 9
console.log(aprovados)

//se compararmos os indices vazios
console.log(aprovados[8]===undefined);//é estritamente ihual a undefined

//essa função ordena o array, ele altera o array original
aprovados.sort();
console.log(aprovados)
console.log(aprovados[1])

//exclui o elemento , ele não reordena ele deixa undefined no local do elemento excluido
delete aprovados[1];
console.log(aprovados);

aprovados=['Bia', 'Carlos','Ana'];
console.log(aprovados)
//serve para adicionar /remover e adicionar e remover elementos num índice
aprovados.splice(1, 1); //ele exclui o indice 1 
console.log(aprovados);
aprovados.splice(1, 0, 'elemento1', 'elemento2'); //se eu não quiser remover nenhum elemento eu incluo 0, e incluo o elemento 1 e o 2 no indice 1
console.log(aprovados);

