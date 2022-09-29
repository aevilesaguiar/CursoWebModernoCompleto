saber como uma aplicação é organizada  é muito importante

Padrão de projeto layers ( exemplo protocolo TCP IP)

Num sistema web o que será enviado são dados no formato json

Um arquivo em node representa um módulo

Node funciona com engine v8 + libuv
-O Libuv é uma biblioteca open source que lida com a thread-pool, sinalização e comunicação entre processos;

O Libuv foi desenvolvido originalmente para o próprio Node.js como uma abstração em torno do libev, no entanto, hoje em dia, vários projetos já estão usando ela.

A maioria das pessoas pensa que o libuv é o event loop em si, isso não é verdade, o libuv implementa um event loop com todos os recursos, mas também é a casa de várias outras partes principais do Node, como:

Sockets TCP e UDP do pacote net
Resoluções DNS assíncronas
Operações assíncronas de arquivos e file system
Eventos do file system
IPC
Child processes e controle de shell
Controle de threads
Sinalização
Relógio de alta resolução

É principalmente por isso que o Node.js usa esta biblioteca, ela é uma abstração completa em torno de várias partes principais de todos os sistemas operacionais e é necessário que todo o runtime interaja com o ambiente que há ao redor dele.




Enquanto o JavaScript é usado como uma linguagem de desenvolvimento do lado do cliente, o Node. js cobre a programação do lado do servidor. Graças ao Node. js, o JavaScript se tornou uma linguagem de desenvolvimento de pilha completa para todos os fins.


O Node. js é um runtime — aplicação que possibilita o processamento, a renderização e a execução de 
elementos escritos em linguagem não suportada nativamente pelo sistema — que permite, ao programador, 
desenvolver aplicações JavaScript diretamente do servidor. Em outras palavras, ao instalar Node.

Como o Nodejs é server-side esses eventos seriam uma conexão no banco de dados,a 
abertura de um arquivo, streaming de dados e outras requisições realizadas por um servidor.

![](https://miro.medium.com/max/1100/0%2ALzhTau1Zp4P8N4is.png)

## Referencia

- https://dev.to/_staticvoid/node-js-por-baixo-dos-panos-3-um-mergulho-no-event-loop-38l9