## Introdução a web

A internet é uma grande rede de computadores, existem várias topologias diferentes de rede, centralizada, anel..

A internet tem uma tipologia distribuida,pois ele possui rotas , não existe um poder central.

web(teia)
-Tiers 3 networks
-Tiers 2 networks
-Tiers 1 networks

Passamos por vários tipos de provedores.

A base da internet é o TCP( Transmission Control Protocol)/IP( Internet Protocol)
O TCP é um protocolo na camada de transporte, orientado a conexão e confiável, em contrapartida nos temos o UDP(User datagram Protocol) é um protocolo não orientado a conexão é um protocolo baseado no melhor esforço, ou seja ele não tem essa confiabilidade que o TCP possui, em alguns momentos o UDP ele é mais recomendado , pois é um protocolo mais leve. Já o TCP usa um handshake de três vias para estabelecer uma conexão confiável. ou seja há uma conversa preliminar entre as duas pontas, para que de fato o dado seja transferido.
UDP é um protocolo de comunicação usado principalmente para estabelecer conexões de baixa latência e tolerância a perdas entre aplicativos na Internet. O UDP acelera as transmissões, permitindo a transferência de dados antes que um contrato seja fornecido pela parte receptora. O UDP é o de melhor esforço, ou seja se vc está fazendo um streaming de dados que precisa ser passado em tempo real e que não importa se um pacote for perdido, por que no streaming é mais importante que o conteúdo seja entregue em tempo real, então UDP é mais apropriado. Utilizamos o TCP para a grande maioria de aplicações voltadas a ineternet.

IP é o protocolo responsável por fazer essa comunicação entre redes/roteamento entre redes, e é daí que vem o nosso endereço IP.

![image](https://user-images.githubusercontent.com/52088444/193662242-7e8839b1-5944-42b9-aeb6-d4ca74b7aec0.png)

O TCP/IP é baseado num padrão de projeto chamado layers

![image](https://user-images.githubusercontent.com/52088444/193663321-c65eb8ca-0411-46ad-93d6-8f2ab5f41fbe.png)

![image](https://user-images.githubusercontent.com/52088444/193663499-f362271d-ba55-42a7-888d-25a93653219f.png)

![image](https://user-images.githubusercontent.com/52088444/193663701-1cd54a08-003b-4107-84d7-a1411ac9db72.png)

![image](https://user-images.githubusercontent.com/52088444/193663736-94b8e5ea-bfbc-418f-a1a6-a9aaa8c49226.png)

Cada camada tem sua responsabilidade.

rede/física:nós temos o tipo de conexão física mesmo trabalhando com wi-fi, ethernet outros tipos de padrão. Nós temos nessa camada o conceito de endereço MAC(que é o endereço relacionado a interface de rede que vc está trablhando), e voc~e envolve duas camadas do modelo OSI que é a camada física que é a camada de harware  e a camada de enlace que ela se comunica com a comunicação ponta a ponta, saber se de fato o bit de paridade, sinais elétricos, coisas relacionadas a esse mundo físico do dado trafegando no meio dos canais de comunicação, pode ser desde um cabo de rede, fibra óptica, você multplexar(transmitir simultaneamente (várias mensagens, combinadas ou intercaladas) num mesmo canal, linha ou via de comunicação) os sinais e colocar dentro de um meio físico, ou seja essa camda fica mais próxima do hardware.

Camada de Internet: é nessa camada que temos o Endereço IP da sua máquina, que é o endereço que identifica uma máquina dentro de uma rede, podemos ter uma máquina com o mesmo endereço IP se elas estiverem em redes diferentes para não haver nenhum tipo de conflito. Conexão entre redes , transferencia de pacotes.

Camada de transporte: TCP(CONFIAVEL) UDP(Melhor esforço), serviços como DNS(Domain Name System – Sistema de nome de domínio) usam UDP como base da sua comunicação , temos comunicação HOST-A-HOST, Confiabilidade, INTEGRIDADE

Camada de aplicação: essa é a camada que vamos trabalhar mais forte, ou seja precisamos conhecer mais. Protocolo HTTP, FTP, SMTP,POP, DNS roda em cima da camada de aplicação. Usa a pilha TCP em baixo para funcionar e tem uma comunicação processo a processo, ou seja não basta comunicar o seu computador com o computador do google, você tem que comunicar o browser que tá rodando no seu computador com o servidor web que está provendo aquele site/sistema exemplo: gmail, ou seja não basta comunicar maquina a maquina precisamos comunicar processo a processo.

## Anatomia do endereço IPV4

classe A: 192.168.100.230 PARTE DESSE IP ESTÁ DSTINADO A IDENTIFICAR A REDE E A OUTRA A MAQUINA

EX:
192   . 168.100.230
(REDE)     (HOST)

Temos poucas redes e dentro de cada rede temos muitos hosts/maquinas

Temos um conceito para definir o que é rede e o que é host p conceito de sub rede, que é um numero que está associado e um IP;
255.0.0.0
A mascarade sub rede tem o mesmo tamanho de um IP.A mascarade sub rede significa que quando um bit está marcado com 1, significa que aquela parte do IP aponta para uma rede. E sempre que um bit na pasta de sub rede for 0 significa que o bit correspondente ao IP ele aponta para uma máquins. 


classe B
192.168 . 100.230
 (REDE)   (HOST
 
 Mascara de subrede
 255.255.0.0 
 
 classe C
 192.168.100.   230
    (REDE)     (HOST)
    
     Mascarade subrede
 255.255.255.       0 
     (REDE)     (HOST)



## Conceito de porta

Cada processo tem que esta associado a um número.
exemplo protocolo http8080
significa que na maquina cliente eu acesso http://10.85.0.5:8080






