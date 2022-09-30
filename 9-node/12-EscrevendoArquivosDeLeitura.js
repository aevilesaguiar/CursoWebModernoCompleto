//Escrever um arquivo usando o module core do node
//que é o módule de fileSystem

const fs=require('fs');//fazendo um require em cima do module do node

//um objeto
const produto={
    nome: 'Celular',
    preco:'1249,90',
    desconto:0.15
}

//eu quero persistir esse objeto produto no disco
//por ser um objeto eu quero tranformar esse objeto em um texto
// e eu posso usar json.stringfy, ou seja que pega um objeto e tranforma para o formato json
//e com o formato textual json eu posso mandar e persisitir isso no disco
//stringify() é o conteudo que eu quero persistir no arquivo
//gerar um arquivo a partir do metodo writeFile
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err=>{

    //se houver um erro eu recebo essa callback
    console.log(err || 'Arquivo Salvo!');//se err for falso ele executa o segundo operando
})


