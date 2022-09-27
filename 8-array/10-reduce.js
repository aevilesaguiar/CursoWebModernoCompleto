//implementar reduce, reduce é uma função que tranforma um array em um unico elemento
//podemos tranformar um array em outro array, um array em um numero, um array em uma string
//o resultado de uma função reduce é passado sempre para a próxima interação e você tem o parametro atual
//e esse acumulador que é o valor que é passado como resposta da função anterior passada para a próxima
//o primeiro reduce recebe os dois elementos do array, o elemento de indice 0 que seria em teoria o acumulador
//e o elemento de índice 1,  e o resultado dessa função é passado para a próxima
//sempre o primeiro elemento é o acumulador e o segundo elemnto é o indice elemento atual;
//reduce tem o critério de agregar/reduzir, seja emum unico valor,array resultante

const alunos=[
    {nome:'maria', nota:7.3, bolsistas: false},
    {nome:'joao', nota:9.3, bolsistas: true},
    {nome:'pedro', nota:9.8, bolsistas: false},
    {nome:'Paula', nota:8.7, bolsistas: true}
]

console.log(alunos.map(a=>a.nota));
const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){//reduce recebe uma callback , esse acumulador resultado da callback anterior 
         console.log(acumulador,atual) 
         return acumulador+atual;                                                              
}, 0)//,10 seria o valor inicial, poeria passar 0 ou qualquer numero
console.log("Soma das notas de todos os alunos: "+resultado);
console.log("Media das notas de todos os alunos: "+resultado/alunos.length);
