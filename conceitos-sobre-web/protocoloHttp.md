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

fluxo http->1 - USUARIO INFORMA A URL-> 2 -BROWSER GERA A REQUISIÇÃO-> 3 -SERVIDOR WEB GERA A RESPOSTA-> 4- BROWNSER EXIBE A PÁGINA



## MÉTODOS HTTP

GET->www.google.com.br/search?q=web+moderno&hl=pt-br
url:www.google.com.br/search
?->separa a url dos parametros
q=web+moderno->'q' que representa uma querie, parametros separados por chave'=' e valor 'web+moderno'
&hl=pt-br->lingua da maquina para que ele possa retornar o resultado em portugues
&hl=en-US->resiltado vem em ingles

Quando voc~e tem uma requisição tipo GET, os parametros vão no próprio corpo da url
Já o POST vai no corpo da requisição.

A informação marcante desse tipo de requisição é que os parametros eles vão dentro da url.  O corpo fica vazio. 



POST-> quando você tem uma requisição tipo POST os parametros vão no corpo da requisição.
mesmo fazendo uma requisição tipo POST em que os parametros da reuisição vão no corpo, mesmo assim não é seguro, para que seja seguro é necessário que a sua requisição seja executada em cima de um protocolo https. Ou seja o https é um protocolo seguro que faz com que a comunicação com a máquina cliente para a maquina servidor seja criptografado.

Na requisição via POST, você tem a requisição/verbo via POST, dentro do corpo da requsição você tem os parâmetros, para que do outro lado a requisição seja processada.


PUT->

DELETE->

TRACE->

OPTIONS->

CONNECT->

HEAD->

REQUISIÇÃO E RESPOSTA( REQUEST E RESPONSE) (acontece repetidamente)


## Grupos de Status de mensagem HTTP(status Code)

1XX-Informação
2xx-sucesso
3xx-Redirecionamento
4xx-erro no cliente
5xx-erro no servidor


## Referencias
-https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview

