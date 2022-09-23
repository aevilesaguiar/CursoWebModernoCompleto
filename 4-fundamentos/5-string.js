//String é uma cadeia de caracteres delimitada por aspas
//Podemos delimitar uma string por : aspas duplas: "", aspas simples:'' e template String: ``

const escola= "Cod3r";

console.log(escola.charAt(4));//r
console.log(escola.charAt(5));//não gera erro pois só possui 5 caracteres e js trabalha com indices e se inicia a partir do 0

console.log(escola.charCodeAt(3));
console.log(escola.indexOf('d'));



console.log(escola.substring(1));
console.log(escola.substring(0,3));//ele vai do indice 0 até o 3 sem incluir o 3

//está concatenando a partir de um literal
console.log('Escola'.concat(escola).concat(" ").concat("!"));

//substitui o e no indice 3
console.log(escola.replace(3, 'e'));

//expressão regular regex
console.log(escola.replace(/\d/, 'e'));//substituia todos os digitos do texto pela letra E
console.log(escola.replace(/\w/, 'e'));//substitua A PRIMEIRA letras e digitos pela letra E
console.log(escola.replace(/\w/g, 'e'));//substitua todas as letras e digitos pela letra E


//pegar uma string e converter para uma estrutura chamada array
//array é uma estrutura linear , é como se fosse um agrupador de variaveis, e dentro delas temos posições

console.log('ANA, MARIA, PEDRO'.split(','));
console.log('ANA / MARIA / PEDRO'.split('/'));

//poderiamos usar o regex também
console.log('ANA, MARIA, PEDRO'.split(/,/));



