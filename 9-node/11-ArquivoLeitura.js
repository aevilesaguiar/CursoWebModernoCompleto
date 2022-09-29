//lendo arquivos no node
//é muito importante ler um arquivo usando node ou ter acesso a uma leitura
//de um arquivo , ou mesmo ler um arquivo do lado do servidor

//dentro do node já vem alguns modulos
//um deles é o fileSystem que é o modulo fs
//esse modulo é responsavel por ler e escrever 
//verificar o conteúdo de uma pasta

//vamos ler um json(arquivo.json) a partir do module file system

const fs=require('fs');//referencia do file system que é um module core do node

const caminho=__dirname + '/arquivo.json';

//como ler um arquivo de forma sincrona
//Cuidado: se for um arquivo pesado ele vaia cabar travando eventLoop 
//pois ele vai ficar parado de forma sincrona enquanto não ler o arquivo completamente
//ai você não esta delegando o I/O assincrono e está colocando dentro do evento Loop
//este tempo e ele vai ficar parado esperando ler o arquivo completamente
//para só então despachar para atender a próxima requisição
//não é uma estratégia muito interessnate principalmente com I/O leitura de arquivo,
//escrita de arquivo, acesso há uma requisição remota, mandar uma requisição para o banco de dados
//tudo isso envolve um tempo de resposta consideravel e isso vai travar o event loop
//se você não fizer da forma correta
//leitura sincrona...
const conteudo= fs.readFileSync(caminho, 'utf-8');//ler o arquivo de forma sincrona
                                                //qual o tipo de encoding utf-8, ou seja eu escrevi o11-arquivo.json usando utf-8
console.log(conteudo);                                                

//leitura assincrona (passando uma callback)

fs.readFile(caminho,'utf-8',(err, conteudo)=>{

    const config = JSON.parse(conteudo);
    //só funciona se config for um objeto, senão for ele não consegue achar nem host nem port
    console.log(`${config.db.host}:${config.db.port}`);//para ele pegar o valor do host e da port que estão no json
})

console.log("------------------------------")
//especificamente para o formato json você tem uma forma simples de ler um arquivo json
//você não precisa importar o fileSystem, nem acessar o método readFile nem readFileSync
//pode ser feito dessa forma
//ele já executa de forma sincrona
const config =require('./arquivo.json') //já convertepara um objeto, pode ser usado para trazer as configurações de conexão com o  BD

console.log(config.db)

console.log("------------------------------")

//leitura de uma pasta
//__dirname é uma constante do node que pega o diretorio atual
fs.readdir(__dirname, (err, arquivos)=>{
    console.log("conteudo das pastas")
    console.log(arquivos)
})//readdir->leia um diretorio



