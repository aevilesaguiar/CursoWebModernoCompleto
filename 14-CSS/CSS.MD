CSS: Cascading Style Sheets  - folha de estilo

CSS te dá muitas possibilidades para resolver os problemas.
Em css é bom focar em classes para aplicar estilo, pois é mais seguro.
Criar classes mais enxutas para dividir as responsabilidades assim você pode reusar;
Padronizar nomenclaturas;

Seletores

* : seletor universal
.class: quando eu quero reusar em mais de uma classe,
#id: faz navegação e ancora, selecionar 
[atrib]:

seletores do tipo pseudo classe: :pseudo-class

seletores do tipo pseudo-elementos: ::pseudo-elementos


## Combinar seletores

DIV+ P: ADJACENTE SIBLING
DIV ~ P: GENERAL SIBLING (IRMÃOS ADJANCENTES)
DIV > P: CHILD (ACESSAR FILHO DIRETO)
DIV ? : DESCENDENTE

## ESPECIFICIDADE CSS

Especificidade é a ordem que um determinado seletor vai ser aplicado em sua página. Os estilos são aplicados em cascata. Os elementos que estão em cima tem prioridade nos elementos de baixo


flex box e css grid se complementam.
elas são nativas do css.
css grid trabalha com linha e coluna é bidirecional;


## Flex box
flex box: define layout ele é unididrecional/unidimensional você precisa informar a direção, horizontal ou vertical


Quando temos a caixa flex: ele passa a ser flex box no momento que você marca um determinado elemento com display-flex. 
Você passa a ter algo como flex-container. Ele tem o objetivo de armazenar / agrupar itens, e os itens são chamados flex-item


Com flex box nós temos o conceito de main axis ----> 

e cross axis    |
                |
                v

Temos também o conceito de Main start(inicio) e main end(fim)

esses conceitos são importantes para definir a direção.

flex item pode ser um flex container.


Flex box é o principio por trás de como se faz designer, como você organiza os seus componentes visuais.
Css grid aind tem algumas limitações de colocar um grid dentro do outro.




