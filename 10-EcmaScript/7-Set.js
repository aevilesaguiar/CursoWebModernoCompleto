//Set: é a estrutura de conjunto, é uma estrutura não indexada e que não aceita repetição(não temos um indice que é associado ao set)
//o array é uma estrutura indexada , objeto também é uma estrtura indexada no caso do array eu consigo pegar o atributo através do indice e o 
//objeto eu consigo pegar um atributo através de um identificador

const times = new Set();
times.add('Vasco');
times.add('São paulo').add('Corinthians').add('Palmeiras')
times.add('Vasco')

console.log(times);
//verificar tamanho 
console.log(times.size);
//verificar se possui ESTÁ CONTIDO O ELEMENTO
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
//deletar um elemento
times.delete('Vasco');
console.log(times.size);
console.log(times);
//Criar um set a partir de um array
const nomes=['Raquel','Lucas','Julia','Lucas'];
const nomesSet= new Set(nomes);
console.log(nomesSet)







