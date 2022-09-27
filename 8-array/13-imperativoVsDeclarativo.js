//Código imperativo xCódigo declarativo

const alunos=[
    {nome:'maria', nota:7.3},
    {nome:'joao', nota:9.3},
    {nome:'pedro', nota:9.8},
    {nome:'Paula', nota:8.7}
]

//abordagem imperativa
let total1=0;
for (let i = 0; i < alunos.length; i++) {
    total1+=alunos[i].nota
    console.log(alunos[i]);
}

console.log("media"+total1/alunos.length)
console.log("--------------------------")

//abordagem declarativa

//métodos que posso reusar
const gerNota=aluno=>aluno.nota;
const soma=(total, atual)=>total+atual;

//resultado
const total2=alunos.map(gerNota).reduce(soma);
console.log("media"+total2/alunos.length)
console.log("--------------------------")

//Em outras palavras: Abordadem Imperativa: você descreverá “como” você faz alguma coisa. descreve passo a passo como cada coisa tem que ser feita
//Abordagem Declarativa: você descreverá “o que” você faz. 


//select codigo, nome , email from cliente where ativo=1
//você não está preocupado em como o banco vai percorrer a tabela 
//a forma como o banco vai obter a resposta não importa 
//sql é uma linguagem declarativa, você se importa mais com o que você quer 
//do que como o banco vai fazr

//o html também é mais declarativa