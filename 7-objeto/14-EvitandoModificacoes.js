//ObjectPreventExtensions -> ele previne que o objeto seja extendido, ou seja você não vai conseguir aumentar o numero de atributos nesse objeto, pode excluir , mas não aumetar

const produto = Object.preventExtensions({
    nome:'Wualquer',
    preco:1.99,
    tag:'promoção'
})

console.log('é Extensivel?', Object.isExtensible(produto))

produto.nome='Borracha';
produto.descricao='Borracha escolar branca';//ele não pode adicionar
delete produto.tag;//adicioanr pode
console.log(produto)

//Object.seal (selar)
//quando eu selo um objeto eu não consigo adicionar, excluir objetos , apenas alterar os atrbutos do objeto
const pessoa = { nome: 'Juliana', idade: 36}
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));
pessoa.sobrenome='Franco';
delete pessoa.tag;
pessoa.idade=16;

console.log(pessoa)

//Object.freeze = selado + valores constantes , não consegue, excluir incluir ou alterar, ou seja são marcados com writible como false
