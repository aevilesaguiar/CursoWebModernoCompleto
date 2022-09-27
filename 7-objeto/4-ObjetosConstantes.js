//Objetos Constantes 


//o identificador pessoa aponta para um endereço de memória-> lá no endereço de memória 123 é que de fato eu tenho meu objeto criado
//pessoa->123->{...} a variavel que a constante pessoa aponta é para o endereço'123', e esse endereço aponta para o objeto que existe no endereço de memória
const pessoa = {nome:'João'} //o endereço de memória não pode ser alterado, o que não pode ser alterado é a constante pessoa
pessoa.nome="Flávio";
pessoa.nome='Pedro';
console.log(pessoa)

//ou seja eu só posso atribuir para uma constante uma única vez no caso do const
//caso eu atribua mudará o endereço de memória

//pessoa = {nome: 'Ana'} 
//console.log(pessoa)


//esse método congela o objeto pessoa, ou seja eu não consigo mais mexer no objeto
Object.freeze(pessoa);

pessoa.nome='Sandra';
//ou seja ela congelou , ele ignora essa tentativa de atribuição
//com o freeze() eu não consigo, atualizar, deletar, incluir, pois ele tornou o objeto constante
console.log(pessoa)

//quando eu quiser criar um objeto constante desde o seu nascimento
//agora eu não posso alterar nem a referencia nem o objeto que foi criado
const pessoaConstante= Object.freeze({nome:'Joao'})
console.log(pessoaConstante)