//Conceito par chave(nome)/ valor

//contexto léxico é o local no qual a sua variável foi definida fisicamente no código;
//léxico tem a ver com palavra, ou seja em que local fisico do seu código aquele par chave/valor foi definido 
//no nosso caso foi definido no arquivo 19-objeto-pan-nomeEvalor que estou trabalhando

const saudacao = 'Opa'; //contexto lexico

function exec(){

    const saudacao= ' Falla'; //contexto lexico 2 ou seja o contexto da função
    //esse retorno busca num contexto mais restrio enquanto o saudação é num contexto mais global
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente={

    nome:'Pedro',
    idade: 38,
    peso:90,
    endereco:{
        logradouro: 'Rua maria da silva',
        numero:123
    }

}


console.log(saudacao);
console.log(exec());
console.log(cliente)