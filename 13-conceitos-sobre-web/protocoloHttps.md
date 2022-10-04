## Protocolo HTTPS

HTTPS: Hyper Text Transfer Protocol Secure

HTTPSeguro
- HTTP + TLS(Transport Layer Security Protocol)
- HTTP + SSL(Secure Sockets Layer Protocol)

Esses dois protocolos juntos com o http fazem com que as nossas navegações sejam seguras;


Certificado é diferente Protocolo

Certificado  SSL/TLS : A forma correta é dizer que é um Certificado usado com SSL/TLS;

TLS evolução do SSL.

Esses dois protocolos são da mesma família, mas os dois não são compatíveis.

HTTPSeguro
- dados criptografados usando os protocolos TLS ou SSL
- PROTEGE CONTRA INTERCEPTAÇÃO (MITM)
- Criptografa todas as informações: URL, cookies e headers, body, apenas o ip é visivel, mas a url e o conteudo que envolve a requisição é criptografado
- Usa certificados digitais

O grande objetivo de ter um o HTTPS é garantir que a informação que sai da sua máquina é a mesma que vai para o servidor, que vai navegar pela rede dispositivos diferentes, que ninguém entre essas máquinas consiga descriptografar a mensagem e ler o que está no meio. Proteger contra interceptação , o ataque man in the middle.  

Autoridades Certificadores: Organizações que emitem e validam certificados;

Os certificados podem ser instalados na sua máquina e no brownser para que ele possa descriptografado em ambos os lados( servidor/maquina)

https://letsencrypt.org/ - CA QUE GERA CERTIFICADO








