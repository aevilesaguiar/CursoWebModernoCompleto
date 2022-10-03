//desafio, obter 3 arquivos json, turma a, turma b, turma c
//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json

//Primeiro faremos com callback depois será refatorado para promise
//para entender por que foi criado promise 

//sem promises...
//usaremos o próprio module do node, por que se usarmos o axios ele já é baseado em cima de promises
//usaremos o module do node para fazer uma requisição e obter o resultado dos tres arquivos json, turmaA, turmaB,turmaC
const http=require('http');

const getTurma = (letraDaTurma, callback)=>{
    const url=`http://files.cod3r.com.br/curso-js/turma${letraDaTurma}.json`;
    //o atributo resposta eu começo a receber os dados
    http.get(url,resposta=>{
            let resultado='';

            //intercepto o evento de resposta chamado on('data)
            resposta.on('data',dados=>{
                //e cada dado que for chegando eu concateno nessa variavel resultado
                    resultado+=dados;
     })
     //quando todos os dados estiverem chegado, é disparado um evento de resposta
     //chamado on('end') ou seja terminou de chegar os dados
     resposta.on('end',()=>{
        //nesse caso eu vou pegar o dado que é uma string um json 
        //que eu vou converter para objeto, vou fazer um json.parse
        //e esse json convertido eu vou passar para essa função de callback

        callback(JSON.parse(resultado))
     })
    })
}
//callback hell, uma callback dentro da outra
let nomes=[];
getTurma('A',alunos=>{
    nomes = nomes.concat(alunos.map(a=>`A:${a.nome}`))
       getTurma('B', alunos=>{
       nomes = nomes.concat(alunos.map(a=>`B:${a.nome}`))
            getTurma('C', alunos=>{
                nomes= nomes.concat(alunos.map(a=>`C:${a.nome}`))
                console.log(nomes)
            })
    })
})
