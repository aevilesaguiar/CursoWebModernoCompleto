//como organizo uma aplicação em JS?
//Precisa verificar se é no back ou front end
//Cada uma é organizado de uma forma
//no caso do back end o qeu vai para o brownser são os dados, no caso do JSON

//Dentro do node um arquivo representa um módulo
//usando node como servidor ele pode funcionar com apache, pode ser um servidor web, prover pagina, vídeo
//gerar conteudo dinamico ou pode servir como uma api do seu sistema.
//Você organiza uma aplicação back end em pastas e em arquivos, cada arquivo representa um módulo
//EM NODE UM ARQUIVO REPRESENTA UM MÓDULO
//Modulo possui uma certa interioridade, o que você escreve num modulo fica visivel apenas dentro do modulo
//para tornar um arquivo publico no node você precisa exportar(tornar visivel)/importar algo 
//Existem dois padrões de Módulos famosos em JS:
//- Padrão command JS(padrão usado no NODE)
//- Padrão do escmaScript que é o import /export 
//-------------------------------------------------------------------------------------------------
//como exportar algo dentro do modulo node para usar em outro arquivo

//primeira forma: this
this.ola='Fala Pessoa';
//segunda forma: exports
exports.bemVindo='Bem vindo so Node!'
//terceira forma
module.exports.ateLogo='Ate o proximo exemplo!'

//this e export é um objeto , sabemos que em js um objeto é uma coleção de chave/valor dinamico.
//isso significa que o ola acabou de ser criado dentro do this 
//bemVindo acabou de ser criado dentro de exports