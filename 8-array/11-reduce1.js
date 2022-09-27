
const alunos=[
    {nome:'maria', nota:7.3, bolsistas: false},
    {nome:'joao', nota:9.3, bolsistas: true},
    {nome:'pedro', nota:9.8, bolsistas: false},
    {nome:'Paula', nota:8.7, bolsistas: true}
]

//desafio 1-> todos os alunos são bolsistas?
const todosBolsistas =(resultado, bolsista)=> resultado && bolsista;
console.log(alunos.map(a=>a.bolsistas).reduce(todosBolsistas));

//desafio 2: algum aluno é bolsista?
const algumBosista=(resultado, bolsista)=>resultado|| bolsista;//pelo o menos um é bolsista
console.log(alunos.map(a=>a.bolsistas).reduce(algumBosista));
