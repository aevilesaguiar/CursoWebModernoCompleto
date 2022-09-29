//node JS
//VÁRIAS EMPRESAS ADOTAM COMO SOLUÇÃO PARA O BACK END
//Node usa o mesmo interpretador V8 que roga no brownser
//server side: servidor   client: brownser
//node ambiente de execução do lado do servidor
//thread linha de execução independente
//js nasceu para trabalhar com ambientes assincronos
//Engine de interpretação do JS : V8 desenvolvida pelo o google
//o node é uma soma do V8 + libuv
//A libuv é um biblioteca C++ open-source usada pelo Node em 
//conjunto com o V8 para gerenciar o pool de threads que executa as operações
//V8 é um interpretador JS que vai ler o seu código a aprtir dai ele vai fazer chamadas
//e chamar a LIBUV , a libuv é quem faz toda a parte de assincronismo do node
//O LIBUV é responsável por fazer toda a parte de I/0 assincrono
//I/O é sempre que você precisa ler algo de um arquivo , sempre que você precisa fazer alguma conexão com rede
//quando vai acessar um BD você faz I/0 porque vc precisa acessar o disco, os arquivos...
//o node é um runtime js, que é formado pelo o V8 +LIBUV que é o que trata de forma assincrona a parte mais lenta do
//processo, que é ler o banco de dados, acessar um arquivo tudo que diz respeito a I/O


//npm : node package manager (gerenciador de pacotes do node)  , npm -v

//instalando lodash: npm i lodash

// O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. 
//js reiniciando automaticamente o servidor.
//nodemon ele dá um restart e pega a versão mais nova do seu projeto
//nodemon monitora as atualizações
//instalando: npm i -g nodemon
