## Servidor web

- Apache (abre uma thread por requisição, se vc tiver 1000 requisições haverá 100 threads abertas)
- node js(roda js. Single thread que trabalha recebendo as requsições, que é o que chamamos de event loop e ele despacha isso para um pool de thread para pegar a parte de comunicação assincron, se a demanda for maior o pool vai aumentando
se a demanda for menor o pool vai dimuindo para ter o minimo de recursos possiveis )
- nginx( single thread, que trata todas as requisições e despachando isso para ser tratado de forma assincrona)
- JBoss( mundo java)
- tom cat (mundo java)
- Microsoft IIS

## WEB E DNS

Em termos simples, o Sistema de Nomes de Domínio (DNS) é uma coleção de bancos de dados que traduz nomes de host para endereços únicos de IP.

dominio/url: www.cod3er.com.br

DNS: sempre que um usuario acessar  www.cod3er.com.br você aponta para o IP 23.67.100.3

Dentro de um servidor web é muito comum ter a ideia de virtual hosting, virtual hosting são vários sites sendo atendidos.

Exemplo: se vc vai contratar um serviço de webservice e ele é compartilhado quer dizer que dentro de uma máquina, dentro de um mesmo web server você vai ter vários sites atendidos. E através da url de requisição é que ele sabe qual site
vai ser atendido no momento. 

É comum num servidor(WEB SERVER) ter uma estrutura de pastas estáticas.

CDN(content delivery network ):são redes de alto desempenho que replicam os dados , ex: imagens, vídeos... ele verifica a menor latencia para entregar o arquivo. 

Dentro do servidor web nós temos também o conceito de web stack:
 ____________________________
|         Linguagem          |
|____________________________|
|    web server    |    DB   |  
|__________________|_________|
|    Sistema Operacional     |
|__________________|_________|

web stack é a coleção de software necessária para o desenvolvimento da Web. No mínimo, uma pilha da Web contém um sistema operacional ( SO ), uma linguagem de programação, software de banco de dados e um servidor Web .

Forma a Stack-> a mais famosa é a LAMP 
L:Linux
A: apache
M:mysql
P:php

Uma aplicação que se conecta com a rede vc tem que entender que esse servidor ocupa portas, não necessariamente uma, mas pode ser várias. Ex:um caso classico eu tenho uma aplicação que parte dela eu vou habilitar para https(443) e outra http(8080). Um unico processo ocupa uma porta.