//flatMap não é nativo no js ainda

const escola=[{
    nome:'Turma 1',
    alunos:[{
        nome:'Gustavo',
        nota:8.1
    },{
        nome:'Ana',
        nota:9.3
    }]
},{
    nome:'Turma 2',
    alunos:[{
        nome:'Feranado',
        nota:9.1
    },{
        nome:'Mary',
        nota:9.3
    }]
}]

const getNotaAluno=aluno=>aluno.nota;
const getNotasDaTurma = turma=>turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

//flatmap é um map associado com concat
//ao invez de ter um array de array eu quero ter um array

Array.prototype.flatMap=function(callback){
    return Array.prototype.concat.apply([],this.map(callback));
}

const notas2=escola.flatMap(getNotasDaTurma);
console.log(notas2)