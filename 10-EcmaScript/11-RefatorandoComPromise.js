//desafio, obter 3 arquivos json, turma a, turma b, turma c
//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json

//com promises...
//requisição e obter o resultado dos tres arquivos json, turmaA, turmaB,turmaC
const http=require('http');
const { resolve } = require('path');

const getTurma = (letraDaTurma)=>{
    const url=`http://files.cod3r.com.br/curso-js/turma${letraDaTurma}.json`;
    //duas funções callbacks resolve, reject
        return new Promise((resolve, reject)=>{
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
            //se eu consegui fazer o parse chamo resolve
            try{
                resolve(JSON.parse(resultado))
            }//se eu fizer um parse de algo que não for JSON sará um erro
            catch(e){
                reject(e);
            }
         })
      })
  })
   
 }
    

let nomes=[]
getTurma('A').then(alunos=>{
    nomes = nomes.concat(alunos.map(a=>`A:${a.nome}`))
       getTurma('B').then(alunos=>{
       nomes = nomes.concat(alunos.map(a=>`B:${a.nome}`))
            getTurma('C').then(alunos=>{
                nomes= nomes.concat(alunos.map(a=>`C:${a.nome}`))
                console.log(nomes)
            })
    })
})
