// Estruturas de controle : São comandos da linguagem que permitem desviar o fluxo do programa, dependendo de um teste.

//for in: percorre os atributos dentro de uma estrutura
//o for in não dá as notas ele dá os indices, ou seja ele percorre pelos os indices
//só que não é muito interessante

//atributos de um array
const notas=[10.00,9.5,2.9,6.9,4];
let media=0
for(let i in notas){
    console.log(i, `- Nota: ${notas[i]}`);
    media+=notas[i];

}

console.log( `MÉDIA: ${media/notas.length}`)

//percorrer atributos de um objeto

const pessoa={
    nome: 'Ana',
    sobrenome: 'Pedrosa',
    idade: 29,
    pessoa: 64

}

for(let atributo in pessoa){
    console.log(`${atributo}=${pessoa[atributo]}`)
}

//importante incluir a palavra chave let para que a variavel fique disponivel apenas no escopo a qual foi declarada