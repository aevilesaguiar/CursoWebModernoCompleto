## DNS

Servidor DNS : Traduz o nome de dominio em endereço IP

www.cod3er.com.br -> 54.69.61.89

Você compra um dominio,e dentro do DNS você configura as referencias para o provedor (ex: go daddy, kinghost...)

DNS funciona sobre o protocolo UDP(Uder datagram Protocol) na porta 53.

Funcionamento básico do DNS

1 - Usuario informa o endereço no browser
2 - Computador envia uma consulta DNS para o servidor Local
3 - O servidor responde com o endereço IP( converte o nome)
4 - O computador acessa o servidor a partir do IP obtido


Conceito e Processo Recursivo. Em termos gerais, a recursão pode ser considerada como um processo de repetição de uma rotina. Portanto, de maneira bem simplista, pode ser definida como uma rotina (procedimento ou função) que chama a si mesma, de forma direta ou indireta.


Existem dois tipos de busca do servidor DNS:
- Busca recursiva(um DNS vai chamando o outro até encontrar o endereço)
- Busca iTerativa(busca dentro de outro servidor DNS)


Registros DNS

- REGISTROS TIPO A- IPV4
- AAAA-IPVE
- DMX: Servidor de email
- NS: servidor DNS (posso ter um servidor DNS dentro de outro DNS)
- CNAME- Canonical Name (apelido), quando eu não quero que o cliente tenha acesso a url, sem ter a url oficial, eu aponto um endereço paar outro endereço


