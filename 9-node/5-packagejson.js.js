//arquivo package.json
//é o arquivo descritor de um projeto em node
//o package.json além de descrever o seu projeto ele ainda faz a descrição de todas as dependencias que 
// seu projeto precisa


//comando : npm init
//esse comando habilita tipo um wizard para você definir como será o seu arquivo package.json
//para não responder as perguntas  digit o comando abaixo:
//comando : npm init -y


//quando usamos o comando abaixo eu quero dizer que além dele instalar a dependencia node_modules ele ainda 
//cria uma área para colocar as dependencias do projeto
//comando npm i --save axios

//Axios é um cliente HTTP baseado em Promises para fazer requisições. 
//Pode ser utilizado tanto no navegador quanto no Node. js ou qualquer serviço de API. 
// "axios": "^0.27.2"  essa versão que consta no package.json , esse ^  representa que
//ele pode atualizar quando estiver na versão 27, ou seja você só pode mexer na versão
//minor . temos a major, minor e o fix
//quando eu tenho circunflexo ^ele permite que atualize a versão minor
//quando eu tenho til ~ ele permite que atualize a versão que tenha o fix diferente
//senão houvesse senum sinal quer dizer que ele tem que usar aquela versão exatamente

/*O versionamento semântico garante um controle da versão do código utilizando um grupo de números mantendo assim sua compatibilidade e integridade nas novas publicações conforme exemplo abaixo:

Versionamento semântico 1.0.0

– 1 (Major) – controle de compatibilidade. Informa que existem funcionalidades/códigos incompatíveis com as versões anteriores.

– 0 (Minor) – controle de funcionalidade. Informa que novas funcionalidades foram adicionadas ao código.

– 0 (Patch) – controle de correção de bugs. Informa que um ou mais erros foram identificados e corrigidos.

– Pré-release – versão candidata. É uma versão com algumas instabilidades pois pode ter incompatibilidades no pacote.

*/

//ele criou o arquivo package-lock.json : esse é um arquivo que ele deve ir para o repositorio, ele descreve
//de uma forma precisa a versão que foi testada na máquina