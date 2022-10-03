//Assync await: como transormar um código assincrono em algo que parece sincrono?

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
    
//Recurso do ES8
//Objetivo é simplificar o uso de promises...
//ou seja async await é usado junto com promise, ele tem o objeto de simplificar seu código sincrono
//para que ele fique com uma cara de assincrono
//a palavra await só vai funcionar com async
let ObterAlunos = async ()=>{
    //tres chamadas
    const turmaA=await getTurma('A');
    const turmaB=await getTurma('B');
    const turmaC=await getTurma('C');
    return [].concat(turmaA,turmaB,turmaC); //retorno um array com todas as turmas juntas

}//quando vc tem uma função async, por mais que eu esteja retornando um array
// ela retorno um objeto AsyncFunction, e em cima de asyncFunction que eu chamo a função then() para executar

ObterAlunos()
.then(alunos=>alunos.map(a=>a.nome))//mapear uma lista de objetos do tipo aluno, para apenas uma lista de nomes
.then(nomes=>console.log(nomes));