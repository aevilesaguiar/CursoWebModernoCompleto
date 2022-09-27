//Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function saudacao (nome){
    const saudacao="Ola";
    return [saudacao,nome].join(', ').concat("!")
}

console.log(saudacao('maria'));

function saudacao1(nome){
    return "Olá, "+nome+"!";
}

console.log(saudacao1('maria'));


function saudacao2(nome){
    return `Olá, ${nome} !`;
}
console.log(saudacao2('maria'));

function ola(nome, sobrenome){ 
    return [nome,sobrenome].join(' Ø ');
}
console.log(ola('maria','pereira'));

