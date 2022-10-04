## Web Service

Web service padrão de mercado muito utilizado. 

O que é web service? é um serviço web. É um serviço que a sua aplicação prover em cima de tecnologias em texto. Ou seja dados sendo trafegados em forma de texto por via de regra. 

Temos duas grandes alternativas para trabalhar com webService

- SOAP: Simple Object Access Protocol. Versão mais antiga, mais burocrática. Dentro do SOAP você usa o conceito WSDL(Web Service Description language) é um xml, que descreve quais são as funcionalidade que um determinado serviço faz, os métodos que ele disponibiliza, ele descreve bem os serviços
SOAP é baseado em xml , a requisição e resposta é em formato xml. O protocolo SOAP é o que conhecemos como RPC (Remote Procedure Call) invocação de funções remotas, ou seja a partir de um cliente você consegue executar uma função que está remota aprtir do protocolo SOAP

- REST: Representational State Transfer . Mais simples de trbalhar , mais leve. o REST nós usamos json, http puro,  ou seja são requisições ou respostas. 
Você faz a requisição para um endpoint/url e essa url dependendo do tipo de verbo http(POST/PUT/GET...) ele vai ter um significado. tem uma convenção em cima do REST que é chamado restful. Ele usa os próprios metodos para fazer as requisições

## Convenções RESTful

URL                  | MÉTODO     | DESCRIÇÃO
/clientes            | POST       |novo cliente
/clientes            | GET        |obtém todos
/clientes/36         | GET        |obtém cliente 36
/clientes/16         | PUT        |Atualiza/altera cliente 16
/clientes/6          | DELETE     |Exclui cliente 6



## Escolhas Arquiteturais

SOA VS Microserviços

SOA: é mais antiga, baseada em serviços, voc~e tem várias serviços que instalado dentro de um ESB (Enterprise Service Bus )  que é um software , e você instala dentro desse software/barramento os seus serviços orquestrados , você instala uma lógica para que você tenha o fluxo dos seus processos. 

Arquitetura orientada a serviços (SOA) é um tipo de design de software que torna os componentes reutilizáveis usando interfaces de serviços com uma linguagem de comunicação comum em uma rede.

Um serviço é uma unidade ou conjunto de funcionalidades de software independente, que foi desenvolvido para concluir uma tarefa específica, como recuperar determinadas informações ou executar uma operação. Ele contém as integrações de dados e o código necessários para executar uma função de negócios completa. Esses serviços podem ser acessados remotamente e é possível interagir com eles e atualizá-los de maneira independente.

Em outras palavras, a SOA integra os componentes de software que foram implantados e são mantidos separadamente, permitindo que eles se comuniquem e trabalhem juntos para formar aplicações que funcionam em sistemas diferentes.
Na arquitetura SOA é mais dificil escalar de forma independente os serviço. Uma aplicação monolítica é mais dificil fazer manutenção.



Microsserviços: é um padrão mais moderno, ou seja você pega uma aplicação e quebra em pequenos serviços.  Em uma arquitetura de microsserviços, cada microsserviço é um serviço único criado para acomodar um recurso do aplicativo e processar tarefas distintas. Cada microsserviço se comunica com outros serviços por meio de interfaces simples para resolver problemas comerciais. 

Um dos princípios da arquitetura de microsserviços é a alta coesão, o serviço deve ter um único foco. Ou seja, ter uma única responsabilidade do domínio da aplicação. Este princípio é útil para controlar o tamanho e impedir que o microsserviço se torne um serviço monolítico.

Algumas vantagens dos microsserviços

Facilidade e rapidez na atualização e implantação dos serviços. ...
Independencia de linguagem
Aumentar a flexibilidade da infraestrutura. ...
Escalabilidade. ...
Estandardização de serviços. ...
Redução de dúvida técnica. ...
Desenvolvimento de práticas DevOps e de colaboração do time
Autonomia dentro da equipe para escolher as suas aplicações