//closure: é o escopo criado quando uma função é declarada (closure escopo que envolve a função)
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Context léxico

const x = 'Global';

function fora(){
    const x= 'Local';

    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao= fora()
console.log(minhaFuncao());
console.log("Contexto global: "+x);


