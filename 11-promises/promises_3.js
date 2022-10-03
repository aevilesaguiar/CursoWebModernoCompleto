//desafio para ler arquivo
//usar uma promise para encapsular uma promise
const fs=require('fs');
const path=require('path');


function lerArquivo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho, function(_, conteudo){//primeiro parametro é o erro, segundo parametro conteudo do arquivo
            resolve(conteudo.toString())//resolve converte o conteudo para string
            
        })
        console.log('Depois de ler')
    })
}

const caminho=path.join(__dirname,'dados.txt')

lerArquivo(caminho)
  .then(conteudo=>conteudo.split('\n'))
  //.then(linhas=>console.log(linhas[1]))
  //.then(linhas=>console.log(linhas.length))
  .then(linhas=>linhas.join(','))
  .then(conteudo=>`o valor da linha é:${conteudo}`)
  .then(console.log)