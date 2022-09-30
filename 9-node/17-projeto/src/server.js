//vamos configurar o express que será o nosso servidor web, ou seja o nosso framework web para criação
//dos nossos webservices

//quando eu estiver executando algum tipo de aplicação que tem comunicação com rede
//eu preciso declarar uma porta
//porta é um processo dentro de um computador, quando eu preciso me comunicar com um computador além do endereço
//ip eu preciso da porta, ou seja cada processo que precisa abrir uma conexão com a rede
//ou seja cada processo precisa abrir uma conexão com a rede precisa ter uma porta
//e essa porta é única por processo
// se eu defino que vou usar minha aplicação na porta 3003, e eu starto a aplicação 2 vezes
//vai dar problema por que a porta já está sendo usada por um processo
//a porta nada mais do que a forma que você tem para selecionar qual processo vai atender aquela requisição

//a porta 8080 é a padrão  para o protocolo http

const porta= 3003; //defini a porta 3003

const express= require('express')//importestá dentro de modules

//dentro dessa variavel app é que nós vamos colocar os nossos serviços
const app= express();

// For Express 4.16.0 ou abaixo
// ------------------------------------
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
//ESSA LINHA QUER DIZER QUE PARA QUALQUER REQUISIÇÃO QUE VOCÊ FAÇA NO SEU SERVIDOR USANDO EXPRESS
//ELE VAI OBRIGATORIAMENTE PASSAR POR ESSE MIDDLEWARE
//urlencoded é o padrão
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

 

//import de Banco de dados
const bancoDeDados=require('./bancoDeDados')

//forma de requisição

//obtendo a lista de produtos
app.get('/produtos',(req, res, next)=>{
    //removo o valor abaixo mocado e incluo o banco de dados
    //res.send({nome:'Notebook', preco:123.45})//o metodo send converte esse objeto para json
    res.send(bancoDeDados.getProdutos())
})

//obtendo por id
app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancoDeDados.getProdutos(req.params.id))//req.params é o local onde eu tenho os parametros na url
})

//submeter os dados e salvar um novo produto
app.post('/produtos',(req, res, next)=>{
    const produto=bancoDeDados.salvarproduto({//aqui dentro eu vou salvar um objeto
        nome: req.body.nome,//a forma que você pega é o requ. body e o atributo
        preco:req.body.preco

    })
    //a constante produto descrita acima, está sendo retornada com res.send
    res.send(produto)//isso gera um json, ele converte um objeto para json para enviar para web
})

//alterar um registro que já existe
app.put('/produtos/:id',(req, res, next)=>{
    const produto=bancoDeDados.salvarproduto({//aqui dentro eu vou salvar um objeto
        id: req.params.id,
        nome: req.body.nome,//a forma que você pega é o requ. body e o atributo
        preco:req.body.preco

    })
    //a constante produto descrita acima, está sendo retornada com res.send
    res.send(produto)//isso gera um json, ele converte um objeto para json para enviar para web
})

//excluir produto
app.delete('/produtos/:id',(req, res, next)=>{
    const produto=bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)//JSON

})


//no final eu vou dizer qual a porta que eu vou ficar escutando
app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})

//verifiquei no POSTMAN : localhost:3003/produtos


