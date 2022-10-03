//Operador Rest(juntar) e Spread(espalhar)
//se for pegar algum coisa para juntar é rest
//se for pegar alguma coisa para espalhar é spread


//usar spread com objeto
const funcionario={nome:'Maria', salario:12348.99}
const clone={ ativo:true, ...funcionario}//quer dizer que eu vou espalhar dentro desse objeto que eu chamei de clone

console.log(clone)

//usar spread no contexto de array
//eu estou espalhando os elementos de um array dentro de outro array
const grupoA=['João','Pedro','Glória']
const grupoFinal=['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)