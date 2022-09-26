//formas de criar novas instancias
//no caso dessas 3 funções eu só consigo alterar as que possuem o this


//classe
class Pessoa{
    constructor(nome){
        this.nome=nome;
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const p1= new Pessoa('João');
p1.falar();

//função Factory
//factory não varia, não importa quem ele esteja chamando ele sempre vai apontar para a variável certa
//por que dentro do p2.falar eu não precisei acessar o this, por que esse objeto tem ciencia
//do contexto léxico onde foi declarado, ele fica mais determinístico

const criarPessoa = nome=> {
    return{
        falar:()=>  console.log(`Meu nome é: ${nome}`)
    }
}

const p2= criarPessoa('José');
p2.falar();

//função construtora

function  Pessoa3(nome){
    this.nome=nome;

    this.falar=function(){ 
        console.log(`Meu nome é: ${this.nome}`)
}

}

const pedro= new Pessoa3('Pedro');
pedro.falar();