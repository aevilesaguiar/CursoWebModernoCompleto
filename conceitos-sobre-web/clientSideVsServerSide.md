# Client Side VS Server Side

## mainframe
A primeira arquitetura que tivemos num ambiente de rede era num mainframe. Quando você atualiza o código do mainframe automaticamente todos os clientes serãoa tualizados.todos os 

## client -server
 A arquitetura cliente servidor é uma arquitetura de aplicação distribuída, ou seja, na rede existem os fornecedores de recursos ou serviços a rede, que são chamados de servidores, e existem os requerentes dos recursos ou serviços, denominados clientes.

 Arquitetura cliente-servidor ou modelo cliente-servidor é uma arquitetura na qual o processamento da informação é dividido em módulos ou processos distintos. Existe um processo que é responsável pela manutenção da informação (servidores) e outro responsável pela obtenção dos dados (os clientes).

- Papéis

Cliente
Solicitam um determinado serviço, através do envio de uma mensagem ao servidor. Enquanto o processo servidor está trabalhando a solicitação, o cliente está livre para realizar outras tarefas.

Servidor
Oferecem serviços a processos usuários, ou seja, executam a tarefa solicitada e enviam uma resposta ao cliente que se traduz nos dados solicitados.

- Vantagens x Desvantagens

Vantagens

Recursos centralizados
Maior facilidade de manutenção
Desvantagens

Sobrecarga
Único nó

- Exemplo de Arquitetura cliente-servidor
Comunicação entre o browser e um site que possui um servidor para processamentos de banco de dados ou outros relacionados.

## web server side

é uma aplicação onde toda a lógica, renderização das páginas são processadas do lado do servidor.
A máquina do ususario serve apenas como um terminal, O contéudo é gerado do lado do servidor. 
a programação de sites do lado do servidor envolve principalmente a escolha de qual conteúdo é retornado ao navegador em resposta a solicitações . O código do lado do servidor lida com tarefas como validar dados e solicitações enviadas, usar bancos de dados para armazenar e recuperar dados e enviar os dados corretos ao cliente conforme necessário.

O servidor centraliza todas as responsabilidades isso é uma das desvantagens

## front end + services


Diferença entre Client Side e Server Side?
Aplicação server side o conteudo é gerado a partir do servidor, não apenas dados são enviados do servidor para o brownser, mas também o html é gerado do lado do servidor para ser renderizado no brownser.
Quando você trabalha com uma aplicação front-end, client side é muito comum você ter o conceito de SPA(SINGLE PAGE APPLICATION) uma aplicação que tem uma unica página, e todo o html é gerado dinamicamente pelo o javaScript e não mais gerado pelo o servidor, o servidor começa a ter serviços web, web services que geram dados em json/xml, exemplo web server rest gerando dados json. Uma vez que você carrega os dados  da sua aplicação html/js a aprtir daí a sua aplicação é gerada dinamicamente do lado do cliente e você passa a consumir os dados diretamente do servidor, mas não mais html vindo do servidor e sim dados vindo do formato json por exemplo. 

Podemos ter aplicações mistas client Side e server Side.