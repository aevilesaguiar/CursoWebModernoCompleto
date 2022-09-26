//goTo: programação não estruturada, desvio de código , nocivo para a qualidade de código

//Linguagens estruturadas
//O princípio básico de programação estruturada é que um programa é composto por blocos elementares de código 
//que se interligam através de três mecanismos básicos, que são seqüência, seleção e iteração. Cada uma destas 
//construções tem um ponto de início (o topo do bloco) e um ponto de término (o fim do bloco) de execução.

//Paradigma Procedural é baseada no procedimento, procedure, na  função. Você tem um trecho de código que você dá um nome para ele e reutiliza
//em vários lugares, o foco muito forte em procedimentos que são as funções
//Também conhecida como Programação Estruturada , ela especifica as etapas que um programa deve executar para atingir o estado desejado. 

//Procedual 
processamento(valor1, valor2, valor3)


//Programação Orientada a Objetos POO
//Em OO eu tenho dados e dentro desses dados eu tenho funções
objeto={
    valor1,
    valor2,
    valor3,
    processamento(){
    //...
    }
}

objeto.processamento();//foco passou a ser o objeto

//O objeto funciona como uma capsula que agrupa comportamentos e atributos
//a ideia de ter o paradigma de OO é estar mais próximo do mundo real.
//o objeto tem atributos e comportamentos e esses  objetos se relacionam um com os outros
//

//4 -  Principios importantes da POO:
//1.abstração
//2.encapsulamento
//3.herança
//.polimorfismo


//1.abstração: é trazer um objeto do mundo real e traduzir para dentro do seu sistema. É saber mapear de acordo com
//cada necessidade. Ex: o Carro para o Detran e para uma oficina mecânica é abstraído de forma diferente
//é o mesmo objeto mas o mesmo está sendo abstraído de maneira diferente

//2.encapsulamento: é você ter os detalhes de implementação escondidos e você mostrar para quem precisa
//usar aquele sistema uma interface simples para que possa interagir com determinado objeto.
//O encapsulamento protege o acesso direto (referência) aos atributos de uma instância fora da classe onde estes 
//foram declarados.o encapsulamento é sobre como ocultar informações e implementação. 
//Os objetos devem expor apenas as propriedades e os métodos que são exigidos para interagir 
//com eles. Todo o resto deve ser escondido
//quando eu tenho um objeto que expõe todos os detalhes a chance de haver uma alta dependencia dos objetos
//é muito grande, tem um acoplamento alto, quanto menos detalhes menor o acoplamento.
// Se trata de um dos elementos que adicionam segurança à aplicação em uma programação orientada a 
//objetos pelo fato de esconder as propriedades, criando uma espécie de caixa preta.

//3.herança: O reuso de código é uma das grandes vantagens da programação orientada a objetos.
//posso herdar características, atributos e comportamentos de um objeto pai.
// O js não permite herança multipla, em JS podemos ter uma cadeia de protótipos
//priorize a composição ao invéns de herança .
//O termo composição (composition, em inglês) consiste no processo de utilizar duas ou mais funções de forma combinadas.

//.polimorfismo: muitas formas, Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou 
//seja, temos os mesmo métodos, com os mesmos nomes mas com diferentes comportamentos.
//permite ao desenvolvedor usar o mesmo elemento de formas diferentes. 
