//classe : como funciona a herança em classe
//por baixo o mecanismo é sempre em cima de função, e a herança funciona em cima de prototype
//classe é uma forma diferente de escrever função em JS

class Avo{
    constructor(sobrenome){
        this.sobrenome=sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao='Professor'){
        super(sobrenome);//chama a superClasse que nesse caso é avo
        this.profissao=profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const avo= new Avo();
console.log(avo);
avo.sobrenome='PEREIRA';
console.log(avo);

const filho= new Filho();
console.log(filho);


const pai= new Pai();
console.log(pai);