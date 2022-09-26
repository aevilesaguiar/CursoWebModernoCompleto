//Um IIFE (Immediately Invoked Function Expression) é uma função JavaScript que é executada assim que é definida . 
//uma das funções da função alto invocada é principalemente quando você está usando o brownser  você quer fugir do escopo global
//quando vc tem uma função alto invocada quando você chama o código ele já é lido e executado, mas tudo que você criar
//dentro da função ele será escopo local da função e não escopo global, isso pode ajudar
//a evitar você está manipulando coisa diretamente do escopo global do browser, pois se algo é compartilhado com 
//toda a sua aplicação e principalmente algo que é variável, muitas pessoas/ muitos códigos podem manipular aquele
//valor variável e isso gerar bugs inesperados na sua aplicação;
//como o escopo global do browser é o window e ele é compartilhado por todo os seus scripts que rodam no browser
//Umas das formas é criar uma função alto invocada,
 //Uma IIFE é uma expressão de função imediatamente invocada

 //esse é o padrão de IIFE , esse é um padrão utilizado para fugir do escopo global
 //você cria uma função anônima delimitada por ()
 //e você invoca tudo que foi definido dentro dela
 (function(){
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente!');

 })()