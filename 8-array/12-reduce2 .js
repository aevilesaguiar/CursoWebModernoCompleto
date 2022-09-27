//implementando reduce

Array.prototype.reduce2=function(callback){
    let acumulador=this[0];
    for (let i = 0; i < this.length; i++) {
        acumulador=callback(acumulador,this[i], i, this);
        
    }
    return acumulador;
}


const alunos=[
    {nome:'maria', nota:7.3, bolsistas: false},
    {nome:'joao', nota:9.3, bolsistas: true},
    {nome:'pedro', nota:9.8, bolsistas: false},
    {nome:'Paula', nota:8.7, bolsistas: true}
]

//desafio 1-> todos os alunos são bolsistas?
const todosBolsistas =(resultado, bolsista)=> resultado && bolsista;
console.log(alunos.map(a=>a.bolsistas).reduce2(todosBolsistas));

//desafio 2: algum aluno é bolsista?
const algumBosista=(resultado, bolsista)=>resultado|| bolsista;//pelo o menos um é bolsista
console.log(alunos.map(a=>a.bolsistas).reduce2(algumBosista));


const soma =(total, valor)=> total+valor;
const nums=[1,2,3,4,5,6];
console.log(nums.reduce2(soma))