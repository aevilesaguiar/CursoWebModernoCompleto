## DOM

DOM: Document Object Model

Para que serve o DOM?
Ele é utilizado pelo navegador para representar a sua página Web. É ele que fornece uma representação estruturada do documento como se fosse uma espécie de árvore com galhos, definindo métodos para que possam ser alterados estrutura, estilo e conteúdo do documento


A interface HTMLCollection representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.

Uma coleção HTMLCollection de um HTML DOM está linkada com o documento; ela será automaticamente atualizada quando o documento for modificado.

O DOM (Document Object Model) possui vários objetos, como window que representa uma janela do navegador, e document que representa o conteúdo da página.

Dentro desses objetos, pode haver listas de objetos, que são os NodeLists. Por exemplo o document pode ter uma lista de objetos input, uma table pode ter uma lista de objetos tr e assim por diante.

Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos Node.childNodes e document.querySelectorAll().

Ou seja, coleções de objetos. Portanto, o DOM é formado de objetos, que podem conter NodeList de outros objetos.

O objeto NodeList é uma lista de elementos extraídos do documento html. Exemplo:

O HTMLColection é uma coleção de elementos HTML (div, p, a, img, etc...), já o NodeList é uma coleção de nós, como no caso do exemplo acima, cada card é um nó do nodeList cards.



usar a função para selecionar uma classe
        const ultimosElementos = document.getElementsByClassName('ultimo')
       for(let e of ultimosElementos){

        e.classList.remove('destaque')
        /*Funções Tradicionais de como selecionar elementos da DOM 
        - getElementById:
        - getElementByTagName:passa o nome da tag e obtem os elementos
        - getElementByClassName: passa o nome da classe e pega todos os elementos que está associada 
        aquela classe 
        
        Podemos perceber que essas funções retornam um html collection
        que não é um array.

        Duas formas diferentes de transformar htmlCollection em um array. 
        
        - Usando a função Array.from(divs) , o qual divs é um htmlCollection
        (const divs = document.getElementsByTagName('div'))) e eu posso fazer interaçõe
        onde eu posso fazer um map, reduce, filter
        
        - Usando Operador Spread([...divs])

        Mesmo que eu não transforme a htmlCollection eu posso iterar 
        de uma forma transquila usando o for.

        Caso eu queira trabalhar com todas as funções de array em transformo
        o htmlCollection em Array
