const pessoa={

    saudacao:'Bom dia', 
    falar(){
        console.log(this.saudacao)
     },
     idade:36
}

pessoa.falar();

const falar=pessoa.falar;

falar();

//criar o bind (): isso quer dizer que ele define para essa função que o this será sempre essa constante pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//Bind é responsável por amarrar um determinado objeto para ele ser o dono da execução naquele método, sempre que ele for chamado
//o bind ajuda a amarrar o objeto no uso do this.