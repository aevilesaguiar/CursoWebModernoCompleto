## Protocolo HTTP

HTTP: Hyper Text Transfer Protocol

Nada mais é  do que um texto que tem links associados.
HTTP é um protocolo de comunicação baseado em texto. É o protocolo principal pra troca de informações na web.

HTML: HyperText Markup Language

Características HTTP:

Camada de aplicação: colocando ele na pilha TCP/IP ele faz parte da pilha da camada de aplicação que seria a camada mais alto nível. 

O protocolo HTTP:  é stateless , significa que quando uma máquina manda uma requisição http para um servidor, para o servidor e para a máquina é como 
se estivesse sendo feita a primeira vez. Por que dentro do protocolo em si não existe o estado da conversação, você não estava fazendo a primeira ou 
centesima requisição por que o protocolo é stateless.
Para o servidor, cada requisição é uma requisição diferente. Não existe na requisição nenhuma informação que guarde estado.
Então, quando você abre um site e navega nele clicando em links e etc, o que acontece é esse processo de requisição-resposta o tempo todo.

Cliente-Servidor:ele é um protocolo Cliente-Servidor, baseado no conceito de requisição e resposta. Eu mando uma requisição para o servidor baseado na url, 
com um conjunto de parâmetros, faço uma requisição e recebo algo como resposta, essa resposta pode ser um arquivo texto no formato json, xml, html, vídeo.

TCP/IP: ele opera na pilha TCP/IP

Esse protocolo te retorna conteudo para formar uma página web. Começa a aprtir do html, quando o html é interpretado pelo o brownser, ele vai perceber que tem um css
aí ele abre uma requisição, que tem um js ele faz outra requisição, imagens, mídias.

fluxo http->USUARIO INFORMA A URL-> BROWSER GERA A REQUISIÇÃO-> SERVIDOR WEB GERA A RESPOSTA-> BROWNSER EXIBE A PÁGINA










